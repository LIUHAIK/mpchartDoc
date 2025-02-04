import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/scatter-chart.md","filePath":"guide/scatter-chart.md"}'),l={name:"guide/scatter-chart.md"};function t(i,s,c,r,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>散点图 散点图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导入一些图表相关的组件和类</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>JArrayList,  // 工具类：数据集合</span></span>
<span class="line"><span>XAxis,  // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition,  // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>YAxis,  // 图表Y轴部件</span></span>
<span class="line"><span>Description,  // 图表Description(描述)部件</span></span>
<span class="line"><span>Legend,  // 图表Legend(图例)部件</span></span>
<span class="line"><span>OnChartValueSelectedListener,  // 数据选择监听</span></span>
<span class="line"><span>Highlight,  // 图表高亮数据</span></span>
<span class="line"><span>EntryOhos,  // 图表数据结构基础类</span></span>
<span class="line"><span>YAxisLabelPosition,  // 图表Y轴标签位置枚举类</span></span>
<span class="line"><span>ScatterChart,  // 散点图图表类</span></span>
<span class="line"><span>ScatterChartModel,  // 散点图配置构建类</span></span>
<span class="line"><span>ScatterData,  // 散点图数据包</span></span>
<span class="line"><span>ScatterDataSet,  // 散点图数据集合</span></span>
<span class="line"><span>IScatterDataSet,  // 散点图数据集合的操作类</span></span>
<span class="line"><span>ColorTemplate,  // 颜色模板</span></span>
<span class="line"><span>ChartShape,  // 图表形状枚举类</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span>// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>this.model = new ScatterChartModel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span>    // 获取图例对象</span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      // 启用图例</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置散点图数值选择监听器</span></span>
<span class="line"><span>    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取描述对象</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription();</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      // 禁用图表描述</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图表最大可见数值数量、是否支持缩放、是否绘制网格背景</span></span>
<span class="line"><span>    this.model.setMaxVisibleValueCount(160);</span></span>
<span class="line"><span>    this.model.setPinchZoom(false);</span></span>
<span class="line"><span>    this.model.setDrawGridBackground(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取X轴对象</span></span>
<span class="line"><span>    let xAxis: XAxis | null = this.model.getXAxis();</span></span>
<span class="line"><span>    if (xAxis) {</span></span>
<span class="line"><span>      // 设置X轴位置在底部</span></span>
<span class="line"><span>      xAxis.setPosition(XAxisPosition.BOTTOM);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 不绘制X轴网格线</span></span>
<span class="line"><span>      xAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴坐标的最小间隔为1</span></span>
<span class="line"><span>      xAxis.setGranularity(1);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴标签数量为7</span></span>
<span class="line"><span>      xAxis.setLabelCount(7);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取左侧Y轴对象</span></span>
<span class="line"><span>    let leftAxis: YAxis | null = this.model.getAxisLeft();</span></span>
<span class="line"><span>    if (leftAxis) {</span></span>
<span class="line"><span>      // 设置左侧Y轴标签数量为8，不强制使用整数标签</span></span>
<span class="line"><span>      leftAxis.setLabelCount(8, false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置左侧Y轴标签位置在图表外部</span></span>
<span class="line"><span>      leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置左侧Y轴顶部空白区域大小</span></span>
<span class="line"><span>      leftAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置左侧Y轴的最小值为0</span></span>
<span class="line"><span>      leftAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取右侧Y轴对象</span></span>
<span class="line"><span>    let rightAxis: YAxis | null = this.model.getAxisRight();</span></span>
<span class="line"><span>    if (rightAxis) {</span></span>
<span class="line"><span>      // 设置右侧Y轴标签数量为8，不绘制右侧Y轴网格线</span></span>
<span class="line"><span>      rightAxis.setLabelCount(8, false);</span></span>
<span class="line"><span>      rightAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置右侧Y轴顶部空白区域大小</span></span>
<span class="line"><span>      rightAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置右侧Y轴的最小值为0</span></span>
<span class="line"><span>      rightAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 生成随机数据</span></span>
<span class="line"><span>    let start: number = 1;</span></span>
<span class="line"><span>    let values: JArrayList&lt;EntryOhos&gt; = new JArrayList&lt;EntryOhos&gt;();</span></span>
<span class="line"><span>    for (let i = start; i &lt; 20; i++) {</span></span>
<span class="line"><span>      let val = Number(Math.random() * 41);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (Math.random() * 100 &lt; 25) {</span></span>
<span class="line"><span>        values.add(new EntryOhos(i, val));</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        values.add(new EntryOhos(i, val));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建散点图数据集</span></span>
<span class="line"><span>    let dataSet: ScatterDataSet = new ScatterDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    dataSet.setHighLightColor(Color.Black);</span></span>
<span class="line"><span>    dataSet.setDrawIcons(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建散点图数据集合</span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IScatterDataSet&gt; = new JArrayList&lt;IScatterDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图表数据</span></span>
<span class="line"><span>    this.setData(20, 100);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 设置散点图数据</span></span>
<span class="line"><span>* @param xRange - X轴数据范围</span></span>
<span class="line"><span>* @param yRange - Y轴数据范围</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>private setData(xRange: number, yRange: number): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // 生成随机数据集合</span></span>
<span class="line"><span>       let values1 = this.generateRandomData(xRange, yRange);</span></span>
<span class="line"><span>       let values2 = this.generateRandomData(xRange, yRange);</span></span>
<span class="line"><span>       let values3 = this.generateRandomData(xRange, yRange);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 创建散点图数据集1</span></span>
<span class="line"><span>       let set1 = new ScatterDataSet(values1, &quot;DS 1&quot;);</span></span>
<span class="line"><span>       set1.setScatterShape(ChartShape.SQUARE);</span></span>
<span class="line"><span>       set1.setColorByColor(ColorTemplate.COLORFUL_COLORS[0]);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 创建散点图数据集2</span></span>
<span class="line"><span>       let set2 = new ScatterDataSet(values2, &quot;DS 2&quot;);</span></span>
<span class="line"><span>       set2.setScatterShape(ChartShape.CIRCLE);</span></span>
<span class="line"><span>       set2.setScatterShapeHoleColor(ColorTemplate.COLORFUL_COLORS[3]);</span></span>
<span class="line"><span>       set2.setScatterShapeHoleRadius(3);</span></span>
<span class="line"><span>       set2.setColorByColor(ColorTemplate.COLORFUL_COLORS[1]);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 创建散点图数据集3</span></span>
<span class="line"><span>       let set3 = new ScatterDataSet(values3, &quot;DS 3&quot;);</span></span>
<span class="line"><span>       set3.setShapeRenderer(new CustomScatterShapeRenderer());</span></span>
<span class="line"><span>       set3.setColorByColor(ColorTemplate.COLORFUL_COLORS[2]);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 设置散点图数据集形状大小</span></span>
<span class="line"><span>       set1.setScatterShapeSize(8);</span></span>
<span class="line"><span>       set2.setScatterShapeSize(8);</span></span>
<span class="line"><span>       set3.setScatterShapeSize(8);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 创建散点图数据集合</span></span>
<span class="line"><span>       let dataSets: JArrayList&lt;IScatterDataSet&gt; = new JArrayList&lt;IScatterDataSet&gt;();</span></span>
<span class="line"><span>       dataSets.add(set1); // 添加数据集</span></span>
<span class="line"><span>       dataSets.add(set2);</span></span>
<span class="line"><span>       dataSets.add(set3);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 创建散点图数据</span></span>
<span class="line"><span>       let dataResult: ScatterData = new ScatterData(dataSets);</span></span>
<span class="line"><span>       dataResult.setDrawValues(this.isDrawValuesEnable);</span></span>
<span class="line"><span>       dataResult.setValueTextSize(8);</span></span>
<span class="line"><span>       dataResult.setHighlightEnabled(true);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 设置数据项文本大小</span></span>
<span class="line"><span>       dataResult.setValueTextSize(10);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>       // 设置图表数据</span></span>
<span class="line"><span>       if (this.model) {</span></span>
<span class="line"><span>         this.model.setData(dataResult);</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 生成随机散点图数据</span></span>
<span class="line"><span>* @param xRange - X轴数据范围</span></span>
<span class="line"><span>* @param yRange - Y轴数据范围</span></span>
<span class="line"><span>* @returns 随机散点图数据集合</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>private generateRandomData(xRange: number, yRange: number): JArrayList&lt;EntryOhos&gt; {</span></span>
<span class="line"><span>let values = new JArrayList&lt;EntryOhos&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       // 循环生成随机数据</span></span>
<span class="line"><span>       for (let i = 0; i &lt; xRange; i++) {</span></span>
<span class="line"><span>         let x = i; // 在指定范围内生成随机X值</span></span>
<span class="line"><span>         let y = Math.random() * yRange; // 在指定范围内生成随机Y值</span></span>
<span class="line"><span>         values.add(new EntryOhos(x, y));</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>       return values;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到散点图图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过dataResult.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ScatterChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const u=n(l,[["render",t]]);export{S as __pageData,u as default};
