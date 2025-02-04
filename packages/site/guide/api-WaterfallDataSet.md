### **八、WaterfallDataSet**

瀑布图数据类

| 方法名        | 描述                         |
| ------------- | ---------------------------- |
| setDotsColors | 瀑布图设置所有高亮点的颜色。 |
| getDotsColors | 获取瀑布图所有高亮点的颜色。 |

## **1.setDotsColors**

public setDotsColors(color: number | string): void;

瀑布图设置所有高亮点的颜色。

参数：

| 参数名 | 类型                   | 必填 | 说明                       |
| ------ |----------------------| ---- |--------------------------|
| color  | number &#124; string | 是   | 要设置的颜色，可以是number或string。 |

## **2.getDotsColors**

public getDotsColors(): Array<string | number> {

获取瀑布图所有高亮点的颜色。

返回值：

| 类型                          | 说明                        |
|-----------------------------| --------------------------- |
| Array<string &#124; number> | 返回包含所有高亮点颜色的数组。 |
