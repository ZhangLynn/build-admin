import ReactEcharts from 'echarts-for-react';
import {FlowCharts,PieCharts} from '../plugins'
import echarts from 'echarts';
import React from 'react';
import {Row, Col,Card,Modal} from 'antd';
import style from "./flow.less"

let userCount={"status": 0, "data": {"pc_user": 0, "other_user": 0, "mobile_threat": 0, "pc_threat": 0, "othrt_threat": 0, "mobile_user": 0}};
let influencedThreat={"status": 0, "data": [{"name": "\u6728\u9a6c\u5a01\u80c1", "value": 2637}, {"name": "\u9690\u79c1\u6cc4\u9732", "value": 226}, {"name": "\u7f51\u7edc\u653b\u51fb", "value": 149}]};
let threatIp={"status": 0, "data": [{"name": "118.193.215.71", "value": 188}, {"name": "121.43.168.184", "value": 175}, {"name": "124.232.157.120", "value": 119}, {"name": "140.205.94.7", "value": 91}, {"name": "115.29.79.228", "value": 119}]};
let userAsset={"status": 0, "data": {"imei": 10, "phone": 15, "qq": 22, "imsi": 34, "email": 8}};
let trojanThreatEvent={"status": 0, "data": [{"name": "\u9493\u9c7c\u4e8b\u4ef6", "value": 1579}, {"name": "\u6076\u610f\u4f20\u64ad", "value": 577}, {"name": "\u8d44\u8d39\u6d88\u8017", "value": 456}, {"name": "\u6076\u610f\u6263\u8d39", "value": 524}, {"name": "\u8fdc\u7a0b\u63a7\u5236", "value": 102}]};
let appTypeTop={"status": 0, "data": [{"name": "unknown", "value": 16909}, {"name": "\u963f\u91cc\u4e91", "value": 12443}, {"name": "\u516c\u53f8\u5185\u90e8\u6d41\u91cf", "value": 1425}, {"name": "PP\u52a9\u624b", "value": 33022}, {"name": "\u7231\u5947\u827a", "value": 46797}, {"name": "\u817e\u8baf", "value": 27222}, {"name": "\u767e\u5ea6", "value": 24590}, {"name": "\u817e\u8baf\u56fe\u7247", "value": 22141}, {"name": "\u5fae\u4fe1", "value": 21333}, {"name": "\u641c\u72d7", "value": 19332}]};

export default class FlowMonitor extends React.Component {
    constructor() {
        super();
        this.state = {
            userCount:{
                normal:[],
                threat:[]
            },
            userAsset: {data:[],xdata:[],status:""},
            influencedThreat:{titledata:[],data:[]},
            trojanThreatEvent:{top5:{titledata:[],data:[]},all:{titledata:[],data:[]}},
            trojanThreatEventVisible:false,
            threatIp:{yData:[],xData:[]},
            appTypeTop:{top5:{titledata:[],data:[]},all:{titledata:[],data:[]}},
            appTypeTopVisible:false,
        }
    }

