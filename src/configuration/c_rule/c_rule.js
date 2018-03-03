
import React from 'react';
import {Row, Col, Button, Card, Table, Input, Modal, Form, Select, Radio, Spin, Popconfirm} from 'antd';
import Config from '../../config';
// import Common from '../../common';
import { CSVLink} from 'react-csv';
import '../configuration.css'
let jsonData=require('../../jsonData/c_rule_data.json');
let levelchi={10:"低",20:"中",30:"高"};

const getRuleTypeSelect = (type) => {
    let rule_type = [];
    Object.keys(Config.ruleType[type]).map(function (value) {
        rule_type.push({key: value, name: Config.ruleType[type][value]});
        return rule_type;
    });
    return rule_type;
};
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
//数据

const tableColumns = {
    ip: [{
        title: 'IP',
        dataIndex: 'originIp',
        key: 'originIp',
    }, {
        title: '创建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    },
    {
        title: '危险等级',
        dataIndex: 'level',
        key: 'level',
    },{
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: '规则状态',
        dataIndex: 'state',
        key: 'state',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    }],
    domain: [{
        title: '域名',
        dataIndex: 'domain',
        key: 'domain',
    }, {
        title: '创建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    },{
        title: '危险等级',
        dataIndex: 'level',
        key: 'level',
    },{
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
        {
        title: '规则状态',
        dataIndex: 'state',
        key: 'state',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    }],
    mail: [{
        title: '邮箱',
        dataIndex: 'mail_from',
        key: 'mail_from',
    },
        {
        title: '创建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    }, {
        title: '危险等级',
        dataIndex: 'level',
        key: 'level',
    },{
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
        {
        title: '规则状态',
        dataIndex: 'state',
        key: 'state',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    }],
    url: [{
        title: 'URL',
        dataIndex: 'url',
        key: 'url',
    }, {
        title: '创建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    }, {
        title: '危险等级',
        dataIndex: 'level',
        key: 'level',
    },{
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
        {
        title: '规则状态',
        dataIndex: 'state',
        key: 'state',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    }],
    private: [{
        title: '词汇名称',
        dataIndex: 'word_name',
        key: 'word_name',
    }, {
        title: '词汇列表',
        dataIndex: 'word_list',
        key: 'word_list',
    }, {
        title: '泄露权值',
        dataIndex: 'weight',
        key: 'weight',
    }, {
        title: '创建日期',
        dataIndex: 'create_time',
        key: 'create_time',
    }, {
        title: '规则状态',
        dataIndex: 'state',
        key: 'state',
    }, {
        title: '描述信息',
        dataIndex: 'descriptor_info',
        key: 'descriptor_info',
    }, {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
    }]
};
const addInput = {
    ip: [{
        key: "src_ip",
        name: "IP地址",
        type: "input",
        required: true
    }, {
        key: "level",
        name: "等级",
        type: "select",
        required: true,
        option: getRuleTypeSelect("ip")
    },{
        key: "description",
        name: "描述",
        type: "input",
    }],
    domain: [{
        key: "domain",
        name: "域名",
        type: "input",
        required: true
    }, {
        key: "level",
        name: "等级",
        type: "select",
        required: true,
        option: getRuleTypeSelect("domain")
    },{
        key: "description",
        name: "描述",
        type: "input",
    }],
    mail: [{
        key: "mail_from",
        name: "邮箱",
        type: "input",
        required: true,
        pattern:/^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        message:'请输入正确的邮箱地址',
    },
        {
        key: "level",
        name: "等级",
        type: "select",
        required: true,
        option: getRuleTypeSelect("mail")
    },{
        key: "description",
        name: "描述",
        type: "input",
    }],
    phone: [{
        key: "phone_number",
        name: "手机号",
        type: "input",
        required: true
    }, {
        key: "rule_type",
        name: "规则类型",
        type: "select",
        option: getRuleTypeSelect("phone")
    }],
    url: [{
        key: "url",
        name: "URL",
        type: "input",
        required: true
    }, {
        key: "level",
        name: "等级",
        type: "select",
        required: true,
        option: getRuleTypeSelect("url")
    },{
        key: "description",
        name: "描述",
        type: "input",
    }],
    private: [{
        key: "word_name",
        name: "词汇名称",
        type: "input",
        required: true
    }, {
        key: "word_list",
        name: "词汇列表",
        type: "textarea",
        message: "每行一个词汇,每个词汇的权值为1",
        required: true
    }, {
        key: "caculate_type",
        name: "权值计算方式",
        type: "radio",
        radio: ["不使用词频,权值计算公式:W=w1+w2+w3+...", "使用词频,权值计算公式:W=w1*n1+w2*n2+w3*n3+..."],
        message: "其中W为总权值,w为某个词的权值,n为词出现的次数",
        required: true
    }, {
        key: "weight",
        name: "泄露权值",
        type: "input",
        message: "超过这个权值的信息会被认为涉嫌泄露",
        required: true,
        defaultValue: 0
    }, {
        key: "descriptor_info",
        name: "描述信息",
        type: "textarea",
    }]
};
const CollectionCreateForm = Form.create()((props) => {
    const {visible, onCancel, onCreate, form, tableType, loading, formData, actionType,modeltitle} = props;
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
                    addInput[tableType].map(function (value, index) {
                        return <FormItem key={index} label={value.name} {...{
                            labelCol: {span: 5},
                            wrapperCol: {span: 18},
                            extra: value.message
                        }}>
                            {
                                value.type === "select" ? getFieldDecorator(value.key, {
                                    initialValue: formData["level"] ? levelchi[formData["level"]] : value.option[0]["key"],
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
                                    initialValue: formData[value.key] ? formData[value.key] : value.defaultValue ? value.defaultValue : "",
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

class CRule extends React.Component {
    constructor(){
        super();
        this.state={
            modeltitle:"",
            inputValue:"",
            tableType: "ip",
            formData: "",
            title: "IP",
            is_load: {"ip": true},
            Columns: tableColumns["ip"],
            visible: false,
            loading: false,
            error: {},
            deletaId:[],
            downColumnsip:["IP","创建日期","危险等级","描述","规则状态"],
            downColumnsdomain:["域名","创建日期","危险等级","描述","规则状态"],
            downColumnsmail:["邮箱","创建日期","危险等级","描述","规则状态"],
            downColumnsurl:["URL","创建日期","危险等级","描述","规则状态"],
            downColumnsprivate:["词汇名称","词汇列表","泄露权值","创建日期","规则状态","描述信息"],
            //导出全部使用
            tabledownloaddataip:[["IP","创建日期","危险等级","描述","规则状态"]],
            tabledownloaddatadomain:[["域名","创建日期","危险等级","描述","规则状态"]],
            tabledownloaddatamail:[["邮箱","创建日期","危险等级","描述","规则状态"]],
            tabledownloaddataurl:[["URL","创建日期","危险等级","描述","规则状态"]],
            tabledownloaddataprivate:[["词汇名称","词汇列表","泄露权值","创建日期","规则状态","描述信息"]],
            //导出选中使用
            selectip:[["IP","创建日期","危险等级","描述","规则状态"]],
            selectdomain:[["域名","创建日期","危险等级","描述","规则状态"]],
            selectmail:[["邮箱","创建日期","危险等级","描述","规则状态"]],
            selecturl:[["URL","创建日期","危险等级","描述","规则状态"]],
            selectprivate:[["词汇名称","词汇列表","泄露权值","创建日期","规则状态","描述信息"]],
            // emailValue:"",
            inputValueip:"",
            inputValuedomain:"",
            inputValuemail:"",
            inputValueurl:"",
            inputValueprivate:"",
            jsonData:jsonData.ipData,
            tableData:[],
        }
    }
    componentDidMount(){
        this.doData(this.state.jsonData,"ip");
    }
    //返回数据处理
    doData(data, rule_name) {
        let result = [];
        let downdata = [];
        data.mtd.map((value, index) => {
            switch (this.state.tableType) {
                case "ip" :
                    downdata.push([
                        value.src_ip,
                        value.create_time,
                        levelchi[value.level],
                        value.description,
                        value.state === 1 ? "有效" : "无效",
                        value.rule_id,
                    ]);
                    result.push({
                        key: index,
                        id:value.rule_id,
                        originIp: value.src_ip,
                        targetIp: value.dst_ip,
                        create_time: value.create_time,
                        level:levelchi[value.level],
                        description:value.description,
                        state: value.state === 1 ? "有效" : "无效",
                        action: <div>
                            <Popconfirm title="确认删除该条数据？" onConfirm={this.onSubmit.bind(this, value, "mtdRuleDelete",index)} >
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>,
                        rule_id:value.rule_id,
                    });
                    break;
                case "domain":
                    downdata.push([
                        value.domain,
                        value.create_time,
                        levelchi[value.level],
                        value.description,
                        value.state === 1 ? "有效" : "无效",
                        value.rule_id,
                    ]);
                    result.push({
                        key: index,
                        id:value.rule_id,
                        domain: value.domain,
                        create_time: value.create_time,
                        level:levelchi[value.level],
                        description:value.description,
                        state: value.state === 1 ? "有效" : "无效",
                        action: <div>
                            <Popconfirm title="确认删除该条数据？" onConfirm={this.onSubmit.bind(this, value, "mtdRuleDelete",index)} >
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>,
                        rule_id:value.rule_id,
                    });
                    break;
                case "mail":
                    downdata.push([
                        value.mail_from,
                        value.create_time,
                        levelchi[value.level],
                        value.description,
                        value.state === 1 ? "有效" : "无效",
                        value.rule_id,
                    ]);
                    result.push({
                        key: index,
                        id:value.rule_id,
                        mail_from: value.mail_from,
                        create_time: value.create_time,
                        level:levelchi[value.level],
                        description:value.description,
                        state: value.state === 1 ? "有效" : "无效",
                        action: <div>
                            <Popconfirm title="确认删除该条数据？" onConfirm={this.onSubmit.bind(this, value, "mtdRuleDelete",index)} >
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>,
                        rule_id:value.rule_id,
                    });
                    break;
                case "url":
                    downdata.push([
                        value.url,
                        value.create_time,
                        levelchi[value.level],
                        value.description,
                        value.state === 1 ? "有效" : "无效",
                        value.rule_id,
                    ]);
                    result.push({
                        key: index,
                        id:value.rule_id,
                        url:value.url,
                        create_time: value.create_time,
                        level:levelchi[value.level],
                        description:value.description,
                        state: value.state === 1 ? "有效" : "无效",
                        action: <div>
                            <Popconfirm title="确认删除该条数据？" onConfirm={this.onSubmit.bind(this, value, "mtdRuleDelete",index)} >
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>,
                        rule_id:value.rule_id,
                    });
                    break;
                case "private":
                    downdata.push([
                        value.word_name,
                        value.word_list,
                        value.weight,
                        value.descriptor_info,
                        value.create_time,
                        value.state === 1 ? "有效" : "无效",
                        value.rule_id,
                    ]);
                    result.push({
                        key: index,
                        id:value.rule_id,
                        word_name: value.word_name,
                        word_list: value.word_list,
                        weight: value.weight,
                        descriptor_info: value.descriptor_info,
                        create_time: value.create_time,
                        state: value.state === 1 ? "有效" : "无效",
                        action: <div>
                            <Popconfirm title="确认删除该条数据？" onConfirm={this.onSubmit.bind(this, value, "mtdRuleDelete",index)} >
                                <a href="#">删除</a>
                            </Popconfirm>
                        </div>,
                        rule_id:value.rule_id,
                    });
                    break;
                default:
                    break;
            }
            return result;
        });
        let tempcol = this.state["downColumns"+rule_name];
        let temparray=[];
        temparray.push(tempcol);
        this.setState({
            loading: false,
            tableData:result,
            [rule_name+"selectKeys"]:[],
            ["DataSource_" + rule_name]: result,
            ["tabledownloaddata"+rule_name]:temparray.concat(downdata)
        });
    };



    //各类流量特征库标签
    onTableClick = (value, type) => {
        let load = this.state.is_load;
        let dataName=value+"Data";
        if (!this.state.is_load[value]) {
            this.setState({
                loading: false,
                jsonData:[value+"Data"]
            });
            this.doData(jsonData[dataName],value);
        }
        load[value] = true;
        this.setState(
            {
                is_load: load,
                tableType: value,
                title: type,
                Columns: tableColumns[value],
            });
    };

    //新增或编辑弹窗
    showModal = (value, actionUrl,modeltitle) => {
        this.setState({
            modeltitle:modeltitle,
            actionUrl: actionUrl,
            formData: value,
            visible: true,
        });
    };

    //新增或编辑弹窗提交
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
            this.onSubmit(formData, this.state.actionUrl);
        });
    };

    //新增或编辑数据处理
    onSubmit(formData, actionUrl, index) {
        const rulid = formData.rule_id;
        if(actionUrl==='mtdRuleDelete'){
            let temp = this.state[this.state.tableType+"selectKeys"];
            let datatemp = this.state["select"+this.state.tableType];
            if(temp.length!==0){
                let selectNew = [];
                temp.forEach((value,indexs)=>{
                    if(value!==index){
                        selectNew.push(value)
                    }
                });
                this.setState({
                    [this.state.tableType+"selectKeys"]:selectNew
                })
            }
            let flag =false;
            if(datatemp.length!==0){
                datatemp.forEach((value,indexs)=>{
                    value.forEach((values,indexss)=>{
                        if(values===rulid){
                            flag=indexs;
                        }
                    })
                })
            }
            if(flag!==false){
                datatemp.splice(flag,1);
                this.setState({
                    ["select"+this.state.tableType]:datatemp
                })
            }
        }
        this.setState({
            loading: false
        });
        let form = this.form;
        let postData = {
            [this.state.tableType]: formData,
            rule_name: this.state.tableType,
        };
        if (formData.rule_id) {
            postData.rule_id = formData.rule_id;
        }
        if (formData.word_list) {
            formData.word_list = formData.word_list.replace(/[\r\n]/g, ",")
        }
        // super.Fetch_Promise(Config[actionUrl], {
        //     method: "POST",
        //     mode: "cors",
        //     body: JSON.stringify(postData)
        // }).then(function (jsonData) {
        //     this.doData(jsonData.mtd, this.state.tableType);
        //     this.setState({
        //         buttonLoading: false,
        //         visible: false
        //     });
        //     form.resetFields();
        // }.bind(this)).catch(function (error_promise) {
        //     let error = this.state.error;
        //     // OpenNotificationWithIcon(error_promise, error);
        //     error[error_promise] = 1;
        //     this.setState({
        //         error: error,
        //         loading: false,
        //     });
        // }.bind(this));
    };

    //新增编辑弹窗取消
    handleCancel = () => {
        const form = this.form;
        this.setState({
            visible: false,
        });
        form.resetFields();
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    handleSelectChange(selectedRowKeys, selectedRows){
        let temp = [];
        let selectdown=[];
        selectedRows.map((value)=>{
            // console.log(value.originIp.props.children)
            switch (this.state.tableType) {
                case "ip" :
                    selectdown.push([
                        value.originIp,
                        value.create_time,
                        value.level,
                        value.description,
                        value.state,
                        value.rule_id,
                    ]);
                    break;
                case "domain":
                    selectdown.push([
                        value.domain,
                        value.create_time,
                        value.level,
                        value.description,
                        value.state,
                        value.rule_id,
                    ]);
                    break;
                case "mail":
                    selectdown.push([
                        value.mail_from,
                        value.mail_to,
                        value.create_time,
                        value.level,
                        value.description,
                        value.state,
                        value.rule_id,
                    ]);
                    break;
                case "url":
                    selectdown.push([
                        value.url,
                        value.create_time,
                        value.level,
                        value.description,
                        // value.rule_type,
                        // Config.ruleType[value.rule_name][value.rule_type],
                        value.state,
                        value.rule_id,
                    ]);

                    break;
                case "private":
                    selectdown.push([
                        value.word_name,
                        value.word_list,
                        value.weight,
                        value.descriptor_info,
                        value.create_time,
                        value.state,
                        value.rule_id,
                    ]);
                    break;
                default:
                    break;
            }
            temp.push(value.id);
            return temp
        });

        let type= this.state.tableType;
        let tempcol = this.state["downColumns"+type];
        let temparray=[];
        temparray.push(tempcol);
        this.setState({
            deletaId:temp,
            [type+"selectKeys"]:selectedRowKeys,
            ["select"+type]:temparray.concat(selectdown)
        });
    }

    handleSelectDelete(){//删除选中
        let postData={};
        postData.rule_name=this.state.tableType;
        postData.rule_ids=this.state.deletaId;
        let type = this.state.tableType;
        let tempcol = this.state["downColumns"+type];
        let temparray=[];
        temparray.push(tempcol);
        this.setState({
            ["select"+this.state.tableType]:temparray
        });
        let tempJSON=this.state.jsonData;
    };

    handleDelete(){//删除全部
        let data= this.state["DataSource_" + this.state.tableType];
        let type = this.state.tableType;
        let tempcol = this.state["downColumns"+type];
        let temparray=[];
        temparray.push(tempcol);
        this.setState({
            ["select"+this.state.tableType]:temparray
        });
        let temp = [];
        data.map((value)=>{
            temp.push(value.id);
            return temp;
        });
        let postData={};
        postData.rule_name=this.state.tableType;
        postData.rule_ids=temp;
        // super.Fetch_Promise(Config.mtdRuleDeleteSelete,{
        //     method:"POST",
        //     body:JSON.stringify(postData)
        // }).then(jsonData => {
        //     this.doData(jsonData.mtd, this.state.tableType);
        // });
        // this.setState({
        //     deletaId:temp,
        // })
    };

    //查询input的输入
    handleInputChange=(e)=>{
        this.setState({
            ["inputValue"+this.state.tableType]:e.target.value.trim()
        })
    };

    //搜索并返回
    handleSearch(){
        if(this.state["inputValue"+this.state.tableType].toString().trim()===""){
            this.getSourceData(Config.mtdRule + "?type=" + this.state.tableType, this.state.tableType);
        }else{
            if(this.state.tableType==="mail"){
                // super.Fetch_Promise(Config.ruleSearch.concat("?rule_name=",this.state.tableType,"&","mail_from=",this.state["inputValue"+this.state.tableType])).then((jsonData)=>{
                //     this.doData(jsonData.mtd, this.state.tableType);
                // });
            }else if(this.state.tableType==='private'){
                // super.Fetch_Promise(Config.ruleSearch.concat("?rule_name=",this.state.tableType,"&","word_name=",this.state["inputValue"+this.state.tableType])).then((jsonData)=>{
                //     this.doData(jsonData.mtd, this.state.tableType);
                // });
            }else{
                // super.Fetch_Promise(Config.ruleSearch.concat("?rule_name=",this.state.tableType,"&",this.state.tableType,"=",this.state["inputValue"+this.state.tableType])).then((jsonData)=>{
                //     this.doData(jsonData.mtd, this.state.tableType);
                // });
            }
        }
        // console.log(this.state.inputValue);
        // console.log(this.state.tableType)
    };
    render() {
        const rowSelection = {
            onChange: this.handleSelectChange.bind(this),
            selectedRowKeys:this.state[this.state.tableType+"selectKeys"],
        };
        return (
            <div  className="rule cfortable">
                <Card title="规则类型" style={{marginBottom: 24}} className="card " bordered={false}>
                    <Row>
                        <Col span={24}>
                            <Button type="primary" style={{marginRight: 16}}
                                    onClick={this.onTableClick.bind(null, "ip", "IP")}>IP</Button>
                            <Button type="primary" style={{marginRight: 16}}
                                    onClick={this.onTableClick.bind(null, "domain", "域名")}>域名</Button>
                            <Button type="primary" style={{marginRight: 16}}
                                    onClick={this.onTableClick.bind(null, "mail", "邮箱")}>邮箱</Button>
                            {/*<Button type="primary" style={{marginRight: 16}}*/}
                                    {/*onClick={this.onTableClick.bind(null, "phone", "手机号")}>手机号</Button>*/}
                            <Button type="primary" style={{marginRight: 16}}
                                    onClick={this.onTableClick.bind(null, "url", "URL")}>URL</Button>
                            <Button type="primary" style={{marginRight: 16}}
                                    onClick={this.onTableClick.bind(null, "private", "隐私泄露")}>隐私泄露</Button>
                        </Col>
                    </Row>
                </Card>
                <Card title="流量特征库信息"  className="card " bordered={false}>
                    <Row>
                        <Col span={24}>
                            <h3 className="formtitle">{this.state.title}自定义规则</h3>
                        </Col>
                        <Col span={24}>
                            <div style={{display: "flex",padding:"10px 0 10px 0"}}>
                                <div style={{width:"500px"}}>
                                    <Input addonBefore={this.state.title} onChange={this.handleInputChange.bind(this)} value={this.state["inputValue"+this.state.tableType]}/>
                                </div>
                                <div style={{paddingLeft:"20px"}}>
                                    <Button type="primary" onClick={this.handleSearch.bind(this)}>查询</Button>
                                </div>
                            </div>
                        </Col>

                        <Col span={24}>
                            <div style={{paddingTop:10,paddingBottom:10}}>
                                <Button style={{marginRight: 16}} type="primary" onClick={this.showModal.bind(null, "", "mtdRuleAdd","新增")}>新增</Button>
                                <Popconfirm title="确认删除选中？" onConfirm={this.handleSelectDelete.bind(this)} >
                                    <Button style={{marginRight: 16}} type="primary">删除选中</Button>
                                </Popconfirm>
                                <Popconfirm title="确认删除全部？" onConfirm={this.handleDelete.bind(this)} >
                                    <Button style={{marginRight: 16}} type="primary">删除全部</Button>
                                </Popconfirm>
                                <Button style={{marginRight: 16}} type="primary">
                                    <CSVLink
                                        data={this.state["select"+this.state.tableType]}
                                        filename={"选中自定义规则.csv"}
                                        style={{textDecoration:"none"}}
                                    >
                                        导出选中
                                    </CSVLink>
                                </Button>
                                <Button style={{marginRight: 16}} type="primary">
                                    <CSVLink
                                        data={this.state["tabledownloaddata"+this.state.tableType]}
                                        filename={"自定义规则.csv"}
                                        style={{textDecoration:"none"}}
                                    >
                                        导出全部
                                    </CSVLink>
                                </Button>
                                {/*<Button style={{marginRight: 16,backgroundColor:"#14892c",borderColor:"#14892c"}} type="primary" onClick={this.showModal.bind(null, "", "mtdRuleAdd")}>导入特征</Button>*/}
                            </div>
                            {/*<Input style={{width: 240, marginBottom: 8, float: "right"}}/>*/}
                        </Col>
                        <Col span={24}>
                            <Spin tip="加载中..." spinning={this.state.loading}>
                                <Table columns={this.state.Columns}
                                       // dataSource={this.state["DataSource_" + this.state.tableType]}
                                       dataSource={this.state.tableData}
                                       pagination={{defaultPageSize: Config.tablePageSize}}
                                       rowSelection={rowSelection}
                                       rowClassName={function (record,index) {
                                           if(index%2===0){
                                               return "even"
                                           }else{
                                               return "odd"
                                           }
                                       }}
                                />
                            </Spin>
                        </Col>
                    </Row>
                </Card>
                <CollectionCreateForm
                    key={this.state.tableType}
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleOk}
                    tableType={this.state.tableType}
                    loading={this.state.loading}
                    formData={this.state.formData}
                    actionType={this.state.actionType}
                    modeltitle={this.state.modeltitle}
                />

            </div>
        );
    };
}
export default CRule;
