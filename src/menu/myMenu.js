// import App from './App'
import Test from './restRouter'
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
const MenuItemGroup = Menu.ItemGroup;

const Overview = () => (
    <div>
        <h2>Overview</h2>
    </div>
);


const Category = ({match}) => {
    return(
        <div>
            <h2>Category</h2>
        </div>
    )
};

const Products = () => (
    <div>
        <h2>Products</h2>
    </div>
);

const menu = {
    index: [
        {
            "en": "overview",
            "ch": "总览",
        }
    ],
    charts: [
        {
            "en": "charts_map",
            "ch": "地图"
        }, {
            "en": "charts_other",
            "ch": "其它图表"
        },
    ],
    table: [
        {
            "en": "e_email",
            "ch": "表格"
        },
        {
            "en": "e_file",
            "ch": "详情表格"
        }
    ],
    units: [
        {
            "en": "a_email",
            "ch": "标签组件"
        }, {
            "en": "a_qq",
            "ch": "国旗组件"
        }, {
            "en": "a_phone",
            "ch": "轮播组件"
        }
    ],
    configuration: [
        {
            "en": "c_rule",
            "ch": "自定义规则"
        }, {
            "en": "c_memory",
            "ch": "存储管理"
        }, {
            "en": "c_management",
            "ch": "设备管理"
        }
    ],
    usermanagement: [
        {
            "en": "u_management",
            "ch": "用户管理"
        }
    ]
};
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
                                <SubMenu key="charts" title="图表页" onMouseover={()=>{this.showSubheader('charts')}}>
                                    <Menu.Item key="charts_map">
                                        <Link to="charts_map">地图</Link>
                                    </Menu.Item>
                                    <Menu.Item key="charts_other">
                                        <Link to="charts_other">其它图表</Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="table" title="表格页" onMouseover={()=>{this.showSubheader('table')}}>

                                </SubMenu>
                                <SubMenu key="units" title="自定义组件页" onMouseover={()=>{this.showSubheader('units')}}>

                                </SubMenu>
                            </Menu>
                        </div>
                    </Col>
                    <Col span="20">
                        <div className="layout-body">
                            <Route exact path="/overview" component={Test}/>
                            <Route path="/charts" component={Category}/>
                            <Route path="/units" component={Products}/>
                        </div>
                    </Col>
                </Row>

            </div>
        )||""
    }
}
export default MyLayout