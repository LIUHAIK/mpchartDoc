### **一、ChartModel**

所有图表配置构建类的基类。

| 方法名                     | 描述                                                         |
| -------------------------- | ------------------------------------------------------------ |
| animateX                   | 展示图表时带有X轴动画。                                      |
| animateXY                  | 展示图表时同时带有X轴，Y轴动画。                             |
| animateY                   | 展示图表时带有Y轴动画。                                      |
| calcMinMax                 | 计算 y-min 和 y-max 值以及 y-delta 和 x-delta 值。           |
| calculateOffsets           | 计算图表到边框的偏移量，具体取决于图例的位置，x轴y轴的长度，及其的标签位置。 |
| clear                      | 清空图表的所有数据，将其置空null，并刷新图表。               |
| clearValues                | 从图表中删除所有数据集（以及条目），并刷新图表。             |
| getAnimator                | 返回负责对图表值进行动画处理的动画制作者。                   |
| getCenter                  | 返回图表(整个视图)的中心点的可回收的MPPointF实例。           |
| getCenterOffsets           | 返回图表的图形绘制的中心区域的可回收的MPPointF实例。         |
| getCenterOfView            | 返回图表(整个视图)的中心点的可回收的MPPointF实例。           |
| getContentRect             | 返回图表绘制的内容区域的矩形。                               |
| getData                    | 返回已为图表设置的 ChartData 对象。                          |
| getDefaultValueFormatter   | 返回默认的数据格式化接口实现类。                             |
| getHighlightByTouchPoint   | 返回 LineChart，ScatterChart，CandleStickChart等图表触摸屏幕时的Highlight 对象（包含 x-index 和 DataSet 索引）。 |
| getHighlighted             | 返回当前高亮显示值的数组。这可能是空值，如果没有突出显示，则为空数组。 |
| getHighlighter             | 返回当前高亮显示条目接口。                                   |
| getLegend                  | 获取图例对象，通过该对象的setEnable(false)方法可以关闭图例显示。 |
| getLegendRenderer          | 获取图例渲染器。                                             |
| getRenderer                | 获取图表数据渲染器。                                         |
| getXAxis                   | 获取X轴对象。                                                |
| invalidate                 | 重绘图表。                                                   |
| notifyDataSetChanged       | 图表数据刷新。                                               |
| onChartSizeChanged         | 更新图表正确Size。                                           |
| onDraw                     | 图表绘制方法。                                               |
| setContext2D               | 设置图表绘制的画布。                                         |
| setData                    | 设置图表数据。                                               |
| setDragDecelerationEnabled | 设置是否开启惯性滑动。                                       |
| setHitTestMode             | 设置触摸测试类型。                                           |
| getHitTestMode             | 获取触摸测试类型。                                           |

## **1.animateX**

public animateX(durationMillis: number): void;

展示图表时带有X轴动画。

参数：

| 参数名         | 类型   | 必填 | 说明                       |
| -------------- | ------ | ---- | -------------------------- |
| durationMillis | number | 是   | 动画播放的时长，单位毫秒。 |

public animateX(durationMillis: number, easing: string): void;

展示图表时带有X轴动画。

参数：

| 参数名         | 类型   | 必填 | 说明                                                         |
| -------------- | ------ | ---- | ------------------------------------------------------------ |
| durationMillis | number | 是   | 动画播放的时长，单位毫秒。                                   |
| easing         | string | 是   | [动画插值曲线](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/reference/apis-arkui/js-apis-animator.md)。 |

## **2.animateXY**

public animateXY(durationMillisX: number, durationMillisY: number): void;

展示图表时同时带有X轴，Y轴动画。

参数：

| 参数名          | 类型   | 必填 | 说明                              |
| --------------- | ------ | ---- | --------------------------------- |
| durationMillisX | number | 是   | X轴条目动画播放的时长，单位毫秒。 |
| durationMillisY | number | 是   | Y轴条目动画播放的时长，单位毫秒。 |

public animateXY(durationMillisX: number, durationMillisY: number, easingX: string): void;

展示图表时同时带有X轴，Y轴动画。

参数：

| 参数名          | 类型   | 必填 | 说明                                                         |
| --------------- | ------ | ---- | ------------------------------------------------------------ |
| durationMillisX | number | 是   | X轴条目动画播放的时长，单位毫秒。                            |
| durationMillisY | number | 是   | Y轴条目动画播放的时长，单位毫秒。                            |
| easingX         | string | 是   | X轴[动画插值曲线](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/reference/apis-arkui/js-apis-animator.md)。 |

