/**
 * Created by heyunfeng on 2017/5/26.
 */
import React from 'react';
import { Row, Col, Button, Table, Progress } from 'antd';
import {Config,
    // OpenNotificationWithIcon
} from '../../plugins';
import './c_management.css'
import Common from '../../common';
import '../configuration.css'

class C_management extends Common{

    constructor(){
        super();
        this.state={
            device_id:"",
            device_model:"",
            equipmenttime:"2017-04-19 10:42:36",
            system_type:"",
            user:"",
            running:"",
            disk_info:[],
            mem_info:[],
            cpu_info:[],
            error:{},
        };
        this.refreshState=this.refreshState.bind(this)
    }



    componentWillMount() {
        console.log(window.atob('cXFqMDEyNA=='));
        super.Fetch_Promise(Config.deivceInfo).then(jsonData => {
            let diskinfo = [];
            let meminfo = [];
            let cpuinfo = [];
            jsonData.data.disk_info.map((value,index)=>{
                diskinfo.push({
                    key:index,
                    mount:value.mount,
                    total:value.total+' byte',
                    used:value.used+' byte',
                    free:value.free+' byte',
                    name:value.name,
                    rate: <Progress percent={Number(((value.total - value.free) / value.total * 100).toFixed(2))}
                                    status="active"/>
                });
                return diskinfo
            });

            meminfo.push({
                key:"meminfo",
                total:jsonData.data.mem_info.total+' byte',
                used:jsonData.data.mem_info.used+' byte',
                free:jsonData.data.mem_info.free+' byte',
                rate: <Progress percent={Number(((jsonData.data.mem_info.total - jsonData.data.mem_info.free) / jsonData.data.mem_info.total * 100).toFixed(2))}
                                status="active"/>
            });

            cpuinfo.push({
                key:"cpuinfo",
                count:jsonData.data.cpu_info.count,
                model:jsonData.data.cpu_info.model,
                frequency:jsonData.data.cpu_info.frequency,
                baseband:jsonData.data.cpu_info.baseband,
            });

            this.setState({
                device_id:jsonData.data.device_id,
                device_model:jsonData.data.device_model,
                system_type:jsonData.data.system_type,
                user:jsonData.data.user,
                running:jsonData.data.running,
                disk_info:diskinfo,
                mem_info:meminfo,
                cpu_info:cpuinfo,
            })
        }).catch(error_promise => {
            let error = this.state.error;
            // OpenNotificationWithIcon(error_promise, error);
            error[error_promise] = 1;
            this.setState({
                error: error,
                loading: false,
            });
        });
    };

    refreshState(){
        super.Fetch_Promise(Config.deivceInfo).then(jsonData => {
            let diskinfo = [];
            let meminfo = [];
            let cpuinfo = [];
            jsonData.data.disk_info.map((value,index)=>{
                diskinfo.push({
                    key:index,
                    mount:value.mount,
                    total:value.total+' byte',
                    used:value.used+' byte',
                    free:value.free+' byte',
                    name:value.name,
                    rate: <Progress percent={Number(((value.total - value.free) / value.total * 100).toFixed(2))}
                                    status="active"/>
                });
                return diskinfo
            });

            meminfo.push({
                key:"meminfo",
                total:jsonData.data.mem_info.total+' byte',
                used:jsonData.data.mem_info.used+' byte',
                free:jsonData.data.mem_info.free+' byte',
                rate: <Progress percent={Number(((jsonData.data.mem_info.total - jsonData.data.mem_info.free) / jsonData.data.mem_info.total * 100).toFixed(2))}
                                status="active"/>
            });

            cpuinfo.push({
                key:"cpuinfo",
                count:jsonData.data.cpu_info.count,
                model:jsonData.data.cpu_info.model,
                frequency:jsonData.data.cpu_info.frequency,
                baseband:jsonData.data.cpu_info.baseband,
            });

            this.setState({
                device_id:jsonData.data.device_id,
                device_model:jsonData.data.device_model,
                system_type:jsonData.data.system_type,
                user:jsonData.data.user,
                running:jsonData.data.running,
                disk_info:diskinfo,
                mem_info:meminfo,
                cpu_info:cpuinfo,
            })
        }).catch(error_promise => {
            let error = this.state.error;
            // OpenNotificationWithIcon(error_promise, error);
            error[error_promise] = 1;
            this.setState({
                error: error,
                loading: false,
            });
        });
    }

