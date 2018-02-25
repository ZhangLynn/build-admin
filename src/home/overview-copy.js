// require("../lib/china.js");
// require("../lib/world.js");
import React from 'react';
import {Row,Col,Tabs,Radio, Table, Card ,Icon} from 'antd';
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
let style={
    card:"",
    chartsNull:""
};

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
        };
        this.OnRadioChangeForCountry=this.OnRadioChangeForCountry.bind(this);
        this.convertData=this.convertData.bind(this)
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
    render(){
        return(
            <div>
              <Row>
                  <Col span="14">
                      <Card style={{height:'800px',backgroundColor:'#2b2f3a'}} bordered={false}>
                          <RadioGroup onChange={this.OnRadioChangeForCountry} value={this.state.radioSelectForCountry}>
                              <Radio value={0}>中国</Radio>
                              <Radio value={1}>世界</Radio>
                          </RadioGroup>
                          <div hidden={this.state.radioSelectForCountry !== 0} id="innerCharts">
                              {this.state.cityMapCnAttack.length===0 ? <h3 className={style.chartsNull}>暂无数据</h3> : <ReactEcharts
                                  // onEvents={onDeviceEvents}
                                  style={{height: '550px', width: '100%'}}
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
                              />}
                              {/*<div className={style.attackNumber}>*/}
                                  {/*<div className={style.left}>*/}
                                      {/*<h2 className={style.title}>境内攻击：<span>{this.state.china}</span></h2>*/}
                                      {/*{this.state.chinaTop.map((value,index)=>{*/}
                                          {/*return <div className={style.content} key={index}>*/}
                                              {/*<div className={style.flag}><FlagIcon code="cn"/>&nbsp;{value.name+'：'}</div>*/}
                                              {/*<div className={style.progress}>*/}
                                                  {/*<span id={value.value} className={style.progressInner} data-num={value.value} data-total={this.state.china} style={{width:((value.value/this.state.china)*90+"%")}}></span>*/}
                                                  {/*<span className={style.progressText}>{value.value}</span>*/}
                                              {/*</div>*/}
                                          {/*</div>*/}
                                      {/*})}*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          </div>
                          <div hidden={this.state.radioSelectForCountry !== 1}>
                              {this.state.cityMapFoAttack.length===0 ? <h3 className={style.chartsNull}>暂无数据</h3> : <ReactEcharts
                                  // onEvents={onDeviceEvents}
                                  style={{height: '550px',  width: this.state.chartsWidth}}
                                  option={{
                                      backgroundColor: '#2b2f3a',
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
                              />}
                              {/*<div className={style.attackNumber}>*/}
                                  {/*<div className={style.left}>*/}
                                      {/*<h2 className={style.title}>境外攻击：<span>{this.state.foreign}</span></h2>*/}
                                      {/*{this.state.foreignTop.map((value,index)=>{*/}
                                          {/*return <div className={style.content} key={index}>*/}
                                              {/*<div className={style.flag}>*/}
                                                  {/*{(() => {*/}
                                                      {/*if (value.code ===""||value.code==="Local"){*/}
                                                          {/*return  <span><Icon type="desktop" />&nbsp;{value.name+'：'}</span>*/}
                                                      {/*}else{*/}
                                                          {/*return <span><FlagIcon code={value.code.toLowerCase()}/>&nbsp;{value.name+'：'}</span>*/}
                                                      {/*}*/}

                                                  {/*})()}*/}
                                              {/*</div>*/}
                                              {/*<div className={style.progress}>*/}
                                                  {/*<span id={value.value} className={style.progressInner} data-num={value.value} data-total={this.state.foreign} style={{width:((value.value/this.state.foreign)*90+"%")}}></span>*/}
                                                  {/*<span className={style.progressText}>{value.value}</span>*/}
                                              {/*</div>*/}
                                          {/*</div>*/}
                                      {/*})}*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                          </div>
                      </Card>
                  </Col>
              </Row>
            </div>
        )
    }
}