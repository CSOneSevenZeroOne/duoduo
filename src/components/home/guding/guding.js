import "./guding.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"
// import { Route,Link } from "react-router-dom";
// 库 框架
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    back(){
        $('html ,body').animate({scrollTop: 0}, 300);
    }
    free(){
        $('html ,body').animate({scrollTop: 1000}, 300);
    }
    man(){
        $('html ,body').animate({scrollTop: 1520}, 300);
    }
    woman(){
        $('html ,body').animate({scrollTop: 2090}, 300);
    }
    wanben(){
        $('html ,body').animate({scrollTop: 2680}, 300);
    }
    fenlei(){
        $('html ,body').animate({scrollTop: 3200}, 300);
    }
    gengxin(){
        $('html ,body').animate({scrollTop: 3900}, 300);
    }
    render() {
        return(
            <div>
                <div className="fixed-btn hide" id="floatFunc">
                    <div className="fixed-back"></div>
                    <a className="fixed-mf" href="#" onClick={this.free.bind(this)}>限时免费</a>
                    <a href="#" onClick={this.man.bind(this)}>男生最爱</a>
                    <a href="#" onClick={this.woman.bind(this)}>女生最爱</a>
                    <a href="#" onClick={this.wanben.bind(this)}>最近完本</a>
                    <a href="#" onClick={this.fenlei.bind(this)}>分类热门</a>
                    <a href="#" onClick={this.gengxin.bind(this)}>更新列表</a>
                    <a href="#" className="go-top" onClick={this.back.bind(this)}>返回顶部</a>
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

    }
})(Home);