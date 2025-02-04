import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/combined-chart.md","filePath":"guide/combined-chart.md"}'),l={name:"guide/combined-chart.md"};function t(i,s,c,r,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>组合图 组合图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导入一些图表相关的组件和类</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>ColorTemplate,  // 颜色模板</span></span>
<span class="line"><span>CombinedChart,  // 组合图表类</span></span>
<span class="line"><span>CombinedChartModel,  // 组合图表配置构建类</span></span>
<span class="line"><span>CombinedData,  // 组合图表数据包</span></span>
<span class="line"><span>EntryOhos,  // 图表数据结构基础类</span></span>
<span class="line"><span>JArrayList,  // 工具类：数据集合</span></span>
<span class="line"><span>LineData,  // 折线图数据包</span></span>
<span class="line"><span>LineDataSet,  // 折线图数据集合</span></span>
<span class="line"><span>Color,  // 颜色类</span></span>
<span class="line"><span>Mode,  // 图表模式枚举类</span></span>
<span class="line"><span>AxisDependency,  // 轴依赖类</span></span>
<span class="line"><span>BarEntry,  // 柱状图数据结构</span></span>
<span class="line"><span>BarData,  // 柱状图数据包</span></span>
<span class="line"><span>BarDataSet,  // 柱状图数据集合</span></span>
<span class="line"><span>IBarDataSet,  // 柱状图数据集合的操作类</span></span>
<span class="line"><span>ScatterData,  // 散点图数据包</span></span>
<span class="line"><span>ScatterDataSet,  // 散点图数据集合</span></span>
<span class="line"><span>CandleData,  // 蜡烛图数据包</span></span>
<span class="line"><span>CandleEntry,  // 蜡烛图数据结构</span></span>
<span class="line"><span>CandleDataSet,  // 蜡烛图数据集合</span></span>
<span class="line"><span>BubbleData,  // 气泡图数据包</span></span>
<span class="line"><span>BubbleEntry,  // 气泡图数据结构</span></span>
<span class="line"><span>BubbleDataSet,  // 气泡图数据集合</span></span>
<span class="line"><span>YAxisLabelPosition,  // 图表Y轴标签位置枚举类</span></span>
<span class="line"><span>XAxisPosition,  // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>XAxis,  // 图表X轴部件</span></span>
<span class="line"><span>YAxis,  // 图表Y轴部件</span></span>
<span class="line"><span>LegendHorizontalAlignment,  // 图例水平对齐方式枚举类</span></span>
<span class="line"><span>LegendVerticalAlignment  // 图例垂直对齐方式枚举类</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>private model: CombinedChartModel = new CombinedChartModel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span>// Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 禁用图表描述</span></span>
<span class="line"><span>    this.model.getDescription()?.setEnabled(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取图例对象</span></span>
<span class="line"><span>    let l = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      // 启用图例</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 启用图例文字自动换行</span></span>
<span class="line"><span>      l.setWordWrapEnabled(true);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例水平对齐方式为左侧</span></span>
<span class="line"><span>      l.setHorizontalAlignment(LegendHorizontalAlignment.LEFT);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例垂直对齐方式为底部</span></span>
<span class="line"><span>      l.setVerticalAlignment(LegendVerticalAlignment.BOTTOM);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例不绘制在图表内部</span></span>
<span class="line"><span>      l.setDrawInside(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图表最大可见数值数量为60</span></span>
<span class="line"><span>    this.model.setMaxVisibleValueCount(60);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 禁用图表的捏合缩放功能</span></span>
<span class="line"><span>    this.model.setPinchZoom(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 禁用图表绘制网格背景</span></span>
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
<span class="line"><span>      // 设置顶部空白区域为15个单位</span></span>
<span class="line"><span>      leftAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置左侧Y轴的最小值为0</span></span>
<span class="line"><span>      leftAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取右侧Y轴对象</span></span>
<span class="line"><span>    let rightAxis: YAxis | null = this.model.getAxisRight();</span></span>
<span class="line"><span>    if (rightAxis) {</span></span>
<span class="line"><span>      // 设置右侧Y轴标签数量为8，不强制使用整数标签</span></span>
<span class="line"><span>      rightAxis.setLabelCount(8, false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 不绘制右侧Y轴网格线</span></span>
<span class="line"><span>      rightAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置顶部空白区域为15个单位</span></span>
<span class="line"><span>      rightAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置右侧Y轴的最小值为0</span></span>
<span class="line"><span>      rightAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建组合图表数据对象</span></span>
<span class="line"><span>    let data: CombinedData = new CombinedData();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 生成线形图数据</span></span>
<span class="line"><span>    this.generateLineData(data);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 生成柱状图数据</span></span>
<span class="line"><span>    this.generateBarData(data);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 生成气泡图数据</span></span>
<span class="line"><span>    this.generateBubbleData(data);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 生成散点图数据</span></span>
<span class="line"><span>    this.generateScatterData(data);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 生成蜡烛图数据</span></span>
<span class="line"><span>    this.generateCandleData(data);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置图表数据</span></span>
<span class="line"><span>    this.model.setData(data);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成线形图数据</span></span>
<span class="line"><span>private generateLineData(data: CombinedData): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let d: LineData = new LineData();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let entries: JArrayList&lt;EntryOhos&gt; = new JArrayList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; this.count; index++) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      entries.add(new EntryOhos(index + 0.5, this.getRandom(15, 5)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set: LineDataSet = new LineDataSet(entries, &quot;Line DataSet&quot;);</span></span>
<span class="line"><span>    set.setColorByColor(Color.rgb(240, 238, 70));</span></span>
<span class="line"><span>    set.setLineWidth(2.5);</span></span>
<span class="line"><span>    set.setCircleColor(Color.rgb(240, 238, 70));</span></span>
<span class="line"><span>    set.setCircleRadius(5);</span></span>
<span class="line"><span>    set.setFillColor(Color.rgb(240, 238, 70));</span></span>
<span class="line"><span>    set.setMode(Mode.CUBIC_BEZIER);</span></span>
<span class="line"><span>    set.setDrawValues(true);</span></span>
<span class="line"><span>    set.setValueTextSize(10);</span></span>
<span class="line"><span>    set.setValueTextColor(Color.rgb(240, 238, 70));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    set.setAxisDependency(AxisDependency.LEFT);</span></span>
<span class="line"><span>    d.addDataSet(set);</span></span>
<span class="line"><span>    data.setLineData(d);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成柱状图数据</span></span>
<span class="line"><span>private generateBarData(data: CombinedData): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let entries1: JArrayList&lt;BarEntry&gt; = new JArrayList();</span></span>
<span class="line"><span>    let entries2: JArrayList&lt;BarEntry&gt; = new JArrayList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; this.count; index++) {</span></span>
<span class="line"><span>      entries1.add(new BarEntry(0, this.getRandom(25, 25)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // stacked</span></span>
<span class="line"><span>      entries2.add(new BarEntry(0, [this.getRandom(13, 12), this.getRandom(13, 12)]));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set1: BarDataSet = new BarDataSet(entries1, &quot;Bar 1&quot;);</span></span>
<span class="line"><span>    set1.setColorByColor(Color.rgb(60, 220, 78));</span></span>
<span class="line"><span>    set1.setValueTextColor(Color.rgb(60, 220, 78));</span></span>
<span class="line"><span>    set1.setValueTextSize(10);</span></span>
<span class="line"><span>    set1.setAxisDependency(AxisDependency.LEFT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set2: BarDataSet = new BarDataSet(entries2, &quot;&quot;);</span></span>
<span class="line"><span>    set2.setStackLabels([&quot;Stack 1&quot;, &quot;Stack 2&quot;]);</span></span>
<span class="line"><span>    set2.setColorsByArr([Color.rgb(61, 165, 255), Color.rgb(23, 197, 255)]);</span></span>
<span class="line"><span>    set2.setValueTextColor(Color.rgb(61, 165, 255));</span></span>
<span class="line"><span>    set2.setValueTextSize(10);</span></span>
<span class="line"><span>    set2.setAxisDependency(AxisDependency.LEFT);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let groupSpace = 0.06;</span></span>
<span class="line"><span>    let barSpace = 0.02; // x2 dataset</span></span>
<span class="line"><span>    let barWidth = 0.45; // x2 dataset</span></span>
<span class="line"><span>    // (0.45 + 0.02) * 2 + 0.06 = 1.00 -&gt; interval per &quot;group&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set: JArrayList&lt;IBarDataSet&gt; = new JArrayList();</span></span>
<span class="line"><span>    set.add(set1);</span></span>
<span class="line"><span>    set.add(set2);</span></span>
<span class="line"><span>    let d: BarData = new BarData(set);</span></span>
<span class="line"><span>    d.setBarWidth(barWidth);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // make this BarData object grouped</span></span>
<span class="line"><span>    d.groupBars(0, groupSpace, barSpace); // start at x = 0</span></span>
<span class="line"><span>    data.setBarData(d);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成散点图数据</span></span>
<span class="line"><span>private generateScatterData(data: CombinedData): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let d: ScatterData = new ScatterData();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let entries: JArrayList&lt;EntryOhos&gt; = new JArrayList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; this.count; index += 0.5)</span></span>
<span class="line"><span>      entries.add(new EntryOhos(index + 0.25, this.getRandom(10, 55)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set: ScatterDataSet = new ScatterDataSet(entries, &quot;Scatter DataSet&quot;);</span></span>
<span class="line"><span>    set.setColorsByArr(ColorTemplate.MATERIAL_COLORS);</span></span>
<span class="line"><span>    set.setScatterShapeSize(7.5);</span></span>
<span class="line"><span>    set.setDrawValues(false);</span></span>
<span class="line"><span>    set.setValueTextSize(10);</span></span>
<span class="line"><span>    d.addDataSet(set);</span></span>
<span class="line"><span>    data.setScatterData(d);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 生成蜡烛图数据</span></span>
<span class="line"><span>private generateCandleData(data: CombinedData): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let d: CandleData = new CandleData();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let entries: JArrayList&lt;CandleEntry&gt; = new JArrayList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; this.count; index += 2) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      entries.add(new CandleEntry(index + 1, 90, 70, 85, 75));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set: CandleDataSet = new CandleDataSet(entries, &quot;Candle DataSet&quot;);</span></span>
<span class="line"><span>    set.setDecreasingColor(Color.rgb(142, 150, 175));</span></span>
<span class="line"><span>    set.setShadowColor(ColorTemplate.DKGRAY);</span></span>
<span class="line"><span>    set.setBarSpace(0.3);</span></span>
<span class="line"><span>    set.setValueTextSize(10);</span></span>
<span class="line"><span>    set.setDrawValues(false);</span></span>
<span class="line"><span>    d.addDataSet(set);</span></span>
<span class="line"><span>    data.setCandleData(d);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//生成气泡图数据</span></span>
<span class="line"><span>private generateBubbleData(data: CombinedData): void {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let bd: BubbleData = new BubbleData();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let entries: JArrayList&lt;BubbleEntry&gt; = new JArrayList();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; this.count; index++) {</span></span>
<span class="line"><span>      let y = this.getRandom(10, 105);</span></span>
<span class="line"><span>      let size = this.getRandom(20, 30);</span></span>
<span class="line"><span>      entries.add(new BubbleEntry(index + 0.5, y, size));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set: BubbleDataSet = new BubbleDataSet(entries, &quot;Bubble DataSet&quot;);</span></span>
<span class="line"><span>    set.setColorsByArr(ColorTemplate.VORDIPLOM_COLORS);</span></span>
<span class="line"><span>    set.setValueTextSize(10);</span></span>
<span class="line"><span>    set.setValueTextColor(Color.rgb(255, 255, 255));</span></span>
<span class="line"><span>    set.setHighlightCircleWidth(1.5);</span></span>
<span class="line"><span>    set.setDrawValues(true);</span></span>
<span class="line"><span>    bd.addDataSet(set);</span></span>
<span class="line"><span>    data.setBubbleData(bd);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//生成随机数据</span></span>
<span class="line"><span>getRandom(range: number, start: number): number {</span></span>
<span class="line"><span>return (Math.random() * range) + start;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到自定义组合图图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过data.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CombinedChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const D=n(l,[["render",t]]);export{g as __pageData,D as default};
