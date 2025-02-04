import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/line-chart.md","filePath":"guide/line-chart.md"}'),l={name:"guide/line-chart.md"};function i(t,s,c,o,r,h){return e(),a("div",null,s[0]||(s[0]=[p(`<p>线形图 线形图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import {</span></span>
<span class="line"><span>JArrayList, // 工具类：数据集合</span></span>
<span class="line"><span>XAxis, // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition, // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>YAxis, // 图表Y轴部件</span></span>
<span class="line"><span>Description, // 图表描述标签</span></span>
<span class="line"><span>Legend, // 图表Legend(图例)部件</span></span>
<span class="line"><span>OnChartValueSelectedListener, //</span></span>
<span class="line"><span>Highlight,// 图表高亮数据</span></span>
<span class="line"><span>EntryOhos,// 图表数据结构基础类</span></span>
<span class="line"><span>YAxisLabelPosition,// 图表Y轴标签位置枚举类</span></span>
<span class="line"><span>LineDataSet, //线形图数据集合</span></span>
<span class="line"><span>ILineDataSet, // 线形图数据集合的操作类</span></span>
<span class="line"><span>LineData, //线形图数据包</span></span>
<span class="line"><span>Mode, //线形图形状</span></span>
<span class="line"><span>LineChart, // 线形图图表类</span></span>
<span class="line"><span>LineChartModel,// 线形图配置构建类</span></span>
<span class="line"><span>LimitLine, // 图表LimitLine</span></span>
<span class="line"><span>LimitLabelPosition, // 图表的LimitLine标签位置枚举类</span></span>
<span class="line"><span>ChartColorStop, //颜色类</span></span>
<span class="line"><span>LegendForm, //图例形状</span></span>
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
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  	// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>    this.model = new LineChartModel();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // Step2:配置图表指定样式，各部件间没有先后之分</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 为图表添加数据选择的监听器</span></span>
<span class="line"><span>    this.model.setOnChartValueSelectedListener(this.valueSelectedListener);</span></span>
<span class="line"><span>	// 获取图表描述部件，设置图表描述部件不可用，即图表不进行绘制描述部件</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription()</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	// 获取图表图例部件，设置图表图例形状为线形</span></span>
<span class="line"><span>    let legend: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (legend) {</span></span>
<span class="line"><span>      legend.setEnabled(true);</span></span>
<span class="line"><span>      // draw legend entries as lines</span></span>
<span class="line"><span>      legend.setForm(LegendForm.LINE);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置图表数据最大的绘制数，如果超过该数值，则不进行绘制图表的数值标签</span></span>
<span class="line"><span>    this.model.setMaxVisibleValueCount(60);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	// 为左Y轴设置LimitLine,可设置限制线的宽度，线段样式，限制标签的位置，标签字体大小等</span></span>
<span class="line"><span>    this.limitLine1 = new LimitLine(120, &#39;Upper Limit&#39;);</span></span>
<span class="line"><span>    this.limitLine1.setLineWidth(4);</span></span>
<span class="line"><span>    //设置虚线样式</span></span>
<span class="line"><span>    this.limitLine1.enableDashedLine(10, 10, 0);</span></span>
<span class="line"><span>    //设置标签位置</span></span>
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
<span class="line"><span>      //设置绘制标签个数</span></span>
<span class="line"><span>      this.leftAxis.setLabelCount(8, false);</span></span>
<span class="line"><span>      //设置标签位置</span></span>
<span class="line"><span>      this.leftAxis.setPosition(YAxisLabelPosition.OUTSIDE_CHART)</span></span>
<span class="line"><span>      //设置距离顶部距离</span></span>
<span class="line"><span>      this.leftAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      //设置最大值</span></span>
<span class="line"><span>      this.leftAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>      //设置最小值</span></span>
<span class="line"><span>      this.leftAxis.setAxisMaximum(200);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 设置图表右Y轴信息</span></span>
<span class="line"><span>    this.rightAxis = this.model.getAxisRight();</span></span>
<span class="line"><span>    if (this.rightAxis) {</span></span>
<span class="line"><span>      this.rightAxis.setLabelCount(8, false);</span></span>
<span class="line"><span>      this.rightAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>      this.rightAxis.setSpaceTop(15);</span></span>
<span class="line"><span>      this.rightAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>      this.rightAxis.setAxisMaximum(200);</span></span>
<span class="line"><span>      this.rightAxis.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	// 设置X轴信息</span></span>
<span class="line"><span>        this.xAxis = this.model.getXAxis();</span></span>
<span class="line"><span>    if (this.xAxis) {</span></span>
<span class="line"><span>      this.xAxis.setPosition(XAxisPosition.BOTTOM);</span></span>
<span class="line"><span>      this.xAxis.setDrawGridLines(false);</span></span>
<span class="line"><span>      this.xAxis.setGranularity(1);</span></span>
<span class="line"><span>      this.xAxis.setLabelCount(7);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>	// 为图表设置markerView</span></span>
<span class="line"><span>    this.normalMarker = new MarkerView();</span></span>
<span class="line"><span>    this.model.setMarker(this.normalMarker);</span></span>
<span class="line"><span>    // 也可设置定义图表MarkerView</span></span>
<span class="line"><span>    this.stackMarker = new CustomMarkerView();</span></span>
<span class="line"><span>    // 生成图表数据</span></span>
<span class="line"><span>    let lineData: LineData = this.getLineData();</span></span>
<span class="line"><span>    // 将数据与图表配置类绑定</span></span>
<span class="line"><span>    this.model.setData(lineData);</span></span>
<span class="line"><span>    // 设置图表最大的X轴显示范围，如不设置，则默认显示全部数据</span></span>
<span class="line"><span>    this.model.setVisibleXRangeMaximum(20);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private getLineData(): LineData {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let start: number = 1;</span></span>
<span class="line"><span>    let values: JArrayList&lt;EntryOhos&gt; = new JArrayList&lt;EntryOhos&gt;();</span></span>
<span class="line"><span>    for (let i = start; i &lt; 20; i++) {</span></span>
<span class="line"><span>      let val = Number(Math.random() * 141);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (Math.random() * 100 &lt; 25) {</span></span>
<span class="line"><span>        values.add(new EntryOhos(i, val));</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        values.add(new EntryOhos(i, val));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.dataSet = new LineDataSet(values, &#39;DataSet&#39;);</span></span>
<span class="line"><span>    this.dataSet.setHighLightColor(Color.Black);</span></span>
<span class="line"><span>    this.dataSet.setDrawIcons(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.dataSet.setMode(Mode.LINEAR); //直线模式</span></span>
<span class="line"><span>    this.dataSet.setDrawCircles(true); //折线点画圆圈</span></span>
<span class="line"><span>    this.dataSet.setDrawCircleHole(false); //设置内部孔</span></span>
<span class="line"><span>    this.dataSet.setColorByColor(Color.Black); //设置折线颜色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //渐变色填充</span></span>
<span class="line"><span>    let gradientFillColor = new JArrayList&lt;ChartColorStop&gt;();</span></span>
<span class="line"><span>    gradientFillColor.add([&quot;#0C0099CC&quot;, 0.2]);</span></span>
<span class="line"><span>    gradientFillColor.add([&quot;#7F0099CC&quot;, 0.4]);</span></span>
<span class="line"><span>    gradientFillColor.add([&quot;#0099CC&quot;, 1.0]);</span></span>
<span class="line"><span>    this.dataSet.setGradientFillColor(gradientFillColor);</span></span>
<span class="line"><span>    this.dataSet.setDrawFilled(true);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置数据点的颜色</span></span>
<span class="line"><span>    this.dataSet.setCircleColor(Color.Blue); // 可以设置为想要的颜色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置数据点的半径</span></span>
<span class="line"><span>    this.dataSet.setCircleRadius(4); // 设置半径大小</span></span>
<span class="line"><span>    this.dataSet.setCircleHoleRadius(2); //设置内径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let dataSetList: JArrayList&lt;ILineDataSet&gt; = new JArrayList&lt;ILineDataSet&gt;();</span></span>
<span class="line"><span>    dataSetList.add(this.dataSet);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let lineData: LineData = new LineData(dataSetList);</span></span>
<span class="line"><span>    return lineData</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到自定义线形图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过lineData.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LineChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;30%&#39;)</span></span></code></pre></div>`,4)]))}const m=n(l,[["render",i]]);export{L as __pageData,m as default};
