import "./update.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

// import {Route, Link} from "react-router-dom";
import $ from "jquery"

// 库 框架
class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr:["序号","类型","小说名称","更新章节","状态","字数","作者","更新时间","阅读"]
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
                    </table>
                </div>
            </div>
        )
    }

    componentWillMount() {


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