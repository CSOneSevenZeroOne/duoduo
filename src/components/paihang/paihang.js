import "./paihang.css"
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
            src:require("../../images/icon.png"),
            arr: ["24小时热门榜","包月点击榜","新书榜","畅销榜","免费榜","完本榜","搜索风云榜","收藏榜","男生榜","女生榜","包月完本榜","包月男生榜","包月女生榜","分类榜单"],
            arr1:[],
            arr2:[],
            arr3:[],
            arr4:[],
            arr5:[],
            arr6:[],
            arr7:[],
            arr8:[],
            arr9:[],
            arr10:[],
            arr11:[],
            arr12:[],
            index:0,
            index2:0,
            index3:0,
            index4:0,
            index5:0,
            index6:0,
            index7:0,
            index8:0,
            index9:0,
            index10:0,
            index11:0,
            index12:0,


        }
    }
    xianshi(i){
        this.setState({
            index:i
        })
    }
    xianshi2(i){
        this.setState({
            index2:i
        })
    }
    xianshi3(i){
        this.setState({
            index3:i
        })
    }
    xianshi4(i){
        this.setState({
            index4:i
        })
    }
    xianshi5(i){
        this.setState({
            index5:i
        })
    }
    xianshi6(i){
        this.setState({
            index6:i
        })
    }
    xianshi7(i){
        this.setState({
            index7:i
        })
    }
    xianshi8(i){
        this.setState({
            index8:i
        })
    }
    xianshi9(i){
        this.setState({
            index9:i
        })
    }
    xianshi10(i){
        this.setState({
            index10:i
        })
    }
    xianshi11(i){
        this.setState({
            index11:i
        })
    }
    xianshi12(i){
        this.setState({
            index12:i
        })
    }
    render() {
        return (
            <div className="paihang" id="paihang">
                <div className="main">
                    <div className="pai-l">
                        <h3>全部书籍榜单</h3>
                        <ul>
                            {((arr)=>{
                                return arr.map((e,i)=>{
                                    return <li key={i}>{e}</li>
                                })
                            })(this.state.arr)}
                        </ul>
                    </div>
                    <div className="pai-r">

                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>包月点击榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr1)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>畅销榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi2.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index2==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index2==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr2)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>新书榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi3.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index3==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index3==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr3)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>24小时热门榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi4.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index4==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index4==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr4)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>完本榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi5.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index5==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index5==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr5)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>搜索风云榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi6.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index6==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index6==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr6)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>收藏榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi7.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index7==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index7==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr7)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>男生榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi8.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index8==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index8==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr8)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>女生榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi9.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index9==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index9==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr9)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>包月完本榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi10.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index10==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index10==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr10)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>包月男生榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi11.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index11==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index11==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr11)}
                            </ul>

                        </div>
                        <div className="dd">
                            <div className="pai-r-t">
                                <h5>包月女生榜<span>更多 ></span></h5>
                            </div>
                            <ul>
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi12.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index12==i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index12==i?"none":"block"}}>
                                                <i className="icon" style={{"backgroundImage":'url('+this.state.src+')'}}>{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr12)}
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
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr1:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr2:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr3:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr4:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr5:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr6:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr7:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr8:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr9:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr10:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr11:res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr12:res
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