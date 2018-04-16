import "../tuijian/tuijian.css"
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
            name: "限时免费",
            arr: []
        }
    }

    render() {
        return (
            <div className="tuijian" id="free">
                <div className="main" style={{overflow: "hidden"}}>
                    <div className="tuijian-l">
                        <div className="tj-l-t">
                            <h5>{this.state.name}<span>免费专区></span></h5>
                        </div>
                        <div className="tuijian-l-b">
                            <ul>
                                {((arr) => {
                                    return arr.map((e, i) => {
                                        return <li key={i}>
                                            <img src={e.img} alt=""/>
                                            <h4>{e.title}</h4>
                                            <div className="yincang">
                                                <p>
                                                    {e.msg}
                                                </p>
                                                <span>
                                                    立即阅读
                                                 </span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr)}
                            </ul>
                        </div>
                    </div>

                    <div className="tuijian-r">
                        <div className="tj-r-t">
                            <h5>畅销榜<span>更多 ></span></h5>
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
    }
}


export default connect((state) => {
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Tuijian);