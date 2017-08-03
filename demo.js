var container = document.getElementById('echarts');
//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
var resizeContainer = function () {
    //屏幕宽度
    w = window.innerWidth;
    //屏幕高度
    h = window.innerHeight
    container.style.width = w*0.98 +'px';
    container.style.height = h*0.9 +'px';
};
//设置容器高宽
resizeContainer();


var data1 = [
    ['2017-12-01',130],['2017-12-02',121],['2017-12-03',138],['2017-12-04',''],['2017-12-05',138],['2017-12-06',118]
];
var data2 = [
    ['2017-12-01',120],['2017-12-02',111],['2017-12-03',107],['2017-12-04',117],['2017-12-05',105]
];
var myChart=echarts.init(document.getElementById('echarts'));
option = {
    chart:{
        zoomType:'x',
    },
    title: {
        text: '曲线图'
    },
    tooltip:{
        trigger : 'axis',
        axisPointer : {
            show : true,
            type : 'cross',
            lineStyle : {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend : {
        data : ['收缩压','舒张压','平均动脉压'],
        bottom : 10,
    },
    calculable : true,     //拖拽手柄过程中实时更新图表视图
    // dataZoom : [{       //显示区域进度条（已屏蔽）
    //     xAxisIndex:0,
    //     show : true,
    //     realtime : true,
    //     start : 0,
    //     end : 100
    // }],
    grid:{
        left:40,
        top:50,
        right:30,
        bottom:75
    },
    xAxis: {
        type: 'time',
        // min:new Date('2017-12-01'),
        // max:new Date('2017-12-05'),
    },
    yAxis: {
        type: 'value',
        min : 100,
        max : 160,
        splitNumber : 10
    },
    series:[
        {
            name :  '收缩压',
            // type : 'scatter',
            type : 'line',
            data :  data1
        },
        {
            name :  '舒张压',
            // type : 'scatter',
            type : 'line',
            data :  data2
        }
    ]
};
myChart.setOption(option);
window.onresize = function () {
    //重置容器高宽
    resizeContainer(); 
    myChart.resize();
}