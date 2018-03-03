
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import React from 'react';
import {Row,Col,Tabs,Radio, Table, Card ,Icon} from 'antd';
import style from './overview.less'
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
require("../lib/china.js");
require("../lib/world.js");
let jsonData=require('../jsonData/overview.json')

let malTotal={"mal_ip": 1, "mal_email": 0, "privacy": 226, "iot": 149, "mal_app": 0, "mal_ftp": 0, "mal_domain": 2633, "mal_url": 0};

export default class Overview extends React.Component{
    constructor(){
        super();
        this.state={
            radioSelectForCountry:0,
            cityMapCnLocation:{},
            cityMapCnAttack:[],
            cityMapFoLocation:{},
            cityMapFoAttack:[],
            chartsWidth:'100%',
            barData:[],
            categoryData:[],
            malTotal:malTotal
        };
        this.OnRadioChangeForCountry=this.OnRadioChangeForCountry.bind(this);
        this.convertData=this.convertData.bind(this);
    }
    componentDidMount(){
        this.setOuterEchartsWidth();
        // this.formatBarData();
        this.getData()
    }

    //设置境外的charts宽度
    setOuterEchartsWidth(){
        let ele=document.getElementById("innerCharts");
        let w=ele.offsetWidth;
        this.setState({
            chartsWidth:w+"px"
        });
    }
    OnRadioChangeForCountry(e){
        this.setState({
            radioSelectForCountry: e.target.value,
            chartsWidth:"100%"
        });
    };
    convertData(location,data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
            let geoCoord = location[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    // formatBarData(){
    //     let categoryData = [];
    //     let barData = [];
    //     let sortData=data.sort((a,b)=>{
    //         return a.value-b.value
    //     })
    //     for (var i = 0; i <sortData.length; i++) {
    //         categoryData.push(sortData[i].name);
    //         barData.push(sortData[i].value);
    //     }
    //     // console.log(barData)
    //     this.setState({
    //         categoryData:categoryData,
    //         barData:barData
    //     })
    // }
    getData(){
        this.setState({
            cityMapCnAttack: jsonData.china.data,
            cityMapCnLocation: jsonData.china.coordinate,
            cityMapFoAttack: jsonData.abroad.data,
            cityMapFoLocation: jsonData.abroad.coordinate,
            foreign:jsonData.abroad.total,
            china:jsonData.china.total,
            foreignTop:jsonData.abroad.top,
            chinaTop:jsonData.china.top,
        });
    }
    render(){
        return(
            <div>
              <Row>
                  <Col span={24} >
                      <Card  bordered={false} className={style.hh}>
                          <RadioGroup onChange={this.OnRadioChangeForCountry} value={this.state.radioSelectForCountry}>
                              <Radio value={0}>中国</Radio>
                              <Radio value={1}>世界</Radio>
                          </RadioGroup>
                          <div hidden={this.state.radioSelectForCountry !== 0} id="innerCharts">
                              <ReactEcharts
                                  // onEvents={onDeviceEvents}
                                  style={{height: '800px', width: '100%'}}
                                  option={{
                                      // backgroundColor: '#2b2f3a',
                                      tooltip : {
                                          trigger: 'item',
                                          formatter:function (params) {
                                              // return '来自'.concat(params.data.name,'的攻击：',params.data.value[2],'次')
                                              return params.data.name+'<br />'+params.data.value[2]
                                              // params.data.name.concat('共受到攻击：',params.data.value[2],'次')
                                          },
                                          extraCssText:'background-color:#109894;width:100px;height:100px;border-radius:50px;text-align:center;padding:35px 0;',
                                      },
                                      geo: {
                                          map: 'china',
                                          label: {
                                              emphasis: {
                                                  show: false
                                              }
                                          },
                                          roam: true,
                                          itemStyle: {
                                              normal: {
                                                  areaColor: '#368ba8',
                                                  // areaColor: '#323c48',
                                                  borderColor: '#111'
                                              },
                                              emphasis: {
                                                  areaColor: '#4c9db9'
                                              }
                                          }
                                      },
                                      series : [
                                          {
                                              name: '攻击',
                                              type: 'scatter',
                                              coordinateSystem: 'geo',
                                              data: this.convertData(this.state.cityMapCnLocation,this.state.cityMapCnAttack),
                                              itemStyle: {
                                                  normal: {
                                                      color: '#4befe8'
                                                  }
                                              }
                                          },
                                          {
                                              name: 'Top 5',
                                              type: 'effectScatter',
                                              coordinateSystem: 'geo',
                                              // data: this.convertData(this.state.cityMapCnLocation,this.state.cityMapCnAttack.sort(function (a, b) {
                                              //     return b.value - a.value;
                                              // }).slice(0, 6)),
                                              data: this.convertData(this.state.cityMapCnLocation,this.state.cityMapCnAttack),
                                              // symbolSize: function (val) {
                                              //     return val[2] / 10;
                                              // },
                                              showEffectOn: 'render',
                                              rippleEffect: {
                                                  brushType: 'stroke'
                                              },
                                              hoverAnimation: true,
                                              label: {
                                                  normal: {
                                                      formatter: '{b}',
                                                      position: 'right',
                                                      show: true
                                                  }
                                              },
                                              itemStyle: {
                                                  normal: {
                                                      color: '#4befe8',
                                                      shadowBlur: 10,
                                                      shadowColor: '#333'
                                                  }
                                              },
                                              zlevel: 1
                                          }
                                      ],
                                      color: [
                                          '#b04a3c',
                                          '#f88767',
                                          '#ceaa6c',
                                          '#afba6b',
                                          '#6fb881',
                                          '#62abbc',
                                          '#6b89c5',
                                          '#806fd5',
                                      ],
                                  }}
                              />
                          </div>
                          <div hidden={this.state.radioSelectForCountry !== 1}>
                              <ReactEcharts
                                  // onEvents={onDeviceEvents}
                                  style={{height: '800px',  width: this.state.chartsWidth}}
                                  option={{
                                      // backgroundColor: '#2b2f3a',
                                      tooltip : {
                                          trigger: 'item',
                                          formatter:function (params) {
                                              return "".concat('来自',params.data.name,'的攻击：',params.data.value[2],'次')
                                          },
                                      },
                                      geo: {
                                          map: 'world',
                                          label: {
                                              emphasis: {
                                                  show: false
                                              }
                                          },
                                          roam: true,
                                          itemStyle: {
                                              normal: {
                                                  areaColor: '#368ba8',
                                                  borderColor: '#111'
                                              },
                                              emphasis: {
                                                  areaColor: '#4c9db9'
                                              }
                                          }
                                      },
                                      series : [
                                          {
                                              name: '攻击',
                                              type: 'scatter',
                                              coordinateSystem: 'geo',
                                              data: this.convertData(this.state.cityMapFoLocation,this.state.cityMapFoAttack),
                                              itemStyle: {
                                                  normal: {
                                                      color: '#4befe8'
                                                  }
                                              }
                                          },
                                          {
                                              name: 'Top 5',
                                              type: 'effectScatter',
                                              coordinateSystem: 'geo',
                                              data: this.convertData(this.state.cityMapFoLocation,this.state.cityMapFoAttack),
                                              // data: this.convertData(this.state.cityMapFoLocation,this.state.cityMapFoAttack.sort(function (a, b) {
                                              //     return b.value - a.value;
                                              // }).slice(0, 6)),
                                              // symbolSize: function (val) {
                                              //     return val[2] / 10;
                                              // },
                                              showEffectOn: 'render',
                                              rippleEffect: {
                                                  brushType: 'stroke'
                                              },
                                              hoverAnimation: true,
                                              label: {
                                                  normal: {
                                                      formatter: '{b}',
                                                      position: 'right',
                                                      show: true
                                                  }
                                              },
                                              itemStyle: {
                                                  normal: {
                                                      color: '#4befe8',
                                                      shadowBlur: 10,
                                                      shadowColor: '#333'
                                                  }
                                              },
                                              zlevel: 1
                                          }
                                      ]
                                  }}
                              />
                          </div>
                      </Card>
                  </Col>

              </Row>
              <Row>

              </Row>
            </div>
        )
    }
}