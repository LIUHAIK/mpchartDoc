import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/bar-chart.md","filePath":"guide/bar-chart.md"}'),l={name:"guide/bar-chart.md"};function t(i,s,r,c,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>柱状图 柱状图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {</span></span>
<span class="line"><span>BarChart, // 柱状图图表类</span></span>
<span class="line"><span>BarChartModel, // 柱状图配置构建类</span></span>
<span class="line"><span>BarData, // 柱状图数据包</span></span>
<span class="line"><span>BarDataSet, // 柱状图数据集合</span></span>
<span class="line"><span>BarEntry, // 柱状图数据结构</span></span>
<span class="line"><span>ChartGesture, // 手势事件模式</span></span>
<span class="line"><span>Description, // 图表Description(描述)部件</span></span>
<span class="line"><span>EntryOhos, // 图表数据结构基础类</span></span>
<span class="line"><span>Fill, // 图表填充类型构建类</span></span>
<span class="line"><span>Highlight, // 图表高亮数据</span></span>
<span class="line"><span>IBarDataSet, // 柱状图数据集合的操作类</span></span>
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
<span class="line"><span>// ...todoSomething</span></span>
<span class="line"><span>},</span></span>
<span class="line"><span>onNothingSelected: () =&gt; {</span></span>
<span class="line"><span>// ...todoSomething</span></span>
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
<span class="line"><span>    this.model = new BarChartModel();</span></span>
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
<span class="line"><span>	// 是否绘制图表的背景色，绘制范围为图表柱状图的绘制范围，不包含轴线之外的部分</span></span>
<span class="line"><span>    this.model.setDrawGridBackground(false);</span></span>
<span class="line"><span>    // 设置图表的背景色，颜色的规格需要满足CanvasRenderingContext2D.fillstyle/strokestyle规格</span></span>
<span class="line"><span>    this.model.setGridBackgroundColor(&#39;#500000ff&#39;)</span></span>
<span class="line"><span>    // 设置不绘制柱状图的柱体阴影背景</span></span>
<span class="line"><span>    this.model.setDrawBarShadow(false);</span></span>
<span class="line"><span>	// 设置柱状图的数值在柱体上方</span></span>
<span class="line"><span>    this.model.setDrawValueAboveBar(false);</span></span>
<span class="line"><span>    // 设置柱状图的高亮范围是否为整个柱体，只在堆叠柱状图中有区别</span></span>
<span class="line"><span>    this.model.setHighlightFullBarEnabled(false);</span></span>
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
<span class="line"><span>    // 将数据与图表配置类绑定</span></span>
<span class="line"><span>    this.model.setData(this.data);</span></span>
<span class="line"><span>    // 设置图表最大的X轴显示范围，如不设置，则默认显示全部数据</span></span>
<span class="line"><span>    this.model.setVisibleXRangeMaximum(20);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getNormalData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;BarEntry&gt; = new JArrayList&lt;BarEntry&gt;();</span></span>
<span class="line"><span>values.add(new BarEntry(1, 73.3));</span></span>
<span class="line"><span>values.add(new BarEntry(2, 5.4));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSet: BarDataSet = new BarDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    dataSet.setHighLightColor(Color.Black);</span></span>
<span class="line"><span>    dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    // 为柱体添加颜色信息</span></span>
<span class="line"><span>    dataSet.setColorByColor(Color.Pink);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let barData: BarData = new BarData(dataSetList);</span></span>
<span class="line"><span>    //设置柱状图宽度</span></span>
<span class="line"><span>    barData.setBarWidth(0.85);</span></span>
<span class="line"><span>    //设置顶部圆角半径</span></span>
<span class="line"><span>    barData.setTopRadius(5);</span></span>
<span class="line"><span>    return barData;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getGradientData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;BarEntry&gt; = new JArrayList&lt;BarEntry&gt;();</span></span>
<span class="line"><span>values.add(new BarEntry(1, 32.9));</span></span>
<span class="line"><span>values.add(new BarEntry(2, 44.7));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSet: BarDataSet = new BarDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    dataSet.setHighLightColor(Color.Black);</span></span>
<span class="line"><span>    dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    let startColor1: string = &#39;#ffffbb33&#39;;</span></span>
<span class="line"><span>    let startColor2: string = &#39;#ff33b5e5&#39;;</span></span>
<span class="line"><span>    let startColor3: string = &#39;#ffffbb33&#39;;</span></span>
<span class="line"><span>    let startColor4: string = &#39;#ff99cc00&#39;;</span></span>
<span class="line"><span>    let startColor5: string = &#39;#ffff4444&#39;;</span></span>
<span class="line"><span>    let endColor1: string = &#39;#ff0099cc&#39;;</span></span>
<span class="line"><span>    let endColor2: string = &#39;#ffaa66cc&#39;;</span></span>
<span class="line"><span>    let endColor3: string = &#39;#ff669900&#39;;</span></span>
<span class="line"><span>    let endColor4: string = &#39;#ffcc0000&#39;;</span></span>
<span class="line"><span>    let endColor5: string = &#39;#ffff8800&#39;;</span></span>
<span class="line"><span>    let gradientFills: JArrayList&lt;Fill&gt; = new JArrayList&lt;Fill&gt;();</span></span>
<span class="line"><span>    gradientFills.add(new Fill(startColor1, endColor1));</span></span>
<span class="line"><span>    gradientFills.add(new Fill(startColor2, endColor2));</span></span>
<span class="line"><span>    gradientFills.add(new Fill(startColor3, endColor3));</span></span>
<span class="line"><span>    gradientFills.add(new Fill(startColor4, endColor4));</span></span>
<span class="line"><span>    gradientFills.add(new Fill(startColor5, endColor5));</span></span>
<span class="line"><span>	// 为柱体添加渐变的颜色信息</span></span>
<span class="line"><span>    dataSet.setFills(gradientFills);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let barData: BarData = new BarData(dataSetList);</span></span>
<span class="line"><span>    barData.setBarWidth(0.85);</span></span>
<span class="line"><span>    return barData;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getStackData(): BarData {</span></span>
<span class="line"><span>let values: JArrayList&lt;BarEntry&gt; = new JArrayList&lt;BarEntry&gt;();</span></span>
<span class="line"><span>values.add(new BarEntry(1, [38.0, 28.0, 39.8]));</span></span>
<span class="line"><span>values.add(new BarEntry(2, [18.2, 16.1, 16.1]));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let set1: BarDataSet | null = null;</span></span>
<span class="line"><span>    set1 = new BarDataSet(values, &quot;Statistics Vienna 2014&quot;);</span></span>
<span class="line"><span>    set1.setDrawIcons(false);</span></span>
<span class="line"><span>    // 为柱体添加指定分段的颜色信息</span></span>
<span class="line"><span>    set1.setColorsByArr([Color.Red, Color.Green, Color.Pink]);</span></span>
<span class="line"><span>    set1.setStackLabels([&quot;Births&quot;, &quot;Divorces&quot;, &quot;Marriages&quot;]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSets: JArrayList&lt;IBarDataSet&gt; = new JArrayList&lt;IBarDataSet&gt;();</span></span>
<span class="line"><span>    dataSets.add(set1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let data: BarData = new BarData(dataSets);</span></span>
<span class="line"><span>    data.setValueTextColor(Color.White);</span></span>
<span class="line"><span>    return data;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到自定义竖向柱状图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过barData.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BarChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;30%&#39;)</span></span></code></pre></div>`,4)]))}const g=n(l,[["render",t]]);export{u as __pageData,g as default};
