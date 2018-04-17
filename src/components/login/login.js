import "./login.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"

// 库 框架
class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src:require("../../images/icon.png"),
            name:"",
            pwd:""

        }
    }

    name(e){
        this.setState({
            name:e.target.value
        })
    }
    pwd(e){
        this.setState({
            pwd:e.target.value
        })
    }
    login() {
        var self = this
        $.ajax({
            type: "post",
            url: "http://localhost:55555/register/login",
            data: {
                u_name: self.state.name,
                u_pwd: self.state.pwd
            }
        }).done(function (res) {
            if (res.length === 1) {
                alert("登录成功")
                // sessionStorage.setItem('user', res[0].id);
            }
        })
    }
    render() {
        return (
            <div id="login" style={(()=>{
                if (this.props.state.bool) {
                    return {display:'block'}
                }else {
                    return {display:'none'}
                }
            })()}>
                <div className="log">
                    <h3>登录</h3>
                    <form action="">
                        <p><label>账号 <input type="text" placeholder="用户名" onBlur={this.name.bind(this)}/></label></p>
                        <p><label>密码 <input type="password" placeholder="密码" onBlur={this.pwd.bind(this)}/></label></p>
                        <p className="p1">
                            <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}></i><span>下次自动登录</span>
                        </p>
                        <p>
                            <button type="button" onClick={this.login.bind(this)}>登录</button>
                        </p>
                        <p>还没有帐号？<span>立即注册</span></p>
                    </form>
                    <span className="ii" style={{"backgroundImage":'url('+this.state.src+')'}} onClick={this.props.hide.bind(this)}></span>
                </div>
            </div>
        )
    }

}

export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {
        hide(){
            dispatch({
                type : "BOOl",
                bool : false
            })
        }
    }
})(Update);