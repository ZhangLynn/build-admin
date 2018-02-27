/**
 * Created by zhangzilong on 2017/1/13.
 */

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
    jumpUrl:{'files':'/#/e_file','email':'/#/e_email','http':'/#/e_http','ftp':'/#/e_ftp','dns':'/#/e_dns','mal_domain':'/#/m_domain','mal_files':'/#/m_app','mal_email':'/#/m_email','mal_http':'/#/m_http','mal_ftp':'/#/m_ftp','mal_dns':'/#/m_dns','sens_url':'/#/m_app','sens_sp':'/#/m_app','sens_email':'/#/m_app','mal_ip':'/#/m_ip',"phone":"/#/a_phone","device":"/#/a_analysis",'mal_url':'/#/m_url','qq':'/#/a_qq','imei':'/#/a_imei'},


    //恶意事件播报接口
    malBroadcast: Global.api + "/ov/" + Global.currentVersion + "/mal_broadcast",
    //首页 恶意总数 事件统计
    malTotal: Global.api + "/ov/" + Global.currentVersion + "/mal_event_count",
    //威胁分布趋势接口 恶意趋势分析
    flowTrendEvent: Global.api + "/ov/" + Global.currentVersion + "/mal_trend",
    //流量协议趋势接口 流量趋势分析
    protocalTrendEvent: Global.api + "/ov/" + Global.currentVersion + "/flow_trend",
    //用户资产统计
    userAssetCount: Global.api + "/ov/" + Global.currentVersion + "/user_asset_count",
    //威胁来源IPtop
    threatSourceIpTop: Global.api + "/ov/" + Global.currentVersion + "/threat_source_ip_top",
    //首页 威胁事件TOP10
    eventTopOverview: Global.api + "/ov/" + Global.currentVersion + "/threat_event_top",
    //设备威胁情况
    assetthreat_lynnv2: Global.api + "/ov/" + Global.currentVersion + "/asset_threat",
    //首页 地图
    attackOverview: Global.api + "/ov/" + Global.currentVersion + "/attack",
//每日总览
    //用户统计
    userCount: Global.api + "/ov/" + Global.currentVersion + "/user_count",
    //威胁影响统计
    influencedThreat: Global.api + "/ov/" + Global.currentVersion + "/influenced_by_threat",
    //木马威胁事件统计
    trojanThreatEvent: Global.api + "/ov/" + Global.currentVersion + "/trojan_threat_event",
    //应用行为Top10
    appTypeTop: Global.api + "/ov/" + Global.currentVersion + "/app_type_top",

//流量协议分类统计接口
    flowCountEvent: Global.api + "/asset/" + Global.version + "/asset_count1",


    //首页 地图
    // attackOverview: Global.api + "/event/" + Global.version + "/attack",


    //恶意模块的标题统计接口
    malAppMonitor:Global.api + "/event/" + Global.version + "/m_files_monitor",
    malDnsMonitor:Global.api + "/event/" + Global.version + "/m_domain_monitor",
    malIpMonitor:Global.api + "/event/" + Global.version + "/m_ip_monitor",
    malEmailMonitor:Global.api + "/event/" + Global.version + "/m_email_monitor",
    malUrlMonitor:Global.api + "/event/" + Global.version + "/m_url_monitor",
    maFtpMonitor:Global.api + "/event/" + Global.version + "/m_ftp_monitor",
    malPrivacyMonitor:Global.api + "/event/" + Global.version + "/m_privacy_monitor",
    malAttackMonitor:Global.api + "/event/" + Global.version + "/m_iot_monitor",


    //恶意FTP事件统计
    ftpthreat: Global.api + "/event/" + Global.version + "/m_ftp_count",
    //隐私泄露
    privacythreat: Global.api + "/event/" + Global.version + "/privacy_count",
    //攻击活动事件统计
    attackthreat: Global.api + "/event/" + Global.version + "/m_iot_event",
    //攻击活动首页事件次数统计
    attackthreatcount: Global.api + "/event/" + Global.version + "/m_iot_count",

    mAccessEvent: Global.api + "/event/" + Global.version + "/m_event_count",
    //单个事件类型统计接口，类型：dns, http, tcp, file, ip, domain, email, url
    eventCount: Global.api + "/event/" + Global.version + "/event_count",
    //单个恶意事件类型统计接口，类型：ip, domain, email, url, file
    mEventCount: Global.api + "/event/" + Global.version + "/m_event_count",

    //恶意IP事件查询
    mIpEvent: Global.api + "/event/" + Global.version +"/m_ip_event",

    //恶意IP事件统计
    mIpCount: Global.api + "/event/" + Global.version +"/m_ip_count",
    //恶意IP事件客户端统计
    mIpClientCount: Global.api + "/event/" + Global.version +"/m_ip_client_count",

    //恶意域名事件查询
    mDomainEvent: Global.api + "/event/" + Global.version + "/m_domain_event",

    //恶意域名事件统计
    mDomainCount: Global.api + "/event/" + Global.version + "/m_domain_count",
    //恶意域名事件客户端统计
    mDomainClientCount: Global.api + "/event/" + Global.version + "/m_domain_client_count",

    //恶意邮箱事件查询
    mEmailEvent: Global.api + "/event/" + Global.version + "/m_email_event",

    //恶意URL事件查询
    mUrlEvent: Global.api + "/event/" + Global.version + "/m_url_event",
    //恶意URL事件detail查询
    mUrlEventDetail: Global.api + "/event/" + Global.version + "/m_url_client_event",

