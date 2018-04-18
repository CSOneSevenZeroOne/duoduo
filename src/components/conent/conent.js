import "./conent.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"
import {Route, Link} from "react-router-dom";

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            src : require("../../images/logo_03.png"),
            src1 : require("../../images/search_btn.png"),
            src2 : require("../../images/wb.jpg"),
            src3 : require("../../images/icon.png"),
            name : "汪美杰的专属小书屋",
            name1 : "斗罗大陆",
            arr : ["热门分类", "首页", "男生", "女生", "包月", "完本", "免费", "排行榜"],
            info:null,
            status:false
        }
    }

    change(e){
        this.setState({
            name1 : e.target.value
        })
        var self = this;
        $.ajax({
            type : "post",
            url : "http://localhost:55555/home/cx",
            data : {
                title : e.target.value
            }
        }).then(function(res){

        })
    }

    componentDidMount(){
        var self=this;
        var arr = window.location.href.split("?")[1].split("&");
        var obj={}
        obj[arr[0].split("=")[0]]=arr[0].split("=")[1];
        obj[arr[1].split("=")[0]]=arr[1].split("=")[1];

        $.ajax({
            type : "get",
            url : "http://localhost:55555/home/content",
            data : obj
        }).then(function(res){
            self.setState({
                status:true,
                info:res
            })
            $(self.refs.essay).html(res[0].content)
        })
    }

    render(){
        return (
            <div>
                <div className="header">
                    <div className="main1">
                        <a href="#"><img src={this.state.src}/>
                            <p>{this.state.name}</p>
                        </a>
                        <div className="nav">
                            {((arr) =>{
                                return arr.map((e, i) =>{
                                    switch(e){
                                        case "热门分类":
                                            return <Link to="/index/nansheng" key={i}>{e}</Link>
                                            break;
                                        case "首页":
                                            return <Link to="/index" key={i}>{e}</Link>
                                            break;
                                        case "男生":
                                            return <Link to="/index/nansheng" key={i} onClick={this.props.sort.bind(this, e)}>{e}</Link>
                                            break;
                                        case "女生":
                                            return <Link to="/index/nvsheng" key={i} onClick={this.props.sort.bind(this, e)}>{e}</Link>
                                            break;
                                        case "包月":
                                            return <Link to="/sort" key={i} onClick={this.props.sort.bind(this, e)}>{e}</Link>
                                            break;
                                        case "完本":
                                            return <Link to="/index/wanben" key={i} onClick={this.props.wanben.bind(this, e)}>{e}</Link>
                                            break;
                                        case "免费":
                                            return <Link to="/index/mianfei" key={i} onClick={this.props.mianfei.bind(this, e)}>{e}</Link>
                                            break;
                                        case "排行榜":
                                            return <Link to="/sort" key={i}>{e}</Link>
                                            break;
                                    }
                                })
                            })(this.state.arr)}
                        </div>
                        <form>
                            <input type="text" placeholder={this.state.name1} onChange={this.change.bind(this)}/>
                            <button onClick={this.change.bind(this)}></button>
                        </form>
                        <div className="login">
                            <a href="javascript:void(0)" onClick={this.props.show.bind(this)}>登录</a>
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {(()=>{
                        if(this.state.status){
                            return <div>
                                <div className="main2">
                                    <p>当前位置:
                                        <Link to="/index">首页</Link>
                                        >
                                        <Link to="/index/nansheng">{this.state.info[0].class.split("：")[1]}</Link>
                                        >
                                        <Link to={"/index/info?book_id="+window.location.href.split("?")[1].split("&")[0].split("=")[1]}>{this.state.info[0].name}</Link>
                                    </p>
                                    <div className="biti">
                                        <ul className="item">
                                            <Link to={"/index/info?book_id="+window.location.href.split("?")[1].split("&")[0].split("=")[1]}><i className="it icon"></i>目录</Link>
                                            <Link to={"/index/info?book_id="+window.location.href.split("?")[1].split("&")[0].split("=")[1]}><i className="is icon"></i>设置</Link>
                                            <Link to={"/index/info?book_id="+window.location.href.split("?")[1].split("&")[0].split("=")[1]}><i className="ij icon"></i>书架</Link>
                                            <Link to={"/index/info?book_id="+window.location.href.split("?")[1].split("&")[0].split("=")[1]}><i className="iy icon"></i>书页</Link>
                                        </ul>
                                        <div>
                                            <h1>{this.state.info[0].name}</h1>
                                            <p>{this.state.info[0].author}</p>
                                            <p>{this.state.info[0].class}</p>
                                            <p>{"字数："+this.state.info[0].words+"万"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="main2">
                                    <div className="essay" ref="essay">
                                    </div>
                                </div>

                                <ul className="all">
                                    <span><i className="iz icon"></i></span>
                                    <span><i className="iu icon"></i></span>
                                    <span><i className="id icon"></i></span>
                                </ul>
                            </div>
                        }else {
                            return <p style={{
                                lineHeight:"600px",
                                textAlign:"center"
                            }}>正在加载中，请稍后...</p>
                        }
                    })()}
                    <div className="main2">
                        <div className="items">
                            <ul>
                                <Link to={(()=>{
                                    var str=window.location.href.split("#")[1];
                                    var str1=str.split("&")[0]+"&section="+(parseInt(str.split("&")[1].split("=")[1])-1)
                                    return str1
                                })()}>上一章</Link>
                                <a to={(()=>{
                                    var str=window.location.href.split("#")[1];
                                    var str1=str.split("&")[0].replace("content","section")
                                    return str1
                                })()}>目录</a>
                                <a to={(()=>{
                                    var str=window.location.href.split("#")[1];
                                    var str1=str.split("&")[0]+"&section="+(parseInt(str.split("&")[1].split("=")[1])+1)
                                    return str1
                                })()}>下一章</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default connect((state) =>{
    return {
        state
    }
}, (dipatch) =>{
    return {
        show(){
            dipatch({
                type : "BOOl",
                bool : true
            })
        },
        sort(e){
            dipatch({
                type : "SORTS",
                sort : e
            })
        },
        wanben(e){
            dipatch({
                type : "WANBEN",
                wanben : e
            })
        },
        mianfei(e){
            dipatch({
                type : "MIANFEI",
                mianfei : e
            })
        }
    }
})(Home);