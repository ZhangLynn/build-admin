import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login,getUserData } from './login.redux'
import {Redirect} from 'react-router-dom'

// 两个reducers 每个reducers都有一个state
// 合并reducers
// @connect(
//     state=>state,
//     {login, getUserData}
// )
class Login extends React.Component{
    // constructor(props) {
    // 	super(props)
    // 	this.state={
    // 		data:{}
    // 	}
    // }
    componentDidMount() {
        console.log(this.props)
        // console.log(this.state);
        this.props.getUserData()
        // axios.get('/data')
        // 	.then(res=>{
        // 		if (res.status===200) {
        // 			this.setState({data:res.data})
        // 		}
        // 	})
    }
    render(){
        const user=this.props.user;
        return (
            <div>
                <h2>我的名字是{user.user},年龄{user.age}</h2>
                { user.isAuth? <Redirect to='/' /> : null}
                <h2>你没有权限，需要登录才能看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { user: state }
}

function mapDispatchToProps(dispatch) {
    return { login: ()=>{dispatch(login())},getUserData:()=>{dispatch(getUserData())} }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

