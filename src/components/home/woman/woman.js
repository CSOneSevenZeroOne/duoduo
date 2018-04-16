import "../man/man.css"
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
            name: "女生最爱",
            arr: [],
            src1:require('../../../images/icon.png'),
        }
    }

    render() {
        return (
            <div className="man" id="woman">
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
                                                <a href="#" className="leibie">[{e.class}]</a>
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
                            <h5>女生榜<span>更多 ></span></h5>
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
            console.log(self.state.arr);
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