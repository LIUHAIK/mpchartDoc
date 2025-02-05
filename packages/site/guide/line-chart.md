# 线形图组件使用指南

本文档将指导你如何使用线形图组件，并通过代码示例展示如何初始化数据、配置图表样式以及如何将图表添加到页面中。

1. 引入依赖

   在使用线形图组件之前，需要引入相关的依赖模块：
   ```typescript
   import {
   JArrayList,
   XAxis,
   XAxisPosition,
   YAxis,
   Description,
   Legend,
   OnChartValueSelectedListener,
   Highlight,
   EntryOhos,
   YAxisLabelPosition,
   LineDataSet,
   ILineDataSet,
   LineData,
   Mode,
   LineChart,
   LineChartModel,
   LimitLine,
   LimitLabelPosition,
   ChartColorStop,
   LegendForm
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
   2.2 图表数据初始化

   在 aboutToAppear 方法中初始化图表数据：

    ```typescript
    aboutToAppear() {
    // Step 1: 初始化图表配置构建类
    this.model = new LineChartModel();

    // Step 2: 配置图表指定样式
    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);
    
    // 配置图表描述
    let description: Description | null = this.model.getDescription();
    if (description) {
    description.setEnabled(false); // 不显示描述
    }
    
    // 配置图例
    let legend: Legend | null = this.model.getLegend();
    if (legend) {
    legend.setEnabled(true); // 显示图例
    legend.setForm(LegendForm.LINE); // 图例形状为线形
    }
    
    // 设置最大可见值数量
    this.model.setMaxVisibleValueCount(60);
    
    // 配置左Y轴
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
    
    this.leftAxis = this.model.getAxisLeft();
    if (this.leftAxis) {
    this.leftAxis.setLabelCount(8, false); // 设置标签数量
    this.leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART); // 标签位置
    this.leftAxis.setSpaceTop(15); // 距离顶部距离
    this.leftAxis.setAxisMinimum(0); // 最小值
    this.leftAxis.setAxisMaximum(200); // 最大值
    this.leftAxis.addLimitLine(this.limitLine1); // 添加限制线
    this.leftAxis.addLimitLine(this.limitLine2);
    }
    
    // 配置右Y轴
    this.rightAxis = this.model.getAxisRight();
    if (this.rightAxis) {
    this.rightAxis.setLabelCount(8, false);
    this.rightAxis.setDrawGridLines(false);
    this.rightAxis.setSpaceTop(15);
    this.rightAxis.setAxisMinimum(0);
    this.rightAxis.setAxisMaximum(200);
    this.rightAxis.setEnabled(false); // 不启用右Y轴
    }
    
    // 配置X轴
    this.xAxis = this.model.getXAxis();
    if (this.xAxis) {
    this.xAxis.setPosition(XAxisPosition.BOTTOM); // X轴位置
    this.xAxis.setDrawGridLines(false); // 不绘制网格线
    this.xAxis.setGranularity(1); // 最小轴步长
    this.xAxis.setLabelCount(7); // 标签数量
    }
    
    // 设置MarkerView
    this.normalMarker = new MarkerView();
    this.model.setMarker(this.normalMarker);
    
    // 设置数据
    let lineData: LineData = this.getLineData();
    this.model.setData(lineData);
    
    // 设置最大X轴显示范围
    this.model.setVisibleXRangeMaximum(20);
    }
   ```
   
2.3 数据生成方法

2.3.1 生成线形图数据
```typescript
private getLineData(): LineData {
let start: number = 1;
let values: JArrayList<EntryOhos> = new JArrayList<EntryOhos>();
for (let i = start; i < 20; i++) {
let val = Number(Math.random() * 141); // 随机生成数据

    if (Math.random() * 100 < 25) {
      values.add(new EntryOhos(i, val));
    } else {
      values.add(new EntryOhos(i, val));
    }
}

this.dataSet = new LineDataSet(values, 'DataSet');
this.dataSet.setHighLightColor(Color.Black);
this.dataSet.setDrawIcons(false);

this.dataSet.setMode(Mode.LINEAR); // 直线模式
this.dataSet.setDrawCircles(true); // 折线点画圆圈
this.dataSet.setDrawCircleHole(false); // 不显示内部孔
this.dataSet.setColorByColor(Color.Black); // 设置折线颜色

// 渐变色填充
let gradientFillColor = new JArrayList<ChartColorStop>();
gradientFillColor.add(["#0C0099CC", 0.2]);
gradientFillColor.add(["#7F0099CC", 0.4]);
gradientFillColor.add(["#0099CC", 1.0]);
this.dataSet.setGradientFillColor(gradientFillColor);
this.dataSet.setDrawFilled(true);

// 设置数据点的颜色
this.dataSet.setCircleColor(Color.Blue); // 数据点颜色
this.dataSet.setCircleRadius(4); // 数据点半径
this.dataSet.setCircleHoleRadius(2); // 数据点内径

let dataSetList: JArrayList<ILineDataSet> = new JArrayList<ILineDataSet>();
dataSetList.add(this.dataSet);

let lineData: LineData = new LineData(dataSetList);
return lineData;
}
```

3. 将线形图添加到页面

   在页面中使用 LineChart 组件，并绑定配置类：
   ```typescript
   LineChart({ model: this.model })
   .width('100%')
   .height('30%')
   ```
4. 数据更新

   如果需要在页面加载后动态更新数据，可以通过以下方法：
   更新数据集后调用 notifyDataSetChanged：
    ```typescript
    this.dataSet = this.getLineData(); // 或其他数据生成方法
    this.model.setData(this.dataSet);
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
   通过以上步骤，你可以轻松地初始化线形图数据、配置图表样式，并将其添加到页面中。你可以根据需要选择不同的数据生成方法，并通过监听器实现交互功能。
