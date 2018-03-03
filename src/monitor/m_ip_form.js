
import React from 'react';
import { Form, Row, Col, Select, Input, DatePicker, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const {RangePicker} = DatePicker;
let type="geoip_mal_ip"
class NormalLoginForm extends React.Component{

    handleSubmit=(e)=> {
        e.preventDefault();
        this.props.form.validateFields((err, values)=> {
            if (!err) {
                this.props.callback(values);
            }
        });
        this.props.flushdata();
    };
    handleSelectChange = (value) => {
        type=value;
    };
    render(){
        const { getFieldDecorator }=this.props.form;

        const formItemLayout={
            labelCol: { span: 10 },
            wrapperCol: { span: 14 },
        };
        const timeFormItemLayout={
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };
        return (
            <Form onSubmit={this.handleSubmit} className="black-form">
                <Row>
                    <Col span={5}>
                        <FormItem
                            {...timeFormItemLayout}
                            label="时间"
                        >
                            {getFieldDecorator('datepicker', {
                            })(
                                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder={['开始', '结束']} style={{width: "initial"}} onChange={this.props.callbacktime}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="威胁类型"
                        >
                            {getFieldDecorator('mal_flag', {
                                initialValue:"所有"
                            })(
                                <Select
                                    placeholder="选择分类"
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="所有">所有</Option>
                                    <Option value="远程控制">远程控制</Option>
                                    <Option value="隐私窃取">隐私窃取</Option>
                                    <Option value="钓鱼事件">钓鱼事件</Option>
                                    <Option value="恶意扣费">恶意扣费</Option>
                                    <Option value="恶意传播">恶意传播</Option>
                                    <Option value="资费消耗">资费消耗</Option>
                                    <Option value="诱骗欺诈">诱骗欺诈</Option>
                                    <Option value="自定义规则">流氓事件</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="恶意IP"
                        >
                            {getFieldDecorator('mal_ip', {
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <Row>
                            <Col span={14}>
                                <FormItem
                                    labelCol={{span:14}}
                                    wrapperCol={{span:10}}
                                    label="IP位置"
                                >
                                    {getFieldDecorator("area", {
                                        initialValue:"国家",
                                        onChange: this.handleSelectChange,
                                    })(
                                        <Select placeholder="选择分类">
                                            <Option value="geoip_mal_ip">国家</Option>
                                            <Option value="province_mal_ip">省份</Option>
                                            <Option value="city_mal_ip">城市</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={10}>
                                <FormItem>
                                    {getFieldDecorator(type, {
                                    })(
                                        <Input/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={2} offset={2}>
                        <FormItem>
                            <Button type="primary" htmlType="submit">查询</Button>
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="客户端IP"
                        >
                            {getFieldDecorator('orig_ip', {
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem
                            {...formItemLayout}
                            label="协议类型"
                        >
                            {getFieldDecorator('protocol', {
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const M_ip_form =Form.create()(NormalLoginForm);

export default M_ip_form;

{/*<Select*/}
{/*placeholder="协议类型"*/}
{/*showSearch*/}
{/*optionFilterProp="children"*/}
{/*filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}*/}
{/*>*/}
{/*<Option value="所有">所有</Option>*/}
{/*<Option value="HTTP">HTTP</Option>*/}
{/*<Option value="SMTP">SMTP</Option>*/}
{/*<Option value="POP3">POP3</Option>*/}
{/*<Option value="IMAP">IMAP</Option>*/}
{/*<Option value="FTP">FTP</Option>*/}
{/*</Select>*/}