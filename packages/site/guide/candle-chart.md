蜡烛图
蜡烛图数据初始化：
```
// 导入一些图表相关的组件和类
import {
AxisDependency, // 轴依赖类
CandleData, // 蜡烛图数据包
CandleDataSet, // 蜡烛图数据集合
CandleEntry, // 蜡烛图数据结构
CandleStickChart, // 蜡烛图图表类
CandleStickChartModel, // 蜡烛图配置构建类
ChartPixelMap, // 图表像素映射类
Description, // 图表Description(描述)部件
JArrayList, // 工具类：数据集合
Legend, // 图表Legend(图例)部件
Style, // 图表样式类
XAxis, // 图表X轴部件
XAxisPosition, // 图表X轴标签位置枚举类
YAxis // 图表Y轴部件
} from '@ohos/mpchart';

aboutToAppear() {
// 图表数据初始化
// Step1:必须：初始化图表配置构建类
this.model = new CandleStickChartModel();

    // Step2：配置图表的特定样式，各部件间没有先后之分
    //设置描述
    let description: Description | null = this.model.getDescription();
    if (description) {
      description.setEnabled(false);
    }

    //设置图例
    let l: Legend | null = this.model.getLegend();
    if (l) {
      l.setEnabled(true);
    }
    
      this.model.setMaxVisibleValueCount(60);  // 设置图表最大可见数值数量为60
      this.model.setPinchZoom(false);  // 禁用捏合缩放
      this.model.setDrawGridBackground(true);  // 启用绘制网格背景
      this.model.setGridBackgroundColor(Color.White);  // 设置网格背景颜色为白色
      this.setData(40, 100);  // 设置图表数据
      
      let xAxis: XAxis | null = this.model.getXAxis();
      if (xAxis) {
        xAxis.setPosition(XAxisPosition.BOTTOM);  // 设置X轴位置在底部
        xAxis.setDrawGridLines(true);  // 启用绘制X轴网格线
      }
      
      let leftAxis: YAxis | null = this.model.getAxisLeft();
      if (leftAxis) {
        leftAxis.setLabelCount(7, false);  // 设置左侧Y轴标签数量为7，不强制使用整数标签
        leftAxis.setDrawGridLines(true);  // 启用绘制左侧Y轴网格线
        leftAxis.setDrawAxisLine(true);  // 启用绘制左侧Y轴轴线
      }
      
      let rightAxis: YAxis | null = this.model.getAxisRight();
      if (rightAxis) {
        rightAxis.setLabelCount(7, false);  // 设置右侧Y轴标签数量为7，不强制使用整数标签
        rightAxis.setDrawGridLines(true);  // 启用绘制右侧Y轴网格线
        rightAxis.setDrawAxisLine(true);  // 启用绘制右侧Y轴轴线
      }
      
      let legend: Legend | null = this.model.getLegend();
      if (legend) {
        legend.setEnabled(true);  // 启用图例
      }
}

// 初始化蜡烛图数据
private setData(count: number, range: number):void{

    let values: JArrayList<CandleEntry> = new JArrayList<CandleEntry>();

    for (let i = 0; i < count; i++) {
      let val: number = (Math.random() * 40) + (range + 3);

      let high: number = Number(Math.random() * 9) + 8.0;
      let low: number = Number(Math.random() * 9) + 8.0;

      let open: number = Number(Math.random() * 6) + 1.0;
      let close: number = Number(Math.random() * 6) + 1.0;

      let even: boolean = i % 2 == 0;

      values.add(new CandleEntry(
        i,
        val + high,
        val - low,
        even ? val + open : val - open,
        even ? val - close : val + close,
        new ChartPixelMap()));
    }

      // 创建蜡烛图数据集，并设置数据集的名称为 "Data Set"
      let dataSet: CandleDataSet = new CandleDataSet(values, "Data Set");
      // 设置是否绘制图标为 false
      dataSet.setDrawIcons(false);
      // 设置数据集的轴依赖为左侧Y轴
      dataSet.setAxisDependency(AxisDependency.LEFT);
      // 设置蜡烛图阴影颜色为灰色
      dataSet.setShadowColor(Color.Gray);
      // 设置蜡烛图阴影宽度为 0.7
      dataSet.setShadowWidth(0.7);
      // 设置蜡烛图下跌蜡烛的绘制样式为填充
      dataSet.setDecreasingPaintStyle(Style.FILL);
      // 设置蜡烛图下跌蜡烛的颜色为红色
      dataSet.setDecreasingColor(Color.Red);
      // 设置蜡烛图上涨蜡烛的颜色为绿色
      dataSet.setIncreasingColor(Color.Green);
      // 设置蜡烛图上涨蜡烛的绘制样式为描边
      dataSet.setIncreasingPaintStyle(Style.STROKE);
      // 设置蜡烛图中性蜡烛的颜色为蓝色
      dataSet.setNeutralColor(Color.Blue);

    let data: CandleData = new CandleData([dataSet]);
    data.setValueTextSize(7);
    if (this.model) {
      this.model.resetTracking();
      this.model.setData(data);
    }
}
```

