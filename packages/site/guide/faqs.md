## 常见问题

### **1.如果去除图例?**

```typescript
this.model.getLegend()?.setEnabled(false);
```

### **2.如果去除右下角Description字样？**

```typescript
this.model.getDescription()?.setEnabled(false);
```

### **3 . 如何隐藏 Y 轴线？**

```typescript
this.model.getAxisLeft().setEnabled(false) //隐藏左边Y轴轴线，此时标签数字也隐藏
```

### **4.如果想隐藏轴线但是想显示数字标签？**

```typescript
this.model.getAxisRight().setDrawAxisLine(false);
```

### **5.如何控制 Y 轴线数据标签个数?**

```typescript
this.model.getAxisLeft().setLabelCount(8, false);//设置了8个
```

### **6.如何设置轴线颜色，宽度等信息?**

```typescript
let leftAxis = this.model.getAxisLeft();
leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART);//显示轴线在图表内部则使用INSIDE_CHART
this.leftAxis.setAxisLineColor(ColorTemplate.rgb("#ff0000"));//设置轴线颜色
leftAxis.setAxisLineWidth(1);// 设置轴线宽度
leftAxis.setTextSize(20);//设置y轴标签字体大小
leftAxis.setDrawGridLines(true);//设置显示网格线
```

### **7.如何自定义坐标轴标签?**

如果不想用坐标轴本身的阿拉伯数字标签，也可以自定义坐标轴标签，实现方法是通过创建自定义类实现 IAxisValueFormatter 接口，修改其中的 getFormattedValue 方法，最后调用坐标轴对象的 setValueFormatter 方法就可以实现自定义坐标轴标签。

```typescript
class MyAxisValueFormatter implements IAxisValueFormatter {
  getFormattedValue(value: number, axis: AxisBase): string {
    //将原本存在的对应的value转换成需要的字符串
    switch (value) {
      case 1:
        return "一";
      case 2:
        return "二";
      case 3:
        return "三";
    }
    return '';
  }
}
...
this.topAxis.setValueFormatter(new TopAxisValueFormatter())
```

### **8.图表的缩放、触摸等交互设置如何关闭或打开？**

```typescript
setTouchEnabled(enabled: boolean)//允许打开或者关闭与图表的所有触摸交互的情况。
setDragEnabled(enabled: boolean)//打开或关闭对图表的拖动。
setScaleEnabled(enabled: boolean)//打开或关闭对图表所有方向的缩放。
setScaleXEnabled(enabled: boolean)//打开或关闭x轴方向上的缩放
setScaleYEnabled(enabled: boolean)//打开或关闭y轴方向上的缩放。
setPinchZoom(enabled: boolean)//如果设置为true，手势捏合缩放被打开。如果设置为false，x和y轴不可以被手势捏合缩放。
setHighlightPerTapEnabled(enabled: boolean)//如果设置为true，在图表中选中触发高亮效果。
setHighlightPerDragEnabled(enabled: boolean)//设置为true时允许在手指滑动结束时显示高亮效果。默认：true
setHighlightIndicatorEnabled(enabled: boolean)//如果设置为true， 选中数据时，将展示指标线。
//此方法为dataset设置：
setVisibleXRangeMaximum(maxXRange： number) //设置x轴最多显示数据条数，（要在设置数据源后调用，否则是无效的）
```

### **9.x轴和y轴的个性化样式是怎么设置？**

1）通过如下代码获取到 x 轴/y 轴对象。

```
//获取x轴
let xAxis = model.getXAxis();
//获取左y轴
let leftAxis = model.getAxisLeft();
//获取右y轴
let rightAxis = model.getAxisRight();
```

2）获取 x 轴和左右 y 轴对象之后，可以调用以下方法设置它们的属性

```typescript
setEnabled(enabled: boolean)//设置轴是否被绘制。默认绘制，设置为false则不会被绘制。
setDrawLabels(enabled: boolean)//设置为true则绘制轴的标签。
setDrawAxisLine(enabled: boolean)//设置为true则绘制轴线。
setDrawGridLines(enabled: boolean)//设置为true则绘制网格线。
setTextColor(color: string | number | CanvasGradient | CanvasPattern)//设置轴标签文本颜色。
setTextSize(size: number)//设置轴标签的字体大小。
setTypeface(tf: FontFamily)//设置轴标签的FontFamily，指定字体系列，支持如下几种类型：'sans-serif', 'serif', 'monospace'。
setGridColor(color: number)//设置网格线颜色。
setGridLineWidth(width: number)//设置网格线宽度。
setAxisLineColor(color: number)//设置坐标轴的颜色。
setAxisLineWidth(width: number)//设置坐标轴的宽度。
enableGridDashedLine(lineLength: number, spaceLength: number, phase: number)//设置网格线虚线样式，"lineLength"控制短线条的长度，"spaceLength"控制两段线之间的间隔长度，"phase"控制开始的点。
setAxisMaxValue(max: number)//设置一个自定义的最大值，如果设置了数值，这个值将不会依赖于提供的数据自动计算。
setAxisMinValue(min: number)//设置一个自定义的最小值。如果设置了数值，这个值将不会依赖于提供的数据进行自动计算。
```

3）x 轴专属设置：

```typescript
setAvoidFirstLastClipping(enabled: boolean)//如果设置为true，图表将避免在图表或屏幕的边缘的标签条目被裁剪掉。
setPosition(pos: XAxisPosition)//设置XAxis应该出现的位置。可以选择TOP，BOTTOM，BOTH\_SIDED，TOP\_INSIDE或者BOTTOM\_INSIDE。
```

4）y轴专属设置：

```typescript
setInverted(enabled: boolean)//如果设置为true，这个轴将被反向，那意味着最大值将被放到底部，最小值将被放到顶部。
setSpaceTop(percent: number)//设置在图表上最高处的值相比轴上最高值的顶端空间（占总轴范围的百分比）。
setSpaceBottom(percent: number)//设置在图表上最低处的值相比轴上最低处值的底部空间（总轴范围的百分比）。
setPosition(pos: YAxisLabelPosition)//设置轴标签应该被绘制的位置。INSIDE\_CHART或者OUTSIDE\_CHART中的一个。
```

### 10.线形图的选中横竖线怎么关闭？

可以根据需要选择性地关闭水平和垂直高亮线。通过数据集（`DataSet`）的以下方法进行配置：

- `setDrawHighlightIndicators(boolean)`：启用或禁用高亮指示器（同时关闭水平和垂直高亮线）。
- `setDrawVerticalHighlightIndicator(boolean)`：启用或禁用垂直高亮线。
- `setDrawHorizontalHighlightIndicator(boolean)`：启用或禁用水平高亮线。
