import "./footer.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';
import {Link} from "react-router-dom";


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
                            <dd><Link to="#">如何注册</Link></dd>
                            <dd><Link to="#">忘记密码</Link></dd>
                            <dd><Link to="#">如何充值</Link></dd>
                            <dd><Link to="#">会员体系</Link></dd>
                            <dd><Link to="#">意见反馈及投诉</Link ></dd>
                            <dd><Link to="#">人工客服</Link></dd>
                            <dd><Link to="#">用户交流QQ群：7424994</Link></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-50px -163px"}}></i>
                                    会员包月
                                </p>
                            </dt>
                            <dd><Link to="#">如何包月</Link></dd>
                            <dd><Link to="#">包月特权</Link></dd>
                            <dd><Link to="#">包月书城</Link></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-92px -163px"}}></i>
                                    商务合作
                                </p>
                            </dt>
                            <dd><Link to="#">渠道：梁鑫 liangxin@sogou-inc.com</Link></dd>
                        </dl>
                        <dl>
                            <dt>
                                <p><i className="icon" style={{"backgroundImage":'url('+this.state.src+')',"backgroundPosition":"-126px -163px"}}></i>
                                    三端免费
                                </p>
                            </dt>
                            <dd>
                                <Link to="#"><h3>关注微信</h3><img src={this.state.src1} alt=""/></Link>
                            </dd>
                            <dd>
                                <Link to="#"><h3>关注微博</h3><img src={this.state.src2} alt=""/></Link>
                            </dd>
                        </dl>
                    </div>
                    <div className="foot-b">
                        <p className="f-nav">
                            <Link to="#">关于我们</Link>
                            <Link to="#">官方微博</Link>
                            <Link to="#">意见反馈及投诉</Link>
                            <Link to="#">用户服务协议</Link>
                            <Link to="#">隐私政策</Link>
                            <Link to="#">网址大全</Link>
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