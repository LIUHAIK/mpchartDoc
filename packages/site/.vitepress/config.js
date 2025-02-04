import { defineConfig } from 'vitepress'
import { GUIDE_STARTED} from './resource'

const isProd = process.env.npm_lifecycle_event==='build'

const base = isProd ? "/mpchartDoc/":"/"
const head = [ ['link', { rel: 'icon', href: `${base}logo.svg` }] ]

if(isProd){
    console.log(`➕ 百度统计代码...`)
    //增加百度统计
    head.push([
        'script',
        {},
        `
        window._hmt = window._hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2011a384a05d083dddbac20462902ad2";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
        })();
        `
    ])
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base,
    title: "MpChart 图表库",
    description: "支持多种类型的OpenHarmony图表库",
    lastUpdated: false,
    cleanUrls: true,            // Github Pages 支持简洁 URL

    markdown: { lineNumbers: false, image:{ lazyLoading: true } },
    head,
    themeConfig: {
        logo: '/logo.svg',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: GUIDE_STARTED },
            // { text: '在线设计器', link: DEMO_DESIGNER, target:"_blank" },
            // {
            //     text: '在线渲染器',
            //     items:[
            //         { text: '汇总展示', link: DEMO_RENDER, target:"_blank" },
            //         { text: 'Vant4（有赞出品）', link: '/demo/render-vant', target:"_blank" },
            //         { text: 'Varlet（Material）', link: '/demo/render-varlet', target:"_blank" },
            //         { text: 'Tree（极简风）', link: '/demo/render-tree', target:"_blank" }
            //     ]
            // }
        ],
        sidebar: [
            {
                text: '使用说明',
                items: [
                    { text: '快速开始 / Start', link: GUIDE_STARTED },
                    { text: '柱状图 / BarChart', link: '/guide/bar-chart' },
                    { text: '线形图 / LineChart', link:'/guide/line-chart' },
                    { text: '饼状图 / PieChart', link: '/guide/pie-chart' },
                    { text: '气泡图 / BubbleChart', link: '/guide/bubble-chart' },
                    { text: '蜡烛图 / CandleChart', link: '/guide/candle-chart' },
                    { text: '组合图 / CombinedChart', link: '/guide/combined-chart' },
                    { text: '雷达图 / RadarChart', link: '/guide/radar-chart' },
                    { text: '散点图 / ScatterChart', link: '/guide/scatter-chart' },
                    { text: '瀑布图 / WaterfallChart', link: '/guide/waterfall-chart' }
                ]
            },
            {
                text: "接口说明",
                items: [
                    { text: '1.ChartModel', link: '/guide/api-ChartModel' },
                    { text: '2.BarLineChartBaseModel', link: '/guide/api-BarLineChartBaseModel' },
                    { text: '3.ComponentBase', link: '/guide/api-ComponentBase' },
                    { text: '4.AxisBase', link: '/guide/api-AxisBase' },
                    { text: '5.XAxis', link: '/guide/api-XAxis' },
                    { text: '6.YAxis', link: '/guide/api-YAxis' },
                    { text: '7.自定义MarkerView传入', link: '/guide/api-MarkerView' },
                    { text: '8.WaterfallDataSet', link: '/guide/api-WaterfallDataSet' },
                    { text: '9.ChartData', link: '/guide/api-ChartData' },
                    { text: '10.BarLineScatterCandleBubbleDataSet', link: '/guide/api-BarLineScatterCandleBubbleDataSet' },
                    { text: '11.LineScatterCandleRadarDataSet', link: '/guide/api-LineScatterCandleRadarDataSet' },
                ]
            },
            {
                text: "常见问题",
                items: [
                    { text: '常见问题 / FAQ', link: '/guide/faqs' }
                ]
            },
            {
                text: "其它",
                items: [
                    { text: '更新日志 / Changelog', link: '/guide/changelog' }
                ]
            }
        ],
        outline:{
            level: [2,4],
            label: '文档目录'
        },
        footer: {
            message: '基于 Apache License 2.0 许可发布',
            copyright: '版权所有 '
        },
        socialLinks: [
            { icon: 'gitee', link: 'https://gitee.com/openharmony-tpc/ohos_mpchart' },
        ],
        lastUpdated : true
        // lastUpdated: {
        //     text: '更新于',
        //     formatOptions: {
        //         dateStyle: 'full',
        //         timeStyle: 'medium'
        //     }
        // }
    },
    vite:{
        server: {
            port: 8080
        },
        ssr: {
            /**
             * Named export 'dateZhCN' not found. The requested module 'naive-ui' is a CommonJS module
             *
             * https://github.com/tusen-ai/naive-ui/issues/4641
             */
            noExternal: ['naive-ui']
        },
        build:{
            chunkSizeWarningLimit: 2000
        }
    }
})
