### **二、BarLineChartBaseModel**

柱状图基础类

| 方法名                    | 描述                                               |
| ------------------------- | -------------------------------------------------- |
| calcMinMax                | 计算坐标的最大最小值。                             |
| calculateOffsets          | 计算图表offset。                                   |
| drawGridBackground        | 绘制图表背景。                                     |
| getAxis                   | 根据Y轴位置获取Y轴对象。                           |
| getAxisLeft               | 获取左Y轴对象。                                    |
| getAxisRight              | 获取右Y轴对象。                                    |
| getMinOffset              | 获取最小Offset值。                                 |
| getRendererLeftYAxis      | 获取左Y轴渲染器。                                  |
| getRendererRightYAxis     | 获取右Y轴渲染器。                                  |
| getRendererXAxis          | 获取X轴渲染器。                                    |
| setLongPressCursorEnabled | 设置长按游标能力标识。                             |
| getLongPressCursorEnabled | 获取长按游标能力标识。                             |
| setLongPressDuration      | 设置长按响应时长。                                 |
| getLongPressDuration      | 获取长按响应时长。                                 |
| setSwipeEnabled           | 设置手势滑动响应能力（结合长按游标能力使用）。     |
| getSwipeEnabled           | 获取手势滑动响应能力标识（结合长按游标能力使用）。 |

## **1.calcMinMax**

protected calcMinMax(): void;

计算坐标的最大最小值。

## **2.calculateOffsets**

public calculateOffsets(): void;

计算图表offset。

## **3.drawGridBackground**

protected drawGridBackground(c: CanvasRenderingContext2D): void;

绘制图表背景。

参数：

| 参数名 | 类型                     | 必填 | 说明               |
| ------ | ------------------------ | ---- | ------------------ |
| c      | CanvasRenderingContext2D | 是   | 图表绘制的上下文。 |

## **4.getAxis**

public getAxis(axis: AxisDependency): YAxis | null;

根据Y轴位置获取Y轴对象。

参数：

| 参数名 | 类型           | 必填 | 说明      |
| ------ | -------------- | ---- | --------- |
| axis   | AxisDependency | 是   | Y轴位置。 |

返回值：

| 类型              | 说明          |
| ----------------- | ------------- |
| YAxis &#124; null | 获取Y轴对象。 |

## **5.getAxisLeft**

public getAxisLeft(): YAxis | null;

获取左Y轴对象。

返回值：

| 类型              | 说明          |
| ----------------- | ------------- |
| YAxis &#124; null | 获取Y轴对象。 |

## **6.getAxisRight**

public getAxisRight(): YAxis | null;

获取右Y轴对象。

返回值：

| 类型              | 说明          |
| ----------------- | ------------- |
| YAxis &#124; null | 获取Y轴对象。 |

## **7.getMinOffset**

public getMinOffset(): number;

获取最小Offset值。

返回值：

| 类型   | 说明               |
| ------ | ------------------ |
| number | 获取最小Offset值。 |

## **8.getRendererLeftYAxis**

public getRendererLeftYAxis(): YAxisRenderer | null;

获取左Y轴渲染器。

返回值：

| 类型                      | 说明              |
| ------------------------- | ----------------- |
| YAxisRenderer &#124; null | 获取左Y轴渲染器。 |

## **9.getRendererRightYAxis**

public getRendererRightYAxis(): YAxisRenderer | null;

获取右Y轴渲染器。

返回值：

| 类型                      | 说明              |
| ------------------------- | ----------------- |
| YAxisRenderer &#124; null | 获取右Y轴渲染器。 |

## **10.getRendererXAxis**

public getRendererXAxis(): XAxisRenderer | null;

获取X轴渲染器。

返回值：

| 类型                      | 说明            |
| ------------------------- | --------------- |
| XAxisRenderer &#124; null | 获取X轴渲染器。 |

## **11.setLongPressCursorEnabled**

public setLongPressCursorEnabled(enabled: boolean): void;

设置长按游标能力标识。

参数：

| 参数名 | 类型      | 必填 | 说明    |
| ------ |---------| ---- |-------|
| enabled   | boolean | 是   | 能力标识。 |

返回值：无

## **12.getLongPressCursorEnabled**

public getLongPressCursorEnabled(): boolean;

获取长按游标能力标识。

参数：无

返回值：

| 类型      | 说明        |
|---------|-----------|
| boolean | 长按游标能力标识。 |

## **13.setLongPressDuration**

public setLongPressDuration(duration: number): void;

设置长按响应时长。

参数：

| 参数名 | 类型      | 必填 | 说明  |
| ------ |---------| ---- |-----|
| duration   | number | 是   | 时长。 |

返回值：无

## **14.getLongPressDuration**

public getLongPressDuration(): number;

获取长按响应时长。

参数：无

返回值：

| 类型      | 说明    |
|---------|-------|
| number | 响应时长。 |

## **15.setSwipeEnabled**

public setSwipeEnabled(enabled: boolean): void;

设置手势滑动响应能力（结合长按游标能力使用）。

参数：

| 参数名 | 类型      | 必填 | 说明    |
| ------ |---------| ---- |-------|
| enabled   | boolean | 是   | 能力标识。 |

返回值：无

## **16.getSwipeEnabled**

public getSwipeEnabled(): boolean;

获取手势滑动响应能力标识（结合长按游标能力使用）。

参数：无

返回值：

| 类型      | 说明        |
|---------|-----------|
| boolean | 手势滑动响应能力标识。 |
