import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/waterfall-chart.md","filePath":"guide/waterfall-chart.md"}'),l={name:"guide/waterfall-chart.md"};function t(i,s,r,c,o,h){return e(),a("div",null,s[0]||(s[0]=[p(`<p>瀑布图 瀑布图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {</span></span>
<span class="line"><span>WaterfallChart, // 瀑布图图表类</span></span>
<span class="line"><span>WaterfallChartModel, // 瀑布图配置构建类</span></span>
<span class="line"><span>BarData, // 瀑布图数据包</span></span>
<span class="line"><span>WaterfallDataSet, // 瀑布图数据集合</span></span>
<span class="line"><span>WaterfallEntry, // 瀑布图数据结构</span></span>
<span class="line"><span>ChartGesture, // 手势事件模式</span></span>
<span class="line"><span>Description, // 图表Description(描述)部件</span></span>
<span class="line"><span>EntryOhos, // 图表数据结构基础类</span></span>
<span class="line"><span>Fill, // 图表填充类型构建类</span></span>
<span class="line"><span>Highlight, // 图表高亮数据</span></span>
<span class="line"><span>IBarDataSet, // 瀑布图数据集合的操作类</span></span>
<span class="line"><span>JArrayList, // 工具类：数据集合</span></span>
<span class="line"><span>Legend, // 图表Legend(图例)部件</span></span>
<span class="line"><span>LimitLabelPosition, // 图表的LimitLine标签位置枚举类</span></span>
<span class="line"><span>LimitLine, // 图表LimitLine</span></span>
<span class="line"><span>MarkerView, // 图表的Marker(标志气泡)部件</span></span>
<span class="line"><span>OnChartGestureListener, // 手势事件监听</span></span>
<span class="line"><span>OnChartValueSelectedListener, // 数据选择监听</span></span>
<span class="line"><span>XAxis, // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition, // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>YAxis, // 图表Y轴部件</span></span>
<span class="line"><span>YAxisLabelPosition // 图表Y轴标签位置枚举类</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造数据选择监听器</span></span>
<span class="line"><span>private valueSelectedListener: OnChartValueSelectedListener = {</span></span>
<span class="line"><span>onValueSelected: (e: EntryOhos, h: Highlight) =&gt; {</span></span>
<span class="line"><span>LogUtil.log(&quot;SimpleWaterfallChartPage onValueSelected: &quot; + e.getX());</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onNothingSelected: () =&gt; {</span></span>
<span class="line"><span>LogUtil.log(&quot;SimpleWaterfallChartPage onNothingSelected&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造手势识别事件监听器</span></span>
<span class="line"><span>private chartGestureListener: OnChartGestureListener = {</span></span>
<span class="line"><span>onChartGestureStart: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) =&gt; {</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartGestureEnd: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, lastPerformedGestureMode: ChartGesture) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartLongPressed: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartDoubleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartSingleTapped: (isTouchEvent: boolean, me: TouchEvent | GestureEvent) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartFling: (isTouchEvent: boolean, me1: TouchEvent | GestureEvent, me2: TouchEvent, velocityX: number, velocityY: number) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartScale: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, scaleX: number, scaleY: number) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onChartTranslate: (isTouchEvent: boolean, me: TouchEvent | GestureEvent, dX: number, dY: number) =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 图表数据初始化</span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  	// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>    this.model = new WaterfallChartModel();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // Step2:配置图表指定样式，各部件间没有先后之分</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 为图表添加数据选择的监听器</span></span>
<span class="line"><span>    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);</span></span>
<span class="line"><span>    // 为图表添加手势识别监听器</span></span>
<span class="line"><span>    this.model.setOnChartGestureListener(this.chartGestureListener);</span></span>
<span class="line"><span>	// 获取图表描述部件，设置图表描述部件不可用，即图表不进行绘制描述部件</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription()</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	// 获取图表图例部件，设置图表图例部件不可用</span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      l.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 设置图表数据最大的绘制数，如果超过该数值，则不进行绘制图表的数值标签</span></span>
<span class="line"><span>    this.model.setMaxVisibleValueCount(40);</span></span>
<span class="line"><span>	// 是否绘制图表的背景色，绘制范围为图表瀑布图的绘制范围，不包含轴线之外的部分</span></span>
<span class="line"><span>    this.model.setDrawGridBackground(false);</span></span>
<span class="line"><span>    // 设置图表的背景色，颜色的规格需要满足CanvasRenderingContext2D.fillstyle/strokestyle规格</span></span>
<span class="line"><span>    this.model.setGridBackgroundColor(&#39;#500000ff&#39;)</span></span>
<span class="line"><span>    // 设置不绘制瀑布图的柱体阴影背景</span></span>
<span class="line"><span>    this.model.setDrawBarShadow(false);</span></span>
<span class="line"><span>	// 设置瀑布图的数值在柱体上方</span></span>
<span class="line"><span>    this.model.setDrawValueAboveBar(false);</span></span>
<span class="line"><span>	// 为左Y轴设置LimitLine,可设置限制线的宽度，线段样式，限制标签的位置，标签字体大小等</span></span>
<span class="line"><span>    this.limitLine1 = new LimitLine(120, &#39;Upper Limit&#39;);</span></span>
<span class="line"><span>    this.limitLine1.setLineWidth(4);</span></span>
<span class="line"><span>    this.limitLine1.enableDashedLine(10, 10, 0);</span></span>
<span class="line"><span>    this.limitLine1.setLabelPosition(LimitLabelPosition.RIGHT_TOP);</span></span>
<span class="line"><span>    this.limitLine1.setTextSize(10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.limitLine2 = new LimitLine(50, &#39;Lower Limit&#39;);</span></span>
<span class="line"><span>    this.limitLine2.setLineWidth(4);</span></span>
<span class="line"><span>    this.limitLine2.enableDashedLine(10, 10, 0);</span></span>
<span class="line"><span>    this.limitLine2.setLineColor(Color.Yellow);</span></span>
<span class="line"><span>    this.limitLine2.setLabelPosition(LimitLabelPosition.RIGHT_BOTTOM);</span></span>
<span class="line"><span>    this.limitLine2.setTextSize(10);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置图表左Y轴信息</span></span>
<span class="line"><span>    this.leftAxis = this.model.getAxisLeft();</span></span>
<span class="line"><span>    if (this.leftAxis) {</span></span>
<span class="line"><span>      this.leftAxis.setAxisMinimum(0); // this replaces setStartAtZero(true)</span></span>
<span class="line"><span>      this.leftAxis.setDrawLimitLinesBehindData(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 添加LimitLines</span></span>
<span class="line"><span>      this.leftAxis.addLimitLine(this.limitLine1);</span></span>
<span class="line"><span>      this.leftAxis.addLimitLine(this.limitLine2);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	// 设置图表右Y轴信息</span></span>
<span class="line"><span>    this.rightAxis = this.model.getAxisRight();</span></span>
<span class="line"><span>    if (this.rightAxis) {</span></span>
<span class="line"><span>      this.rightAxis.setEnabled(false);</span></span>
<span class="line"><span>      this.rightAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	// 设置X轴信息</span></span>
<span class="line"><span>    this.xAxis = this.model.getXAxis();</span></span>
<span class="line"><span>    if (this.xAxis) {</span></span>
<span class="line"><span>      this.xAxis.setPosition(XAxisPosition.BOTTOM);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>	// 为图表设置markerView</span></span>
<span class="line"><span>    this.normalMarker = new MarkerView();</span></span>
<span class="line"><span>    this.model.setMarker(this.normalMarker);</span></span>
<span class="line"><span>    // 也可设置定义图表MarkerView</span></span>
<span class="line"><span>    this.stackMarker = new CustomMarkerView();</span></span>
<span class="line"><span>	// 生成单一颜色数据</span></span>
<span class="line"><span>    this.data = this.getNormalData();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 按Y轴刻度范围绘制多种颜色数据</span></span>
<span class="line"><span>    this.data = this.getSegmentationData();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 高亮最高点最低点数据</span></span>
<span class="line"><span>    this.data = this.getTopAndBottomHighlightData();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 将数据与图表配置类绑定</span></span>
<span class="line"><span>    this.model.setData(this.data);</span></span>
<span class="line"><span>    // 设置图表最大的X轴显示范围，如不设置，则默认显示全部数据</span></span>
<span class="line"><span>    this.model.setVisibleXRangeMaximum(20);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getNormalData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;WaterfallEntry&gt; = new JArrayList&lt;WaterfallEntry&gt;();</span></span>
<span class="line"><span>// 设置标记点位置及颜色</span></span>
<span class="line"><span>let h1 = new WaterfallHighlight(20, 30, Color.Gray);</span></span>
<span class="line"><span>let h2 = new WaterfallHighlight(30, 40, Color.Gray);</span></span>
<span class="line"><span>let h3 = new WaterfallHighlight(40, 60, Color.Green);</span></span>
<span class="line"><span>let h4 = new WaterfallHighlight(60, 70, Color.Red);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    values.add(new WaterfallEntry(1, 10, 30, undefined, undefined, h1));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(2, 15, 50));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(4, 5, 95, undefined, undefined, h2, h3, h4));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(6, 45, 80, undefined, undefined, h2, h3));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.dataSet = new WaterfallDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    this.dataSet.setHighLightColor(Color.Gray);</span></span>
<span class="line"><span>    this.dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    // 为柱体添加颜色信息</span></span>
<span class="line"><span>    this.dataSet.setColorByColor(Color.Pink);</span></span>
<span class="line"><span>    this.dataSet.setValueTextSize(10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(this.dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let barData: BarData = new BarData(dataSetList);</span></span>
<span class="line"><span>    //设置瀑布图宽度</span></span>
<span class="line"><span>    barData.setBarWidth(0.3);</span></span>
<span class="line"><span>     //设置顶部圆角半径</span></span>
<span class="line"><span>    barData.setTopRadius(1);</span></span>
<span class="line"><span>    return barData;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getSegmentationData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;WaterfallEntry&gt; = new JArrayList&lt;WaterfallEntry&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    values.add(new WaterfallEntry(1, 10, 70));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(2, 15, 80));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.dataSet = new WaterfallDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    this.dataSet.setHighLightColor(Color.Gray);</span></span>
<span class="line"><span>    this.dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    this.dataSet.setColorByColor(Color.Pink);</span></span>
<span class="line"><span>    this.dataSet.setValueTextSize(10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 根据Y刻度范围设置颜色</span></span>
<span class="line"><span>    let highlightList: WaterfallHighlight[] = [];</span></span>
<span class="line"><span>    highlightList.push(new WaterfallHighlight(0, 40, Color.Green));</span></span>
<span class="line"><span>    highlightList.push(new WaterfallHighlight(40, 60, Color.Orange));</span></span>
<span class="line"><span>    highlightList.push(new WaterfallHighlight(60, 100, Color.Pink));</span></span>
<span class="line"><span>    this.dataSet.setYAxisSegmentationColors(highlightList);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(this.dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let barData: BarData = new BarData(dataSetList);</span></span>
<span class="line"><span>    barData.setBarWidth(0.3);</span></span>
<span class="line"><span>    return barData;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getTopAndBottomHighlightData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;WaterfallEntry&gt; = new JArrayList&lt;WaterfallEntry&gt;();</span></span>
<span class="line"><span>let highlightList: WaterfallHighlight[] = [];</span></span>
<span class="line"><span>// Y刻度范围颜色设置</span></span>
<span class="line"><span>highlightList.push(new WaterfallHighlight(0, 40, Color.Green));</span></span>
<span class="line"><span>highlightList.push(new WaterfallHighlight(40, 60, Color.Orange));</span></span>
<span class="line"><span>highlightList.push(new WaterfallHighlight(60, 100, Color.Pink));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 瀑布图数据封装</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(1, 10, 90));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(2, 15, 80));</span></span>
<span class="line"><span>    values.add(new WaterfallEntry(3, 20, 90));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.dataSet = new WaterfallDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    // 设置瀑布图选中时颜色</span></span>
<span class="line"><span>    this.dataSet.setHighLightColor(Color.Gray);</span></span>
<span class="line"><span>    this.dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    // 设置瀑布图颜色</span></span>
<span class="line"><span>    this.dataSet.setColorByColor(Color.Pink);</span></span>
<span class="line"><span>    // Y刻度范围颜色设置</span></span>
<span class="line"><span>     this.dataSet.setYAxisSegmentationColors(highlightList);</span></span>
<span class="line"><span>    // 最高点最低点是否高亮</span></span>
<span class="line"><span>    this.dataSet.setEnableMaxOrMinHighlightColor(true);</span></span>
<span class="line"><span>    // 最高点高亮时颜色设置</span></span>
<span class="line"><span>    this.dataSet.setMaxyHighlightColor(Color.Brown);</span></span>
<span class="line"><span>    // 最低点高亮时颜色设置</span></span>
<span class="line"><span>    this.dataSet.setMinyHighlightColor(Color.Yellow);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(this.dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let barData: BarData = new BarData(dataSetList);</span></span>
<span class="line"><span>    barData.setBarWidth(0.3);</span></span>
<span class="line"><span>    return barData;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到瀑布图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过dataResult.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>WaterfallChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const u=n(l,[["render",t]]);export{g as __pageData,u as default};
