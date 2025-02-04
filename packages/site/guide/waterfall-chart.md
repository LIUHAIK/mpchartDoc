瀑布图
瀑布图数据初始化：
```
import {
WaterfallChart, // 瀑布图图表类
WaterfallChartModel, // 瀑布图配置构建类
BarData, // 瀑布图数据包
WaterfallDataSet, // 瀑布图数据集合
WaterfallEntry, // 瀑布图数据结构
ChartGesture, // 手势事件模式
Description, // 图表Description(描述)部件
EntryOhos, // 图表数据结构基础类
Fill, // 图表填充类型构建类
Highlight, // 图表高亮数据
IBarDataSet, // 瀑布图数据集合的操作类
JArrayList, // 工具类：数据集合
Legend, // 图表Legend(图例)部件
LimitLabelPosition, // 图表的LimitLine标签位置枚举类
LimitLine, // 图表LimitLine
MarkerView, // 图表的Marker(标志气泡)部件
OnChartGestureListener, // 手势事件监听
OnChartValueSelectedListener, // 数据选择监听
XAxis, // 图表X轴部件
XAxisPosition, // 图表X轴标签位置枚举类
YAxis, // 图表Y轴部件
YAxisLabelPosition // 图表Y轴标签位置枚举类
} from '@ohos/mpchart';

// 构造数据选择监听器
private valueSelectedListener: OnChartValueSelectedListener = {
onValueSelected: (e: EntryOhos, h: Highlight) => {
LogUtil.log("SimpleWaterfallChartPage onValueSelected: " + e.getX());
},
onNothingSelected: () => {
LogUtil.log("SimpleWaterfallChartPage onNothingSelected");
}
}

// 构造手势识别事件监听器
private chartGestureListener: OnChartGestureListener = {
onChartGestureStart: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) => {
},
onChartGestureEnd: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) => {
// ...todoSomething
},
onChartLongPressed: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
// ...todoSomething
},
onChartDoubleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
// ...todoSomething
},
onChartSingleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) => {
// ...todoSomething
},
onChartFling: (isTouchEvent: boolean, me1: TouchEvent | GestureEvent, me2: TouchEvent, velocityX: number, velocityY: number) => {
// ...todoSomething
},
onChartScale: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, scaleX: number, scaleY: number) => {
// ...todoSomething
},
onChartTranslate: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, dX: number, dY: number) => {
// ...todoSomething
}
}

// 图表数据初始化
aboutToAppear() {

  	// Step1:必须：初始化图表配置构建类
    this.model = new WaterfallChartModel();
    
    // Step2:配置图表指定样式，各部件间没有先后之分
    
    // 为图表添加数据选择的监听器
    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);
    // 为图表添加手势识别监听器
    this.model.setOnChartGestureListener(this.chartGestureListener);
	// 获取图表描述部件，设置图表描述部件不可用，即图表不进行绘制描述部件
    let description: Description | null = this.model.getDescription()
    if (description) {
      description.setEnabled(false);
    }
	// 获取图表图例部件，设置图表图例部件不可用
    let l: Legend | null = this.model.getLegend();
    if (l) {
      l.setEnabled(false);
    }
    // 设置图表数据最大的绘制数，如果超过该数值，则不进行绘制图表的数值标签
    this.model.setMaxVisibleValueCount(40);
	// 是否绘制图表的背景色，绘制范围为图表瀑布图的绘制范围，不包含轴线之外的部分
    this.model.setDrawGridBackground(false);
    // 设置图表的背景色，颜色的规格需要满足CanvasRenderingContext2D.fillstyle/strokestyle规格
    this.model.setGridBackgroundColor('#500000ff')
    // 设置不绘制瀑布图的柱体阴影背景
    this.model.setDrawBarShadow(false);
	// 设置瀑布图的数值在柱体上方
    this.model.setDrawValueAboveBar(false);
	// 为左Y轴设置LimitLine,可设置限制线的宽度，线段样式，限制标签的位置，标签字体大小等
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

    // 设置图表左Y轴信息
    this.leftAxis = this.model.getAxisLeft();
    if (this.leftAxis) {
      this.leftAxis.setAxisMinimum(0); // this replaces setStartAtZero(true)
      this.leftAxis.setDrawLimitLinesBehindData(false);

      // 添加LimitLines
      this.leftAxis.addLimitLine(this.limitLine1);
      this.leftAxis.addLimitLine(this.limitLine2);
    }
	// 设置图表右Y轴信息
    this.rightAxis = this.model.getAxisRight();
    if (this.rightAxis) {
      this.rightAxis.setEnabled(false);
      this.rightAxis.setAxisMinimum(0);
    }
	// 设置X轴信息
    this.xAxis = this.model.getXAxis();
    if (this.xAxis) {
      this.xAxis.setPosition(XAxisPosition.BOTTOM);
    }
	// 为图表设置markerView
    this.normalMarker = new MarkerView();
    this.model.setMarker(this.normalMarker);
    // 也可设置定义图表MarkerView
    this.stackMarker = new CustomMarkerView();
	// 生成单一颜色数据
    this.data = this.getNormalData();
    
    // 按Y轴刻度范围绘制多种颜色数据
    this.data = this.getSegmentationData();
    
    // 高亮最高点最低点数据
    this.data = this.getTopAndBottomHighlightData();
    
    // 将数据与图表配置类绑定
    this.model.setData(this.data);
    // 设置图表最大的X轴显示范围，如不设置，则默认显示全部数据
    this.model.setVisibleXRangeMaximum(20);
}

private getNormalData(): BarData {
let values: JArrayList<WaterfallEntry> = new JArrayList<WaterfallEntry>();
// 设置标记点位置及颜色
let h1 = new WaterfallHighlight(20, 30, Color.Gray);
let h2 = new WaterfallHighlight(30, 40, Color.Gray);
let h3 = new WaterfallHighlight(40, 60, Color.Green);
let h4 = new WaterfallHighlight(60, 70, Color.Red);

    values.add(new WaterfallEntry(1, 10, 30, undefined, undefined, h1));
    values.add(new WaterfallEntry(2, 15, 50));
    values.add(new WaterfallEntry(4, 5, 95, undefined, undefined, h2, h3, h4));
    values.add(new WaterfallEntry(6, 45, 80, undefined, undefined, h2, h3));

    this.dataSet = new WaterfallDataSet(values, 'DataSet');
    this.dataSet.setHighLightColor(Color.Gray);
    this.dataSet.setDrawIcons(false);
    // 为柱体添加颜色信息
    this.dataSet.setColorByColor(Color.Pink);
    this.dataSet.setValueTextSize(10)

    let dataSetList: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSetList.add(this.dataSet);

    let barData: BarData = new BarData(dataSetList);
    //设置瀑布图宽度
    barData.setBarWidth(0.3);
     //设置顶部圆角半径
    barData.setTopRadius(1);
    return barData;
}

private getSegmentationData(): BarData {
let values: JArrayList<WaterfallEntry> = new JArrayList<WaterfallEntry>();

    values.add(new WaterfallEntry(1, 10, 70));
    values.add(new WaterfallEntry(2, 15, 80));

    this.dataSet = new WaterfallDataSet(values, 'DataSet');
    this.dataSet.setHighLightColor(Color.Gray);
    this.dataSet.setDrawIcons(false);
    this.dataSet.setColorByColor(Color.Pink);
    this.dataSet.setValueTextSize(10)

    // 根据Y刻度范围设置颜色
    let highlightList: WaterfallHighlight[] = [];
    highlightList.push(new WaterfallHighlight(0, 40, Color.Green));
    highlightList.push(new WaterfallHighlight(40, 60, Color.Orange));
    highlightList.push(new WaterfallHighlight(60, 100, Color.Pink));
    this.dataSet.setYAxisSegmentationColors(highlightList);

    let dataSetList: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSetList.add(this.dataSet);

    let barData: BarData = new BarData(dataSetList);
    barData.setBarWidth(0.3);
    return barData;
}

private getTopAndBottomHighlightData(): BarData {
let values: JArrayList<WaterfallEntry> = new JArrayList<WaterfallEntry>();
let highlightList: WaterfallHighlight[] = [];
// Y刻度范围颜色设置
highlightList.push(new WaterfallHighlight(0, 40, Color.Green));
highlightList.push(new WaterfallHighlight(40, 60, Color.Orange));
highlightList.push(new WaterfallHighlight(60, 100, Color.Pink));

    // 瀑布图数据封装
    values.add(new WaterfallEntry(1, 10, 90));
    values.add(new WaterfallEntry(2, 15, 80));
    values.add(new WaterfallEntry(3, 20, 90));

    this.dataSet = new WaterfallDataSet(values, 'DataSet');
    // 设置瀑布图选中时颜色
    this.dataSet.setHighLightColor(Color.Gray);
    this.dataSet.setDrawIcons(false);
    // 设置瀑布图颜色
    this.dataSet.setColorByColor(Color.Pink);
    // Y刻度范围颜色设置
     this.dataSet.setYAxisSegmentationColors(highlightList);
    // 最高点最低点是否高亮
    this.dataSet.setEnableMaxOrMinHighlightColor(true);
    // 最高点高亮时颜色设置
    this.dataSet.setMaxyHighlightColor(Color.Brown);
    // 最低点高亮时颜色设置
    this.dataSet.setMinyHighlightColor(Color.Yellow);

    let dataSetList: JArrayList<IBarDataSet> = new JArrayList<IBarDataSet>();
    dataSetList.add(this.dataSet);

    let barData: BarData = new BarData(dataSetList);
    barData.setBarWidth(0.3);
    return barData;
}
```

添加数据到瀑布图表组件
// 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建
// 如果在之后通过事件触发，
// 可通过dataResult.notifyDataSetChanged();来触发数据更新，
// 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新，
// 可通过this.model.invalidate();来触发绘制更新。
```
WaterfallChart({ model: this.model })
.width('100%')
.height('70%')
```
