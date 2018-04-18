import "./fenye.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';
import $ from "jquery"
import { Link} from "react-router-dom";


class Fenye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ["玄幻", "奇幻", "都市", "现代言情", "仙侠", "武侠", "言情", "穿越重生", "灵异", "悬疑", "游戏", "青春校园", "军事", "职场", "恐怖", "豪门总裁", "历史", "玄幻言情", "古代言情"],
            arr2: ["//yue05.sogoucdn.com/cdn/web/image/2018/04/11/20180411173236_9143.jpg", "//yue05.sogoucdn.com/cdn/web/image/2018/04/11/20180411173014_9142.jpg", "//yue05.sogoucdn.com/cdn/web/image/2018/04/16/20180416185916_9151.jpg", "//yue01.sogoucdn.com/cdn/web/image/2017/12/11/20171211160550_8874.jpg",],
            arr3: ["婚礼前一晚，未婚夫背叛", "「热门」被上司送进老男人的房", "「美女」总裁未婚妻竟然不让碰", "「爽文」小娇妻给我生个宝宝", "「火爆」偷学内门绝学被迫跳崖", "「畅销」怀胎三月竟被毁容丢弃", "「宠文」她成了肆意摆弄的玩物"],
            index:0,
            timer:null
        }
    }

    componentDidMount(){
        var self=this;
        function autoPlay(index,obj){
            index++;
            if(index===obj.state.arr2.length){
                $(obj.refs.lunbo).animate({
                    left:index*-748
                },1000,function(){
                    $(obj.refs.lunbo).css({
                        left:0
                    })
                })
                obj.setState({
                    index:0
                })
            }else {
                $(obj.refs.lunbo).animate({
                    left:index*-748
                },1000);
                obj.setState({
                    index:index
                })
            }
        }
        this.setState({
            timer:setInterval(function(){
                autoPlay(self.state.index,self)
            },3000)
        });

        $(this.refs.lunbo).parent().on("mouseenter",function(){
            clearInterval(self.state.timer)
        }).on("mouseleave",function(){
            self.setState({
                timer:setInterval(function(){
                    autoPlay(self.state.index,self)
                },3000)
            });
        });
        $(this.refs.lunbo).siblings(".next").on("click",function(){
            autoPlay(self.state.index,self)
        })
        $(this.refs.lunbo).siblings(".pre").on("click",function(){
            if(self.state.index===0){
                autoPlay(2,self)

            }else {
                autoPlay(self.state.index-2,self)
            }

        })

    }
    render() {
        return (
            <div className="main">
                <div className="fenlei">
                    <div className="fenlei-l">
                        <div className="fenlei-l-t">
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <Link to="/index/nansheng" key={i} onClick={this.props.sort.bind(this,e)}>{e}</Link>
                                })
                            })(this.state.arr)}
                        </div>
                        <div className="fenlei-l-b">
                            <Link to="/index/nansheng">同人小说</Link>
                            <Link to="/index/nansheng" className="aa">全部分类 ></Link>
                        </div>
                    </div>

                    <div className="fenlei-m">
                        <ul className="lunbo" style={{
                            width:(this.state.arr2.length+1)*748+"px"
                        }} ref="lunbo">
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <li key={i}>
                                        <img src={e} alt=""/>
                                    </li>
                                })
                            })(this.state.arr2)}
                            <li >
                                <img src={this.state.arr2[0]} alt=""/>
                            </li>
                        </ul>
                        <ol className="lun"  ref="lun">
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <li key={i} className={this.state.index===i?"active":""}></li>
                                })
                            })(this.state.arr2)}
                        </ol>
                        <span className="next"></span>
                        <span className="pre"></span>
                    </div>

                    <div className="fenlei-r">
                        <ul>
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <li key={i}>
                                        <Link to="#">{e}</Link>
                                    </li>
                                })
                            })(this.state.arr3)}
                        </ul>
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
        sort(e){
            dipatch({
                type : "SORTS",
                sort : e
            })
        }
    }
})(Fenye);