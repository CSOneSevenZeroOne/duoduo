import "./info.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';
import {Link} from "react-router-dom";

import $ from 'jquery'

// 库 框架
class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            status : false,
            book_id : 0,
            section : [],
            info : null,
            name : "小编强推",
            arr : [],
            arr1:[],
            index:0,
            index2:0
        }
    }
	slideup(i){
        $(".yincang").eq(i).stop().animate({
            top : 0
        }, 300)
    }

    slidedown(i){

        $(".yincang").eq(i).stop().animate({
            top : 172
        }, 300)
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
    render(){
        return (
            <div id="info">
                <div className="main">
                    {(() =>{
                        if(this.state.status){
                            return <div className="left">
                                <div className="sitepath" pbflag="面包屑导航">
                                    当前位置：
                                    <Link to="/">首页</Link>
                                    &gt; <span>{this.state.info.class.split("：")[1]}</span> &gt;
                                    <span>{this.state.info.title}</span>
                                </div>
                                <div className="info-box clear">
                                    <i to ="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="封面" className="cover fl" id="bookCover">
                                        <img src={this.state.info.img} alt=""/> <i className="icon by-icon">包月</i> </i>
                                    <div className="infos fl">
                                        <h1 className="text-title">
                                            <Link to="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="书籍名称">{this.state.info.title}</Link>
                                        </h1>
                                        <div className="field clear">
                                            <span className="fl">{this.state.info.author}</span>
                                            <span className="fl">{this.state.info.class}</span>
                                            <span className="fl">{"状态：" + this.state.info.status}</span>
                                            <span className="fl">{"字数：" + this.state.info.words + "万"}</span>
                                            <span className="fl">{this.state.info.source}</span>
                                            <span className="fl" id="bookPrice">{this.state.info.bookPrice}</span>
                                        </div>
                                        <p className="desc" style={{
                                            'overflow' : 'hidden',
                                            'textOverflow' : 'ellipsis',
                                            'display' : '-webkit-box',
                                            'WebkitLineClamp' : '3',
                                            'WebkitBoxOrient' : 'vertical'
                                        }}>
                                            {this.state.info.msg}
                                        </p>

                                        <div className="logs">
                                            <p id="recommand">
                                                <Link to="/user/vip/">开通包月，此书享受8折优惠</Link>
                                            </p>
                                        </div>
                                        <div className="btns">
                                            <Link to={"/content?book_id="+window.location.href.split("?")[1].split("=")[1]+"&section=0"} target="_blank" pbflag="详情区" pbtag="免费试读" id="startRead" className="btn btn-read">免费试读</Link>
                                            <Link to={"/index/section?book_id="+window.location.href.split("=")[1]} pbflag="详情区" pbtag="查看目录" target="_blank" className="btn btn-toc">查看目录</Link>
                                            <Link to="#" className="btn btn-toc" pbflag="详情区" pbtag="加入书架" id="addToShelf">加入书架</Link>
                                            <Link to="#" pbflag="详情区" pbtag="手机" className="mobile" id="showPhone">
                                                <i className="icon"></i>用手机看
                                            </Link>
                                            <Link to="#" pbflag="详情区" pbtag="分享" className="share" id="showShare">
                                                <i className="icon"></i>分享
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-tit text-title">最新章节</div>
                                <div className="chapter-box" id="newChapter">
                                    <ul className="chapter clear">
                                        {((arr)=>{
                                            return arr.map((e,i,arr)=>{
                                                if(i>=arr.length-6){
                                                    return <li key={i} className="c2">
                                                        <Link className="text-ellips" to={"/content?book_id="+this.state.book_id+"&section="+i} pbflag="章节区" pbtag="227839425131388" target="_blank">
                                                            <span>{e.title}</span></Link>
                                                        <i className="icon"></i></li>
                                                }else {
                                                    return "";
                                                }
                                            })
                                        })(this.state.section)}
                                    </ul>
                                </div>
                                <div className="info-tit text-title">全部章节</div>
                                <div className="chapter-box" id="allChapter">
                                    <ul className="chapter clear forwards">
                                        {((arr)=>{
                                            return arr.map((e,i,arr)=>{
                                                if(i<20){
                                                    return <li  key={i} className="c2">
                                                        <Link className="text-ellips" to={"/content?book_id="+this.state.book_id+"&section="+i} target="_blank">
                                                            <span>{e.title}</span></Link>
                                                        <i className="icon"></i></li>
                                                }else {
                                                    return "";
                                                }
                                            })
                                        })(this.state.section)}
                                    </ul>
                                </div>
                                <div className="chapter-more">
                                    <Link to={"/index/section?book_id="+window.location.href.split("?")[1].split("=")[1]} pbflag="章节区" pbtag="全部章节" target="_blank">查看全部章节</Link>
                                </div>
                                <div className="bdr-tit"><span className="text-title">猜你喜欢</span>
                                    <Link to="#" className="r fresh" pbflag="换一换" id="freshGuess">换一换</Link>
                                </div>
                                <div className="tuijian-l-b">
                                    <ul>
                                        {((arr) =>{
                                            return arr.map((e, i) =>{
                                                if(i < 6){
                                                    return <li key={i}>
                                                        <div className="box" onMouseEnter={this.slideup.bind(this, i)} onMouseLeave={this.slidedown.bind(this, i)}>
                                                            <img src={e.img} alt=""/>
                                                            <div className="yincang">
                                                                <p>
                                                                    {e.msg}
                                                                </p>
                                                                <span>
                                                    立即阅读
                                                 </span>
                                                            </div>
                                                        </div>

                                                        <h4>{e.title}</h4>
                                                    </li>
                                                }else {
                                                    return "";
                                                }
                                            })
                                        })(this.state.arr)}
                                    </ul>
                                </div>
                            </div>
                        }
                    })()}

                    <div className="right">
                        <div id="authorBooks">
                            <div className="bdr-tit"><span className="text-title">该作者的其他作品</span></div>
                            <ul className="mix-nav-list">
                                <li pbflag="其他作品_0">
                                    <Link pbtag="封面_1667103592_名门宠婚1000亿：齐少的娇妻" to ="/book/1667103592/" target="_blank">
                                        <img className="fl" src="//yue05.sogoucdn.com/cdn/image/book/1667103592_1492574954254.png" alt=""/>
                                    </Link>
                                    <div className="info fr">
                                        <Link pbtag="文字_1667103592_名门宠婚1000亿：齐少的娇妻" to ="/book/1667103592/" target="_blank">
                                            <h4 className="text-title text-ellips">名门宠婚1000亿：齐少的娇妻</h4>
                                            <span className="d text-ellips">作者：无尽相思</span><span className="d">深夜，他潜进她的房间，“老婆...<span className="more">详细</span></span>
                                        </Link>
                                    </div>
                                </li>
                                <li pbflag="其他作品_1">
                                    <Link pbtag="封面_3432444347_霸道宠婚：老婆，你被潜了" to ="/book/3432444347/" target="_blank">
                                        <img className="fl" src="//yue03.sogoucdn.com/cdn/image/book/3432444347_1492617335646.jpg" alt=""/>
                                    </Link>
                                    <div className="info fr">
                                        <Link pbtag="文字_3432444347_霸道宠婚：老婆，你被潜了" to ="/book/3432444347/" target="_blank">
                                            <h4 className="text-title text-ellips">霸道宠婚：老婆，你被潜了</h4>
                                            <span className="d text-ellips">作者：无尽相思</span><span className="d">“老婆，我爱你……” 他是年...<span className="more">详细</span></span>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="catBooks">
                            <div className="bdr-tit"><span className="text-title">豪门总裁榜</span>
                                <Link to="/58_0_0_0_heat/" pbtag="更多" target="_blank" className="r">更多&gt;</Link>
                            </div>
                            
                            <ul className="top-list">
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi.bind(this,i)}>
                                            <Link to={"/index/info?book_id="+e.id}>
                                            <div className="bb" style={{display:this.state.index===i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon">{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index===i?"none":"block"}}>
                                                <i className="icon">{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                            </Link>
                                        </li>
                                    })
                                })(this.state.arr1)}
                            </ul>
                        </div>
                        
                        <div id="catBooks">
                            <div className="bdr-tit"><span className="text-title">热门榜</span>
                                <Link to="/58_0_0_0_heat/" pbtag="更多" target="_blank" className="r">更多&gt;</Link>
                            </div>
                            
                            <ul className="top-list">
                                {((arr)=>{
                                    return arr.map((e,i)=>{
                                        return <li className="list" key={i} onMouseEnter={this.xianshi2.bind(this,i)}>
                                            <div className="bb" style={{display:this.state.index2===i?"block":"none"}}>
                                                <img src={e.img} alt=""/>
                                                <div className="righ">
                                                    <i className="icon">{i+1}</i>
                                                    <h4>{e.title}</h4>
                                                    <p className="p1">{e.author}</p>
                                                    <p className="p2">{e.class}</p>
                                                </div>
                                            </div>
                                            <div className="cc" style={{display:this.state.index2===i?"none":"block"}}>
                                                <i className="icon">{i+1}</i>
                                                <span className="ss" style={{display:"inline-block",marginLeft:"40px",}}>{e.title}</span>
                                                <span style={{float:"right"}}>{e.class.split("：")[1]}</span>
                                            </div>
                                        </li>
                                    })
                                })(this.state.arr1)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        var self = this;
        var id=window.location.href.split("?")[1].split("=")[1];
        $.ajax({
            url : 'http://localhost:55555/home/info',
            type : "get",
            dataType : "json",
            data : {
                book_id : id
            }
        }).then(function(res){
            $.ajax({
                url : 'http://localhost:55555/home/section',
                type : "get",
                dataType : "json",
                data : {
                    book_id : id
                }
            }).then(function(res){
               
                self.setState({
                    section : res,
                    status : true
                });
            })
            self.setState({
                book_id : id,
                info : res[0]
            });
        })
		
        $.ajax({
            type : 'POST',
            url : 'http://localhost:55555/home',
            data : {
                sort : self.state.name
            }
        }).then(function(res){
            self.setState({
                arr : res
            })
        })
        $.ajax({
            type: 'GET',
            url: 'http://localhost:55555/home/bangdan',
        }).then(function (res) {
            self.setState({
                arr1:res
            })
        })
    }
}

export default connect((state) =>{
    return {
        state
    }
}, (dipatch) =>{
    return {}
})(Info);