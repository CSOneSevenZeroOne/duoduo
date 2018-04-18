import "../tuijian/tuijian.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from 'jquery'
// import {Route, Link} from "react-router-dom";

// 库 框架
class Tuijian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: require('../../../images/qq.jpg'),
            src1: require('../../../images/icon.png'),
            name: "最近完本",
            arr: [],
            index:0,
            arr1:[]
        }
    }
    slideup(i){

        $("#wanben .yincang").eq(i).stop().animate({
            top:0
        },300)
    }

    slidedown(i){
        $("#wanben .yincang").eq(i).stop().animate({
            top:172
        },300)
    }
    xianshi(i){
        this.setState({
            index:i
        })
    }
    render() {
        return (
            <div className="tuijian" id="wanben">
                <div className="main" style={{overflow: "hidden"}}>
                    <div className="tuijian-l">
                        <div className="tj-l-t">
                            <h5>{this.state.name}<span>更多完本 ></span></h5>
                        </div>
                        <div className="tuijian-l-b">
                            <ul>
                                {((arr) => {
                                    return arr.map((e, i) => {
                                        return <li key={i}>
                                            <div className="box" onMouseEnter={this.slideup.bind(this,i)} onMouseLeave={this.slidedown.bind(this,i)}>
                                                <img src={e.img} alt=""/>
                                                <div className="yincang">
                                                    <p>
                                                        {e.msg}
                                                    </p>
                                                    <span>
                                                    立即阅读
                                                 </span>
                                                </div>
                                            </div>
                                            <h4>{e.title}</h4>
                                        </li>
                                    })
                                })(this.state.arr)}
                            </ul>
                        </div>
                    </div>

                    <div className="tuijian-r">
                        <div className="tj-r-t">
                            <h5>热门榜<span>更多 ></span></h5>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src1+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src1+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr1)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var self = this;
        $.ajax({
            type: 'POST',
            url: 'http://localhost:55555/home',
            data: {
                sort: self.state.name
            }
        }).then(function (res) {

            self.setState({
                arr:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr1:res
            })
        })
    }
}


export default connect((state) => {
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Tuijian);