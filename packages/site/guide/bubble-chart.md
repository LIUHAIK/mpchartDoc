气泡图
气泡图数据初始化：
```
// 导入一些图表相关的组件和类
import {
JArrayList,  //工具类：数据集合
XAxis,  // 图表X轴部件
XAxisPosition,  // 图表X轴标签位置枚举类
YAxis,  // 图表Y轴部件
Description,  // 图表的描述信息
Legend,  // 图例
OnChartValueSelectedListener,  // 图表数值选中的监听器
Highlight,  // 高亮显示
EntryOhos,  // 图表数据结构基础类
YAxisLabelPosition,  // 图表Y轴标签位置枚举类
BubbleEntry,  // 气泡图数据结构
ChartPixelMap,  // 图表像素映射
IBubbleDataSet,  // 气泡图数据集的接口
BubbleDataSet,  // 气泡图数据集
MPPointF,  // MPPonitF
BubbleChart,  // 气泡图组件
BubbleChartModel,  // 气泡图配置构建类
BubbleData  // 气泡图数据
} from '@ohos/mpchart';

// 构造数据选择监听器
private valueSelectedListener: OnChartValueSelectedListener = {
onValueSelected: (e: EntryOhos, h: Highlight) => {
// ...todoSomething
},
onNothingSelected: () => {
// ...todoSomething
}
}

// 图表数据初始化
private model: BubbleChartModel | null = null;

aboutToAppear() {
// Step1:必须：初始化图表配置构建类
this.model = new BubbleChartModel();
// Step2：配置图表的特定样式，各部件间没有先后之分

    //设置图例
    let l: Legend | null = this.model.getLegend();
    if (l) {
      l.setEnabled(true);
    }
    
    //设置描述
    let description: Description | null = this.model.getDescription();
    if (description) {
      description.setEnabled(false);
    }

    // 设置最大可见条目数量为60
this.model.setMaxVisibleValueCount(60);

// 禁用x和y轴方向同时缩放，但是可以单独x轴方向或者y轴方向缩放
this.model.setPinchZoom(false);

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

// 初始化起始值为1
let start: number = 1;

// 创建气泡图数据集
let values: JArrayList<BubbleEntry> = new JArrayList<BubbleEntry>();
for (let i = start; i < 20; i++) {
// 生成随机值（0到40之间）
let val = Number(Math.random() * 41);

     // 按照一定概率添加气泡数据
     if (Math.random() * 100 < 25) {
       values.add(new BubbleEntry(i, val));
     } else {
       values.add(new BubbleEntry(i, val));
     }
}

// 创建气泡图数据集
let dataSet: BubbleDataSet = new BubbleDataSet(values, 'DataSet');
dataSet.setHighLightColor(Color.Black);
dataSet.setDrawIcons(false);

// 创建气泡图数据集列表
let dataSetList: JArrayList<IBubbleDataSet> = new JArrayList<IBubbleDataSet>();
dataSetList.add(dataSet);

// 设置图表数据
this.setData(5, 50);

// 设置图表最大的X轴显示范围为7个单位
this.model.setVisibleXRangeMaximum(7);

}

// 初始化气泡图数据
/**
* 设置气泡图表的数据
* @param count 数据点的数量
* @param range 数据点的范围
*/
private setData(count: number, range: number): void {

    // 创建三个气泡图数据集
    let values1 = new JArrayList<BubbleEntry>();
    let values2 = new JArrayList<BubbleEntry>();
    let values3 = new JArrayList<BubbleEntry>();
    
    // 创建图标绘制对象
    let imgePaint: ChartPixelMap = new ChartPixelMap();

    // 设置图标的宽度和高度
    imgePaint.setWidth(32);
    imgePaint.setHeight(32);

    // 循环生成数据点
    for (let i = 0; i < count; i++) {
      // 向数据集添加带有图标的气泡数据点
      values1.add(new BubbleEntry(i, Math.random() * range, Math.random() * range, imgePaint));
      values2.add(new BubbleEntry(i, Math.random() * range, Math.random() * range, imgePaint));
      
      // 向数据集添加不带图标的气泡数据点
      values3.add(new BubbleEntry(i, Math.random() * range, Math.random() * range));
    }

    // 创建气泡数据集1
    let set1: BubbleDataSet = new BubbleDataSet(values1, "DS 1");
    set1.setDrawIcons(false);
    set1.setColorByColor(0x88c12552);
    set1.setIconsOffset(new MPPointF(0, 0));
    set1.setDrawValues(this.isDrawValuesEnable);

    // 创建气泡数据集2
    let set2: BubbleDataSet = new BubbleDataSet(values2, "DS 2");
    set2.setDrawIcons(false);
    set2.setIconsOffset(new MPPointF(0, 0));
    set2.setColorByColor(0x88ff6600);
    set2.setDrawValues(this.isDrawValuesEnable);

    // 创建气泡数据集3
    let set3: BubbleDataSet = new BubbleDataSet(values3, "DS 3");
    set3.setDrawIcons(false);
    set3.setIconsOffset(new MPPointF(0, 0));
    set3.setColorByColor(0x88f5c700);
    set3.setDrawValues(this.isDrawValuesEnable);

    // 创建气泡图数据集列表
    let dataSets = new JArrayList<IBubbleDataSet>();
    dataSets.add(set1);
    dataSets.add(set2);
    dataSets.add(set3);

    // 创建气泡图数据对象
    let dataResult: BubbleData = new BubbleData(dataSets);
    dataResult.setDrawValues(this.isDrawValuesEnable);
    dataResult.setValueTextSize(8);
    dataResult.setValueTextColor(Color.White);
    dataResult.setHighlightCircleWidth(1.5);
    dataResult.setHighlightEnabled(true);
    dataResult.notifyDataChanged();

    // 如果存在图表模型，则设置图表数据
    if (this.model) {
      this.model.setData(dataResult);
    }
}
```


添加数据到自定义气泡图图表组件
// 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建
// 如果在之后通过事件触发，
// 可通过dataResult.notifyDataSetChanged();来触发数据更新，
// 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新，
// 可通过this.model.invalidate();来触发绘制更新。
```
BubbleChart({ model: this.model })
.width('100%')
.height('70%')
```
