import React from 'react';
import style from './tagStyle.less'
let color = {3:"#dd4b39",2:"#f39c12",1:"#0073b7",0:"grey"};

class Tag extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            this.props.data[0]===undefined?<div>无</div>:
                    (<div className={style.tag} style={{backgroundColor:color[this.props.data[0]===undefined?0:
                            this.props.data[0].level]}}>{this.props.data[0][this.props.typename]}</div>)
        )
    }
}

export default Tag