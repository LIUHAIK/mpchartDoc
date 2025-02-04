### **六、YAxis**

Y轴对象。

| 方法名                | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| calculate             | 计算轴上的预期的最大最小值。                                 |
| getAxisDependency     | 获取Y轴位置。                                                |
| setPosition           | 设置Y轴标签的位置。                                          |
| getLabelPosition      | 获取Y轴标签的位置。                                          |
| setLabelXOffset       | 设置Y轴标签的X轴方向上的Offset。                             |
| getLabelXOffset       | 获取Y轴标签的X轴方向上的Offset。                             |
| setDrawZeroLine       | 设置是否绘制0线。                                            |
| EventControl          | 事件控制类，EventType 为枚举类型(单击、双击、长按)           |
| setEventEnable        | 启用事件。                                                   |
| setEventDisable       | 禁用事件。                                                   |
| eventIsEnable         | 事件是否启用。                                               |
| eventIsDisable        | 事件是否被禁用。                                             |
| setYAxisExtensionLine | 设置y轴延伸线。                                              |
| addGridLine           | 添加自定义网格线。                                           |
| getGridLines          | 获取自定义网格线。                                           |
| setGridAlpha          | 设置网格线颜色不透明度（不包含addGridLine添加的自定义网格线，自定义网格线可通过color属性传入带透明度的颜色） |

## **1.calculate**

public calculate(dataMin: number, dataMax: number): void;

计算轴上的预期的最大最小值。

参数：

| 参数名  | 类型   | 必填 | 说明                  |
| ------- | ------ | ---- | --------------------- |
| dataMin | number | 是   | 数据集合中的Y最小值。 |
| dataMax | number | 是   | 数据集合中的Y最大值   |

## **2.getAxisDependency**

public getAxisDependency(): AxisDependency;

获取Y轴位置。

返回值：

| 类型   | 说明          |
| ------ | ------------- |
| number | 获取Y轴位置。 |

## **3.setPosition**

public setPosition(pos: YAxisLabelPosition): void;

设置Y轴标签的位置。

参数：

| 参数名 | 类型               | 必填 | 说明                |
| ------ | ------------------ | ---- | ------------------- |
| pos    | YAxisLabelPosition | 是   | 设置Y轴标签的位置。 |

## **4.getLabelPosition**

public getLabelPosition(): YAxisLabelPosition;

获取Y轴标签的位置。

返回值：

| 类型               | 说明              |
| ------------------ | ----------------- |
| YAxisLabelPosition | 获取Y轴标签位置。 |

## **5.setLabelXOffset**

public setLabelXOffset(xOffset: number): void;

设置Y轴标签的X轴方向上的Offset。

参数：

| 参数名  | 类型   | 必填 | 说明                             |
| ------- | ------ | ---- | -------------------------------- |
| xOffset | number | 是   | 设置Y轴标签的X轴方向上的Offset。 |

## **6.getLabelXOffset**

public getLabelXOffset(): number;

获取Y轴标签的X轴方向上的Offset。

返回值：

| 类型   | 说明                             |
| ------ | -------------------------------- |
| number | 获取Y轴标签的X轴方向上的Offset。 |

## **7.setDrawZeroLine**

public setDrawZeroLine(mDrawZeroLine: boolean): void;

设置是否绘制0线。

参数：

| 参数名        | 类型    | 必填 | 说明          |
| ------------- | ------- | ---- | ------------- |
| mDrawZeroLine | boolean | 是   | 是否绘制0线。 |

## **8.EventControl事件控制类**

EventType 为枚举类型(单击、双击、长按)
``` 
enum EventType {
SingleTap,
DoubleTap,
LongPress
}
```

## **9.setEventEnable**

public setEventEnable(evType: EventType): EventControl

启用事件

参数：

| 参数名 | 类型               | 必填 | 说明                                |
| ------ | ------------------ | ---- |-----------------------------------|
| evType    | EventType | 是   | SingleTap、DoubleTap、LongPress三个选项 |

## **10.setEventDisable**

public setEventDisable(evType: EventType): EventControl

禁用事件

参数：

| 参数名 | 类型               | 必填 | 说明                                |
| ------ | ------------------ | ---- |-----------------------------------|
| evType    | EventType | 是   | SingleTap、DoubleTap、LongPress三个选项 |

## **11.eventIsEnable**

public eventIsEnable(evType: EventType): boolean;

事件是否启用。

参数：

| 参数名 | 类型               | 必填 | 说明                                |
| ------ | ------------------ | ---- |-----------------------------------|
| evType    | EventType | 是   | SingleTap、DoubleTap、LongPress三个选项 |

## **12.eventIsDisable**

public eventIsDisable(evType: EventType): boolean;

事件是否被禁用。

参数：

| 参数名 | 类型               | 必填 | 说明                                 |
| ------ | ------------------ | ---- |------------------------------------|
| evType    | EventType | 是   | SingleTap、DoubleTap、LongPress三个选项  |

## **13.setYAxisExtensionLine**

public setYAxisExtensionLine(opt: boolean): void

设置y轴延伸线。

参数：

| 参数名 | 类型      | 必填 | 说明         |
|-----|---------| ---- |------------|
| opt | boolean | 是   | 是否绘制y轴延伸线。 |

## **14.addGridLine**

public addGridLine(customLine: GridLineConfig): void

添加自定义网格线。

参数：

| 参数名 | 类型      | 必填 | 说明       |
|-----|---------| ---- |----------|
| customLine | GridLineConfig | 是   | 设置网格线样式。 |

## **15.getGridLines**
``` 
public getGridLines(): JArrayList<LimitLine>
```
获取自定义网格线。
返回值：

| 类型                    | 说明       |
|-----------------------|----------|
| ```JArrayList<LimitLine>``` | 自定义网格线数组 |

## **16.setGridAlpha**

public setGridAlpha(alpha: number): void

设置网格线颜色不透明度（不包含addGridLine添加的自定义网格线，自定义网格线可通过color属性传入带透明度的颜色）

参数：

| 参数名   | 类型     | 必填  | 说明                                     |
|-------|--------|-----|----------------------------------------|
| alpha | number | 是   | 设置网格线颜色不透明度,取值0到255之间，0是完全透明，255是完全不透明 |

```
// 示例代码参见 CustomGridLineChartPage
export interface GridLineConfig {
   position: number;
   lineWidth?: number;
   lineColor?: number;
   dashPathEffect?: DashPathEffectConfig
}

export interface DashPathEffectConfig {
   lineLength: number;
   spaceLength: number;
   phase: number
}
```
