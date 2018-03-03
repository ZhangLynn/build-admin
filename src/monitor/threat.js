
import Mipform from './m_ip_form'
import React from 'react';
import {Link} from 'react-router-dom'
import {
    Row,
    Col,
    Button,
    Table,
    Spin,
    Card,
} from 'antd';
import {
    Config,
    Location,
    Tag,
    Tagconnect,
} from '../plugins';
import { CSVLink} from 'react-csv';
import style from './malicious.less'
let jsonData=require("../jsonData/malicious.json")
class ThreatMonitor extends React.Component {
    state = {
        mainTitleevent:"恶意IP（木马威胁）",
        mainTitle:{
            eventCount:0,
            totalUser:0,
            todayEvent:0,
            malUser:0
        },
        clickSearchBar: [],
        searchBar: [],
        searchDate: {start: "", end: ""},
        searchTmp: {},
        top: {desc: [], asc: []},
        topCountry: {desc: [], asc: []},
        topCity: {desc: [], asc: []},
        radioSelect: 0,
        radioSelectForCountry:0,
        loading: true,
        visible: false,
        iconType: "angle-double-right",
        leftSpan: 0,
        rightSpan: 24,
        collapseDisplay: "",
        took:"0",
        total:"0",
        currentpage:1,
        statis_data:"statis_nodata",
        iconTip: "点击展开",
        accessNum:0,
        mal_ip:0,
        columns: [{
            title: '时间',
            dataIndex: 'firsttime',
            key: 'firsttime',
            width:"15%"
        },
            {
                title: '恶意IP',
                dataIndex: 'ip',
                key: 'ip',
                width:"15%"
            },
            {
                title:'威胁类型',
                dataIndex:'tag',
                key:'tag',
                width:"10%"
            },
            {
                title:'客户端',
                dataIndex:'originfo',
                key:'originfo',
                width:"15%"
            },
            {
                title:"进出流量",
                dataIndex:"flow",
                key:"flow",
                width:"25%"
            },
            {
                title:"协议类型",
                dataIndex:"protocoltype",
                key:"protocoltype",
                width:"10%"
            },
            // {
            //     title: '详情',
            //     dataIndex: 'detail',
            //     key: 'detail',
            //     width:"10%"
            // }
        ],
        tabledownloaddata:[],
        error: {},
        searchshow:1,
        searchbuttontext:"展开搜索栏",
    };

    //表格数据
    getSourceData(url) {
            let results = [];
            let downdata = [];
            this.setState({
                took:jsonData.took,
                total:jsonData.total,
                loading: false,
            });

            let levelDict={0:"正常",1:"低",2:"中",3:"高"}
            jsonData.data.map((result, index) => {
                downdata.push(
                    [
                        result.netinfo.time,
                        result.netinfo.mal_ip_info.ip,
                        result.netinfo.mal_ip_info===undefined?'局域网':result.netinfo.mal_ip_info.country_code_cn,
                        result.detinfo[0].root_type_cn===undefined?'无':result.detinfo[0].root_type_cn,
                        result.detinfo[0]===undefined?"无":levelDict[result.detinfo[0].level],
                        result.netinfo.origip,
                        result.netinfo.origport,
                        result.netinfo.client_ip_info===undefined?'局域网':result.netinfo.client_ip_info.country_code_cn,
                        result.netinfo.resp_ip_bytes+" byte",
                        result.netinfo.orig_ip_bytes+" byte",
                        result.netinfo.protocol
                    ]
                );
                let flag=false;
                if(result.detinfo!==undefined&&result.detinfo[0]!==undefined){
                    flag = result.detinfo.some((data)=>{
                        return data.root_type_cn==="自定义规则"
                    });
                }
                results.push({
                    key: index,
                    firsttime:<div>{result.netinfo.time}</div>,
                    ip:<div>
                        <div>IP：{result.netinfo.mal_ip_info.ip}</div>
                        <Location type="malip" data={result}/>
                    </div>,
                    tag:<Tag data={result.detinfo} classname="malicious_detname" typename="root_type_cn"/>,
                    originfo:<div>
                        <div>IP：{result.netinfo.origip}</div>
                        <div>端口：{result.netinfo.origport}</div>
                        <Location type="1" data={result}/>
                    </div>,
                    flow:<div>
                        <div className={style.flow_in}>进流量：{result.netinfo.resp_ip_bytes} byte</div>
                        <div className={style.flow_out}>出流量：{result.netinfo.orig_ip_bytes} byte</div>
                    </div>,
                    protocoltype:<Tagconnect data={result.netinfo} classname="malicious_detname" typename="protocol"/>,
                    detail:
                        <div>
                            {/*<div>*/}
                                {/*<Link  target='_blank' to={"/mip_source?ip=".concat(result.netinfo.respip)}>溯源分析</Link>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                                {/*{*/}
                                    {/*["udp","tcp","icmp"].indexOf(result.netinfo.protocol) === -1?*/}
                                        {/*<Link target='_blank' to={"/e_"+(["pop3","smtp","imap"].indexOf(result.netinfo.protocol)===-1?result.netinfo.protocol.toLowerCase():"email")+"?uid=".concat(result.netinfo.uid,"&sid=",result.netinfo.jump_sid)}>协议分析</Link>*/}
                                        {/*:""*/}
                                {/*}*/}
                            {/*</div>*/}
                        </div>


                });
                return results;
            });
            if(results.length!==0){
                this.setState({
                    statis_data:"statis_data",
                })
            }
            this.setState({
                dataSource: results,
                tabledownloaddata:[
                    ["时间","恶意IP","恶意IP地理信息","威胁类型","威胁等级","源IP","源端口","源IP地理信息","进流量","出流量","协议类型"]
                ].concat(downdata)
            });
    };

