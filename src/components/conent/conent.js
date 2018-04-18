import "./conent.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"
import {Route, Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src:require("../../images/logo_03.png"),
            src1:require("../../images/search_btn.png"),
            src2:require("../../images/wb.jpg"),
            src3:require("../../images/icon.png"),
            name: "汪美杰的专属小书屋",
            name1: "斗罗大陆",
            arr: ["热门分类","首页", "男生", "女生", "包月", "完本", "免费", "排行榜"]
        }
    }
    
    change(e) {
        this.setState({
            name1:e.target.value
        })
        var self=this ;
        $.ajax({
            type: "post",
            url: "http://localhost:55555/home/cx",
            data: {
                title: e.target.value
            }
        }).then(function (res) {

        })
    }
    
    
    
    render(){
    	return (
    		<div>
    			<div class="header">
    				<div class="main1">
    					<a href="#"><img src={this.state.src} />
    					<p>{this.state.name}</p>
    					</a>
    					<div class="nav">
    						{((arr) => {
                                return arr.map((e, i) => {
                                    switch (e){
                                    	case "热门分类":
                                            return <Link to="/sort" key={i}>{e}</Link>
                                        break;
                                        case "首页":
                                            return <Link to="/" key={i}>{e}</Link>
                                        break;
                                        case "男生":
                                            return <Link to="/sort" key={i} onClick={this.props.sort.bind(this,e)}>{e}</Link>
                                            break;
                                        case "女生":
                                            return <Link to="/sort" key={i} onClick={this.props.sort.bind(this,e)}>{e}</Link>
                                            break;
                                        case "包月":
                                            return <Link to="/sort" key={i} onClick={this.props.sort.bind(this,e)}>{e}</Link>
                                            break;
                                        case "完本":
                                            return <Link to="/sort" key={i} onClick={this.props.wanben.bind(this,e)}>{e}</Link>
                                            break;
                                        case "免费":
                                            return <Link to="/sort" key={i} onClick={this.props.mianfei.bind(this,e)}>{e}</Link>
                                            break;
                                        case "排行榜":
                                            return <Link to="/sort" key={i}>{e}</Link>
                                            break;
                                    }
                                })
                            })(this.state.arr)}
    					</div>
    					<form action="">
                                <input type="text" placeholder={this.state.name1} onChange={this.change.bind(this)}/>
                                <button onClick={this.change.bind(this)}></button>
                        </form>
                        <div class="login">
                            <a href="javascript:void(0)" onClick={this.props.show.bind(this)}>登录</a>
                            <Link to="/register">注册</Link>
                        </div>
    				</div>
    			</div>
    			<div class="content">
    				<div class="main2">
    					<p>当前位置:<a href="#">首页</a>><a href="#">豪门总裁</a>><a href="#">Boss凶猛</a></p>
    					<div class="biti">
	    					<ul class="item">
		    					<a href="#"><i class="it icon"></i>目录</a>
		    					<a href="#"><i class="is icon"></i>设置</a>
		    					<a href="#"><i class="ij icon"></i>书架</a>
		    					<a href="#"><i class="iy icon"></i>书页</a>
	    					</ul>
    					</div>
    				</div>
    				<div class="main2">
    					<div class="essay"></div>
    				</div>
    				<div class="main2">
    					<div class="items">
    						<ul>
    							<a href="#">上一章</a>
    							<a href="#">目录</a>
    							<a href="#">下一章</a>
    						</ul>
    					</div>
    				</div>
    				<ul class="all">
	    				<a href="#"><i class="iz icon"></i></a>
	    				<a href="#"><i class="iu icon"></i></a>
	    				<a href="#"><i class="id icon"></i></a>
    				</ul>
    				
    			</div>
    		</div>
    	)
    	
    }
}

export default connect((state) => {
    return {
        state
    }
}, (dipatch) => {
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