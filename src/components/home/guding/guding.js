import "./guding.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';


// import { Route,Link } from "react-router-dom";
// 库 框架
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div className="fixed-btn hide" id="floatFunc">
                    <div className="fixed-back"></div>
                    <a className="fixed-mf" href="#free">限时免费</a>
                    <a href="#man">男生最爱</a>
                    <a href="#woman">女生最爱</a>
                    <a href="#wanben">最近完本</a>
                    <a href="#">分类热门</a>
                    <a href="#">更新列表</a>
                    <a href="#" className="go-top">返回顶部</a>
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