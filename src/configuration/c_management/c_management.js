
import React from 'react';
import { Row, Col, Button, Table, Progress,Radio, Modal,Form,Input,Select} from 'antd';
import './c_management.css'
import '../configuration.css'
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem=Form.Item;
const confirm = Modal.confirm;
let stasticData={"status": 0, "data": {"device_model": "MTD-S-0001", "disk_info": [{"mount": "/", "total": 424286609408, "free": 280049639424, "used": 122660737024, "name": "/dev/sda3"}, {"mount": "/data/ssd06", "total": 1032399339520, "free": 786225123328, "used": 193707511808, "name": "/dev/sdi1"}, {"mount": "/data/ssd02", "total": 1032399339520, "free": 965981442048, "used": 13951193088, "name": "/dev/sdd1"}, {"mount": "/data/ssd01", "total": 1032399339520, "free": 966006607872, "used": 13926027264, "name": "/dev/sdc1"}, {"mount": "/data/ssd04", "total": 1032399339520, "free": 805191581696, "used": 174741053440, "name": "/dev/sdh1"}, {"mount": "/data/sas04", "total": 5952557907968, "free": 4167183982592, "used": 1485357301760, "name": "/dev/sdg1"}, {"mount": "/data/sas01", "total": 5952557907968, "free": 5012082315264, "used": 640458969088, "name": "/dev/sdb1"}, {"mount": "/data/sas03", "total": 5952557907968, "free": 5171888525312, "used": 480652759040, "name": "/dev/sdf1"}, {"mount": "/data/sas02", "total": 5952557907968, "free": 5049149964288, "used": 603391320064, "name": "/dev/sde1"}, {"mount": "/boot", "total": 602472448, "free": 455376896, "used": 103055360, "name": "/dev/sda1"}], "mem_info": {"total": 134607814656, "free": 36888285184, "used": 59322875904}, "cpu_info": {"count": 48, "model": "Xeon(R)", "frequency": "2.20GHz", "baseband": "Intel(R)"}, "running": "2 days, 2 hours, 32 mins, 58 sec", "user": ["root"], "device_id": "0000001", "system_type": "Linux"}}