    render(){
        const diskinfoColumns = [{
            title: '分区',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '大小',
            dataIndex: 'total',
            key: 'total',
        }, {
            title: '已使用',
            dataIndex: 'used',
            key: 'used',
        }, {
            title: '未使用',
            dataIndex: 'free',
            key: 'free',
        }, {
            title: '使用率',
            dataIndex: 'rate',
            key: 'rate',
        }, {
            title: '挂载位置',
            dataIndex: 'mount',
            key: 'mount',
        }];


        const meminfoColumns = [{
            title:"内存总数",
            dataIndex:"total",
            key:'total'
        },{
            title:"已使用",
            dataIndex:"used",
            key:'used'
        },{
            title:"空闲",
            dataIndex:"free",
            key:'free'
        }, {
            title: '使用率',
            dataIndex: 'rate',
            key: 'rate',
        }];

        const columnsCPU = [{title:"基带",dataIndex:"baseband",key:'baseband'},{title:"型号",dataIndex:"model",key:'modal'},{title:"频率",dataIndex:"frequency",key:'frequency'},{title:"核心数",dataIndex:"count",key:'count'}];



        return(
            <div className="c_management cfortable">
                {/* <Row type="flex" justify="start">
                    <Col span={2}>
                        <Button type="primary" icon="poweroff">设备关机</Button>
                    </Col>
                    <Col span={2}>
                        <Button type="primary" icon="reload">设备重启</Button>
                    </Col>
                    <Col span={1} >
                        <Button type="primary" icon="sync" onClick={this.refreshState}>刷新</Button>
                    </Col>
                </Row> */}
                <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>设备ID:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.device_id}</span>
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>设备型号:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.device_model}</span>
                    </Col>
                </Row>
                {/* <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>操作时间:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.equipmenttime}</span>
                    </Col>
                </Row> */}
                <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>操作系统:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.system_type}</span>
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>当前用户:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.user}</span>
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}}>
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <span>持续运行时间:</span>
                    </Col>
                    <Col span={3} style={{
                        fontSize: 14
                    }}>
                        <span>{this.state.running}</span>
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}} type="flex"  align="middle">
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <div >
                            硬盘空间:
                        </div>
                    </Col>
                    <Col span={22} style={{
                        fontSize: 14
                    }}>
                        <Table columns={diskinfoColumns} dataSource={this.state.disk_info} pagination={false}
                               rowClassName={function (record,index) {
                                   if(index%2===0){
                                       return "even"
                                   }else{
                                       return "odd"
                                   }
                               }}
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}} type="flex"  align="middle">
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <div >
                            内存:
                        </div>
                    </Col>
                    <Col span={22} style={{
                        fontSize: 14
                    }}>
                        <Table columns={meminfoColumns} dataSource={this.state.mem_info} pagination={false}
                               rowClassName={function (record,index) {
                                   if(index%2===0){
                                       return "even"
                                   }else{
                                       return "odd"
                                   }
                               }}
                        />
                    </Col>
                </Row>
                <Row style={{paddingTop:"20px"}} type="flex"  align="middle">
                    <Col span={2} style={{
                        fontSize: 14,
                    }}>
                        <div >
                            CPU:
                        </div>
                    </Col>
                    <Col span={22} style={{
                        fontSize: 14
                    }}>
                        <Table columns={columnsCPU} dataSource={this.state.cpu_info} pagination={false}  rowClassName={function (record,index) {
                            if(index%2===0){
                                return "even"
                            }else{
                                return "odd"
                            }
                        }}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default C_management