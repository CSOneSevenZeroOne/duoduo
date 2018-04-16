import "./register.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import {Route, Link} from "react-router-dom";
import $ from "jquery"

// 库 框架
class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src:require("../../images/icon.png"),
            msg:"",
            msg2:"",
            msg3:"",
            msg4:"",
            name:"",
            tel:"",
            pwd:"",
            pwd2:"",
            flag2: false,
            flag1: false,
            flag3: false,
            flag4:false
        }
    }

    name(e) {
        this.setState({
            name:e.target.value
        })

        var self = this;

        this.state.flag1 = /^\w{6,16}$/.test(e.target.value);
        if(this.state.flag1 == false) {
            this.state.msg = "用户名不正确";
        } else {
            this.state.flag1=true;
            this.state.msg = "";
        }

        if(this.state.flag1) {
            $.ajax({
                url: "http://localhost:55555/register",
                type: "post",
                data: {
                    u_name: e.target.value
                },
                success: function(res) {
                    if(res.status == 0) {
                        self.state.msg = res.msg;
                        self.state.flag1 = false;
                    } else if(res.status == 1) {
                        self.state.flag2 = true;
                    }
                }
            })
        }

    }
    tel(e) {
        this.setState({
            tel:e.target.value
        })
        this.state.flag2 = /^((13[0-9])|(14[5-7])|(15[0-9])|(18[0-9]))\d{8}$/.test(e.target.value);
        if(this.state.flag2 == false) {
            this.setState({
                msg2:"手机号不对"
            })
        } else {
            this.setState({
                msg2:""
            })
        }
    }
    pwd(e) {
        this.setState({
            pwd:e.target.value
        })
        this.state.flag3 = /^\w{6,16}$/.test(e.target.value);
        if(this.state.flag3 == false) {
            this.setState({
                msg3:"密码格式不正确"
            })
        } else {
            this.setState({
                msg3:""
            })
        }
    }
    pwd2(e) {
        this.setState({
            pwd2:e.target.value
        })
        if (this.state.pwd!=e.target.value) {
            this.setState({
                msg4:"密码不一致"
            })
        }else {
            this.setState({
                msg4:"",
                flag4:true
            })
        }

    }

    register() {
        var self = this;

        if(self.state.flag1 && self.state.flag2 && self.state.flag3&&self.state.flag4) {

            $.ajax({
                type: "post",
                url: "http://localhost:55555/register/register",
                data: {
                    u_name: self.state.name,
                    u_pwd: self.state.pwd,
                    u_tel: self.state.tel
                }
            }).done((res) => {
                alert("注册成功")
                // window.location.href = "#/login"
            })
        }
    }

    render() {
        return (
            <div id="register">
                <div className="reg">
                    <p>
                        <span className="tianxie">
                            填写注册信息
                        </span>
                        <span className="wancheng">
                            注册成功
                        </span>
                    </p>
                    <form action="">
                        <p>
                            <label>
                                用户名 <input type="text" placeholder="请输入用户名" onBlur={this.name.bind(this)}/>
                            </label>
                            <span>{this.state.msg}</span>
                        </p>
                        <p>
                            <label>
                                手机号 <input type="text" placeholder="请输入手机号" onBlur={this.tel.bind(this)}/>
                            </label>
                            <span>{this.state.msg2}</span>
                        </p>
                        <p style={{"padding-left": "52px"}}>
                            <label>
                                密码 <input type="password" placeholder="请输入密码" onBlur={this.pwd.bind(this)}/>
                            </label>
                            <span>{this.state.msg3}</span>
                        </p>
                        <p style={{"padding-left": "12px"}}>
                            <label>
                                确认密码 <input type="password" placeholder="请确认密码" onBlur={this.pwd2.bind(this)}/>
                            </label>
                            <span>{this.state.msg4}</span>
                        </p>
                        <p>
                            <label>
                                验证码 <input type="text" placeholder="请确认验证码"/>
                            </label>
                        </p>
                        <p className="p1">
                            <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}></i>我已阅读并接受<span>《用户服务协议》</span><span>《隐私政策》</span>
                        </p>
                        <p style={{"padding-left": "80px"}}>
                            <button type="button" onClick={this.register.bind(this)}>注册</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }

    componentWillMount() {


    }
}

export default connect((state) => {
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Update);