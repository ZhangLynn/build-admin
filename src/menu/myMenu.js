import Overview from '../home/overview'
import FlowMonitor from '../monitor/flow'
import ThreatMonitor from  '../monitor/threat'
import CRule from '../configuration/c_rule/c_rule'
import CManagement from '../configuration/c_management/c_management'

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRouter
} from 'react-router-dom'
import {Menu,Button,notification,Icon,Row,Col} from 'antd';
import './MyLayout.css'
const SubMenu = Menu.SubMenu;

class MyLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current: 'mail',
            mainHeader:'index'
        };
        this.showSubheader=this.showSubheader.bind(this)
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    };
    showSubheader(mainHeader){
        this.setState({
            mainHeader:mainHeader
        });
    };
    //测试切换账户
    render(){
        return (
            <div>
                <Row>
                    <Col span="3">
                        <div className="layout-header">
                            <Menu
                                onClick={this.handleClick}
                                // selectedKeys={[this.state.current]}
                                defaultSelectedKeys={['overview']}
                                defaultOpenKeys={['index']}
                                mode="inline"
                            >

                                <SubMenu key="index" title="首页" onMouseover={()=>{this.showSubheader('index')}}>
                                    <Menu.Item key="overview">
                                        <Link to="overview">总览</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="charts" title="监测类页面" onMouseover={()=>{this.showSubheader('charts')}}>
                                    <Menu.Item key="charts_map">
                                        <Link to="flow_monitor">流量监测</Link>
                                    </Menu.Item>
                                    <Menu.Item key="threat_monitor">
                                        <Link to="threat_monitor">威胁监测</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="table" title="表格页" onMouseover={()=>{this.showSubheader('table')}}>
                                    {/*<Menu.Item key="charts_map">*/}
                                        {/*<Link to="charts_map">搜索类表格</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="charts_other">*/}
                                        {/*<Link to="charts_other">详情类表格</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="charts_other">*/}
                                        {/*<Link to="charts_other">表格数据导出</Link>*/}
                                    {/*</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="units" title="表单页" onMouseover={()=>{this.showSubheader('units')}}>
                                    {/*<Menu.Item key="charts_map">*/}
                                        {/*<Link to="charts_map">注册表单</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="charts_other">*/}
                                        {/*<Link to="charts_other">上传表单</Link>*/}
                                    {/*</Menu.Item>*/}
                                    {/*<Menu.Item key="charts_other">*/}
                                        {/*<Link to="charts_other">动态修改表单</Link>*/}
                                    {/*</Menu.Item>*/}
                                </SubMenu>
                                <SubMenu key="configuration" title="配置管理" >
                                    <Menu.Item key="c_rule">
                                        <Link to="c_rule">自定义配置规则</Link>
                                    </Menu.Item>
                                    <Menu.Item key="c_management">
                                        <Link to="c_management">设备管理</Link>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                    </Col>
                    <Col span="21">
                        <div className="layout-body">
                            <Route exact path="/overview" component={Overview}/>
                            <Route path="/flow_monitor" component={FlowMonitor}/>
                            <Route path="/threat_monitor" component={ThreatMonitor}/>
                            <Route path="/c_rule" component={CRule}/>
                            <Route path="/c_management" component={CManagement}/>
                        </div>
                    </Col>
                </Row>

            </div>
        )||""
    }
}
export default MyLayout