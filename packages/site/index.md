---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MpChart 图表库"
  tagline: MpChart是一个包含各种类型图表的图表库，方便开发者快速实现图表UI，主要包括线形图、柱状图、饼状图、蜡烛图、气泡图、雷达图、瀑布图等自定义图表库。
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 官方网站
      link: https://gitee.com/openharmony-tpc/ohos_mpchart
  image:
      src: /mpchartDemo.png
      alt: MpChart

features:
  - title: 图表类型丰富
    details: 包括折线图、柱状图、饼图、散点图、雷达图、组合图等
    icon:
      src: /rocket.svg
      width: 40
  - title: 高度可定制
    details: 样式定制，交互定制
    icon:
      src: /naive-ui.svg
      width: 33
  - title: 动态交互性强
    details: 支持实时添加、删除或更新数据点
    icon:
      src: /element-plus.svg
      width: 40
    
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #18A058 30%, #00C9D7);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #18A058 50%, #00C9D7 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPFeatures .details a {
    text-decoration-line: underline;
    text-underline-offset: 2px;
}

@media (min-width: 960px) {
    .image-src {
        margin-top:10px;
        max-width: 440px !important;
    }
}
</style>
