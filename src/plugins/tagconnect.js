
import React from 'react';
import style from './tagStyle.less'
let color={"HTTP":"#add8f7","SMTP":"#00ccff","POP3":"#0099ff","IMAP":"#0066ff","FTP_DATA":"#00ff99","SSL":"#990066","UDP":"#f39c12","TCP":"#99cc00","QQ":"#999900","DNS":"#993300"};

class Tagconnect extends React.Component{

    render(){
        return(
            this.props.data[this.props.typename]===undefined?<div className={style.tag}>无数据</div>: <div className={style.tag} style={{backgroundColor:color[this.props.data[this.props.typename].toUpperCase()]}}>{this.props.data[this.props.typename].toUpperCase()==='FTP_DATA'?'FTP':this.props.data[this.props.typename].toUpperCase()}</div>
        )
    }
}

export default Tagconnect