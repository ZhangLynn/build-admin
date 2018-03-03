
const Global = {
    //接口地址
    api: process.env.PUBLIC_URL+'/api',
    //后端接口版本
    version: "v1",
    currentVersion:"v2",
    //各类文件下载地址
    downApi: process.env.PUBLIC_URL+'/api'
};


const Config = {
    //数据总量
    pageListNum: 500,
    //表格页面展示数量
    tablePageSize: 20,
    ruleType: {
        ip: {
            10: "低",
            20: "中",
            30: "高"
        },
        domain: {
            10: "低",
            20: "中",
            30: "高"
        },
        mail: {
            10: "低",
            20: "中",
            30: "高"
        },
        phone: {
            "Mal/Prv_Sms": "利用短信隐私窃取的恶意事件"
        },
        url: {
            10: "低",
            20: "中",
            30: "高"
        }
    }
};

export default Config;