import "./update.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import $ from "jquery"

// 库 框架
class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:["序号","类型","小说名称","更新章节","状态","字数","作者","来源","阅读"],
            arr1:[]
        }
    }

    render() {
        return (
            <div id="update">
                <div className="main">
                    <h3>最近更新</h3>
                    <table>
                        <thead>
                        <tr>
                            {((arr)=>{
                                return arr.map((e,i)=>{
                                    return <th key={i}>{e}</th>
                                })
                            })(this.state.arr)}
                        </tr>
                        </thead>
                        <tbody>
                        {((arr)=>{
                          return arr.map((e,i)=>{
                              return <tr key={i}>
                                  <td><i className="icon">{i+1}</i></td>
                                    <td>{e.class.split("：")[1]}</td>
                                  <td>{e.name}</td>
                                  <td>{e.title}</td>
                                  <td>{e.status}</td>
                                  <td>{e.words}万</td>
                                  <td>{e.author}</td>
                                  <td>{e.source}</td>
                                  <td>开始阅读</td>
                              </tr>
                          })
                        })(this.state.arr1)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    componentDidMount() {
       var self=this;
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/gengxin',
        }).then(function (res) {
            console.log(res);
            self.setState({
                arr1:res
            })
        })
    }
}

export default connect((state) => {
    console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {}
})(Update);