import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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


const Home = () => (
    <div>
        <h2>Home</h2>
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
            "ch": "总览"
        }
    ],
    malicious: [
        {
            "en": "m_app",
            "ch": "恶意应用"
        }, {
            "en": "m_domain",
            "ch": "恶意域名"
        }, {
            "en": "m_ip",
            "ch": "恶意IP"
        }, {
            "en": "m_email",
            "ch": "恶意邮箱"
        }, {
            "en": "m_url",
            "ch": "恶意网址"
        }, {
            "en": "m_ftp",
            "ch": "恶意FTP"
        }, {
            "en": "m_privacy",
            "ch": "隐私泄露"
        }, {
            "en": "m_attack",
            "ch": "IOT漏洞攻击"
        }
    ],
    event: [
        {
            "en": "e_email",
            "ch": "邮箱通讯"
        },
        {
            "en": "e_file",
            "ch": "文件传输"
        },
        {
            "en": "e_http",
            "ch": "HTTP访问"
        },
        {
            "en": "e_qq",
            "ch": "QQ协议"
        },

        {
            "en": "e_ftp",
            "ch": "FTP访问"
        },
        {
            "en": "e_dns",
            "ch": "DNS查询"
        },
        {
            "en": "e_vpn",
            "ch": "VPN连接"
        },
        // {
        //     "en": "e_ip",
        //     "ch": "IP活动"
        // },
        {
            "en": "e_icmp",
            "ch": "ICMP连接"
        }
        // {
        //     "en": "e_tcp",
        //     "ch": "TCP连接"
        // },

        // {
        //     "en": "e_udp",
        //     "ch": "UDP连接"
        // },
    ],
    asset: [
        // {
        //     "en": "e_ip",
        //     "ch": "IP分析"
        // },
        {
            "en": "a_email",
            "ch": "邮箱分析"
        }, {
            "en": "a_qq",
            "ch": "QQ分析"
        }, {
            "en": "a_phone",
            "ch": "手机号分析"
        }, {
            "en": "a_equipment",
            "ch": "设备分析"
        }, {
            "en": "a_imei",
            "ch": "IMEI分析"
        }
    ],
    configuration: [
        // {
        //     "en": "c_network",
        //     "ch": "网络配置"
        // },
        // {
        //     "en": "c_feature",
        //     "ch": "威胁特征库管理"
        // },
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
        // , {
        //     "en": "c_commontool",
        //     "ch": "常用工具"
        // }
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
        console.log(mainHeader)
    };
    render(){
        return (
            <div>
                <div className="layout-header">
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Link to="/home" onMouseOver={()=>{this.showSubheader('index')}}>home</Link>
                        </Menu.Item>
                        <Menu.Item key="mail2">
                            <Link to="/category" onMouseOver={this.showSubheader.bind(null,'malicious')}>category</Link>
                        </Menu.Item>
                        <Menu.Item key="mail3">
                            <Link to="/products" onMouseOver={this.showSubheader.bind(null,'event')}>products</Link>
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
                    <Route exact path="/home" component={Home}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/products" component={Products}/>
                </div>
            </div>
        )||""
    }
}
export default MyLayout