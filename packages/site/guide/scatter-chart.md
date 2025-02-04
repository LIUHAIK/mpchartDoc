散点图
散点图数据初始化：
```
// 导入一些图表相关的组件和类
import {
JArrayList,  // 工具类：数据集合
XAxis,  // 图表X轴部件
XAxisPosition,  // 图表X轴标签位置枚举类
YAxis,  // 图表Y轴部件
Description,  // 图表Description(描述)部件
Legend,  // 图表Legend(图例)部件
OnChartValueSelectedListener,  // 数据选择监听
Highlight,  // 图表高亮数据
EntryOhos,  // 图表数据结构基础类
YAxisLabelPosition,  // 图表Y轴标签位置枚举类
ScatterChart,  // 散点图图表类
ScatterChartModel,  // 散点图配置构建类
ScatterData,  // 散点图数据包
ScatterDataSet,  // 散点图数据集合
IScatterDataSet,  // 散点图数据集合的操作类
ColorTemplate,  // 颜色模板
ChartShape,  // 图表形状枚举类
} from '@ohos/mpchart';


aboutToAppear() {
// Step1:必须：初始化图表配置构建类
this.model = new ScatterChartModel();

    // Step2：配置图表的特定样式，各部件间没有先后之分
    // 获取图例对象
    let l: Legend | null = this.model.getLegend();
    if (l) {
      // 启用图例
      l.setEnabled(true);
    }
    
    // 设置散点图数值选择监听器
    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);

    // 获取描述对象
    let description: Description | null = this.model.getDescription();
    if (description) {
      // 禁用图表描述
      description.setEnabled(false);
    }

    // 设置图表最大可见数值数量、是否支持缩放、是否绘制网格背景
    this.model.setMaxVisibleValueCount(160);
    this.model.setPinchZoom(false);
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
      
      // 设置左侧Y轴顶部空白区域大小
      leftAxis.setSpaceTop(15);
      
      // 设置左侧Y轴的最小值为0
      leftAxis.setAxisMinimum(0);
    }

    // 获取右侧Y轴对象
    let rightAxis: YAxis | null = this.model.getAxisRight();
    if (rightAxis) {
      // 设置右侧Y轴标签数量为8，不绘制右侧Y轴网格线
      rightAxis.setLabelCount(8, false);
      rightAxis.setDrawGridLines(false);
      
      // 设置右侧Y轴顶部空白区域大小
      rightAxis.setSpaceTop(15);
      
      // 设置右侧Y轴的最小值为0
      rightAxis.setAxisMinimum(0);
    }

    // 生成随机数据
    let start: number = 1;
    let values: JArrayList<EntryOhos> = new JArrayList<EntryOhos>();
    for (let i = start; i < 20; i++) {
      let val = Number(Math.random() * 41);

      if (Math.random() * 100 < 25) {
        values.add(new EntryOhos(i, val));
      } else {
        values.add(new EntryOhos(i, val));
      }
    }

    // 创建散点图数据集
    let dataSet: ScatterDataSet = new ScatterDataSet(values, 'DataSet');
    dataSet.setHighLightColor(Color.Black);
    dataSet.setDrawIcons(false);

    // 创建散点图数据集合
    let dataSetList: JArrayList<IScatterDataSet> = new JArrayList<IScatterDataSet>();
    dataSetList.add(dataSet);

    // 设置图表数据
    this.setData(20, 100);
}

/**
* 设置散点图数据
* @param xRange - X轴数据范围
* @param yRange - Y轴数据范围
*/
private setData(xRange: number, yRange: number): void {

       // 生成随机数据集合
       let values1 = this.generateRandomData(xRange, yRange);
       let values2 = this.generateRandomData(xRange, yRange);
       let values3 = this.generateRandomData(xRange, yRange);
   
       // 创建散点图数据集1
       let set1 = new ScatterDataSet(values1, "DS 1");
       set1.setScatterShape(ChartShape.SQUARE);
       set1.setColorByColor(ColorTemplate.COLORFUL_COLORS[0]);
   
       // 创建散点图数据集2
       let set2 = new ScatterDataSet(values2, "DS 2");
       set2.setScatterShape(ChartShape.CIRCLE);
       set2.setScatterShapeHoleColor(ColorTemplate.COLORFUL_COLORS[3]);
       set2.setScatterShapeHoleRadius(3);
       set2.setColorByColor(ColorTemplate.COLORFUL_COLORS[1]);
   
       // 创建散点图数据集3
       let set3 = new ScatterDataSet(values3, "DS 3");
       set3.setShapeRenderer(new CustomScatterShapeRenderer());
       set3.setColorByColor(ColorTemplate.COLORFUL_COLORS[2]);
   
       // 设置散点图数据集形状大小
       set1.setScatterShapeSize(8);
       set2.setScatterShapeSize(8);
       set3.setScatterShapeSize(8);
   
       // 创建散点图数据集合
       let dataSets: JArrayList<IScatterDataSet> = new JArrayList<IScatterDataSet>();
       dataSets.add(set1); // 添加数据集
       dataSets.add(set2);
       dataSets.add(set3);
   
       // 创建散点图数据
       let dataResult: ScatterData = new ScatterData(dataSets);
       dataResult.setDrawValues(this.isDrawValuesEnable);
       dataResult.setValueTextSize(8);
       dataResult.setHighlightEnabled(true);
   
       // 设置数据项文本大小
       dataResult.setValueTextSize(10);
   
       // 设置图表数据
       if (this.model) {
         this.model.setData(dataResult);
       }
}

/**
* 生成随机散点图数据
* @param xRange - X轴数据范围
* @param yRange - Y轴数据范围
* @returns 随机散点图数据集合
*/
private generateRandomData(xRange: number, yRange: number): JArrayList<EntryOhos> {
let values = new JArrayList<EntryOhos>();

       // 循环生成随机数据
       for (let i = 0; i < xRange; i++) {
         let x = i; // 在指定范围内生成随机X值
         let y = Math.random() * yRange; // 在指定范围内生成随机Y值
         values.add(new EntryOhos(x, y));
       }
       return values;
}
```


添加数据到散点图图表组件
// 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建
// 如果在之后通过事件触发，
// 可通过dataResult.notifyDataSetChanged();来触发数据更新，
// 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新，
// 可通过this.model.invalidate();来触发绘制更新。
```
ScatterChart({ model: this.model })
.width('100%')
.height('70%')
```
