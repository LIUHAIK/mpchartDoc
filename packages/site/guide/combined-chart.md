组合图
组合图数据初始化：
```
// 导入一些图表相关的组件和类
import {
ColorTemplate,  // 颜色模板
CombinedChart,  // 组合图表类
CombinedChartModel,  // 组合图表配置构建类
CombinedData,  // 组合图表数据包
EntryOhos,  // 图表数据结构基础类
JArrayList,  // 工具类：数据集合
LineData,  // 折线图数据包
LineDataSet,  // 折线图数据集合
Color,  // 颜色类
Mode,  // 图表模式枚举类
AxisDependency,  // 轴依赖类
BarEntry,  // 柱状图数据结构
BarData,  // 柱状图数据包
BarDataSet,  // 柱状图数据集合
IBarDataSet,  // 柱状图数据集合的操作类
ScatterData,  // 散点图数据包
ScatterDataSet,  // 散点图数据集合
CandleData,  // 蜡烛图数据包
CandleEntry,  // 蜡烛图数据结构
CandleDataSet,  // 蜡烛图数据集合
BubbleData,  // 气泡图数据包
BubbleEntry,  // 气泡图数据结构
BubbleDataSet,  // 气泡图数据集合
YAxisLabelPosition,  // 图表Y轴标签位置枚举类
XAxisPosition,  // 图表X轴标签位置枚举类
XAxis,  // 图表X轴部件
YAxis,  // 图表Y轴部件
LegendHorizontalAlignment,  // 图例水平对齐方式枚举类
LegendVerticalAlignment  // 图例垂直对齐方式枚举类
} from '@ohos/mpchart';

// Step1:必须：初始化图表配置构建类
private model: CombinedChartModel = new CombinedChartModel();

aboutToAppear() {
// Step2：配置图表的特定样式，各部件间没有先后之分

    // 禁用图表描述
    this.model.getDescription()?.setEnabled(false);

    // 获取图例对象
    let l = this.model.getLegend();
    if (l) {
      // 启用图例
      l.setEnabled(true);
      
      // 启用图例文字自动换行
      l.setWordWrapEnabled(true);
      
      // 设置图例水平对齐方式为左侧
      l.setHorizontalAlignment(LegendHorizontalAlignment.LEFT);
      
      // 设置图例垂直对齐方式为底部
      l.setVerticalAlignment(LegendVerticalAlignment.BOTTOM);
      
      // 设置图例不绘制在图表内部
      l.setDrawInside(false);
    }

    // 设置图表最大可见数值数量为60
    this.model.setMaxVisibleValueCount(60);

    // 禁用图表的捏合缩放功能
    this.model.setPinchZoom(false);

    // 禁用图表绘制网格背景
    this.model.setDrawGridBackground(false);

    // 获取X轴对象
    let xAxis: XAxis | null = this.model.getXAxis();
    if (xAxis) {
      // 设置X轴位置在底部
      xAxis.setPosition(XAxisPosition.BOTTOM);
      
      // 不绘制X轴网格线
      xAxis.setDrawGridLines(false);
      
      // 设置X轴坐标的最小间隔为1
      xAxis.setGranularity(1);
      
      // 设置X轴标签数量为7
      xAxis.setLabelCount(7);
    }

    // 获取左侧Y轴对象
    let leftAxis: YAxis | null = this.model.getAxisLeft();
    if (leftAxis) {
      // 设置左侧Y轴标签数量为8，不强制使用整数标签
      leftAxis.setLabelCount(8, false);
      
      // 设置左侧Y轴标签位置在图表外部
      leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART);
      
      // 设置顶部空白区域为15个单位
      leftAxis.setSpaceTop(15);
      
      // 设置左侧Y轴的最小值为0
      leftAxis.setAxisMinimum(0);
    }

    // 获取右侧Y轴对象
    let rightAxis: YAxis | null = this.model.getAxisRight();
    if (rightAxis) {
      // 设置右侧Y轴标签数量为8，不强制使用整数标签
      rightAxis.setLabelCount(8, false);
      
      // 不绘制右侧Y轴网格线
      rightAxis.setDrawGridLines(false);
      
      // 设置顶部空白区域为15个单位
      rightAxis.setSpaceTop(15);
      
      // 设置右侧Y轴的最小值为0
      rightAxis.setAxisMinimum(0);
    }

    // 创建组合图表数据对象
    let data: CombinedData = new CombinedData();
    
    // 生成线形图数据
    this.generateLineData(data);
    
    // 生成柱状图数据
    this.generateBarData(data);
    
    // 生成气泡图数据
    this.generateBubbleData(data);
    
    // 生成散点图数据
    this.generateScatterData(data);
    
    // 生成蜡烛图数据
    this.generateCandleData(data);
    
    // 设置图表数据
    this.model.setData(data);
}

// 生成线形图数据
private generateLineData(data: CombinedData): void {

    let d: LineData = new LineData();

    let entries: JArrayList<EntryOhos> = new JArrayList();

    for (let index = 0; index < this.count; index++) {

      entries.add(new EntryOhos(index + 0.5, this.getRandom(15, 5)));
    }

    let set: LineDataSet = new LineDataSet(entries, "Line DataSet");
    set.setColorByColor(Color.rgb(240, 238, 70));
    set.setLineWidth(2.5);
    set.setCircleColor(Color.rgb(240, 238, 70));
    set.setCircleRadius(5);
    set.setFillColor(Color.rgb(240, 238, 70));
    set.setMode(Mode.CUBIC_BEZIER);
    set.setDrawValues(true);
    set.setValueTextSize(10);
    set.setValueTextColor(Color.rgb(240, 238, 70));

    set.setAxisDependency(AxisDependency.LEFT);
    d.addDataSet(set);
    data.setLineData(d);

}

// 生成柱状图数据
private generateBarData(data: CombinedData): void {

    let entries1: JArrayList<BarEntry> = new JArrayList();
    let entries2: JArrayList<BarEntry> = new JArrayList();

    for (let index = 0; index < this.count; index++) {
      entries1.add(new BarEntry(0, this.getRandom(25, 25)));

      // stacked
      entries2.add(new BarEntry(0, [this.getRandom(13, 12), this.getRandom(13, 12)]));
    }

    let set1: BarDataSet = new BarDataSet(entries1, "Bar 1");
    set1.setColorByColor(Color.rgb(60, 220, 78));
    set1.setValueTextColor(Color.rgb(60, 220, 78));
    set1.setValueTextSize(10);
    set1.setAxisDependency(AxisDependency.LEFT);

    let set2: BarDataSet = new BarDataSet(entries2, "");
    set2.setStackLabels(["Stack 1", "Stack 2"]);
    set2.setColorsByArr([Color.rgb(61, 165, 255), Color.rgb(23, 197, 255)]);
    set2.setValueTextColor(Color.rgb(61, 165, 255));
    set2.setValueTextSize(10);
    set2.setAxisDependency(AxisDependency.LEFT);

    let groupSpace = 0.06;
    let barSpace = 0.02; // x2 dataset
    let barWidth = 0.45; // x2 dataset
    // (0.45 + 0.02) * 2 + 0.06 = 1.00 -> interval per "group"

    let set: JArrayList<IBarDataSet> = new JArrayList();
    set.add(set1);
    set.add(set2);
    let d: BarData = new BarData(set);
    d.setBarWidth(barWidth);

    // make this BarData object grouped
    d.groupBars(0, groupSpace, barSpace); // start at x = 0
    data.setBarData(d);

}

// 生成散点图数据
private generateScatterData(data: CombinedData): void {

    let d: ScatterData = new ScatterData();

    let entries: JArrayList<EntryOhos> = new JArrayList();

    for (let index = 0; index < this.count; index += 0.5)
      entries.add(new EntryOhos(index + 0.25, this.getRandom(10, 55)));

    let set: ScatterDataSet = new ScatterDataSet(entries, "Scatter DataSet");
    set.setColorsByArr(ColorTemplate.MATERIAL_COLORS);
    set.setScatterShapeSize(7.5);
    set.setDrawValues(false);
    set.setValueTextSize(10);
    d.addDataSet(set);
    data.setScatterData(d);
}

// 生成蜡烛图数据
private generateCandleData(data: CombinedData): void {

    let d: CandleData = new CandleData();

    let entries: JArrayList<CandleEntry> = new JArrayList();

    for (let index = 0; index < this.count; index += 2) {

      entries.add(new CandleEntry(index + 1, 90, 70, 85, 75));
    }

    let set: CandleDataSet = new CandleDataSet(entries, "Candle DataSet");
    set.setDecreasingColor(Color.rgb(142, 150, 175));
    set.setShadowColor(ColorTemplate.DKGRAY);
    set.setBarSpace(0.3);
    set.setValueTextSize(10);
    set.setDrawValues(false);
    d.addDataSet(set);
    data.setCandleData(d);
}

//生成气泡图数据
private generateBubbleData(data: CombinedData): void {

    let bd: BubbleData = new BubbleData();

    let entries: JArrayList<BubbleEntry> = new JArrayList();

    for (let index = 0; index < this.count; index++) {
      let y = this.getRandom(10, 105);
      let size = this.getRandom(20, 30);
      entries.add(new BubbleEntry(index + 0.5, y, size));
    }

    let set: BubbleDataSet = new BubbleDataSet(entries, "Bubble DataSet");
    set.setColorsByArr(ColorTemplate.VORDIPLOM_COLORS);
    set.setValueTextSize(10);
    set.setValueTextColor(Color.rgb(255, 255, 255));
    set.setHighlightCircleWidth(1.5);
    set.setDrawValues(true);
    bd.addDataSet(set);
    data.setBubbleData(bd);
}
//生成随机数据
getRandom(range: number, start: number): number {
return (Math.random() * range) + start;
}
```


添加数据到自定义组合图图表组件
// 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建
// 如果在之后通过事件触发，
// 可通过data.notifyDataSetChanged();来触发数据更新，
// 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新，
// 可通过this.model.invalidate();来触发绘制更新。
```
CombinedChart({ model: this.model })
.width('100%')
.height('70%')
```

