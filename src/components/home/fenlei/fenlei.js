import "./fenlei.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

// import {Route, Link} from "react-router-dom";
import $ from "jquery"

// 库 框架
class Fenlei extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ["都市", "玄幻", "古代言情", "现代言情", "仙侠", "灵异", "职场", "豪门总裁", "青春校园", "同人小说"],
            src: require("../../../images/lunbo1.jpg"),
            list: []
        }
    }

    change(e) {
        this.setState({
            name1: e.target.value
        })
    }

    render() {
        return (
            <div id="fenlei">
                <div className="main">
                    <ul>
                        {((arr) => {
                            return arr.map((e, i) => {
                                return <li key={i}>
                                    <h5>{e.type} <span>更多 ></span></h5>
                                    <a href="#" className="top">
                                    <img src={e.list[0].img} alt=""/>
                                    <div>
                                    <h3>{e.list[0].title}</h3>
                                    <span>{e.list[0].author}</span>
                                    <p>{e.list[0].msg}
                                    <span>详细</span>
                                    </p>
                                    </div>
                                    </a>
                                    <ol>
                                        {(function (arr) {
                                            var list=[];
                                            for (var i = 1; i < arr.length; i++) {
                                                list.push(<li key={i}><a href="#">[{arr[i].class.split("：")[1]}]</a> <span>{arr[i].title}</span></li>)
                                            }
                                            return list
                                        })(e.list)}
                                    </ol>
                                </li>
                            })
                        })(this.state.list)}
                    </ul>
                </div>
            </div>
        )
    }

    componentWillMount() {
        var self = this;
        for (var i = 0; i < this.state.arr.length; i++) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:55555/home/fenlei',
                data: {
                    class: self.state.arr[i]
                }
            }).then(function (res) {
                var arr = self.state.list;
                arr.push(res)
                self.setState({
                    list: arr
                })
            })

        }

    }
}

export default connect((state) => {
    console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Fenlei);