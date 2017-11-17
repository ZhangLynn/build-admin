// import React from 'react';
// import {Form,FormItem,Input,Row,Col,Button} from 'antd';
// import {Link} from 'react-router-dom'
//
//
// // const LoginForm=(props)=>{
// //     handleSubmit = (e) => {
// //         e.preventDefault();
// //         this.props.form.validateFields((err, values) => {
// //             if (!err) {
// //                 console.log('Received values of form: ', values);
// //             }
// //         });
// //     };
// //     const { getFieldDecorator } = this.props.form;
// //     return (
// //         <Form onSubmit={this.handleSubmit} className="login-form">
// //             <FormItem>
// //                 {getFieldDecorator('userName', {
// //                     rules: [{ required: true, message: 'Please input your username!' }],
// //                 })(
// //                     <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
// //                 )}
// //             </FormItem>
// //             <FormItem>
// //                 {getFieldDecorator('password', {
// //                     rules: [{ required: true, message: 'Please input your Password!' }],
// //                 })(
// //                     <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
// //                 )}
// //             </FormItem>
// //             <FormItem>
// //                 {getFieldDecorator('remember', {
// //                     valuePropName: 'checked',
// //                     initialValue: true,
// //                 })(
// //                     <Checkbox>Remember me</Checkbox>
// //                 )}
// //                 <a className="login-form-forgot" href="">Forgot password</a>
// //                 <Button type="primary" htmlType="submit" className="login-form-button">
// //                     Log in
// //                 </Button>
// //                 Or <a href="">register now!</a>
// //             </FormItem>
// //         </Form>
// //     );
// // };
//
// class Login extends React.components{
//     // constructor(props){
//     //     super(props);
//     // }
//     handleLogin(){
//
//     }
//     render(){
//         return (
//             <div className="login-page">
//                 {/*<LoginForm handleLogin={this.handleLogin}></LoginForm>*/}
//             </div>
//         )
//     }
// }
// export default Login