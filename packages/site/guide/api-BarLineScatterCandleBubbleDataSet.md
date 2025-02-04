### **十、BarLineScatterCandleBubbleDataSet**

Bar,Line,Scatter,Candle,Bubble五种图表数据的抽象基类

| 方法名            | 描述                           |
| ----------------- | ------------------------------ |
| setHighLightColor | 设置用于绘制高亮指示器的颜色。 |
| getHighLightColor | 获取用于绘制高亮指示器的颜色。 |
| copyTo            | 复制数据到指定的dataSet。      |

## **1.setHighLightColor**

public setHighLightColor(color: number): void;

设置用于绘制高亮指示器的颜色。

参数：

| 参数名 | 类型   | 必填 | 说明             |
| ------ | ------ | ---- | ---------------- |
| color  | number | 是   | 高亮指示器的颜色 |

## **2.getHighLightColor**

public getHighLightColor(): number;

获取用于绘制高亮指示器的颜色。

返回值：

| 类型   | 说明             |
| ------ | ---------------- |
| number | 高亮指示器的颜色 |

## **3.copyTo**

```protected copyTo(barLineScatterCandleBubbleDataSet: BarLineScatterCandleBubbleDataSet<T>): void```

复制数据到指定的dataSet。

参数：

| 参数名                            | 类型                                 | 必填 | 说明                    |
| --------------------------------- | ------------------------------------ | ---- | ----------------------- |
| barLineScatterCandleBubbleDataSet | ```BarLineScatterCandleBubbleDataSet<T>``` | 是   | 复制数据到指定的dataSet |
