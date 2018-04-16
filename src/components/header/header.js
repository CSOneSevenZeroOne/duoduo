import "./header.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import {Route, Link} from "react-router-dom";
import Login from '../login/login'
// 库 框架
class Brother extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: require("../../images/logo_03.png"),
            name: "汪美杰的专属小书屋",
            name1: "斗罗大陆",
            arr: ["首页", "男生", "女生", "包月", "完本", "免费", "排行榜"]
        }
    }

    change(e) {
        this.setState({
            name1:e.target.value
        })
    }

    render() {
        return (

            <div id="header">
                <Login/>
                <div id="main">
                    <div className="top">
                        <div className="left">
                            <img src={this.state.src} alt=""/>
                            <span>{this.state.name}</span>
                        </div>
                        <div className="center">
                            <form action="">
                                <input type="text" placeholder={this.state.name1} onChange={this.change.bind(this)}/>
                                <button></button>
                            </form>
                            <div className="tag">
                                <a href="javascript:void(0)">凤求凰</a>
                                <a href="javascript:void(0)">国民老公带回家</a>
                                <a href="javascript:void(0)">龙王传说</a>
                                <a href="javascript:void(0)">总裁娇妻太难宠</a>
                                <a href="javascript:void(0)">绝品小农民</a>
                            </div>
                        </div>
                        <div className="right">
                            <a href="javascript:void(0)">登录</a>
                            <Link to="/register">注册</Link>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="b-fenlei">
                            热 门 分 类
                        </div>
                        <div className="nav">
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <a href="javascript:void(0)" key={i}>{e}</a>
                                })
                            })(this.state.arr)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Brother);