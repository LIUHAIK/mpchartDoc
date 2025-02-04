import{_ as n,c as a,a7 as p,o as l}from"./chunks/framework.CS1J3kmr.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/radar-chart.md","filePath":"guide/radar-chart.md"}'),e={name:"guide/radar-chart.md"};function i(t,s,c,r,o,d){return l(),a("div",null,s[0]||(s[0]=[p(`<p>雷达图 雷达图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 导入一些图表相关的组件和类</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>ChartColor,  // 图表颜色类</span></span>
<span class="line"><span>JArrayList,  // 工具类：数据集合</span></span>
<span class="line"><span>XAxis,  // 图表X轴部件</span></span>
<span class="line"><span>XAxisPosition,  // 图表X轴标签位置枚举类</span></span>
<span class="line"><span>Description,  // 图表Description(描述)部件</span></span>
<span class="line"><span>Legend,  // 图表Legend(图例)部件</span></span>
<span class="line"><span>OnChartValueSelectedListener,  // 数据选择监听</span></span>
<span class="line"><span>Highlight,  // 图表高亮数据</span></span>
<span class="line"><span>EntryOhos,  // 图表数据结构基础类</span></span>
<span class="line"><span>RadarEntry,  // 雷达图数据结构</span></span>
<span class="line"><span>RadarChart,  // 雷达图图表类</span></span>
<span class="line"><span>RadarDataSet,  // 雷达图数据集合</span></span>
<span class="line"><span>RadarChartModel,  // 雷达图配置构建类</span></span>
<span class="line"><span>IRadarDataSet,  // 雷达图数据集合的操作类</span></span>
<span class="line"><span>RadarData,  // 雷达图数据包</span></span>
<span class="line"><span>YAxis,  // 图表Y轴部件</span></span>
<span class="line"><span>IAxisValueFormatter,  // 轴数值格式化接口</span></span>
<span class="line"><span>AxisBase,  // 轴基础类</span></span>
<span class="line"><span>LegendVerticalAlignment,  // 图例垂直对齐方式枚举类</span></span>
<span class="line"><span>LegendHorizontalAlignment,  // 图例水平对齐方式枚举类</span></span>
<span class="line"><span>LegendOrientation,  // 图例方向枚举类</span></span>
<span class="line"><span>} from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>    private model: RadarChartModel = new RadarChartModel();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aboutToAppear() {</span></span>
<span class="line"><span>// Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span>// 设置雷达图数值选择监听器</span></span>
<span class="line"><span>this.model.setOnChartValueSelectedListener(this.valueSelectedListener);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取图表描述对象</span></span>
<span class="line"><span>    let description: Description | null = this.model.getDescription();</span></span>
<span class="line"><span>    if (description) {</span></span>
<span class="line"><span>      // 禁用图表描述</span></span>
<span class="line"><span>      description.setEnabled(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取图例对象</span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      // 启用图例</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例垂直对齐方式为顶部</span></span>
<span class="line"><span>      l.setVerticalAlignment(LegendVerticalAlignment.TOP);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例水平对齐方式为居中</span></span>
<span class="line"><span>      l.setHorizontalAlignment(LegendHorizontalAlignment.CENTER);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例方向为水平</span></span>
<span class="line"><span>      l.setOrientation(LegendOrientation.HORIZONTAL);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例不绘制在图表内部</span></span>
<span class="line"><span>      l.setDrawInside(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例X轴方向间隔</span></span>
<span class="line"><span>      l.setXEntrySpace(7);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例Y轴方向间隔</span></span>
<span class="line"><span>      l.setYEntrySpace(5);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置图例文字颜色为白色</span></span>
<span class="line"><span>      l.setTextColor(Color.White);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置雷达图网格线宽度、颜色和透明度</span></span>
<span class="line"><span>    this.model.setWebLineWidth(0.3);</span></span>
<span class="line"><span>    this.model.setWebColor(0xFFCCCCCC);</span></span>
<span class="line"><span>    this.model.setWebLineWidthInner(0.3);</span></span>
<span class="line"><span>    this.model.setWebColorInner(0xFFCCCCCC);</span></span>
<span class="line"><span>    this.model.setWebAlpha(100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置雷达图顶部的额外偏移量</span></span>
<span class="line"><span>    this.model.setExtraTopOffset(-100);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图标记视图对象</span></span>
<span class="line"><span>    this.normalMarker = new RadarMarkerView();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置雷达图标记</span></span>
<span class="line"><span>    this.model.setMarker(this.normalMarker);</span></span>
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
<span class="line"><span>      // 设置X轴标签文字大小</span></span>
<span class="line"><span>      xAxis.setTextSize(20);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴Y轴方向的偏移量</span></span>
<span class="line"><span>      xAxis.setYOffset(0);</span></span>
<span class="line"><span>      xAxis.setXOffset(0);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴坐标的最小间隔为1</span></span>
<span class="line"><span>      xAxis.setGranularity(1);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴标签数量为7</span></span>
<span class="line"><span>      xAxis.setLabelCount(7);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴数值格式化器</span></span>
<span class="line"><span>      xAxis.setValueFormatter(new valueFormatter());</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置X轴标签文字颜色为白色</span></span>
<span class="line"><span>      xAxis.setTextColor(Color.White);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取Y轴对象</span></span>
<span class="line"><span>    let yAxis: YAxis | null = this.model.getYAxis();</span></span>
<span class="line"><span>    if (yAxis) {</span></span>
<span class="line"><span>      // 设置Y轴标签数量为5，不强制使用整数标签</span></span>
<span class="line"><span>      yAxis.setLabelCount(5, false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置Y轴标签文字大小</span></span>
<span class="line"><span>      yAxis.setTextSize(20);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置Y轴的最小值为0</span></span>
<span class="line"><span>      yAxis.setAxisMinimum(0);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 设置Y轴的最大值为80</span></span>
<span class="line"><span>      yAxis.setAxisMaximum(80);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 不绘制Y轴标签</span></span>
<span class="line"><span>      yAxis.setDrawLabels(false);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置雷达图数据</span></span>
<span class="line"><span>    this.setData();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 设置雷达图的数据</span></span>
<span class="line"><span>  */</span></span>
<span class="line"><span>  private setData(): void {</span></span>
<span class="line"><span>  let mul = 80;  // 随机值的放大倍数</span></span>
<span class="line"><span>  let min = 20;  // 随机值的最小基准</span></span>
<span class="line"><span>  let cnt = 5;   // 数据点数量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图数据点集合</span></span>
<span class="line"><span>    let entries1: JArrayList&lt;RadarEntry&gt; = new JArrayList&lt;RadarEntry&gt;();</span></span>
<span class="line"><span>    let entries2: JArrayList&lt;RadarEntry&gt; = new JArrayList&lt;RadarEntry&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 注意: 将数据点添加到数据点数组中的顺序决定它们在图表中心周围的位置。</span></span>
<span class="line"><span>    for (let i = 0; i &lt; cnt; i++) {</span></span>
<span class="line"><span>      let val1 = (Math.random() * mul) + min;</span></span>
<span class="line"><span>      entries1.add(new RadarEntry(val1));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      let val2 = (Math.random() * mul) + min;</span></span>
<span class="line"><span>      entries2.add(new RadarEntry(val2));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图数据集</span></span>
<span class="line"><span>    let set1: RadarDataSet = new RadarDataSet(entries1, &quot;Last Week&quot;);</span></span>
<span class="line"><span>    set1.setColorByColor(ChartColor.rgb(103, 110, 129));</span></span>
<span class="line"><span>    set1.setFillColor(ChartColor.rgb(103, 110, 129));</span></span>
<span class="line"><span>    set1.setDrawFilled(true);</span></span>
<span class="line"><span>    set1.setFillAlpha(180);</span></span>
<span class="line"><span>    set1.setLineWidth(2);</span></span>
<span class="line"><span>    set1.setDrawHighlightCircleEnabled(true);</span></span>
<span class="line"><span>    set1.setDrawHighlightIndicators(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图数据集</span></span>
<span class="line"><span>    let set2: RadarDataSet = new RadarDataSet(entries2, &quot;This Week&quot;);</span></span>
<span class="line"><span>    set2.setColorByColor(ChartColor.rgb(121, 162, 175));</span></span>
<span class="line"><span>    set2.setFillColor(ChartColor.rgb(121, 162, 175));</span></span>
<span class="line"><span>    set2.setDrawFilled(true);</span></span>
<span class="line"><span>    set2.setFillAlpha(180);</span></span>
<span class="line"><span>    set2.setLineWidth(2);</span></span>
<span class="line"><span>    set2.setDrawHighlightCircleEnabled(true);</span></span>
<span class="line"><span>    set2.setDrawHighlightIndicators(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图数据集合</span></span>
<span class="line"><span>    let sets: JArrayList&lt;IRadarDataSet&gt; = new JArrayList&lt;IRadarDataSet&gt;();</span></span>
<span class="line"><span>    sets.add(set1);</span></span>
<span class="line"><span>    sets.add(set2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建雷达图数据对象</span></span>
<span class="line"><span>    let data: RadarData = new RadarData(sets);</span></span>
<span class="line"><span>    data.setValueTextSize(20);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 不绘制数据值</span></span>
<span class="line"><span>    data.setDrawValues(false);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置数据值文字颜色为白色</span></span>
<span class="line"><span>    data.setValueTextColor(Color.White);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置图表数据</span></span>
<span class="line"><span>    this.model.setData(data);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>添加数据到雷达图图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过data.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RadarChart({ model: this.model })</span></span>
<span class="line"><span>.width(&#39;100%&#39;)</span></span>
<span class="line"><span>.height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const m=n(e,[["render",i]]);export{g as __pageData,m as default};
