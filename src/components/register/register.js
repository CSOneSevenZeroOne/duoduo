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
            src:require("../../images/icon.png")
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
                                用户名 <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>
                                手机号 <input type="text"/>
                            </label>
                        </p>
                        <p>
                            <label>
                                密码 <input type="password"/>
                            </label>
                        </p>
                        <p>
                            <label>
                                确认密码 <input type="password"/>
                            </label>
                        </p>
                        <p>
                            <label>
                                验证码 <input type="text"/>
                            </label>
                        </p>
                        <p className="p1">
                            <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}></i>我已阅读并接受<span>《用户服务协议》</span><span>《隐私政策》</span>
                        </p>
                        <p>
                            <button type="button">注册</button>
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