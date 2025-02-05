### **四、AxisBase**

坐标轴基类。

| 方法名                      | 描述                                               |
| --------------------------- | -------------------------------------------------- |
| addLimitLine                | 为坐标轴添加限制线对象。                           |
| calculate                   | 计算预期坐标轴的最大最小值，用于自定义坐标轴使用。 |
| setAxisMaximum              | 设置自定义的轴的最大值。                           |
| setAxisMinimum              | 设置自定义的轴的最小值。                           |
| setDrawAxisLine             | 设置是否绘制轴线。                                 |
| setDrawGridLines            | 设置是否绘制网格线。                               |
| setDrawGridLinesBehindData  | 设置是否在数据后绘制网格线。                       |
| setDrawLimitLinesBehindData | 设置是否在数据后绘制限制线。                       |
| setValueFormatter           | 设置数据的格式转换器。                             |

## **1.addLimitLine**

public addLimitLine(limitLine: LimitLine): void;

为坐标轴添加限制线对象。

参数：

<table>
  <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>必填</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>limitLine</td>
      <td><span class="highlight yellow">LimitLine</span></td>
      <td><span class="highlight blue">是</span></td>
      <td>为坐标轴添加限制线对象。</td>
    </tr>
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  .highlight {
    display: inline-block;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 14px;
  }
  .blue {
    background-color: #e6f7ff;
    color: #1890ff;
  }
  .yellow {
    background-color: #fff7e6;
    color: #f5a623;
  }
</style>
## **2.calculate**

public calculate(dataMin: number, dataMax: number): void;

计算预期坐标轴的最大最小值，用于自定义坐标轴使用。

参数：

| 参数名  | 类型   | 必填 | 说明                 |
| ------- | ------ | ---- | -------------------- |
| dataMin | number | 是   | 数据集合中的最小值。 |
| dataMax | number | 是   | 数据集合中的最大值。 |

## **3.setAxisMaximum**

public setAxisMaximum(max: number): void;

设置自定义的轴的最大值。

参数：

| 参数名 | 类型   | 必填 | 说明               |
| ------ | ------ | ---- | ------------------ |
| max    | number | 是   | 自定义的轴最大值。 |

## **4.setAxisMinimum**

public setAxisMinimum(min: number): void;

设置自定义的轴的最小值。

参数：

| 参数名 | 类型   | 必填 | 说明                 |
| ------ | ------ | ---- | -------------------- |
| min    | number | 是   | 自定义的轴的最小值。 |

## **5.setDrawAxisLine**

public setDrawAxisLine(enabled: boolean): void;

设置是否绘制轴线。

参数：

| 参数名  | 类型    | 必填 | 说明               |
| ------- | ------- | ---- | ------------------ |
| enabled | boolean | 是   | 设置是否绘制轴线。 |

## **6.setDrawGridLines**

public setDrawGridLines(enabled: boolean): void;

设置是否绘制网格线。

参数：

| 参数名  | 类型    | 必填 | 说明                 |
| ------- | ------- | ---- | -------------------- |
| enabled | boolean | 是   | 设置是否绘制网格线。 |

## **7.setDrawGridLinesBehindData**

public setDrawGridLinesBehindData(enabled: boolean): void;

设置是否在数据后绘制网格线。

参数：

| 参数名  | 类型    | 必填 | 说明                         |
| ------- | ------- | ---- | ---------------------------- |
| enabled | boolean | 是   | 设置是否在数据后绘制网格线。 |

## **8.setDrawLimitLinesBehindData**

public setDrawLimitLinesBehindData(enabled: boolean): void ;

设置是否在数据后绘制限制线。

参数：

| 参数名  | 类型    | 必填 | 说明                         |
| ------- | ------- | ---- | ---------------------------- |
| enabled | boolean | 是   | 设置是否在数据后绘制限制线。 |

## **9.setValueFormatter**

public setValueFormatter(formatter: IAxisValueFormatter): void ;

设置数据的格式转换器。

参数：

| 参数名    | 类型                | 必填 | 说明                   |
| --------- | ------------------- | ---- | ---------------------- |
| formatter | IAxisValueFormatter | 是   | 设置数据的格式转换器。 |
