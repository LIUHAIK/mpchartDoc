### **十一、LineScatterCandleRadarDataSet**

| 方法名                                | 描述                                                  |
| ------------------------------------- | ----------------------------------------------------- |
| setDrawHorizontalHighlightIndicator   | 设置启用/禁用水平突出显示指示器。                     |
| setDrawVerticalHighlightIndicator     | 设置启用/禁用垂直突出显示指示器。                     |
| setDrawHighlightIndicators            | 设置启用/禁用水平和垂直突出显示指示器。               |
| isVerticalHighlightIndicatorEnabled   | 获取是否启用垂直突出显示指示器。                      |
| isHorizontalHighlightIndicatorEnabled | 获取是否启用水平突出显示指示器。                      |
| setHighlightLineWidth                 | 设置高亮线的宽度，单位是vp。                          |
| getHighlightLineWidth                 | 获取高亮线的宽度。                                    |
| enableDashedHighlightLine             | 允许以虚线模式绘制高亮线，例如“------”。              |
| disableDashedHighlightLine            | 禁用以虚线模式绘制的高亮线。                          |
| isDashedHighlightLineEnabled          | 如果高亮线启用了虚线效果，则返回true，否则返回false。 |
| getDashPathEffectHighlight            | 获取虚线效果。                                        |
| copyTo                                | 拷贝数据至指定dataset。                               |

## **1.setDrawHorizontalHighlightIndicator**

public setDrawHorizontalHighlightIndicator(enabled: boolean): void;

设置启用/禁用水平突出显示指示器。

参数：

| 参数名  | 类型    | 必填 | 说明                                                    |
| ------- | ------- | ---- | ------------------------------------------------------- |
| enabled | boolean | 是   | 启用/禁用水平突出显示指示器。如果禁用，则不绘制指示器。 |

## **2.setDrawVerticalHighlightIndicator**

public setDrawVerticalHighlightIndicator(enabled: boolean): void;

设置启用/禁用垂直突出显示指示器。

参数：

| 参数名  | 类型    | 必填 | 说明                                                    |
| ------- | ------- | ---- | ------------------------------------------------------- |
| enabled | boolean | 是   | 启用/禁用垂直突出显示指示器。如果禁用，则不绘制指示器。 |

## **3.setDrawHighlightIndicators**

public setDrawHighlightIndicators(enabled: boolean): void;

设置启用/禁用水平和垂直突出显示指示器。

参数：

| 参数名  | 类型    | 必填 | 说明                                |
| ------- | ------- | ---- | ----------------------------------- |
| enabled | boolean | 是   | 启用/禁用水平和垂直突出显示指示器。 |


## **4.isVerticalHighlightIndicatorEnabled**

public isVerticalHighlightIndicatorEnabled(): boolean;

获取是否启用垂直突出显示指示器。

返回值：

| 类型    | 说明                         |
| ------- | ---------------------------- |
| boolean | 是否启用垂直突出显示指示器。 |

## **5.isHorizontalHighlightIndicatorEnabled**

public isVerticalHighlightIndicatorEnabled(): boolean;

获取是否启用水平突出显示指示器。

返回值：

| 类型    | 说明                         |
| ------- | ---------------------------- |
| boolean | 是否启用水平突出显示指示器。 |

## **6.setHighlightLineWidth**

public setHighlightLineWidth(width: number): void;

设置高亮线的宽度，单位是vp。

参数：

| 参数名 | 类型   | 必填 | 说明                         |
| ------ | ------ | ---- | ---------------------------- |
| width  | number | 是   | 设置高亮线的宽度，单位是vp。 |

## **7.getHighlightLineWidth**

public getHighlightLineWidth(): number;

获取高亮线的宽度。

返回值：

| 类型   | 说明           |
| ------ | -------------- |
| number | 高亮线的宽度。 |

## **8.enableDashedHighlightLine**

public enableDashedHighlightLine(lineLength: number, spaceLength: number, phase: number): void;

允许以虚线模式绘制高亮线，例如“------”。

参数：

| 参数名      | 类型   | 必填 | 说明                              |
| ----------- | ------ | ---- | --------------------------------- |
| lineLength  | number | 是   | 线段的长度。                      |
| spaceLength | number | 是   | 空隙的长度。                      |
| phase       | number | 是   | 相位偏移，单位为度（通常使用0）。 |

## **9.disableDashedHighlightLine**

public disableDashedHighlightLine(): void;

禁用以虚线模式绘制的高亮线。

无返回值

## **10.isDashedHighlightLineEnabled**

public isDashedHighlightLineEnabled(): boolean;

如果高亮线启用了虚线效果，则返回true，否则返回false。

返回值：

| 类型    | 说明                     |
| ------- | ------------------------ |
| boolean | 高亮线是否启用了虚线效果 |

## **11.getDashPathEffectHighlight**

public getDashPathEffectHighlight(): DashPathEffect;

获取虚线效果。

返回值：

| 类型           | 说明     |
| -------------- | -------- |
| DashPathEffect | 虚线效果 |

## **12.copyTo**

```protected copyTo(lineScatterCandleRadarDataSet: LineScatterCandleRadarDataSet<T>): void；```

拷贝数据至指定dataset。

参数：

| 参数名                        | 类型                          | 必填 | 说明        |
| ----------------------------- | ----------------------------- | ---- | ----------- |
| lineScatterCandleRadarDataSet | LineScatterCandleRadarDataSet | 是   | dataset数据 |
