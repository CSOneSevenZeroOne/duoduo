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
            arr : []
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

    render(){
        return (
            <div id="info">
                <div className="main">
                    {(() =>{
                        if(this.state.status){
                            return <div className="left">
                                <div className="sitepath" pbflag="面包屑导航">
                                    当前位置：
                                    <a href="/">首页</a>
                                    &gt; <span>{this.state.info.class.split("：")[1]}</span> &gt;
                                    <span>{this.state.info.title}</span>
                                </div>
                                <div className="info-box clear">
                                    <i href="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="封面" className="cover fl" id="bookCover">
                                        <img src={this.state.info.img} alt=""/> <i className="icon by-icon">包月</i> </i>
                                    <div className="infos fl">
                                        <h1 className="text-title">
                                            <a href="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="书籍名称">{this.state.info.title}</a>
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
                                                <a href="/user/vip/">开通包月，此书享受8折优惠</a>
                                            </p>
                                        </div>
                                        <div className="btns">
                                            <a href="/chapter/6953112530_227839425131388/" target="_blank" pbflag="详情区" pbtag="免费试读" id="startRead" className="btn btn-read">免费试读</a>
                                            <a href="/list/6953112530" pbflag="详情区" pbtag="查看目录" target="_blank" className="btn btn-toc">查看目录</a>
                                            <a href="#" className="btn btn-toc" pbflag="详情区" pbtag="加入书架" id="addToShelf">加入书架</a>
                                            <a href="#" pbflag="详情区" pbtag="手机" className="mobile" id="showPhone">
                                                <i className="icon"></i>用手机看
                                            </a>
                                            <a href="#" pbflag="详情区" pbtag="分享" className="share" id="showShare">
                                                <i className="icon"></i>分享
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="info-tit text-title">最新章节</div>
                                <div className="chapter-box" id="newChapter">
                                    <ul className="chapter clear">
                                        {((arr)=>{
                                            return arr.map((e,i,arr)=>{
                                                if(i>=arr.length-6){
                                                    return <li key={i} className="c2" data-cid="227839425131388">
                                                        <Link className="text-ellips" to={"/content?book_id="+this.state.book_id+"&section="+i} pbflag="章节区" pbtag="227839425131388" target="_blank">
                                                            <span>{e.title}</span></Link>
                                                        <i class="icon"></i></li>
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
                                                    return <li  key={i} className="c2" data-cid="227839425131388">
                                                        <Link className="text-ellips" to={"/content?book_id="+this.state.book_id+"&section="+i} pbflag="章节区" pbtag="227839425131388" target="_blank">
                                                            <span>{e.title}</span></Link>
                                                        <i class="icon"></i></li>
                                                }
                                            })
                                        })(this.state.section)}
                                    </ul>
                                </div>
                                <div className="chapter-more">
                                    <a href="/list/6953112530" pbflag="章节区" pbtag="全部章节" target="_blank">查看全部章节</a>
                                </div>
                                <div className="bdr-tit"><span className="text-title">猜你喜欢</span>
                                    <a href="#" className="r fresh" pbflag="换一换" id="freshGuess">换一换</a>
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
                                    <a pbtag="封面_1667103592_名门宠婚1000亿：齐少的娇妻" href="/book/1667103592/" target="_blank">
                                        <img className="fl" src="//yue05.sogoucdn.com/cdn/image/book/1667103592_1492574954254.png" alt=""/>
                                    </a>
                                    <div className="info fr">
                                        <a pbtag="文字_1667103592_名门宠婚1000亿：齐少的娇妻" href="/book/1667103592/" target="_blank">
                                            <h4 className="text-title text-ellips">名门宠婚1000亿：齐少的娇妻</h4>
                                            <span className="d text-ellips">作者：无尽相思</span><span className="d">深夜，他潜进她的房间，“老婆...<span className="more">详细</span></span>
                                        </a>
                                    </div>
                                </li>
                                <li pbflag="其他作品_1">
                                    <a pbtag="封面_3432444347_霸道宠婚：老婆，你被潜了" href="/book/3432444347/" target="_blank">
                                        <img className="fl" src="//yue03.sogoucdn.com/cdn/image/book/3432444347_1492617335646.jpg" alt=""/>
                                    </a>
                                    <div className="info fr">
                                        <a pbtag="文字_3432444347_霸道宠婚：老婆，你被潜了" href="/book/3432444347/" target="_blank">
                                            <h4 className="text-title text-ellips">霸道宠婚：老婆，你被潜了</h4>
                                            <span className="d text-ellips">作者：无尽相思</span><span className="d">“老婆，我爱你……” 他是年...<span className="more">详细</span></span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id="catBooks">
                            <div className="bdr-tit"><span className="text-title">豪门总裁榜</span>
                                <a href="/58_0_0_0_heat/" pbtag="更多" target="_blank" className="r">更多&gt;</a>
                            </div>
                            <ul className="top-list">
                                <li className="on" pbflag="">
                                    <a pbtag="书名_871768095_豪门逃嫁101次" href="/book/871768095/" target="_blank" className="top-detail">
                                        <img src="//yue02.sogoucdn.com/cdn/image/book/871768095_1490614535541.jpeg"/><i className="icon text-num num1">1</i><span className="text-ellips fl">豪门逃嫁101次</span><span className="book-author fl hide">作者：唐小涵</span><span className="book-type fl hide">分类：豪门总裁</span><span class="fr">豪门总裁</span>
                                    </a>
                                </li>
                                <li pbflag="" className="on">
                                    <a pbtag="书名_6626331130_天价宠妻：总裁夫人休想逃" href="/book/6626331130/" target="_blank" className="top-detail">
                                        <img src="//yue07.sogoucdn.com/cdn/image/book/6626331130_1502875525554.jpg"/><i className="icon text-num num2">2</i><span className="text-ellips fl">天价宠妻：总裁夫人休想逃</span><span className="book-author fl hide">作者：白茶</span><span className="book-type fl hide">分类：豪门总裁</span><span className="fr">豪门总裁</span>
                                    </a>
                                </li>
                                <li pbflag="" className="on">
                                    <a pbtag="书名_3498581593_冥冥之中喜欢你" href="/book/3498581593/" target="_blank" className="top-detail">
                                        <img src="//yue06.sogoucdn.com/cdn/image/book/3498581593_1492619132764.jpg"/><i className="icon text-num num3">3</i><span className="text-ellips fl">冥冥之中喜欢你</span><span className="book-author fl hide">作者：姒城城</span><span className="book-type fl hide">分类：豪门总裁</span><span className="fr">豪门总裁</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount(){
        var self = this;
        var id=parseInt(window.location.href.split("?")[1].split("=")[1]);
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
                console.log(res);
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
    }
}

export default connect((state) =>{
    return {
        state
    }
}, (dipatch) =>{
    return {}
})(Info);