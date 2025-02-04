import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/candle-chart.md","filePath":"guide/candle-chart.md"}'),l={name:"guide/candle-chart.md"};function i(t,s,c,r,o,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>蜡烛图 蜡烛图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导入一些图表相关的组件和类</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>AxisDependency, // 轴依赖类</span></span>
<span class="line"><span>CandleData, // 蜡烛图数据包</span></span>
<span class="line"><span>CandleDataSet, // 蜡烛图数据集合</span></span>
<span class="line"><span>CandleEntry, // 蜡烛图数据结构</span></span>
<span class="line"><span>CandleStickChart, // 蜡烛图图表类</span></span>
<span class="line"><span>CandleStickChartModel, // 蜡烛图配置构建类</span></span>
<span class="line"><span>ChartPixelMap, // 图表像素映射类</span></span>
<span class="line"><span>Description, // 图表Description(描述)部件</span></span>
<span class="line"><span>JArrayList, // 工具类：数据集合</span></span>
<span class="line"><span>Legend, // 图表Legend(图例)部件</span></span>
<span class="line"><span>Style, // 图表样式类</span></span>
<span class="line"><span>XAxis, // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition, // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>YAxis // 图表Y轴部件</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span>// 图表数据初始化</span></span>
<span class="line"><span>// Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>this.model = new CandleStickChartModel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span>    //设置描述</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription();</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //设置图例</span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>      this.model.setMaxVisibleValueCount(60);  // 设置图表最大可见数值数量为60</span></span>
<span class="line"><span>      this.model.setPinchZoom(false);  // 禁用捏合缩放</span></span>
<span class="line"><span>      this.model.setDrawGridBackground(true);  // 启用绘制网格背景</span></span>
<span class="line"><span>      this.model.setGridBackgroundColor(Color.White);  // 设置网格背景颜色为白色</span></span>
<span class="line"><span>      this.setData(40, 100);  // 设置图表数据</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      let xAxis: XAxis | null = this.model.getXAxis();</span></span>
<span class="line"><span>      if (xAxis) {</span></span>
<span class="line"><span>        xAxis.setPosition(XAxisPosition.BOTTOM);  // 设置X轴位置在底部</span></span>
<span class="line"><span>        xAxis.setDrawGridLines(true);  // 启用绘制X轴网格线</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      let leftAxis: YAxis | null = this.model.getAxisLeft();</span></span>
<span class="line"><span>      if (leftAxis) {</span></span>
<span class="line"><span>        leftAxis.setLabelCount(7, false);  // 设置左侧Y轴标签数量为7，不强制使用整数标签</span></span>
<span class="line"><span>        leftAxis.setDrawGridLines(true);  // 启用绘制左侧Y轴网格线</span></span>
<span class="line"><span>        leftAxis.setDrawAxisLine(true);  // 启用绘制左侧Y轴轴线</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      let rightAxis: YAxis | null = this.model.getAxisRight();</span></span>
<span class="line"><span>      if (rightAxis) {</span></span>
<span class="line"><span>        rightAxis.setLabelCount(7, false);  // 设置右侧Y轴标签数量为7，不强制使用整数标签</span></span>
<span class="line"><span>        rightAxis.setDrawGridLines(true);  // 启用绘制右侧Y轴网格线</span></span>
<span class="line"><span>        rightAxis.setDrawAxisLine(true);  // 启用绘制右侧Y轴轴线</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      let legend: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>      if (legend) {</span></span>
<span class="line"><span>        legend.setEnabled(true);  // 启用图例</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化蜡烛图数据</span></span>
<span class="line"><span>private setData(count: number, range: number):void{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let values: JArrayList&lt;CandleEntry&gt; = new JArrayList&lt;CandleEntry&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>      let val: number = (Math.random() * 40) + (range + 3);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let high: number = Number(Math.random() * 9) + 8.0;</span></span>
<span class="line"><span>      let low: number = Number(Math.random() * 9) + 8.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let open: number = Number(Math.random() * 6) + 1.0;</span></span>
<span class="line"><span>      let close: number = Number(Math.random() * 6) + 1.0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let even: boolean = i % 2 == 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      values.add(new CandleEntry(</span></span>
<span class="line"><span>        i,</span></span>
<span class="line"><span>        val + high,</span></span>
<span class="line"><span>        val - low,</span></span>
<span class="line"><span>        even ? val + open : val - open,</span></span>
<span class="line"><span>        even ? val - close : val + close,</span></span>
<span class="line"><span>        new ChartPixelMap()));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 创建蜡烛图数据集，并设置数据集的名称为 &quot;Data Set&quot;</span></span>
<span class="line"><span>      let dataSet: CandleDataSet = new CandleDataSet(values, &quot;Data Set&quot;);</span></span>
<span class="line"><span>      // 设置是否绘制图标为 false</span></span>
<span class="line"><span>      dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>      // 设置数据集的轴依赖为左侧Y轴</span></span>
<span class="line"><span>      dataSet.setAxisDependency(AxisDependency.LEFT);</span></span>
<span class="line"><span>      // 设置蜡烛图阴影颜色为灰色</span></span>
<span class="line"><span>      dataSet.setShadowColor(Color.Gray);</span></span>
<span class="line"><span>      // 设置蜡烛图阴影宽度为 0.7</span></span>
<span class="line"><span>      dataSet.setShadowWidth(0.7);</span></span>
<span class="line"><span>      // 设置蜡烛图下跌蜡烛的绘制样式为填充</span></span>
<span class="line"><span>      dataSet.setDecreasingPaintStyle(Style.FILL);</span></span>
<span class="line"><span>      // 设置蜡烛图下跌蜡烛的颜色为红色</span></span>
<span class="line"><span>      dataSet.setDecreasingColor(Color.Red);</span></span>
<span class="line"><span>      // 设置蜡烛图上涨蜡烛的颜色为绿色</span></span>
<span class="line"><span>      dataSet.setIncreasingColor(Color.Green);</span></span>
<span class="line"><span>      // 设置蜡烛图上涨蜡烛的绘制样式为描边</span></span>
<span class="line"><span>      dataSet.setIncreasingPaintStyle(Style.STROKE);</span></span>
<span class="line"><span>      // 设置蜡烛图中性蜡烛的颜色为蓝色</span></span>
<span class="line"><span>      dataSet.setNeutralColor(Color.Blue);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let data: CandleData = new CandleData([dataSet]);</span></span>
<span class="line"><span>    data.setValueTextSize(7);</span></span>
<span class="line"><span>    if (this.model) {</span></span>
<span class="line"><span>      this.model.resetTracking();</span></span>
<span class="line"><span>      this.model.setData(data);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2)]))}const m=n(l,[["render",i]]);export{h as __pageData,m as default};
