import{_ as n,c as a,a7 as p,o as l}from"./chunks/framework.CS1J3kmr.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/bubble-chart.md","filePath":"guide/bubble-chart.md"}'),e={name:"guide/bubble-chart.md"};function i(t,s,c,o,r,d){return l(),a("div",null,s[0]||(s[0]=[p(`<p>气泡图 气泡图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导入一些图表相关的组件和类</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>JArrayList,  //工具类：数据集合</span></span>
<span class="line"><span>XAxis,  // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition,  // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>YAxis,  // 图表Y轴部件</span></span>
<span class="line"><span>Description,  // 图表的描述信息</span></span>
<span class="line"><span>Legend,  // 图例</span></span>
<span class="line"><span>OnChartValueSelectedListener,  // 图表数值选中的监听器</span></span>
<span class="line"><span>Highlight,  // 高亮显示</span></span>
<span class="line"><span>EntryOhos,  // 图表数据结构基础类</span></span>
<span class="line"><span>YAxisLabelPosition,  // 图表Y轴标签位置枚举类</span></span>
<span class="line"><span>BubbleEntry,  // 气泡图数据结构</span></span>
<span class="line"><span>ChartPixelMap,  // 图表像素映射</span></span>
<span class="line"><span>IBubbleDataSet,  // 气泡图数据集的接口</span></span>
<span class="line"><span>BubbleDataSet,  // 气泡图数据集</span></span>
<span class="line"><span>MPPointF,  // MPPonitF</span></span>
<span class="line"><span>BubbleChart,  // 气泡图组件</span></span>
<span class="line"><span>BubbleChartModel,  // 气泡图配置构建类</span></span>
<span class="line"><span>BubbleData  // 气泡图数据</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造数据选择监听器</span></span>
<span class="line"><span>private valueSelectedListener: OnChartValueSelectedListener = {</span></span>
<span class="line"><span>onValueSelected: (e: EntryOhos, h: Highlight) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onNothingSelected: () =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图表数据初始化</span></span>
<span class="line"><span>private model: BubbleChartModel | null = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span>// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>this.model = new BubbleChartModel();</span></span>
<span class="line"><span>// Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置图例</span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //设置描述</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription();</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置最大可见条目数量为60</span></span>
<span class="line"><span>this.model.setMaxVisibleValueCount(60);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 禁用x和y轴方向同时缩放，但是可以单独x轴方向或者y轴方向缩放</span></span>
<span class="line"><span>this.model.setPinchZoom(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取X轴对象</span></span>
<span class="line"><span>let xAxis: XAxis | null = this.model.getXAxis();</span></span>
<span class="line"><span>if (xAxis) {</span></span>
<span class="line"><span>// 设置X轴位置在底部</span></span>
<span class="line"><span>xAxis.setPosition(XAxisPosition.BOTTOM);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 不绘制X轴网格线</span></span>
<span class="line"><span>     xAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>     // 设置X轴坐标的最小间隔为1</span></span>
<span class="line"><span>     xAxis.setGranularity(1);</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>     // 设置X轴标签数量为7</span></span>
<span class="line"><span>     xAxis.setLabelCount(7);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取左侧Y轴对象</span></span>
<span class="line"><span>let leftAxis: YAxis | null = this.model.getAxisLeft();</span></span>
<span class="line"><span>if (leftAxis) {</span></span>
<span class="line"><span>// 设置左侧Y轴标签数量为8，不强制使用整数标签</span></span>
<span class="line"><span>leftAxis.setLabelCount(8, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 设置左侧Y轴标签位置在图表外部</span></span>
<span class="line"><span>     leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART);</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     // 设置顶部空白区域为15个单位</span></span>
<span class="line"><span>     leftAxis.setSpaceTop(15);</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     // 设置左侧Y轴的最小值为0</span></span>
<span class="line"><span>     leftAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取右侧Y轴对象</span></span>
<span class="line"><span>let rightAxis: YAxis | null = this.model.getAxisRight();</span></span>
<span class="line"><span>if (rightAxis) {</span></span>
<span class="line"><span>// 设置右侧Y轴标签数量为8，不强制使用整数标签</span></span>
<span class="line"><span>rightAxis.setLabelCount(8, false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 不绘制右侧Y轴网格线</span></span>
<span class="line"><span>     rightAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     // 设置顶部空白区域为15个单位</span></span>
<span class="line"><span>     rightAxis.setSpaceTop(15);</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>     // 设置右侧Y轴的最小值为0</span></span>
<span class="line"><span>     rightAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化起始值为1</span></span>
<span class="line"><span>let start: number = 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建气泡图数据集</span></span>
<span class="line"><span>let values: JArrayList&lt;BubbleEntry&gt; = new JArrayList&lt;BubbleEntry&gt;();</span></span>
<span class="line"><span>for (let i = start; i &lt; 20; i++) {</span></span>
<span class="line"><span>// 生成随机值（0到40之间）</span></span>
<span class="line"><span>let val = Number(Math.random() * 41);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     // 按照一定概率添加气泡数据</span></span>
<span class="line"><span>     if (Math.random() * 100 &lt; 25) {</span></span>
<span class="line"><span>       values.add(new BubbleEntry(i, val));</span></span>
<span class="line"><span>     } else {</span></span>
<span class="line"><span>       values.add(new BubbleEntry(i, val));</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建气泡图数据集</span></span>
<span class="line"><span>let dataSet: BubbleDataSet = new BubbleDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>dataSet.setHighLightColor(Color.Black);</span></span>
<span class="line"><span>dataSet.setDrawIcons(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建气泡图数据集列表</span></span>
<span class="line"><span>let dataSetList: JArrayList&lt;IBubbleDataSet&gt; = new JArrayList&lt;IBubbleDataSet&gt;();</span></span>
<span class="line"><span>dataSetList.add(dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置图表数据</span></span>
<span class="line"><span>this.setData(5, 50);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置图表最大的X轴显示范围为7个单位</span></span>
<span class="line"><span>this.model.setVisibleXRangeMaximum(7);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化气泡图数据</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 设置气泡图表的数据</span></span>
<span class="line"><span>* @param count 数据点的数量</span></span>
<span class="line"><span>* @param range 数据点的范围</span></span>
<span class="line"><span>*/</span></span>
<span class="line"><span>private setData(count: number, range: number): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建三个气泡图数据集</span></span>
<span class="line"><span>    let values1 = new JArrayList&lt;BubbleEntry&gt;();</span></span>
<span class="line"><span>    let values2 = new JArrayList&lt;BubbleEntry&gt;();</span></span>
<span class="line"><span>    let values3 = new JArrayList&lt;BubbleEntry&gt;();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 创建图标绘制对象</span></span>
<span class="line"><span>    let imgePaint: ChartPixelMap = new ChartPixelMap();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图标的宽度和高度</span></span>
<span class="line"><span>    imgePaint.setWidth(32);</span></span>
<span class="line"><span>    imgePaint.setHeight(32);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 循环生成数据点</span></span>
<span class="line"><span>    for (let i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>      // 向数据集添加带有图标的气泡数据点</span></span>
<span class="line"><span>      values1.add(new BubbleEntry(i, Math.random() * range, Math.random() * range, imgePaint));</span></span>
<span class="line"><span>      values2.add(new BubbleEntry(i, Math.random() * range, Math.random() * range, imgePaint));</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 向数据集添加不带图标的气泡数据点</span></span>
<span class="line"><span>      values3.add(new BubbleEntry(i, Math.random() * range, Math.random() * range));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建气泡数据集1</span></span>
<span class="line"><span>    let set1: BubbleDataSet = new BubbleDataSet(values1, &quot;DS 1&quot;);</span></span>
<span class="line"><span>    set1.setDrawIcons(false);</span></span>
<span class="line"><span>    set1.setColorByColor(0x88c12552);</span></span>
<span class="line"><span>    set1.setIconsOffset(new MPPointF(0, 0));</span></span>
<span class="line"><span>    set1.setDrawValues(this.isDrawValuesEnable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建气泡数据集2</span></span>
<span class="line"><span>    let set2: BubbleDataSet = new BubbleDataSet(values2, &quot;DS 2&quot;);</span></span>
<span class="line"><span>    set2.setDrawIcons(false);</span></span>
<span class="line"><span>    set2.setIconsOffset(new MPPointF(0, 0));</span></span>
<span class="line"><span>    set2.setColorByColor(0x88ff6600);</span></span>
<span class="line"><span>    set2.setDrawValues(this.isDrawValuesEnable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建气泡数据集3</span></span>
<span class="line"><span>    let set3: BubbleDataSet = new BubbleDataSet(values3, &quot;DS 3&quot;);</span></span>
<span class="line"><span>    set3.setDrawIcons(false);</span></span>
<span class="line"><span>    set3.setIconsOffset(new MPPointF(0, 0));</span></span>
<span class="line"><span>    set3.setColorByColor(0x88f5c700);</span></span>
<span class="line"><span>    set3.setDrawValues(this.isDrawValuesEnable);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建气泡图数据集列表</span></span>
<span class="line"><span>    let dataSets = new JArrayList&lt;IBubbleDataSet&gt;();</span></span>
<span class="line"><span>    dataSets.add(set1);</span></span>
<span class="line"><span>    dataSets.add(set2);</span></span>
<span class="line"><span>    dataSets.add(set3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建气泡图数据对象</span></span>
<span class="line"><span>    let dataResult: BubbleData = new BubbleData(dataSets);</span></span>
<span class="line"><span>    dataResult.setDrawValues(this.isDrawValuesEnable);</span></span>
<span class="line"><span>    dataResult.setValueTextSize(8);</span></span>
<span class="line"><span>    dataResult.setValueTextColor(Color.White);</span></span>
<span class="line"><span>    dataResult.setHighlightCircleWidth(1.5);</span></span>
<span class="line"><span>    dataResult.setHighlightEnabled(true);</span></span>
<span class="line"><span>    dataResult.notifyDataChanged();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果存在图表模型，则设置图表数据</span></span>
<span class="line"><span>    if (this.model) {</span></span>
<span class="line"><span>      this.model.setData(dataResult);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到自定义气泡图图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过dataResult.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BubbleChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const h=n(e,[["render",i]]);export{b as __pageData,h as default};