    componentDidMount() {
        this.formatData("userCount");
        this.formatData("userAsset");
        this.formatData("influencedThreat");
        this.formatData("trojanThreatEvent");
        this.formatData("threatIp");
        this.formatData("appTypeTop");
        // this.formatData("malTotal");
    }
    formatData(type){
        switch (type){
            case "userCount":{
                let normal=[],threat=[];
                let jsonData={"status": 0, "data": {"pc_user": 10, "other_user": 20, "mobile_threat": 30, "pc_threat": 30, "othrt_threat": 20, "mobile_user": 10}}
                normal.push(jsonData.data.mobile_user);
                normal.push(jsonData.data.pc_user);
                normal.push(jsonData.data.other_user);
                threat.push(jsonData.data.mobile_threat);
                threat.push(jsonData.data.pc_threat);
                threat.push(jsonData.data.othrt_threat);
                console.log(normal)
                this.setState({
                    [type]:{
                        normal:normal,
                        threat:threat
                    }
                });
                break
            }
            case "userAsset":{
                let jsonData=userAsset;
                let temp = [];
                let xtemp=[];
                temp.push(jsonData.data['imei']);
                xtemp.push("IMEI");
                temp.push(jsonData.data['phone']);
                xtemp.push("手机号");
                temp.push(jsonData.data['qq']);
                xtemp.push("QQ");
                temp.push(jsonData.data['email']);
                xtemp.push("邮箱");
                temp.push(jsonData.data['imsi']);
                xtemp.push("IMSI");
                if(JSON.stringify(jsonData.data) === "{}"){
                    jsonData.status = -1;
                }
                this.setState({
                    [type]: {
                        data:temp,
                        xdata:xtemp
                    },
                });
                break
            }
            case "influencedThreat":{
                let jsonData=influencedThreat;
                let temp = [];
                let xtemp=[];
                jsonData.data.map((value,index)=>{
                    temp.push(value.name);
                    xtemp.push({
                        name:value.name,
                        value:value.value,
                    });
                });


                this.setState({
                    [type]: {titledata:temp,data:xtemp},
                });
                break
            }
            case "trojanThreatEvent":{
                let jsonData=trojanThreatEvent;
                let top5title=[],alltitle=[],top5data=[],alldata=[];
                jsonData.data.map((value,index)=>{
                    if(index<=4){
                        top5title.push(value.name);
                        top5data.push(value.value)
                    }
                    alltitle.push(value.name);
                    alldata.push(value.value)
                });
                this.setState({
                    [type]:{
                        top5:{
                            titledata:top5title.reverse(),
                            data:top5data.reverse()
                        },
                        all:{
                            titledata:alltitle.reverse(),
                            data:alldata.reverse()
                        }
                    }
                })
                break
            }
            case "threatIp":{

                let jsonData=threatIp;
                let xData=[],yData=[];
                jsonData.data.map((value,index)=>{
                    yData.push(value.name);
                    xData.push(value.value);
                })
                this.setState({
                    threatIp:{
                        xData:xData.reverse(),
                        yData:yData.reverse()
                    }
                })
                break
            }
            case "appTypeTop":{
                let jsonData=appTypeTop;
                let top5title=[],alltitle=[],top5data=[],alldata=[];
                jsonData.data.map((value,index)=>{
                    if(index<=4){
                        top5title.push(value.name);
                        top5data.push(value.value)
                    }
                    alltitle.push(value.name);
                    alldata.push(value.value)
                });
                this.setState({
                    [type]:{
                        top5:{
                            titledata:top5title.reverse(),
                            data:top5data.reverse()
                        },
                        all:{
                            titledata:alltitle.reverse(),
                            data:alldata.reverse()
                        },
                    }
                });
                break
            }
        }
    }
    openTrojanThreatModal=()=>{
        this.setState({
            trojanThreatEventVisible:true
        })
    }
    handleCancel=()=>{
        this.setState({
            trojanThreatEventVisible:false
        })
    }
    render() {
        let grid= {
            left: '3%',
            right: '10%',
            top: '3%',
            bottom:'0%',
            containLabel: true,
            borderColor:'#aab0b7'
        };
        let horizontalbar={
            type: 'bar',
            barWidth: '15px',
            itemStyle : {
                normal: {
                    label:{
                        show: true,
                        position: 'right',
                    }
                }
            }
        };
        let textColor='#aab0b7';
        let lineColor='#aab0b7';
        return (
            <div>
                <Row style={{marginTop: 24}}>
                    <Col span={8}>
                        <Card className={style.card} bordered={false}>
                            <h2 className={style.title}>今日用户统计</h2>
                            {this.state.userCount.normal.length===0&&this.state.userCount.threat===0 ? <h3 className={style.chartsNull}>暂无数据</h3> :<ReactEcharts
                                option = {{
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer : {
                                            type : 'shadow'
                                        }
                                    },
                                    legend: {
                                        data: ['正常用户', '受威胁用户'],
                                        textStyle:{
                                            color:'#aab0b7'
                                        },
                                        bottom:"0%"
                                    },
                                    grid: {
                                        top:'5%',
                                        left: '3%',
                                        right: '4%',
                                        bottom:"10%",
                                        containLabel: true,
                                    },
                                    xAxis:  {
                                        type : 'category',
                                        data : [{
                                            value:'移动终端用户',
                                            textStyle:{
                                                color:'#aab0b7'
                                            },
                                        },{
                                            value:'电脑用户',
                                            textStyle:{
                                                color:'#aab0b7'
                                            },
                                        },{
                                            value:'其他',
                                            textStyle:{
                                                color:'#aab0b7'
                                            },
                                        }],
                                        axisLine:{
                                            lineStyle:{
                                                color:'#aab0b7',
                                            }
                                        }
                                    },
                                    yAxis: {
                                        type: 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#aab0b7',
                                            }
                                        },
                                    },
                                    series: [
                                        {
                                            name: '正常用户',
                                            type: 'bar',
                                            stack: '总量',
                                            barWidth: '30%',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        0, 0, 0, 1,
                                                        [
                                                            {offset: 0, color: 'rgba(20,200,212,1)'},
                                                            // {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                                            {offset: 1, color: 'rgba(20,200,212,1)'}
                                                        ]
                                                    )
                                                },
                                                shadowColor: "rgba(255,255,255,0.3)",
                                                shadowBlur: 10
                                            },
                                            z: -12,
                                            data: this.state.userCount.normal,
                                        },
                                        {
                                            name: '受威胁用户',
                                            type: 'bar',
                                            stack: '总量',
                                            barWidth: '30%',
                                            itemStyle: {
                                                normal: {
                                                    color: new echarts.graphic.LinearGradient(
                                                        0, 0, 0, 1,
                                                        [
                                                            {offset: 0, color: '#0153b0'},
                                                            // {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                                            {offset: 1, color: '#49a9ee'}
                                                        ]
                                                    )
                                                },
                                                shadowColor: "rgba(255,255,255,0.3)",
                                                shadowBlur: 10
                                            },
                                            data: this.state.userCount.threat
                                        },
                                    ],
                                    color:[
                                        '#0153b0',
                                        '#49a9ee',
                                    ]
                                }}
                            />}
                        </Card>
                        <Card className={style.card} bordered={false}>
                            <h2 className={style.title}>用户资产分析</h2>
                            { this.state.userAsset.data.length === 0 ? <h3 className={style.chartsNull}>暂无数据</h3> : <ReactEcharts
                                option = {{
                                    tooltip : {
                                        trigger: 'axis',
                                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                        }
                                    },
                                    grid: {
                                        top:'10%',
                                        left: '3%',
                                        right: '4%',
                                        bottom:"5%",
                                        containLabel: true,
                                        borderColor:'#aab0b7'
                                    },
                                    xAxis:  {
                                        type : 'category',
                                        data: this.state.userAsset.xdata,
                                        axisLine:{
                                            lineStyle:{
                                                color:'#aab0b7',
                                            }
                                        }
                                    },
                                    yAxis: {
                                        type: 'value',
                                        axisLine:{
                                            lineStyle:{
                                                color:'#aab0b7',
                                            }
                                        },
                                    },
                                    series: [
                                        {
                                            type: 'bar',
                                            barWidth: '60%',
                                            label: {
                                                // normal: {
                                                //     show: true,
                                                //     position: 'top'
                                                // }
                                            },
                                            itemStyle: {
                                                normal:{
                                                    //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                                                    color: function (params){
                                                        let colorList=[
                                                            '#1c88c9',
                                                            '#2e5399',
                                                            '#9f4176',
                                                            '#2c7c7d',
                                                            '#2ab1b5',
                                                        ];
                                                        return colorList[params.dataIndex];
                                                    },
                                                    shadowColor: "rgba(255,255,255,0.3)",
                                                    shadowBlur: 10
                                                },
                                            },
                                            data: this.state.userAsset.data
                                        },
                                    ]
                                }}
                            />}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className={style.card} bordered={false}>
                            <div id="testPDF">
                                <h2 className={style.title}>今日威胁影响</h2>
                                { this.state.influencedThreat.data.length === 0 ? <h3 className={style.chartsNull}>暂无数据</h3> : <ReactEcharts
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
                                        series: [
                                            {
                                                type: 'pie',
                                                radius: ['30%', '60%'],
                                                avoidLabelOverlap: true,
                                                label: {
                                                    normal: {
                                                        formatter:'{b}\n{c}次',
                                                        // formatter: '{b|{b}}\n{d|{d}}%',
                                                        color: textColor,
                                                        fontSize:14,
                                                        rich: {
                                                            b: {
                                                                // lineHeight: 18,
                                                                fontSize:14,
                                                                align: 'center',
                                                            },
                                                            d: {
                                                                fontSize: 12,
                                                                align: 'center',
                                                            },
                                                        }
                                                    }
                                                },
                                                labelLine: {
                                                    normal: {
                                                        lineStyle: {
                                                            color: lineColor
                                                        },
                                                        length: 10,
                                                        length2: 20
                                                    }
                                                },
                                                itemStyle: {
                                                    normal: {
                                                        shadowBlur: 50,
                                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                                    }
                                                },
                                                animationType: 'scale',
                                                animationEasing: 'elasticOut',
                                                animationDelay: function (idx) {
                                                    return Math.random() * 200;
                                                },
                                                data: this.state.influencedThreat.data
                                            }
                                        ],
                                        color: [
                                            '#2e5399',
                                            '#1c88c9',
                                            '#49a9ee',
                                            '#0379fd',
                                            '#0153b0',
                                        ],
                                    }}
                                />}
                            </div>
                        </Card>
                        <Card className={style.card} bordered={false}>
                            <h2 className={style.title}>木马事件危害 <span className={style.link} onClick={this.openTrojanThreatModal}>更多</span></h2>
                            <Modal
                                visible={this.state.trojanThreatEventVisible}
                                title="木马事件危害"
                                onCancel={this.handleCancel}
                                footer={null}
                                className="black-modal"
                            >
                                <ReactEcharts
                                    // onEvents={onDeviceEvents}
                                    option = {{
                                        color:['#49a9ee'],
                                        tooltip: {
                                            trigger: 'axis',
                                            axisPointer: {
                                                type: 'shadow'
                                            }
                                        },
                                        grid: {...grid},
                                        xAxis: {
                                            type: 'value',
                                            show:false,
                                            splitLine:{
                                                show:false
                                            }
                                        },
                                        yAxis: {
                                            type: 'category',
                                            data: this.state.trojanThreatEvent.all.titledata,
                                            axisLine:{
                                                lineStyle:{
                                                    color:'#aab0b7',
                                                }
                                            },
                                            splitLine:{
                                                show:false
                                            }
                                        },
                                        series: [
                                            {
                                                ...horizontalbar,
                                                itemStyle : {
                                                    normal: {
                                                        label:{
                                                            show: true,
                                                            position: 'right',
                                                            color:"#49a9ee"
                                                        },
                                                        color: new echarts.graphic.LinearGradient(
                                                            1, 0, 0, 1,
                                                            [
                                                                {offset: 1, color: '#49a9ee'},
                                                                {offset: 0, color: '#14c8d4'}
                                                            ]
                                                        ),
                                                        shadowBlur: 10,
                                                        shadowColor: 'rgba(67, 138, 298, 0.3)',
                                                        // barBorderRadius: 10,
                                                        shadowOffsetX:[ 1 ],
                                                        shadowOffsetY:[ 1 ],
                                                    },
                                                    // emphasis:{
                                                    //     color:["red"]
                                                    // }
                                                },
                                                data: this.state.trojanThreatEvent.all.data
                                            },
                                        ]
                                    }}
                                />
                            </Modal>
                            { this.state.trojanThreatEvent.top5.titledata.length === 0 ? <h3 className={style.chartsNull}>暂无数据</h3> : <ReactEcharts
                                option = {{
                                    color:['#0379fd'],
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {
                                            type: 'shadow'
                                        }
                                    },
                                    grid: {...grid},
                                    xAxis: {
                                        type: 'value',
                                        show:false,
                                        splitLine:{
                                            show:false
                                        }
                                    },
                                    yAxis: {
                                        type: 'category',
                                        data: this.state.trojanThreatEvent.top5.titledata,
                                        axisLine:{
                                            lineStyle:{
                                                color:'#aab0b7',
                                            }
                                        },
                                        splitLine:{
                                            show:false
                                        }
                                    },
                                    series: [
                                        {
                                            ...horizontalbar,
                                            itemStyle : {
                                                normal: {
                                                    label:{
                                                        show: true,
                                                        position: 'right',
                                                        color:"#0379fd"
                                                    },
                                                    color: new echarts.graphic.LinearGradient(
                                                        1, 0, 0, 1,
                                                        [
                                                            {offset: 1, color: '#0379fd'},
                                                            {offset: 0, color: '#14c8d4'}
                                                        ]
                                                    ),
                                                    shadowBlur: 10,
                                                    shadowColor: 'rgba(67, 138, 298, 0.3)',
                                                    // barBorderRadius: 10,
                                                    shadowOffsetX:[ 1 ],
                                                    shadowOffsetY:[ 1 ],
                                                },
                                                // emphasis:{
                                                //     color:["red"]
                                                // }
                                            },
                                            data: this.state.trojanThreatEvent.top5.data,
                                        },
                                    ]
                                }}
                            />}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className={style.card} bordered={false}>
                            <h2 className={style.title}>威胁来源分析</h2>
                            <FlowCharts></FlowCharts>
                        </Card>
                        <Card className={style.card} bordered={false}>
                            <h2 className={style.title}>应用行为TOP10</h2>
                            <PieCharts></PieCharts>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}