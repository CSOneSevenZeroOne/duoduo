import "./footer.css"
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
            src:require("../../images/icon.png"),
            src1:require("../../images/wx.png"),
            src2:require("../../images/wx.png")
        }
    }

    render() {
        return(
            <div id="footer">
                <div className="main">
                    <div className="foot-t">
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-10px -163px"}}></i>
                                    用户指南
                                </p>
                            </dt>
                            <dd><a href="#">如何注册</a></dd>
                            <dd><a href="#">忘记密码</a></dd>
                            <dd><a href="#">如何充值</a></dd>
                            <dd><a href="#">会员体系</a></dd>
                            <dd><a href="#">意见反馈及投诉</a></dd>
                            <dd><a href="#">人工客服</a></dd>
                            <dd><a href="#">用户交流QQ群：7424994</a></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-50px -163px"}}></i>
                                    会员包月
                                </p>
                            </dt>
                            <dd><a href="#">如何包月</a></dd>
                            <dd><a href="#">包月特权</a></dd>
                            <dd><a href="#">包月书城</a></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-92px -163px"}}></i>
                                    商务合作
                                </p>
                            </dt>
                            <dd><a href="#">渠道：梁鑫 liangxin@sogou-inc.com</a></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-126px -163px"}}></i>
                                    三端免费
                                </p>
                            </dt>
                            <dd>
                                <a href="#"><h3>关注微信</h3><img src={this.state.src1} alt=""/></a>
                            </dd>
                            <dd>
                                <a href="#"><h3>关注微博</h3><img src={this.state.src2} alt=""/></a>
                            </dd>
                        </dl>
                    </div>
                    <div className="foot-b">
                        <p className="f-nav">
                            <a href="#">关于我们</a>
                            <a href="#">官方微博</a>
                            <a href="#">意见反馈及投诉</a>
                            <a href="#">用户服务协议</a>
                            <a href="#">隐私政策</a>
                            <a href="#">网址大全</a>
                        </p>
                        <p>网络文化经营许可证京网文[2016]6432-852号</p>
                        <p>健康阅读公告，抵制不良小说，拒绝盗版小说。注意自我保护，谨防上当受骗。合理安排时间，享受健康生活。</p>
                        <p className="pp">Copyright ©2018 Sogou.com. All Rights Reserved.  京ICP证050897号</p>
                        <p>搜狗公司 版权所有</p>
                    </div>
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