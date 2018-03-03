import React from "react";
import ReactEcharts from 'echarts-for-react';
let jsonData={data: {count1: 255, count2: 225, count3: 245, count4: 233, count5: 260}};
export default class PieCharts extends React.Component{
    constructor(){
        super();
        this.state={
            pieData: {data:[]},
            pieData1:[],
            pieData2:[],
        }
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        let temp = [];
        temp.push({
            name:'邮箱',
            value:jsonData.data['count3'],
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:'#1c88c9'
                }
            },
        });
        temp.push({
            name:'QQ',
            value:jsonData.data['count4'],
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:'#2e5399'
                }
            },
        });
        temp.push({
            name:'IMEI',
            value:jsonData.data['count1'],
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:'#9f4176'
                }
            },

        });
        temp.push({
            name:'手机号',
            value:jsonData.data['count2'],
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:'#2c7c7d'
                }
            },
        });
        temp.push({
            name:'IMSI',
            value:jsonData.data['count5'],
            itemStyle:{
                normal:{
                    borderWidth:1,
                    borderColor:'#2ab1b5'
                }
            },
        });
        let temp1=[];
        temp1.push({
            name:'邮箱',
            value:jsonData.data['count3'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#1e79b0' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#1e79b0' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#1e79b0'
                }
            },
        });
        temp1.push({
            name:'QQ',
            value:jsonData.data['count4'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#2f4d89' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2f4d89' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#2f4d89'
                }
            },
        });
        temp1.push({
            name:'IMEI',
            value:jsonData.data['count1'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#8b3e6c' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#8b3e6c' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#8b3e6c'
                }
            },
        });
        temp1.push({
            name:'手机号',
            value:jsonData.data['count2'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#2d6e70' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2d6e70' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#2d6e70'
                }
            },
        });
        temp1.push({
            name:'IMSI',
            value:jsonData.data['count5'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#2a9b9f' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2a9b9f' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#2a9b9f'
                }
            },
        });
        let temp2=[];
        temp2.push({
            name:'邮箱',
            value:jsonData.data['count3'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#225c82' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#225c82' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#225c82'
                }
            },
        });
        temp2.push({
            name:'QQ',
            value:jsonData.data['count4'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#2c4269' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2c4269' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#2c4269'
                }
            },
        });
        temp2.push({
            name:'IMEI',
            value:jsonData.data['count1'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#643957' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#643957' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#643957'
                }
            },
        });
        temp2.push({
            name:'手机号',
            value:jsonData.data['count2'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#2d565c' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2d565c' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#2d565c'
                }
            },
        });
        temp2.push({
            name:'IMSI',
            value:jsonData.data['count5'],
            itemStyle:{
                normal:{
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0, color: '#287177' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#287177' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    borderWidth:1,
                    borderColor:'#287177'
                }
            },
        });
        this.setState({
            pieData: {
                data:temp
            },
            pieData1:temp1,
            pieData2:temp2,
        });
    }
    render(){
        return (
        <div>
        { this.state.pieData.toString()==="{}"?<h3>暂无数据</h3> : <ReactEcharts
        option={{
            title: {
                x: 'center',
                    y: 'center',
                    textStyle: {
                    fontWeight: 'normal',
                        fontSize: 24,
                        color:'#aab0b7'
                }
            },
            grid: {
                top:'2%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                    borderColor:'#aab0b7'
            },
            tooltip: {
                trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
            },
            legend: {
                bottom:-5,
                    textStyle:{
                    color:'#aab0b7'
                },
                data: this.state.pieData.data,
                    formatter: (name) => {
                    let oa = this.state.pieData.data;
                    let num = 0;
                    oa.map(function (value_num) {
                        num += value_num.value;
                        return num;
                    });
                    for (let i = 0; i < oa.length; i++) {
                        if (name === oa[i].name.toUpperCase() || name === oa[i].name) {
                            return name
                        }
                    }
                }
            },
            series: [
                {
                    name: '用户画像',
                    type: 'pie',
                    radius: ['20%', '50%'],
                    // center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'inner',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.state.pieData.data
                },
                {
                    name: '用户画像',
                    type: 'pie',
                    radius: ['50%', '60%'],
                    // center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'inner',
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.state.pieData1
                },
                {
                    name: '用户画像',
                    type: 'pie',
                    radius: ['60%', '70%'],
                    // center: ['50%', '50%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            textStyle:{
                                color:'#c5cfd9'
                            }
                        },
                    },
                    labelLine: {
                        normal: {
                            show: true,
                        }
                    },
                    data: this.state.pieData2
                },
            ],
                color: [
                '#1c88c9',
                '#2e5399',
                '#9f4176',
                '#2c7c7d',
                '#2ab1b5',
                // '#7971c7',
            ],
        }}
        />}
        </div>
    )
    }
}