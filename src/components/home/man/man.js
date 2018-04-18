import "./man.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from 'jquery'
import {Route, Link} from "react-router-dom";

// 库 框架
class Tuijian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: require('../../../images/qq.jpg'),
            name: "男生最爱",
            arr: [],
            src1:require('../../../images/icon.png'),
            arr1:[],
            index:0
        }
    }
    xianshi(i){
        this.setState({
            index:i
        })
    }
    render() {
        return (
            <div className="man" id="man">
                <div className="main" style={{overflow: "hidden"}}>
                    <div className="man-l">
                        <div className="man-l-t">
                            <h5>{this.state.name}<span>男生专区></span></h5>
                        </div>
                        <div className="man-l-b">
                            <div className="left">
                                <div className="focus-info">
                                    <a href="#" className="a1">重生之都市修仙</a>
                                    <a href="#" className="a2">十里剑神 著</a>
                                    <a href="#" className="a3"><i className="icon" style={{"backgroundImage":'url('+this.state.src1+')'}}>新</i> 第1181章 真正的大能！（第一更）</a>
                                    <a href="#">渡劫期大修士陈凡陨落在天劫中，却一梦五百年重回地...</a>
                                </div>
                                <a href="#" className="a4">
                                    <img src="//yue08.sogoucdn.com/cdn/image/book/1102431956_1522305659547.jpg"/>
                                </a>
                            </div>
                            <div className="right">
                                <a href="#" className="a-t">
                                    【太初】迎风挥击千层浪，少年不败热血！
                                </a>
                                <ul>
                                    {((arr)=>{
                                        return arr.map((e,i)=>{
                                            return <li key={i}>
                                                <a href="#" className="leibie">[{e.class.split("：")[1]}]</a>
                                                <a href="#" className="title">{e.title}</a>
                                            </li>
                                        })
                                    })(this.state.arr)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="man-r">
                        <div className="man-r-t">
                            <h5>男生榜<span>更多 ></span></h5>
                        </div>
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