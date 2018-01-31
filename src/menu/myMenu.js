// import App from './App'
import Test from './restRouter'
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    IndexRouter
} from 'react-router-dom'
import {Menu,Button,notification,Icon} from 'antd';
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
            "en": "m_app",
            "ch": "地图"
        }, {
            "en": "m_domain",
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

    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    showSubheader=(mainHeader)=>{
        this.setState({
            mainHeader:mainHeader
        });
    };
    //测试切换账户
    render(){
        return (
            <div>
                <div className="layout-header">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="home">
                            <Link to="/home" onMouseOver={()=>{this.showSubheader('index')}}>首页</Link>
                        </Menu.Item>
                        <Menu.Item key="charts">
                            <Link to="/charts" onMouseOver={this.showSubheader.bind(null,'charts')}>图表页</Link>
                        </Menu.Item>
                        <Menu.Item key="table">
                            <Link to="/table" onMouseOver={this.showSubheader.bind(null,'table')}>表格页</Link>
                        </Menu.Item>
                        <Menu.Item key="units">
                            <Link to="/units" onMouseOver={this.showSubheader.bind(null,'units')}>自定义组件页</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="layout-subheader">
                    <Menu mode="horizontal">
                        {
                            menu[this.state.mainHeader].map(value=>{
                                return <Menu.Item key={value.en}>
                                    <Link to={value.en}>{value.ch}</Link>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </div>
                <div className="layout-body">
                    <Route exact path="/overview" component={Test}/>
                    <Route path="/charts" component={Category}/>
                    <Route path="/units" component={Products}/>
                </div>
            </div>
        )||""
    }
}
export default MyLayout