//威胁统计页面接口
    //威胁影响事件 已有
    //威胁个数统计
    malEventCount: Global.api + "/ov/" + Global.currentVersion + "/mal_event_count",
    //威胁来源地分析
    threatSourceLocalTop: Global.api + "/ov/" + Global.currentVersion + "/threat_source_local_top",
    //木马威胁事件统计 已有
    //病毒感染事件统计
    viralInfectionEvent: Global.api + "/ov/" + Global.currentVersion + "/viral_infection_event",
    //隐私泄露事件统计
    privacyEvent: Global.api + "/ov/" + Global.currentVersion + "/privacy_event",
    //网络攻击事件统计
    networkAttackEvent: Global.api + "/ov/" + Global.currentVersion + "/network_attack_event",

//所有恶意时间顶部数量查询
    //恶意应用
    mFileMonitor:Global.api + "/event/" + Global.version + "/m_files_monitor",
    //恶意域名
    mDomainMonitor:Global.api + "/event/" + Global.version + "/m_domain_monitor",
    //恶意IP
    mIpMonitor:Global.api + "/event/" + Global.version + "/m_ip_monitor",
    //恶意邮箱
    mEmailMonitor:Global.api + "/event/" + Global.version + "/m_email_monitor",
    //恶意网址
    mURLMonitor:Global.api + "/event/" + Global.version + "/m_url_monitor",
    //恶意FTP
    mFTPMonitor:Global.api + "/event/" + Global.version + "/m_ftp_monitor",
    //隐私泄露
    mPrivacyMonitor:Global.api + "/event/" + Global.version + "/m_privacy_monitor",

    //隐私泄露 TOP
    eventMPrivacyTop: Global.api + "/event/" + Global.version + "/privacy_top",
    //隐私泄露 国家 TOP查询
    eventMPrivacyCountryTop: Global.api + "/event/" + Global.version + "/privacy_country_top",
    //隐私泄露 城市 TOP查询
    eventMPrivacyCityTop: Global.api + "/event/" + Global.version + "/privacy_city_cn_top",

    //IOT漏洞攻击
    mIOTMonitor:Global.api + "/event/" + Global.version + "/m_iot_monitor",


    //威胁监测详情接口
    mDetail:Global.api + "/event/" + Global.version + "/m_detinfo",

    //恶意文件事件查询
    mFilesEvent: Global.api + "/event/" + Global.version + "/m_files_event",
    //隐私泄露查询接口
    privateEvent: Global.api + "/event/" + Global.version + "/m_privacy_event",
    //DNS事件查询接口
    dnsEvent: Global.api + "/event/" + Global.version + "/dns_event",
    //HTTP事件查询接口
    httpEvent: Global.api + "/event/" + Global.version + "/http_event",
    //CONN事件查询接口
    connEvent: Global.api + "/event/" + Global.version + "/conn_event",
    //TCP事件查询接口
    tcpEvent: Global.api + "/event/" + Global.version + "/tcp_event",
    //文件传输事件查询接口
    filesEvent: Global.api + "/event/" + Global.version + "/files_event",
    //pcap包传输事件查询接口
    pcapEvent: Global.api + "/event/" + Global.version + "/pcap_upload",
    //UDP事件查询
    udpEvent: Global.api + "/event/" + Global.version + "/udp_event",
    //UDP事件查询
    icmpEvent: Global.api + "/event/" + Global.version + "/icmp_event",
    //UDP事件查询
    vpnEvent: Global.api + "/event/" + Global.version + "/vpn_event",
    //Email事件查询
    emailEvent: Global.api + "/event/" + Global.version + "/email_event",
    //FTP协议查询
    ftpEvent: Global.api + "/event/" + Global.version + "/ftp_event",

    //恶意ftp
    ftpM: Global.api + "/event/" + Global.version + "/m_ftp_event",
    //恶意ftpcount
    ftpCount: Global.api + "/event/" + Global.version + "/m_ftp_client",

    //恶意ftp TOP
    eventMFtpTop: Global.api + "/event/" + Global.version + "/m_ftp_top",
    //恶意ftp 国家 TOP查询
    eventMFtpCountryTop: Global.api + "/event/" + Global.version + "/m_ftp_country_top",
    //恶意ftp 城市 TOP查询
    eventMFtpCityTop: Global.api + "/event/" + Global.version + "/m_ftp_city_cn_top",

    //QQ协议查询
    qqEvent: Global.api + "/event/" + Global.version + "/qq_event",

    //恶意应用数统计接口
    malAppsCount: Global.api + "/mal/" + Global.version + "/apps",
    //恶意应用数TOP查询接口
    malAppsTopCount: Global.api + "/mal/" + Global.version + "/apps_top",

    //网络活动SSL
    sslEvent:Global.api + "/event/" + Global.version + "/ssl_event",
    //感染设备数统计接口
    malAffectsCount: Global.api + "/event/" + Global.version + "/m_app_affect",
    //资产本地IP TOP统计接口
    assetIpTopCount: Global.api + "/asset/" + Global.version + "/ip_top",
    //资产邮箱 TOP统计接口
    assetEmailTopCount: Global.api + "/asset/" + Global.version + "/email_top",
    //总览QQtop
    assetQQTopCount: Global.api + "/asset/" + Global.version + "/qq_top",
    //总览手机top
    assetPhoneTopCount: Global.api + "/asset/" + Global.version + "/phone_top",
    //画像TOP
    asseUserInfoIndex: Global.api + "/asset/" + Global.version + "/user_info_index",

    //总览TOP10接口
    assettop:Global.api+"/asset/"+Global.version+"/asset_top",



    // v2版本接口
    // 用户资产画像列表接口
        //用户分析画像数量接口
            assetUserMonitor:Global.api+"/asset/"+Global.currentVersion+"/user_monitor",
        //其它画像数量接口
            asset:Global.api+"/asset/"+Global.currentVersion+"/asset_monitor",
    assetUser:Global.api+"/asset/"+Global.currentVersion+"/user_asset",
        // 用户画像详情---用户资产查询
            assetUserAsset:Global.api+'/asset/'+Global.currentVersion+"/personas_asset",
            //用户画像详情---威胁监测查询
            assetUserMalCount:Global.api+'/asset/'+Global.currentVersion+"/personas_mal_count",
            //用户画像详情---用户上网行为查询
            assetUserBehavior:Global.api+'/asset/'+Global.currentVersion+"/personas_app_type",
            //用户画像详情---威胁网络活动详情查询
            assetUserEventCount:Global.api+'/asset/'+Global.currentVersion+"/personas_behavior",
    //IMEI资产列表接口
    assetIMEI: Global.api + "/asset/" + Global.currentVersion + "/imei_asset",
    //邮箱资产列表接口
    assetEmail: Global.api + "/asset/" + Global.currentVersion + "/email_asset",
    //QQ资产列表接口
    assetQQ: Global.api + "/asset/" + Global.currentVersion + "/qq_asset",
    //本地手机资产列表接口
    assetPhone: Global.api + "/asset/" + Global.currentVersion + "/phone_asset",
    //IMSI资产列表接口
    assetIMSI: Global.api + "/asset/" + Global.currentVersion + "/imsi_asset",
    //fake 用户画像数据接口
        // assetUser:"./TestJsonData/user_asset.json",
        // assetIMEI: "./TestJsonData/imei_asset.json",
        // assetEmail: "./TestJsonData/email_asset.json",
        // assetQQ: "./TestJsonData/qq_asset.json",
        // assetPhone: "./TestJsonData/phone_asset.json",
        // assetIMSI: "./TestJsonData/imsi_asset.json",
    //ES存储信息接口
    storageEs: Global.api + "/manage/" + Global.version + "/es_sotrage",
    //设备管理接口
    deivceInfo: Global.downApi + "/manage/" + Global.version +"/device_info",
    //根据UID查询事件详情接口
    eventInfo: Global.api + "/event/" + Global.version + "/event_info",
    //规则显示接口 参数必须 type=ip,domain,mail,phone,private
    mtdRule: Global.api + "/manage/" + Global.version + "/rule",
    //版本号显示接口
    mtdVersion: Global.api + "/mtd/" + Global.version + "/mtd_version",
    //规则新增
    mtdRuleAdd: Global.api + "/manage/" + Global.version + "/rule_add",
    //规则生效
    mtdRuleEnable: Global.api + "/manage/" + Global.version + "/rule_enable",
    //规则修改
    mtdRuleModify: Global.api + "/manage/" + Global.version + "/rule_modify",
    //规则失效
    mtdRuleDisable: Global.api + "/manage/" + Global.version + "/rule_disable",
    //规则删除
    mtdRuleDelete: Global.api + "/manage/" + Global.version + "/rule_delete",

    //删除选中规则
    mtdRuleDeleteSelete: Global.api + "/manage/" + Global.version + "/rules_delete",

    //版本更新接口
    versionUpdate: Global.api + "/mtd/" + Global.version + "/version_update",
    //恶意IP TOP 查询
    eventMIpTop: Global.api + "/event/" + Global.version + "/m_ip_top",
    //恶意IP 国家 TOP查询
    eventMIpCountryTop: Global.api + "/event/" + Global.version + "/m_ip_country_top",
    //恶意IP 城市 TOP查询
    eventMIpCityTop: Global.api + "/event/" + Global.version + "/m_ip_city_cn_top",
    //恶意domain TOP 查询
    eventMDomainTop: Global.api + "/event/" + Global.version + "/m_domain_top",
    //恶意domain 国家 TOP查询
    eventMDomainCountryTop: Global.api + "/event/" + Global.version + "/m_domain_country_top",
    //恶意domain 城市 TOP查询
    eventMDomainCityTop: Global.api + "/event/" + Global.version + "/m_domain_city_cn_top",
    //恶意email TOP 查询
    eventMEmailTop: Global.api + "/event/" + Global.version + "/m_email_top",
    //恶意email 国家 TOP查询
    eventMEmailCountryTop: Global.api + "/event/" + Global.version + "/m_email_country_top",
    //恶意email 城市 TOP查询
    eventMEmailCityTop: Global.api + "/event/" + Global.version + "/m_email_city_top",
    //恶意Url TOP 查询
    eventMUrlTop: Global.api + "/event/" + Global.version + "/m_url_top",

    //威胁监测_应用威胁_威胁类型top10_贺云风
    eventMFileTop:Global.api + "/event/" + Global.version + "/m_files_ratio",

    //威胁监测_应用威胁_威胁类型top10_国家地理信息_贺云风
    eventMFileCountryTop:Global.api + "/event/" + Global.version + "/m_files_country_top",

    //威胁监测_应用威胁_威胁类型top10_城市地理信息_贺云风
    eventMFileCityTop:Global.api + "/event/" + Global.version + "/m_files_city_cn_top",

    //恶意Url TOP 查询
    filesTypeTop: Global.api + "/event/" + Global.version + "/files_type_top",
    //恶意Url 城市 TOP查询
    eventMUrlCountryTop: Global.api + "/event/" + Global.version + "/m_url_country_top",
    //恶意Url 国家 TOP查询
    eventMUrlCityTop: Global.api + "/event/" + Global.version + "/m_url_city_cn_top",
    //DNS事件domain TOP查询
    eventDnsQueryTop: Global.api + "/event/" + Global.version + "/dns_query_top",
    //dns事件query domain地理信息TOP按国家查询
    eventDnsQueryCountryTop: Global.api + "/event/" + Global.version + "/dns_query_country_top",
    //dns事件query domain地理信息TOP按中国城市查询
    eventDnsQueryCityTop: Global.api + "/event/" + Global.version + "/dns_query_city_cn_top",
    //HTTP事件 请求网址 TOP查询
    eventHttpQueryTop: Global.api + "/event/" + Global.version + "/http_host_uri_top",
    //HTTP事件服务端地理信息TOP按国家查询
    eventHttpQueryCountryTop: Global.api + "/event/" + Global.version + "/http_host_country_top",
    //HTTP事件服务端地理信息TOP按中国城市查询
    eventHttpQueryCityTop: Global.api + "/event/" + Global.version + "/http_host_city_cn_top",
    //文件类型top查询
    eventFilesTypeTop: Global.api + "/event/" + Global.version + "/files_type_top",
    //文件下载源top查询
    eventFilesDownTop: Global.api + "/event/" + Global.version + "/files_down_top",
    //ICMP目的IP访问量top统计查询
    eventIcmpTop: Global.api + "/event/" + Global.version + "/icmp_top",
    //ICMP目的IP地理信息TOP按国家查询
    eventIcmpCountryTop: Global.api + "/event/" + Global.version + "/icmp_country_top",
    //ICMP目的IP地理信息TOP按中国城市查询
    eventIcmpCityTop: Global.api + "/event/" + Global.version + "/icmp_city_cn_top",
    //IP资产流量折线图
    assetIpFlow: Global.api + "/asset/" + Global.version + "/ip_flow",
    //IP事件关系图接口
    eventIpGraph: Global.api + "/event/" + Global.version + "/ip_graph",
    //IP资产流量折线图
    eventDomainGraph: Global.api + "/event/" + Global.version + "/domain_graph",
    //IP资产流量折线图
    eventDnsGraph: Global.api + "/event/" + Global.version + "/dns_graph",
    //文件下载
    downLoad: "/download",

    //用户管理 列出所有用户
    listUser: Global.api+"/user/"+Global.version+"/list_user",

    //用户管理 创建普通用户
    createUser: Global.api+"/user/"+Global.version+"/create_user",

    //用户管理 删除普通用户
    deleteUser: Global.api+"/user/"+Global.version+"/delete_user",

    //用户管理 更改普通用户信息
    changeUser: Global.api+"/user/"+Global.version+"/change_user_info",

    //用户管理 更改普通用户密码接口
    changeUserPassword: Global.api+"/user/"+Global.version+"/change_user_password",

    //自定义规则查询
    ruleSearch:Global.api+"/manage/"+Global.version+"/rule_query",

    //登录接口
    login:Global.api+"/auth/"+Global.version+"/login",

    //注销接口
    logout:Global.api+"/auth/"+Global.version+"/logout",

    //溯源分析 ip
    ipSource:Global.api+'/has/'+Global.version+'/mal_ip',

    //溯源分析 iptable
    ipSourceTable:Global.api+'/has/'+Global.version+'/mal_ip_table',

    //溯源分析 app
    appSource:Global.api+'/has/'+Global.version+'/mal_app',

    //溯源分析 apptable
    appSourceTable:Global.api+'/has/'+Global.version+'/mal_app_table',

    //溯源分析 domain
    domainSource:Global.api+'/has/'+Global.version+'/mal_domain',

    //溯源分析 domaintable
    domainSourceTable:Global.api+'/has/'+Global.version+'/mal_domain_table',

    //溯源分析 ftp
    ftpSource:Global.api+'/has/'+Global.version+'/mal_ftp',

    //溯源分析 ftptable
    ftpSourceTable:Global.api+'/has/'+Global.version+'/mal_ftp_table',

    //溯源分析 url
    urlSource:Global.api+'/has/'+Global.version+'/mal_url',

    //溯源分析 urltable
    urlSourceTable:Global.api+'/has/'+Global.version+'/mal_url_table',

    //溯源分析 email
    emailSource:Global.api+'/has/'+Global.version+'/mal_email',

    //溯源分析 email
    emailSourceTable:Global.api+'/has/'+Global.version+'/mal_email_table',

    //溯源分析 device
    deviceSource:Global.api+'/has/'+Global.version+'/device',
    deviceSourceTable:Global.api+'/has/'+Global.version+'/device_table',

    //数据总量
    pageListNum: 500,
    //表格页面展示数量
    tablePageSize: 20,
    //特征类型
    featureType: ["ip", "domain", "mail", "phone", "url"],
    //各个特征中的类型
    ruleType: {
        ip: {
            // "White/Normal_Ip": "正常网络访问事件",
            // "Mal/Fish_Ip": "钓鱼类恶意事件",
            // "Mal/Down_Ip": "下载类恶意事件",
            // "Mal/Prv_Ip": "隐私泄漏类恶意事件",
            // "Mal/Spr_PornWare": "色情传播恶意事件",
            // "Warn/Unlawful_Ip": "访问非法类网站的异常事件"
            10:"低",
            20:"中",
            30:"高"
        },
        domain: {
            // "Mal/Fish_Bank": "仿冒银行钓鱼的恶意事件",
            // "Mal/Fish_Id": "帐号类钓鱼的恶意事件",
            // "Mal/Fish_Mo": "仿冒运营商钓鱼的恶意事件",
            // "Mal/Fish_Prize": "获奖类钓鱼的恶意事件",
            // "Mal/Fish_Social": "社工类钓鱼的恶意事件",
            // "Mal/Fish_Security": "证券类钓鱼的恶意事件",
            // "Mal/Fish_Economy": "经济类钓鱼的恶意事件",
            // "Mal/Fish_Else": "其他类钓鱼的恶意事件",
            // "Mal/Down_Virus": "下载病毒的恶意事件",
            // "Warn/Unlawful_Porn": "访问非法色情网站的异常事件",
            // "Warn/Unlawful_Else": "访问其他非法类网站的异常事件",
            // "White/Normal_Lan": "正常安全局域网访问事件",
            // "White/Normal_Else": "正常安全网址访问事件"
            10:"低",
            20:"中",
            30:"高"
        },
        mail: {
            // "Mal/Prv_Email": "利用邮箱隐私窃取的恶意事件"
            10:"低",
            20:"中",
            30:"高"
        },
        phone: {
            "Mal/Prv_Sms": "利用短信隐私窃取的恶意事件"
        },
        url: {
            // "Mal/Fish_Bank": "仿冒银行钓鱼的恶意事件",
            // "Mal/Fish_Id": "帐号类钓鱼的恶意事件",
            // "Mal/Fish_Mo": "仿冒运营商钓鱼的恶意事件",
            // "Mal/Fish_Prize": "获奖类钓鱼的恶意事件",
            // "Mal/Fish_Social": "社工类钓鱼的恶意事件",
            // "Mal/Fish_Security": "证券类钓鱼的恶意事件",
            // "Mal/Fish_Economy": "经济类钓鱼的恶意事件",
            // "Mal/Fish_Else": "其他类钓鱼的恶意事件",
            // "Mal/Down_Virus": "下载病毒的恶意事件",
            // "Warn/Unlawful_Porn": "访问非法色情网站的异常事件",
            // "Warn/Unlawful_Else": "访问其他非法类网站的异常事件",
            // "White/Normal_Lan": "正常安全局域网访问事件",
            // "White/Normal_Else": "正常安全网址访问事件"
            10:"低",
            20:"中",
            30:"高"
        }
    }
};

export default Config;