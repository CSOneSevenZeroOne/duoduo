import "./header.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"
import {Link} from "react-router-dom";
import Login from '../login/login'
import Fen from './fen/fen'
// 库 框架
class Brother extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: require("../../images/logo_03.png"),
            name: "汪美杰的专属小书屋",
            name1: "斗罗大陆",
            arr: ["首页", "男生", "女生", "完本", "免费", "排行榜"],
            bool:false,
            user:""
        }
    }

    //搜索框查询
    change(e) {
        this.setState({
            name1:e.target.value
        })
        $.ajax({
            type: "post",
            url: "http://localhost:55555/home/cx",
            data: {
                title: e.target.value
            }
        }).then(function (res) {

        })
    }
    esc(){
        sessionStorage.clear();
        this.setState({
            bool :false
        })

    }

    render() {
        return (
            <div id="header">
                <Login/>
                <div id="main">
                    <div className="top">
                        <div className="left">
                            <Link to="/index">
                            <img src={this.state.src} alt=""/>
                            <span>{this.state.name}</span>
                            </Link>
                        </div>
                        <div className="center">
                            <form action="">
                                <input type="text" placeholder={this.state.name1} onChange={this.change.bind(this)}/>
                                <button onClick={this.change.bind(this)}></button>
                            </form>
                            <div className="tag">
                                <a href="javascript:void(0)">凤求凰</a>
                                <a href="javascript:void(0)">国民老公带回家</a>
                                <a href="javascript:void(0)">龙王传说</a>
                                <a href="javascript:void(0)">总裁娇妻太难宠</a>
                                <a href="javascript:void(0)">绝品小农民</a>
                            </div>
                        </div>
                        <div className="right" style={(()=>{
                            if (!this.state.bool) {
                                return {display:'block'}
                            }else {
                                return {display:'none'}
                            }
                        })()}>
                            <a href="javascript:void(0)" onClick={this.props.show.bind(this)}>登录</a>
                            <Link to="/index/register">注册</Link>
                        </div>
                        <div className="r" style={(()=>{
                            if (this.state.bool) {
                                return {display:'block'}
                            }else {
                                return {display:'none'}
                            }
                        })()}>
                            欢迎登录 :{this.state.user} &nbsp;&nbsp;&nbsp; <span onClick={this.esc.bind(this)}>退出</span>
                        </div>

                    </div>

                    <div className="bottom">
                        <div className="b-fenlei" onMouseEnter={this.props.sh.bind(this)} onMouseLeave={this.props.hi.bind(this)}>
                            热 门 分 类
                            <Fen/>
                        </div>
                        <div className="nav">

                            {((arr) => {
                                return arr.map((e, i) => {
                                    switch (e){
                                        case "首页":
                                            return <Link to="/index" key={i}>{e}</Link>
                                        break;
                                        case "男生":
                                            return <Link to="/index/nansheng" key={i} onClick={this.props.sort.bind(this,"男生分类")}>{e}</Link>
                                            break;
                                        case "女生":
                                            return <Link to="/index/nvsheng" key={i} onClick={this.props.sort.bind(this,"女生分类")}>{e}</Link>
                                            break;
                                        case "完本":
                                            return <Link to="/index/wanben" key={i} onClick={this.props.wanben.bind(this,"完本")}>{e}</Link>
                                            break;
                                        case "免费":
                                            return <Link to="/index/mianfei" key={i} onClick={this.props.mianfei.bind(this,"免费")}>{e}</Link>
                                            break;
                                        case "排行榜":
                                            return <Link to="/index/paihang" key={i}>{e}</Link>
                                            break;
                                        default:
                                            break;
                                    }
                                })
                            })(this.state.arr)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var name=sessionStorage.getItem("user")
        if (name!=null) {
            this.setState({
                bool:true,
                user:name
            })
        }else {
            this.setState({
                bool:false,

            })
        }

    }
}

export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {
        show(){
            dispatch({
                type : "BOOl",
                bool : true
            })
        },
        sh(){
            dispatch({
                type : "BOOll",
                booll : true
            })
        },
        hi(){
            dispatch({
                type : "BOOll",
                booll : false
            })
        },
        sort(e){
            dispatch({
                type : "SORTS",
                sort : e
            })
        },
        wanben(e){
            dispatch({
                type : "WANBEN",
                wanben : e
            })
        },
        mianfei(e){
            dispatch({
                type : "MIANFEI",
                mianfei : e
            })
        }
    }
})(Brother);