饼状图
饼状图数据初始化：
```
 import {
     ChartGesture,         // 图表手势
     ColorTemplate,        // 颜色模板
     EntryOhos,            // 图表数据结构基础类
     Highlight,            // 高亮
     IPieDataSet,          // 饼状图数据集接口
     JArrayList,           // 工具类：数据集合
     Legend,               // 图表Legend(图例)部件
     MPPointF,             // MPPointF
     OnChartGestureListener,   // 图表手势监听器接口
     OnChartValueSelectedListener,  // 图表数值选择监听器接口
     PieChart,             // 饼状图组件
     PieChartModel,        // 饼状图配置构建类
     PieData,              // 饼状图数据包
     PieDataSet,           // 饼状图数据集合
     PieEntry,             // 饼状图数据结构
   } from '@ohos/mpchart';
  
  // 图表数据初始化
  
  // Step1:必须：初始化图表配置构建类
  private model: PieChartModel = new PieChartModel();
    
  aboutToAppear() {
    // Step2：配置图表的特定样式，各部件间没有先后之分

    let l: Legend | null = this.model.getLegend();
    if (l) {
      l.setEnabled(true);
    }
    this.model.animateX(1000);  // 启用X轴动画效果，动画持续时间为1000毫秒
    this.model.setUsePercentValues(true);  // 使用百分比值
    this.model.getDescription()?.setEnabled(false);  // 禁用描述信息
    this.model.setExtraOffsets(5, 10, 5, 5);  // 设置额外偏移量

    this.model.setOnChartGestureListener(this.chartGestureListener);  // 设置图表手势监听器

    this.model.setDragDecelerationFrictionCoef(0.95);  // 设置拖动减速摩擦系数

    this.model.setCenterText("mpchart");  // 设置中心文本
    this.model.setCenterTextSize(22);  // 设置中心文本大小

    this.model.setDrawHoleEnabled(true);  // 启用绘制中心孔
    this.model.setHoleColor(Color.White);  // 设置中心孔颜色

    this.model.setTransparentCircleColor(Color.Red);  // 设置透明圆环颜色
    this.model.setTransparentCircleAlpha(110);  // 设置透明圆环透明度

    this.model.setHoleRadius(58);  // 设置中心孔半径
    this.model.setTransparentCircleRadius(61);  // 设置透明圆环半径

    this.model.setDrawCenterText(true);  // 绘制中心文本

    this.model.setRotationAngle(0);  // 设置旋转角度
    // 通过触摸启用图表的旋转
    this.model.setRotationEnabled(true);
    this.model.setHighlightPerTapEnabled(true);  // 启用点击高亮效果

    this.setData(4, 10);  // 设置图表数据
  }

   // 初始化饼状图数据
  private setData(count: number, range: number): void {
    let entries: JArrayList<PieEntry> = new JArrayList<PieEntry>();

    // NOTE: The order of the entries when being added to the entries array determines their position around the center of
    // the chart.
    for (let i = 0; i < count; i++) {
      entries.add(new PieEntry(((Math.random() * range) + range / 5),
        this.parties[i % this.parties.length], undefined, undefined));
    }

    // 创建饼状图数据集对象，设置数据项和数据集名称
    let dataSet: PieDataSet = new PieDataSet(entries, "Election Results");
    // 设置是否绘制数据项图标
    dataSet.setDrawIcons(false);
    // 设置数据项之间的间隙
    dataSet.setSliceSpace(1);
    // 设置数据项图标的偏移量
    dataSet.setIconsOffset(new MPPointF(0, 40));
    // 设置选中时数据项的偏移距离
    dataSet.setSelectionShift(5);
    // 设置数据项文本颜色
    dataSet.setValueTextColor(Color.White);


    // add a lot of colors
    let colors: JArrayList<number> = new JArrayList();
    for (let index = 0; index < ColorTemplate.VORDIPLOM_COLORS.length; index++) {
      colors.add(ColorTemplate.VORDIPLOM_COLORS[index]);
    }

    for (let index = 0; index < ColorTemplate.JOYFUL_COLORS.length; index++) {
      colors.add(ColorTemplate.JOYFUL_COLORS[index]);
    }

    for (let index = 0; index < ColorTemplate.COLORFUL_COLORS.length; index++) {
      colors.add(ColorTemplate.COLORFUL_COLORS[index]);
    }
    for (let index = 0; index < ColorTemplate.LIBERTY_COLORS.length; index++) {
      colors.add(ColorTemplate.LIBERTY_COLORS[index]);
    }
    for (let index = 0; index < ColorTemplate.PASTEL_COLORS.length; index++) {
      colors.add(ColorTemplate.PASTEL_COLORS[index]);
    }
    colors.add(ColorTemplate.getHoloBlue());
    dataSet.setColorsByList(colors);
    // 生成图表数据
    let data: PieData = new PieData(dataSet);
    // 将数据与图表配置类绑定
    this.model.setData(data);
  }
```
  
  
添加数据到自定义饼状图图表组件
// 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建
// 如果在之后通过事件触发，
// 可通过dataSet.notifyDataSetChanged();来触发数据更新，
// 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新，
// 可通过this.model.invalidate();来触发绘制更新。
```
PieChart({ model: this.model })
  .width('100%')
  .height('70%')
```