public animateXY(durationMillisX: number, durationMillisY: number, easingX: string, easingY: string): void;

展示图表时同时带有X轴，Y轴动画。

参数：

| 参数名          | 类型   | 必填 | 说明                                                         |
| --------------- | ------ | ---- | ------------------------------------------------------------ |
| durationMillisX | number | 是   | X轴条目动画播放的时长，单位毫秒。                            |
| durationMillisY | number | 是   | Y轴条目动画播放的时长，单位毫秒。                            |
| easingX         | string | 是   | X轴[动画插值曲线](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/reference/apis-arkui/js-apis-animator.md)。 |
| easingY         | string | 是   | Y轴[动画插值曲线](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/reference/apis-arkui/js-apis-animator.md)。 |

## **3.animateY**

展示图表时带有Y轴动画。

public animateY(durationMillis: number): void;

参数：

| 参数名         | 类型   | 必填 | 说明                       |
| -------------- | ------ | ---- | -------------------------- |
| durationMillis | number | 是   | 动画播放的时长，单位毫秒。 |

public animateY(durationMillis: number, easing: string): void;

参数：

| 参数名         | 类型   | 必填 | 说明                                                         |
| -------------- | ------ | ---- | ------------------------------------------------------------ |
| durationMillis | number | 是   | 动画播放的时长，单位毫秒。                                   |
| easing         | string | 是   | [动画插值曲线](https://docs.openharmony.cn/pages/v5.0/zh-cn/application-dev/reference/apis-arkui/js-apis-animator.md)。 |

## **4.calcMinMax**

protected abstract calcMinMax() : void;

计算 y-min 和 y-max 值以及 y-delta 和 x-delta 值。

## **5.calculateOffsets**

protected abstract calculateOffsets() : void;

计算图表到边框的偏移量，具体取决于图例的位置，x轴y轴的长度，及其的标签位置。

## **6.clear**

public clear() : void;

清空图表的所有数据，将其置空null，并刷新图表。

## **7.clearValues**

public clearValues() : void;

从图表中删除所有数据集（以及条目），并刷新图表。

## **8.getAnimator**

public getAnimator(): ChartAnimator | null;

返回负责对图表值进行动画处理的动画制作者。

返回值：

| 类型                      | 说明         |
| ------------------------- | ------------ |
| ChartAnimator &#124; null | 动画管理类。 |

## **9.getCenter**

public getCenter(): MPPointF;

返回图表(整个视图)的中心点的可回收的MPPointF实例。

返回值：

| 类型     | 说明                   |
| -------- | ---------------------- |
| MPPointF | 可回收的MPPointF实例。 |

## **10.getCenterOffsets**

public getCenterOffsets(): MPPointF | null;

返回图表的图形绘制的中心区域的可回收的MPPointF实例。

返回值：

| 类型                 | 说明                   |
| -------------------- | ---------------------- |
| MPPointF &#124; null | 可回收的MPPointF实例。 |

## **11.getCenterOfView**

public getCenterOfView(): MPPointF;

返回图表(整个视图)的中心点的可回收的MPPointF实例。

返回值：

| 类型     | 说明                   |
| -------- | ---------------------- |
| MPPointF | 可回收的MPPointF实例。 |

## **12.getContentRect**

public getContentRect(): Rect;

返回图表绘制的内容区域的矩形。

返回值：

| 类型 | 说明                       |
| ---- | -------------------------- |
| Rect | 图表绘制的内容区域的矩形。 |

## **13.getData**

public getData(): T | null ;

返回已为图表设置的 ChartData 对象。

返回值：

| 类型         | 说明       |
| ------------ | ---------- |
| T&#124; null | 数据对象。 |

## **14.getDefaultValueFormatter**

public getDefaultValueFormatter(): IValueFormatter;

返回默认的数据格式化接口实现类。

返回值：

| 类型            | 说明                   |
| --------------- | ---------------------- |
| IValueFormatter | 数据格式化接口实现类。 |

## **15.getHighlightByTouchPoint**

public getHighlightByTouchPoint(x: number, y: number): Highlight | null;

返回 LineChart，ScatterChart，CandleStickChart等图表触摸屏幕时的Highlight 对象（包含 x-index 和 DataSet 索引）。

参数：

| 参数名 | 类型   | 必填 | 说明                  |
| ------ | ------ | ---- | --------------------- |
| x      | number | 是   | 屏幕触摸点的x轴坐标。 |
| y      | number | 是   | 屏幕触摸点的y轴坐标。 |

返回值：

| 类型                  | 说明               |
| --------------------- | ------------------ |
| Highlight &#124; null | 触摸点的高亮对象。 |

## **16.getHighlighted**

public getHighlighted(): Highlight[] | null;

返回当前高亮显示值的数组。这可能是空值，如果没有突出显示，则为空数组。

参数：

| 参数名 | 类型   | 必填 | 说明                  |
| ------ | ------ | ---- | --------------------- |
| x      | number | 是   | 屏幕触摸点的x轴坐标。 |
| y      | number | 是   | 屏幕触摸点的y轴坐标。 |

返回值：

| 类型                  | 说明               |
| --------------------- | ------------------ |
| Highlight &#124; null | 触摸点的高亮对象。 |

## **17.getHighlighter**

public getHighlighter(): IHighlighter | null;

返回当前高亮显示条目接口。

返回值：

| 类型                     | 说明                         |
| ------------------------ | ---------------------------- |
| IHighlighter &#124; null | 获取触摸点的高亮对象接口类。 |

## **18.getLegend**

public getLegend(): Legend | null ;

获取图例对象。

返回值：

| 类型               | 说明           |
| ------------------ | -------------- |
| Legend &#124; null | 获取图例对象。 |

## **19.getLegendRenderer**

public getLegendRenderer(): LegendRenderer | null;

获取图例渲染器。

返回值：

| 类型                      | 说明             |
| ------------------------- | ---------------- |
| LegendRenderer&#124; null | 获取图例渲染器。 |

## **20.getRenderer**

public getRenderer(): DataRenderer | null;

获取图表数据渲染器。

返回值：

| 类型                     | 说明                 |
| ------------------------ | -------------------- |
| DataRenderer &#124; null | 获取图表数据渲染器。 |

## **21.getXAxis**

public getXAxis(): XAxis | null;

获取X轴对象。

返回值：

| 类型              | 说明          |
| ----------------- | ------------- |
| XAxis &#124; null | 获取X轴对象。 |


## **22.invalidate**

public abstract invalidate();

重绘图表。

## **23.notifyDataSetChanged**

public abstract notifyDataSetChanged();

图表数据刷新。

## **24.onChartSizeChanged**

public abstract onChartSizeChanged(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void;

更新图表正确Size。

参数：

| 参数名    | 类型   | 必填 | 说明                     |
| --------- | ------ | ---- | ------------------------ |
| newWidth  | number | 是   | 图表当前显示的宽。       |
| newHeight | number | 是   | 图表当前显示的高。       |
| oldWidth  | number | 是   | 图表改变Size前显示的宽。 |
| oldHeight | number | 是   | 图表改变Size前显示的高。 |

## **25.onDraw**

protected onDraw(c: CanvasRenderingContext2D): void ;

图表绘制方法。

参数：

| 参数名 | 类型                     | 必填 | 说明       |
| ------ | ------------------------ | ---- |----------|
| c      | CanvasRenderingContext2D | 是   | 图表绘制的画布。 |

## **26.setContext2D**

public abstract setContext2D(context2d: CanvasRenderingContext2D);

设置图表绘制的画布。

参数：

| 参数名 | 类型                     | 必填 | 说明       |
| ------ | ------------------------ | ---- |----------|
| c      | CanvasRenderingContext2D | 是   | 图表绘制的画布。 |

## **27.setData**

public setData(data: T) : void;

设置图表数据。

参数：

| 参数名 | 类型 | 必填 | 说明                         |
| ------ | ---- | ---- | ---------------------------- |
| data   | T    | 是   | 图表数据，T继承自ChartData。 |

## **28.setDragDecelerationEnabled**

public setDragDecelerationEnabled(enabled: boolean);

设置是否开启惯性滑动

参数：

| 参数名 | 类型 | 必填 | 说明                 |
| ------ | ---- | ---- |--------------------|
| enabled   | boolean    | 是   | 能力标识。 |

## **29.setHitTestMode**

public setHitTestMode(hitTestMode: HitTestMode)

设置触摸测试类型

参数：

| 参数名 | 类型 | 必填 | 说明                 |
| ------ | ---- | ---- |--------------------|
| hitTestMode   | HitTestMode    | 是   | 触摸测试类型 |

## **30.getHitTestMode**

public getHitTestMode(): HitTestMode

获取触摸测试类型。

返回值：

| 类型    | 说明        |
|-------| ----------- |
| HitTestMode | 触摸测试类型 |
