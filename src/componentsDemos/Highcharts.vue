<template>
    <div class="HomeContainer">
        <!-- 单折线图 -->
        <ai-highchart :options="options" :styles="styles" ref="simpleChart"></ai-highchart>
        <!-- 散点图 -->
        <ai-highchart :options="bubbleOptions" :styles="styles" ref="simpleChart"></ai-highchart>
    </div>
</template>

<script>
import AiHighchart from '../packages/highcharts/ai-highcharts.vue'
export default {
    components: {
        AiHighchart
    },

    created() {},
    mounted() {},

    data() {
        return {
            options: {
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ]
                },
                yAxis: {
                    title: {
                        text: 'Temperature'
                    },
                    lineWidth: 2,
                    lineColor: '#F33',
                    id: 'temperature-axis'
                },
                series: [
                    {
                        name: 'Temperature',
                        data: [
                            7.0,
                            6.9,
                            9.5,
                            14.5,
                            18.2,
                            21.5,
                            25.2,
                            26.5,
                            23.3,
                            18.3,
                            13.9,
                            9.6
                        ],
                        color: '#F33'
                    }
                ]
            },
            bubbleOptions: {
                lang: {
                    downloadJPEG: '下载JPEG图片',
                    downloadPDF: '下载PDF文件',
                    downloadPNG: '下载PNG文件',
                    downloadSVG: '下载SVG文件',
                    printChart: '打印图表'
                },
                credits: {
                    enabled: false
                },

                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: '双变量分析：变量 3 — 变量 4'
                },
                subtitle: {
                    text: '数据来源: Heinz  2003'
                },
                xAxis: {
                    type: 'linear',
                    title: {
                        text: 'Actual Elapsed Time'
                    },
                    tickWidth: 0, //设置刻度标签宽度
                    startOnTick: true,
                    endOnTick: true
                    // showLastLabel: true
                },
                yAxis: {
                    gridLineWidth: 0,
                    lineWidth: 1,
                    title: {
                        text: 'Distance'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 3,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x} cm, {point.y} kg'
                        }
                    }
                },
                series: [
                    {
                        // type: 'column',
                        name: '变量3',
                        color: '#17B5EF',
                        data: [
                            [163.2, 55.9],
                            [152.4, 46.5],
                            [157.5, 54.3],
                            [168.3, 54.8],
                            [180.3, 60.7],
                            [165.5, 60.0],
                            [165.0, 62.0],
                            [162.5, 58.2],
                            [170.3, 64.8],
                            [164.1, 71.6],
                            [169.5, 52.8],
                            [159.0, 48.6]
                        ],
                        marker: {
                            symbol: 'circle'
                        }
                    },
                    {
                        name: '变量4',
                        color: '#F89A54',
                        data: [
                            [177.0, 68.2],
                            [174.5, 63.9],
                            [177.5, 72.0],
                            [170.5, 56.8],
                            [182.4, 74.5],
                            [197.1, 90.9],
                            [177.8, 64.1],
                            [172.7, 72.3],
                            [165.1, 65.0],
                            [186.7, 86.4],
                            [165.1, 65.0],
                            [174.0, 88.6],
                            [175.3, 84.1],
                            [185.4, 66.8],
                            [183.0, 90.9],
                            [179.1, 89.1],
                            [170.2, 62.3],
                            [177.8, 82.7],
                            [179.1, 79.1],
                            [180.3, 83.2]
                        ]
                    }
                ]
            },
            styles: {
                width: 600,
                height: 400
            }
        }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped >

</style>