    componentWillReceiveProps(next){
        if(next.location.action==="PUSH"||next.location.action==="REPLACE"){
            this.setState({
                loading:true,
                currentpage:1,
            });
            let temp=window.location.hash.replace("#/","");
            if(temp.indexOf("?")!==-1){
                let a = temp.indexOf("?");
                temp=temp.slice(a+1);
                this.getSourceData(Config.mIpEvent + "?page=1&limit=" + Config.pageListNum+"&"+temp);
            }else{
                this.getSourceData(Config.mIpEvent + "?page=1&limit=" + Config.pageListNum);
            }
            // super.MalGetNum(Config.malIpMonitor,super.Fetch_Promise,this);
        }
    };

    //渲染前加载
    componentWillMount() {
        let temp=window.location.hash.replace("#/","");
        if(temp.indexOf("?")!==-1){
            let a = temp.indexOf("?");
            temp=temp.slice(a+1);
            this.getSourceData(Config.mIpEvent + "?page=1&limit=" + Config.pageListNum+"&"+temp);
        }else{
            this.getSourceData(Config.mIpEvent + "?page=1&limit=" + Config.pageListNum);
        }
        // super.MalGetNum(Config.malIpMonitor,super.Fetch_Promise,this);
    };


    render() {

        return (
            <div>
                <h2 className={style.mainTitle}>
                    系统共监测到<span>{this.state.mainTitleevent}</span>事件
                    <span>{this.state.mainTitle.eventCount}</span>
                    次，累积感染用户
                    <span>{this.state.mainTitle.totalUser}</span>
                    人次。其中今日监测到
                    <span>{this.state.mainTitle.todayEvent}</span>
                    次，感染用户
                    <span>{this.state.mainTitle.malUser}</span>人
                </h2>
                <Row>
                    <Col span={24}>
                        <Card className="card"  bordered={false}>
                            <div>
                                <div>
                                    <Row className="pt-20">
                                        <Col span={22}>
                                            <Mipform callback={()=>{}} callbacktime={()=>{}}
                                                     flushdata={()=>{}} />
                                        </Col>
                                        <Col span={2}>
                                            <Button type="primary" ghost>
                                                <CSVLink
                                                    data={this.state.tabledownloaddata}
                                                    filename={"恶意IP.csv"}
                                                    style={{textDecoration:"none"}}
                                                >
                                                    下载表单
                                                </CSVLink>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <Col span={24}>
                                        <Spin tip="加载中..." spinning={this.state.loading}>
                                            <Table dataSource={this.state.dataSource} columns={this.state.columns}
                                                   pagination={{defaultPageSize: Config.tablePageSize,current:this.state.currentpage}}
                                                   className="table-form"
                                            />
                                            <div className={this.state.statis_data}>共搜索到{this.state.total}条数据，耗时{this.state.took}毫秒</div>
                                        </Spin>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    };
}
export default ThreatMonitor;
