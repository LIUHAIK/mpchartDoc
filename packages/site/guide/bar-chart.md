# 柱状图组件使用指南

本文档将指导你如何使用柱状图组件，并通过代码示例展示如何初始化数据、配置图表样式以及如何将图表添加到页面中。
1. 引入依赖
   在使用柱状图组件之前，需要引入相关的依赖模块：
   ```typescript
    import {
    BarChart,
    BarChartModel,
    BarData,
    BarDataSet,
    BarEntry,
    ChartGesture,
    Description,
    EntryOhos,
    Fill,
    Highlight,
    IBarDataSet,
    JArrayList,
    Legend,
    LimitLabelPosition,
    LimitLine,
    MarkerView,
    OnChartGestureListener,
    OnChartValueSelectedListener,
    XAxis,
    XAxisPosition,
    YAxis,
    YAxisLabelPosition
    } from '@ohos/mpchart';
    ```
   
2. 初始化图表数据
   
   2.1 构造数据选择监听器

   数据选择监听器用于监听图表数据点的选中事件：
   ```typescript
   private valueSelectedListener: OnChartValueSelectedListener = {
   onValueSelected: (e: EntryOhos, h: Highlight) => {
   // 当某个数据点被选中时触发
   console.log('Data point selected:', e);
   },
   onNothingSelected: () => {
   // 当没有数据点被选中时触发
   console.log('No data point selected');
   }
   };
   ```
   2.2 构造手势识别事件监听

   手势识别事件监听器用于监听图表的手势操作，如缩放、拖动等：
   ```typescript
   private chartGestureListener: OnChartGestureListener = {
   onChartGestureStart: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) => {
   // 手势开始时触发
   },
   onChartGestureEnd: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) => {
   // 手势结束时触发
   console.log('Gesture ended');
   },
   onChartLongPressed: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
   // 长按事件
   console.log('Long press detected');
   },
   onChartDoubleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
   // 双击事件
   console.log('Double tap detected');
   },
   onChartSingleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
   // 单击事件
   console.log('Single tap detected');
   },
   onChartFling: (isTouchEvent: boolean, me1: TouchEvent | GestureEvent, me2: TouchEvent, velocityX: number, velocityY: number) => {
   // 滑动事件
   console.log('Fling detected');
   },
   onChartScale: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, scaleX: number, scaleY: number) => {
   // 缩放事件
   console.log('Scale detected');
   },
   onChartTranslate: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, dX: number, dY: number) => {
   // 拖动事件
   console.log('Translate detected');
   }
   };
   ```
   2.3 图表数据初始化

   在 aboutToAppear 方法中初始化图表数据：
   ```typescript
   aboutToAppear() {
   // Step 1: 初始化图表配置构建类
   this.model = new BarChartModel();

    // Step 2: 配置图表样式
    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);
    this.model.setOnChartGestureListener(this.chartGestureListener);
    
    // 配置图表描述
    let description: Description | null = this.model.getDescription();
    if (description) {
    description.setEnabled(false); // 不显示描述
    }
    
    // 配置图例
    let legend: Legend | null = this.model.getLegend();
    if (legend) {
    legend.setEnabled(false); // 不显示图例
    }
    
    // 设置最大可见值数量
    this.model.setMaxVisibleValueCount(40);
    
    // 设置背景色
    this.model.setDrawGridBackground(false); // 不绘制背景网格
    this.model.setGridBackgroundColor('#500000ff'); // 设置背景色
    
    // 设置柱状图样式
    this.model.setDrawBarShadow(false); // 不绘制柱体阴影
    this.model.setDrawValueAboveBar(false); // 数值显示在柱体上方
    this.model.setHighlightFullBarEnabled(false); // 高亮整个柱体
    
    // 配置左Y轴
    this.leftAxis = this.model.getAxisLeft();
    if (this.leftAxis) {
    this.leftAxis.setAxisMinimum(0); // 最小值为0
    this.leftAxis.setDrawLimitLinesBehindData(false);
    
        // 添加限制线
        this.limitLine1 = new LimitLine(120, 'Upper Limit');
        this.limitLine1.setLineWidth(4);
        this.limitLine1.enableDashedLine(10, 10, 0);
        this.limitLine1.setLabelPosition(LimitLabelPosition.RIGHT_TOP);
        this.limitLine1.setTextSize(10);
    
        this.limitLine2 = new LimitLine(50, 'Lower Limit');
        this.limitLine2.setLineWidth(4);
        this.limitLine2.enableDashedLine(10, 10, 0);
        this.limitLine2.setLineColor(Color.Yellow);
        this.limitLine2.setLabelPosition(LimitLabelPosition.RIGHT_BOTTOM);
        this.limitLine2.setTextSize(10);
    
        this.leftAxis.addLimitLine(this.limitLine1);
        this.leftAxis.addLimitLine(this.limitLine2);
    }
    
    // 配置右Y轴
    this.rightAxis = this.model.getAxisRight();
    if (this.rightAxis) {
    this.rightAxis.setEnabled(false); // 不启用右Y轴
    this.rightAxis.setAxisMinimum(0);
    }
    
    // 配置X轴
    this.xAxis = this.model.getXAxis();
    if (this.xAxis) {
    this.xAxis.setPosition(XAxisPosition.BOTTOM); // X轴位置
    }
    
    // 设置MarkerView
    this.normalMarker = new MarkerView();
    this.model.setMarker(this.normalMarker);
    
    // 设置数据
    this.data = this.getNormalData(); // 获取普通数据
    this.model.setData(this.data);
    
    // 设置最大X轴显示范围
    this.model.setVisibleXRangeMaximum(20);
    }
   ```
    2.4 数据生成方法

    2.4.1 普通柱状图数据
    ```typescript
    private getNormalData(): BarData {
    let values: JArrayList<BarEntry> = new JArrayList<BarEntry>();
    values.add(new BarEntry(1, 73.3));
    values.add(new BarEntry(2, 5.4));
    
    let dataSet: BarDataSet = new BarDataSet(values, 'DataSet');
    dataSet.setHighLightColor(Color.Black);
    dataSet.setDrawIcons(false);
    dataSet.setColorByColor(Color.Pink);
    
    let dataSetList: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSetList.add(dataSet);
    
    let barData: BarData = new BarData(dataSetList);
    barData.setBarWidth(0.85); // 设置柱状图宽度
    barData.setTopRadius(5); // 设置顶部圆角半径
    return barData;
    }
    ```
    
    2.4.2 渐变柱状图数据
    ```typescript
    private getGradientData(): BarData {
    let values: JArrayList<BarEntry> = new JArrayList<BarEntry>();
    values.add(new BarEntry(1, 32.9));
    values.add(new BarEntry(2, 44.7));
    
    let dataSet: BarDataSet = new BarDataSet(values, 'DataSet');
    dataSet.setHighLightColor(Color.Black);
    dataSet.setDrawIcons(false);
    
    let gradientFills: JArrayList<Fill> = new JArrayList<Fill>();
    gradientFills.add(new Fill('#ffffbb33', '#ff0099cc'));
    gradientFills.add(new Fill('#ff33b5e5', '#ffaa66cc'));
    gradientFills.add(new Fill('#ffffbb33', '#ff669900'));
    gradientFills.add(new Fill('#ff99cc00', '#ffcc0000'));
    gradientFills.add(new Fill('#ffff4444', '#ffff8800'));
    
    dataSet.setFills(gradientFills);
    
    let dataSetList: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSetList.add(dataSet);
    
    let barData: BarData = new BarData(dataSetList);
    barData.setBarWidth(0.85);
    return barData;
    }
    ```

    2.4.3 堆叠柱状图数据
    ```typescript
    private getStackData(): BarData {
    let values: JArrayList<BarEntry> = new JArrayList<BarEntry>();
    values.add(new BarEntry(1, [38.0, 28.0, 39.8]));
    values.add(new BarEntry(2, [18.2, 16.1, 16.1]));
    
    let set1: BarDataSet | null = null;
    set1 = new BarDataSet(values, "Statistics Vienna 2014");
    set1.setDrawIcons(false);
    set1.setColorsByArr([Color.Red, Color.Green, Color.Pink]);
    set1.setStackLabels(["Births", "Divorces", "Marriages"]);
    
    let dataSets: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSets.add(set1);
    
    let data: BarData = new BarData(dataSets);
    data.setValueTextColor(Color.White);
    return data;
    }
    ```

3. 将柱状图添加到页面

   在页面中使用 BarChart 组件，并绑定配置类：
   ```typescript
   BarChart({ model: this.model })
   .width('100%')
   .height('30%')
   ```
4. 数据更新

      如果需要在页面加载后动态更新数据，可以通过以下方法：
      更新数据集后调用 notifyDataSetChanged：
      ```typescript
      this.data = this.getNormalData(); // 或其他数据生成方法
      this.model.setData(this.data);
      this.model.notifyDataSetChanged();
      ```
      如果需要更新坐标轴数据，调用：
      ```typescript
      this.model.notifyDataSetChanged();
      ```
      如果需要重新绘制图表，调用：
      ```typescript
      this.model.invalidate();
      ```
5. 总结

   通过以上步骤，你可以轻松地初始化柱状图数据、配置图表样式，并将其添加到页面中。你可以根据需要选择普通柱状图、渐变柱状图或堆叠柱状图，并通过监听器实现交互功能。