const saveSelectOption=[{
    key:1,
    name:1
},{
    key:2,
    name:7
}, {
    key:3,
    name:14
}];
const addInput = {
    ip: [{
        key: "src_ip",
        name: "IP地址",
        type: "input",
        required: true
    }, {
        key: "level",
        name: "子网掩码",
        type: "input",
        required: true
    },{
        key: "description",
        name: "网关",
        type: "input",
        required: true,
    }],
    save: [ {
        key: "days",
        name: "存储周期",
        type: "select",
        required: true,
        option:saveSelectOption
    }],

};
const CollectionCreateForm = Form.create()((props) => {
    const {visible, onCancel, onCreate, form, formType, loading, formData, actionType,modeltitle} = props;
    const {getFieldDecorator} = form;
    return (
        <Modal
            visible={visible}
            title={modeltitle}
            onOk={onCreate.bind(null, actionType)}
            onCancel={onCancel}
            footer={[
                <Button key="back" size="large" onClick={onCancel}>关闭</Button>,
                <Button key="submit" type="primary" size="large" loading={loading} onClick={onCreate}>
                    提交
                </Button>,
            ]}
            maskClosable={false}
        >
            <Form layout="horizontal">
                {
                    addInput[formType].map(function (value, index) {
                        return <FormItem key={index} label={value.name} {...{
                            labelCol: {span: 5},
                            wrapperCol: {span: 18},
                            extra: value.message
                        }}>
                            {
                                value.type === "select" ? getFieldDecorator(value.key, {
                                    // initialValue: formData["level"] ? levelchi[formData["level"]] : value.option[0]["key"],
                                    rules: [{
                                        required: value.required,
                                        message: '请选择该字段',
                                    }],
                                })(
                                    <Select disabled={actionType === "edit"}>
                                        {
                                            value.option.map(function (value_option, index_option) {
                                                return <Option key={index_option} value={value_option.key}>
                                                    {value_option.name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                ) : ""
                            }
                            {
                                value.type === "input" ? getFieldDecorator(value.key, {
                                    // initialValue: formData[value.key] ? formData[value.key] : value.defaultValue ? value.defaultValue : "",
                                    rules: [{
                                        required: value.required,
                                        message: '请填写该字段',
                                    }],
                                },value.pattern===undefined?{}:{pattern:value.pattern,message:value.message})(<Input/>) : ""
                            }
                            {
                                value.type === "textarea" ? getFieldDecorator(value.key, {
                                    initialValue: formData[value.key] ? formData[value.key] : "",
                                    rules: [{
                                        required: value.required,
                                        message: '请填写该字段',
                                    }],
                                })(<Input type="textarea"/>) : ""
                            }
                            {
                                value.type === "radio" ? getFieldDecorator(value.key, {
                                    initialValue: formData[value.key] ? formData[value.key] : 0,
                                    rules: [{
                                        required: value.required,
                                        message: '请填写该字段',
                                    }],
                                })(<RadioGroup>
                                    {
                                        value.radio.map(function (value, index) {
                                            return <Radio key={index} value={index}>{value}</Radio>
                                        })
                                    }
                                </RadioGroup>) : ""
                            }
                        </FormItem>
                    })
                }
            </Form>
        </Modal>
    );
});
class CManagement extends React.Component{
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
            formType:"ip",
            visible:false,
            loading:false,
            modaltitle:"",
            actionType:""
        };
        this.refreshState=this.refreshState.bind(this)
    }



    componentWillMount() {
        // console.log(window.atob('cXFqMDEyNA=='));
        let jsonData=stasticData;
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
    };

    refreshState(){

    }
    showModal = (value, actionUrl,modeltitle,formType) => {
        this.setState({
            modeltitle:modeltitle,
            actionUrl: actionUrl,
            formData: value,
            visible: true,
            formType:formType
        });
    };
    showConfirm(title,actionUrl) {
        confirm({
            title: '提示',
            content:title,
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    };
    handleCancel = () => {
        const form = this.form;
        this.setState({
            visible: false,
        });
        form.resetFields();
    };
    handleOk = () => {
        let form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return false;
            }
            this.setState({
                buttonLoading: true,
            });
            let formData = {};
            Object.keys(values).map(key => {
                if (key.indexOf("rule_type") > -1) {
                    formData["rule_type"] = values[key];
                } else {
                    formData[key] = values[key];
                }
                return formData;
            });
            if (this.state.formData.hasOwnProperty("rule_id")) {
                formData["rule_id"] = this.state.formData["rule_id"];
            }
            // this.onSubmit(formData, this.state.actionUrl);
        });
    };
    render(){
        const diskinfoColumns = [{
            title: '分区',
            dataIndex: 'name',
            key: 'name',
            width:'12%'
        }, {
            title: '大小',
            dataIndex: 'total',
            key: 'total',
            width:'16%'
        }, {
            title: '已使用',
            dataIndex: 'used',
            key: 'used',
            width:'16%'
        }, {
            title: '未使用',
            dataIndex: 'free',
            key: 'free',
            width:'16%'
        }, {
            title: '使用率',
            dataIndex: 'rate',
            key: 'rate',
            width:'25%'
        }, {
            title: '挂载位置',
            dataIndex: 'mount',
            key: 'mount',
            width:'15%'
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
            <div style={{padding:"20px"}}>
                <Row>
                    <Col span={12}>
                        <Row style={{paddingTop:"20px"}}>
                            <Col span={4} style={{
                                fontSize: 14,
                            }}>
                                <span>设备ID:</span>
                            </Col>
                            <Col span={20} style={{
                                fontSize: 14
                            }}>
                                <span>{this.state.device_id}</span>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col span={4} style={{
                                fontSize: 14,
                            }}>
                                <span>设备型号:</span>
                            </Col>
                            <Col span={20} style={{
                                fontSize: 14
                            }}>
                                <span>{this.state.device_model}</span>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col span={4} style={{
                                fontSize: 14,
                            }}>
                                <span>操作系统:</span>
                            </Col>
                            <Col span={20} style={{
                                fontSize: 14
                            }}>
                                <span>{this.state.system_type}</span>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col span={4} style={{
                                fontSize: 14,
                            }}>
                                <span>当前用户:</span>
                            </Col>
                            <Col span={20} style={{
                                fontSize: 14
                            }}>
                                <span>{this.state.user}</span>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:"20px"}}>
                            <Col span={4} style={{
                                fontSize: 14,
                            }}>
                                <span>持续运行时间:</span>
                            </Col>
                            <Col span={20} style={{
                                fontSize: 14
                            }}>
                                <span>{this.state.running}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row type="flex" justify="start" style={{marginTop:"20px"}}>
                            <Col span={3}>
                                <Button type="primary" icon="file" onClick={this.showModal.bind(null, "", "mtdRuleAdd","新增",'ip')}>IP配置</Button>
                            </Col>
                            <Col span={3}>
                                <Button type="primary" icon="download" onClick={this.showModal.bind(null, "", "mtdRuleAdd","新增",'save')}>存储配置</Button>
                            </Col>
                            <Col span={3}>
                                <Button type="primary" icon="reload" onClick={this.showConfirm.bind(this,"确认试行设备重启?")}>设备重启</Button>

                            </Col>
                            <Col span={3}>
                                <Button type="primary" icon="poweroff" onClick={this.showConfirm.bind(this,"确认试行设备关机?")}>设备关机</Button>
                            </Col>
                            <Col span={3} >
                                <Button type="primary" icon="sync" onClick={this.showConfirm.bind(this,"确认清除系统数据?")}>清除数据</Button>
                            </Col>
                        </Row>
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
                {
                    <CollectionCreateForm
                        key={this.state.formType}
                        ref={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleOk}
                        formType={this.state.formType}
                        loading={this.state.loading}
                        formData={this.state.formData}
                        actionType={this.state.actionType}
                        modeltitle={this.state.modeltitle}
                    />
                }
            </div>
        )
    }
}

export default CManagement