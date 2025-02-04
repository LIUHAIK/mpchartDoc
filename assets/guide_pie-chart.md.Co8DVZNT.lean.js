import{_ as n,c as a,a7 as p,o as e}from"./chunks/framework.CS1J3kmr.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/pie-chart.md","filePath":"guide/pie-chart.md"}'),l={name:"guide/pie-chart.md"};function t(i,s,c,o,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<p>饼状图 饼状图数据初始化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> import {</span></span>
<span class="line"><span>     ChartGesture,         // 图表手势</span></span>
<span class="line"><span>     ColorTemplate,        // 颜色模板</span></span>
<span class="line"><span>     EntryOhos,            // 图表数据结构基础类</span></span>
<span class="line"><span>     Highlight,            // 高亮</span></span>
<span class="line"><span>     IPieDataSet,          // 饼状图数据集接口</span></span>
<span class="line"><span>     JArrayList,           // 工具类：数据集合</span></span>
<span class="line"><span>     Legend,               // 图表Legend(图例)部件</span></span>
<span class="line"><span>     MPPointF,             // MPPointF</span></span>
<span class="line"><span>     OnChartGestureListener,   // 图表手势监听器接口</span></span>
<span class="line"><span>     OnChartValueSelectedListener,  // 图表数值选择监听器接口</span></span>
<span class="line"><span>     PieChart,             // 饼状图组件</span></span>
<span class="line"><span>     PieChartModel,        // 饼状图配置构建类</span></span>
<span class="line"><span>     PieData,              // 饼状图数据包</span></span>
<span class="line"><span>     PieDataSet,           // 饼状图数据集合</span></span>
<span class="line"><span>     PieEntry,             // 饼状图数据结构</span></span>
<span class="line"><span>   } from &#39;@ohos/mpchart&#39;;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 图表数据初始化</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Step1:必须：初始化图表配置构建类</span></span>
<span class="line"><span>  private model: PieChartModel = new PieChartModel();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  aboutToAppear() {</span></span>
<span class="line"><span>    // Step2：配置图表的特定样式，各部件间没有先后之分</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let l: Legend | null = this.model.getLegend();</span></span>
<span class="line"><span>    if (l) {</span></span>
<span class="line"><span>      l.setEnabled(true);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.model.animateX(1000);  // 启用X轴动画效果，动画持续时间为1000毫秒</span></span>
<span class="line"><span>    this.model.setUsePercentValues(true);  // 使用百分比值</span></span>
<span class="line"><span>    this.model.getDescription()?.setEnabled(false);  // 禁用描述信息</span></span>
<span class="line"><span>    this.model.setExtraOffsets(5, 10, 5, 5);  // 设置额外偏移量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setOnChartGestureListener(this.chartGestureListener);  // 设置图表手势监听器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setDragDecelerationFrictionCoef(0.95);  // 设置拖动减速摩擦系数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setCenterText(&quot;mpchart&quot;);  // 设置中心文本</span></span>
<span class="line"><span>    this.model.setCenterTextSize(22);  // 设置中心文本大小</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setDrawHoleEnabled(true);  // 启用绘制中心孔</span></span>
<span class="line"><span>    this.model.setHoleColor(Color.White);  // 设置中心孔颜色</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setTransparentCircleColor(Color.Red);  // 设置透明圆环颜色</span></span>
<span class="line"><span>    this.model.setTransparentCircleAlpha(110);  // 设置透明圆环透明度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setHoleRadius(58);  // 设置中心孔半径</span></span>
<span class="line"><span>    this.model.setTransparentCircleRadius(61);  // 设置透明圆环半径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setDrawCenterText(true);  // 绘制中心文本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.model.setRotationAngle(0);  // 设置旋转角度</span></span>
<span class="line"><span>    // 通过触摸启用图表的旋转</span></span>
<span class="line"><span>    this.model.setRotationEnabled(true);</span></span>
<span class="line"><span>    this.model.setHighlightPerTapEnabled(true);  // 启用点击高亮效果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.setData(4, 10);  // 设置图表数据</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   // 初始化饼状图数据</span></span>
<span class="line"><span>  private setData(count: number, range: number): void {</span></span>
<span class="line"><span>    let entries: JArrayList&lt;PieEntry&gt; = new JArrayList&lt;PieEntry&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // NOTE: The order of the entries when being added to the entries array determines their position around the center of</span></span>
<span class="line"><span>    // the chart.</span></span>
<span class="line"><span>    for (let i = 0; i &lt; count; i++) {</span></span>
<span class="line"><span>      entries.add(new PieEntry(((Math.random() * range) + range / 5),</span></span>
<span class="line"><span>        this.parties[i % this.parties.length], undefined, undefined));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建饼状图数据集对象，设置数据项和数据集名称</span></span>
<span class="line"><span>    let dataSet: PieDataSet = new PieDataSet(entries, &quot;Election Results&quot;);</span></span>
<span class="line"><span>    // 设置是否绘制数据项图标</span></span>
<span class="line"><span>    dataSet.setDrawIcons(false);</span></span>
<span class="line"><span>    // 设置数据项之间的间隙</span></span>
<span class="line"><span>    dataSet.setSliceSpace(1);</span></span>
<span class="line"><span>    // 设置数据项图标的偏移量</span></span>
<span class="line"><span>    dataSet.setIconsOffset(new MPPointF(0, 40));</span></span>
<span class="line"><span>    // 设置选中时数据项的偏移距离</span></span>
<span class="line"><span>    dataSet.setSelectionShift(5);</span></span>
<span class="line"><span>    // 设置数据项文本颜色</span></span>
<span class="line"><span>    dataSet.setValueTextColor(Color.White);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // add a lot of colors</span></span>
<span class="line"><span>    let colors: JArrayList&lt;number&gt; = new JArrayList();</span></span>
<span class="line"><span>    for (let index = 0; index &lt; ColorTemplate.VORDIPLOM_COLORS.length; index++) {</span></span>
<span class="line"><span>      colors.add(ColorTemplate.VORDIPLOM_COLORS[index]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; ColorTemplate.JOYFUL_COLORS.length; index++) {</span></span>
<span class="line"><span>      colors.add(ColorTemplate.JOYFUL_COLORS[index]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for (let index = 0; index &lt; ColorTemplate.COLORFUL_COLORS.length; index++) {</span></span>
<span class="line"><span>      colors.add(ColorTemplate.COLORFUL_COLORS[index]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let index = 0; index &lt; ColorTemplate.LIBERTY_COLORS.length; index++) {</span></span>
<span class="line"><span>      colors.add(ColorTemplate.LIBERTY_COLORS[index]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    for (let index = 0; index &lt; ColorTemplate.PASTEL_COLORS.length; index++) {</span></span>
<span class="line"><span>      colors.add(ColorTemplate.PASTEL_COLORS[index]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    colors.add(ColorTemplate.getHoloBlue());</span></span>
<span class="line"><span>    dataSet.setColorsByList(colors);</span></span>
<span class="line"><span>    // 生成图表数据</span></span>
<span class="line"><span>    let data: PieData = new PieData(dataSet);</span></span>
<span class="line"><span>    // 将数据与图表配置类绑定</span></span>
<span class="line"><span>    this.model.setData(data);</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>添加数据到自定义饼状图图表组件 // 为组件设置配置构建类，如果需要在页面初始化就显示图表，则需要在aboutToAppear方法中完成图表数据构建 // 如果在之后通过事件触发， // 可通过dataSet.notifyDataSetChanged();来触发数据更新， // 可通过this.model.notifyDataSetChanged();来触发坐标轴数据更新， // 可通过this.model.invalidate();来触发绘制更新。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PieChart({ model: this.model })</span></span>
<span class="line"><span>  .width(&#39;100%&#39;)</span></span>
<span class="line"><span>  .height(&#39;70%&#39;)</span></span></code></pre></div>`,4)]))}const C=n(l,[["render",t]]);export{m as __pageData,C as default};
