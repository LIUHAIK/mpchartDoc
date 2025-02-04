### **三、ComponentBase**

图表部件基础类。

| 方法名       | 描述                                 |
| ------------ | ------------------------------------ |
| setTextColor | 设置部件文本渲染颜色。               |
| getTextColor | 获取部件文本渲染颜色。               |
| setTextSize  | 设置部件文本Size，需要转化为vp单位。 |
| getTextSize  | 获取部件文本Size。                   |
| setXOffset   | 设置X轴距离图表内容区域的Offset。    |
| getXOffset   | 获取X轴距离图表内容区域的Offset。    |
| setYOffset   | 设置Y轴距离图表内容区域的Offset。    |
| getYOffset   | 获取Y轴距离图表内容区域的Offset。    |

## **1.setTextColor**

public setTextColor(color: string | number | CanvasGradient | CanvasPattern): void;

设置部件文本渲染颜色。

参数：

| 参数名 | 类型                                                        | 必填 | 说明                   |
| ------ | ----------------------------------------------------------- | ---- | ---------------------- |
| color  | string &#124;number&#124;CanvasGradient &#124;CanvasPattern | 是   | 设置部件文本渲染颜色。 |

## **2.getTextColor**

public getTextColor(): string | number | CanvasGradient | CanvasPattern;

获取部件文本渲染颜色。

返回值：

| 类型                                                        | 说明                   |
| ----------------------------------------------------------- | ---------------------- |
| string &#124;number&#124;CanvasGradient &#124;CanvasPattern | 获取部件文本渲染颜色。 |

## **3.setTextSize**

public setTextSize(size: number): void;

设置部件文本Size，单位是vp。

参数：

| 参数名 | 类型   | 必填 | 说明               |
| ------ | ------ | ---- | ------------------ |
| size   | number | 是   | 设置部件文本Size。 |

## **4.getTextSize**

public getTextSize(): number;

获取部件文本Size。

返回值：

| 类型   | 说明               |
| ------ | ------------------ |
| number | 获取部件文本Size。 |

## **5.setXOffset**

public setXOffset(xOffset: number): void;

设置X轴距离图表内容区域的Offset。

参数：

| 参数名  | 类型   | 必填 | 说明                              |
| ------- | ------ | ---- | --------------------------------- |
| xOffset | number | 是   | 设置X轴距离图表内容区域的Offset。 |

## **6.getXOffset**

public getXOffset(): number;

获取X轴距离图表内容区域的Offset。

返回值：

| 类型   | 说明                              |
| ------ | --------------------------------- |
| number | 获取X轴距离图表内容区域的Offset。 |

## **7.setYOffset**

public setYOffset(yOffset: number): void;

设置Y轴距离图表内容区域的Offset。

参数：

| 参数名  | 类型   | 必填 | 说明                              |
| ------- | ------ | ---- | --------------------------------- |
| yOffset | number | 是   | 设置Y轴距离图表内容区域的Offset。 |

## **8.getYOffset**

public getYOffset(): number;

获取Y轴距离图表内容区域的Offset。

返回值：

| 类型   | 说明                              |
| ------ | --------------------------------- |
| number | 获取Y轴距离图表内容区域的Offset。 |
