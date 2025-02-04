### **五、XAxis**

X轴对象。

| 方法名                | 描述                           |
| --------------------- | ------------------------------ |
| setPosition           | 设置X轴显示位置。              |
| getPosition           | 获取X轴显示位置。              |
| setLabelRotationAngle | 设置X轴标签旋转角度。          |
| getLabelRotationAngle | 获取X轴标签旋转角度。          |
| setLabelXOffset       | 获取X轴标签偏移量。            |
| getLabelXOffset       | 获取标签在 X 轴上的偏移量。    |
| setXAxisLabelPosition | 设置X轴标签位置。              |
| getXAxisLabelPosition | 获取X轴标签位置。              |
| setCustomLabels       | 设置x轴自定义Labels。          |
| getCustomLabels       | 获取自定义Labels。             |
| setDrawCustomLabels   | 设置是否使用自定义Labels。     |
| isDrawCustomLabels    | 检查是否正在使用自定义Labels。 |

## **1.setPosition**

public setPosition(pos: XAxisPosition): void;

设置X轴显示位置。

参数：

| 参数名 | 类型          | 必填 | 说明              |
| ------ | ------------- | ---- | ----------------- |
| pos    | XAxisPosition | 是   | 设置X轴显示位置。 |

## **2.getPosition**

public getPosition(): XAxisPosition;

获取X轴显示位置。

返回值：

| 类型          | 说明              |
| ------------- | ----------------- |
| XAxisPosition | 获取X轴显示位置。 |

## **3.setLabelRotationAngle**

public setLabelRotationAngle(angle: number): void;

设置X轴标签旋转角度。

参数：

| 参数名 | 类型   | 必填 | 说明                  |
| ------ | ------ | ---- | --------------------- |
| angle  | number | 是   | 设置X轴标签旋转角度。 |

## **4.getLabelRotationAngle**

public getLabelRotationAngle(): number;

获取X轴标签旋转角度。

返回值：

| 类型   | 说明                  |
| ------ | --------------------- |
| number | 获取X轴标签旋转角度。 |

## **5.setLabelXOffset**

public setLabelXOffset(xOffset: number): void

获取X轴标签偏移量

返回值：无

参数：

| 参数名 | 类型   | 必填 | 说明         |
| ------ | ------ | ---- |------------|
| xOffset  | number | 是   | 设置X轴标签偏移量。 |

## **6.getLabelXOffset**

public getLabelXOffset(): number

获取标签在 X 轴上的偏移量

返回值：

| 类型   | 说明                  |
| ------ | --------------------- |
| number | 获取标签在 X 轴上的偏移量。 |

参数：无

## **7.setXAxisLabelPosition**

public setXAxisLabelPosition(position: XAxisLabelPosition): void

设置X轴标签位置

返回值：无

参数：

| 参数名 | 类型   | 必填 | 说明         |
| ------ | ------ | ---- |------------|
| position  | XAxisLabelPosition | 是   | 设置X轴标签位置 |

## **8.getXAxisLabelPosition**

public getXAxisLabelPosition(): XAxisLabelPosition

获取X轴标签位置

返回值：

| 类型   | 说明                  |
| ------ | --------------------- |
| XAxisLabelPosition | X轴标签位置 |

参数：无


## **9.setCustomLabels**

public setCustomLabels(numbers: number[]): void

设置x轴自定义Labels

返回值：无

参数：

| 参数名 | 类型   | 必填 | 说明         |
| ------ | ------ | ---- |------------|
| numbers  | number[] | 是   | 设置x轴自定义Labels |

## **10.getCustomLabels**

public getCustomLabels(): number[]

获取自定义Labels

返回值：

| 类型   | 说明                  |
| ------ | --------------------- |
| number[] | 自定义Labels |

参数：无

## **11.setDrawCustomLabels**

public setDrawCustomLabels(flag: boolean): void

设置是否使用自定义Labels

返回值：无

参数：

| 参数名 | 类型      | 必填 | 说明         |
| ------ |---------| ---- |------------|
| flag  | boolean | 是   | 设置是否使用自定义Labels |

## **12.isDrawCustomLabels**

public isDrawCustomLabels(): boolean

检查是否正在使用自定义Labels

返回值：

| 类型   | 说明                  |
| ------ | --------------------- |
| boolean | 是否正在使用自定义Labels |

参数：无
