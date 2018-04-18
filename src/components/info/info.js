import "./info.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import $ from 'jquery'
// 库 框架
class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
			
            name: "小编强推",
            arr: []
        }
    }
	slideup(i){
        $(".yincang").eq(i).stop().animate({
            top:0
        },300)
    }

    slidedown(i){

        $(".yincang").eq(i).stop().animate({
            top:172
        },300)
    }
    render() {
        return(
           	<div id="info">
				<div className="main">
					<div className="left">
						<div className="sitepath" pbflag="面包屑导航">
                    		当前位置：<a href="/">首页</a> &gt; <a href="/58_0_0_0_heat/">豪门总裁</a> &gt; <a href="/book/6953112530/">余生一个程延之</a>
                		</div>
                		<div className="info-box clear">
		                    <i href="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="封面" className="cover fl" id="bookCover">
		                        <img src="//yue07.sogoucdn.com/cdn/image/book/6953112530_1506161353517.jpg" alt="" />
		                        <i className="icon by-icon">包月</i>
		                    </i>
		                    <div className="infos fl">
		                    	<h1 className="text-title"><a href="/chapter/6953112530_227839425131388/" pbflag="详情区" pbtag="书籍名称">余生一个程延之</a></h1>
		                    	<div className="field clear">
		                            <span className="fl">作者：无尽相思</span>
		                            <span className="fl">类型：<a href="/58_0_0_0_heat/" pbflag="详情区" pbtag="豪门总裁" target="_blank">豪门总裁</a></span>
		                            <span className="fl">状态：<a href="/0_1_0_0_heat/" pbflag="详情区" pbtag="连载中" target="_blank">连载中</a></span>
		                            <span className="fl">字数：205万</span>
		                            <span className="fl">来源：云起</span>
		                            <span className="fl" id="bookPrice">价格：5阅豆/千字</span>
		                        </div>
		                        <p className="desc" style={{display:'block'}}>
		                            	（军婚文）“睡了我，就要负责！” 一次酒醉，她意外毁了司令大人的清白！他英俊霸道，明明身边不缺女人，却逼着自己嫁给他…… 毫无背景的灰姑娘，变成尊贵的司令夫人，旁人羡慕嫉妒恨。 却只有...
		                        </p>
		                        <p className="desc-long" style={{display:'none'}}>
		                            	（军婚文）“睡了我，就要负责！” 一次酒醉，她意外毁了司令大人的清白！他英俊霸道，明明身边不缺女人，却逼着自己嫁给他…… 毫无背景的灰姑娘，变成尊贵的司令夫人，旁人羡慕嫉妒恨。 却只有...
		                        </p>
		                        <div className="show-desc"><a href="#" className="toggle" id="toggleDesc"><em>展开</em><i className="icon"></i></a></div>
		                        <div className="logs">
		                           
		                            <p id="recommand"><a href="/user/vip/">开通包月，此书享受8折优惠</a></p>
		                        </div>
		                        <div className="btns">
		                           	<a href="/chapter/6953112530_227839425131388/" target="_blank" pbflag="详情区" pbtag="免费试读" id="startRead" className="btn btn-read">免费试读</a>
		                           	<a href="/list/6953112530" pbflag="详情区" pbtag="查看目录" target="_blank" className="btn btn-toc">查看目录</a>
		                           	<a href="#" className="btn btn-toc" pbflag="详情区" pbtag="加入书架" id="addToShelf">加入书架</a>
		                           	<a href="#" pbflag="详情区" pbtag="手机" className="mobile" id="showPhone"><i className="icon"></i>用手机看</a>
		                        	<a href="#" pbflag="详情区" pbtag="分享" className="share" id="showShare"><i className="icon"></i>分享</a>
		                        </div>
		                    </div>
                    	</div>
                    	<div className="info-tit text-title">最新章节</div>
                    	<div className="chapter-box" id="newChapter">
		                    <ul className="chapter clear">
		                            <li className="c3" data-cid="227839441230850"><a className="text-ellips" href="/chapter/6953112530_227839441230850/" pbflag="章节区" pbtag="227839441230850" target="_blank"><span>第1966章 爸爸，我想妈妈了</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                            <li className="c3" data-cid="227839441216519"><a className="text-ellips" href="/chapter/6953112530_227839441216519/" pbflag="章节区" pbtag="227839441216519" target="_blank"><span>第1965章 她是一个外人</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                            <li className="c3" data-cid="227839441209749"><a className="text-ellips" href="/chapter/6953112530_227839441209749/" pbflag="章节区" pbtag="227839441209749" target="_blank"><span>第1964章 还是忘不了她</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                            <li className="c3" data-cid="227839441204272"><a className="text-ellips" href="/chapter/6953112530_227839441204272/" pbflag="章节区" pbtag="227839441204272" target="_blank"><span>第1963章 甜甜结婚</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                            <li className="c3" data-cid="227839441196043"><a className="text-ellips" href="/chapter/6953112530_227839441196043/" pbflag="章节区" pbtag="227839441196043" target="_blank"><span>第1962章 身为父亲</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                            <li className="c3" data-cid="227839441190737"><a className="text-ellips" href="/chapter/6953112530_227839441190737/" pbflag="章节区" pbtag="227839441190737" target="_blank"><span>第1961章 老板心血来潮</span></a><i className="icon" style={{display: 'inline'}}></i></li>
		                    </ul>
		                </div>
		                <div className="info-tit text-title">全部章节</div>
		                <div className="chapter-box" id="allChapter">
                    		<ul className="chapter clear forwards">
	                            <li className="c2" data-cid="227839425131388"><a class="text-ellips" href="/chapter/6953112530_227839425131388/" pbflag="章节区" pbtag="227839425131388" target="_blank"><span>第1章 堵住她的去路</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425142191"><a class="text-ellips" href="/chapter/6953112530_227839425142191/" pbflag="章节区" pbtag="227839425142191" target="_blank"><span>第2章 他越界了</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425145493"><a class="text-ellips" href="/chapter/6953112530_227839425145493/" pbflag="章节区" pbtag="227839425145493" target="_blank"><span>第3章 以前是她的教官</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425154250"><a class="text-ellips" href="/chapter/6953112530_227839425154250/" pbflag="章节区" pbtag="227839425154250" target="_blank"><span>第4章 他的情人</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425161434"><a class="text-ellips" href="/chapter/6953112530_227839425161434/" pbflag="章节区" pbtag="227839425161434" target="_blank"><span>第5章 被他拉进小树林</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425171739"><a class="text-ellips" href="/chapter/6953112530_227839425171739/" pbflag="章节区" pbtag="227839425171739" target="_blank"><span>第6章 曾经喜欢过的人</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425180026"><a class="text-ellips" href="/chapter/6953112530_227839425180026/" pbflag="章节区" pbtag="227839425180026" target="_blank"><span>第7章 将她拉进怀里</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425187832"><a class="text-ellips" href="/chapter/6953112530_227839425187832/" pbflag="章节区" pbtag="227839425187832" target="_blank"><span>第8章 当初陷害她的人</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425193239"><a class="text-ellips" href="/chapter/6953112530_227839425193239/" pbflag="章节区" pbtag="227839425193239" target="_blank"><span>第9章 “老公”</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425203808"><a class="text-ellips" href="/chapter/6953112530_227839425203808/" pbflag="章节区" pbtag="227839425203808" target="_blank"><span>第10章 在她这里睡</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425213393"><a class="text-ellips" href="/chapter/6953112530_227839425213393/" pbflag="章节区" pbtag="227839425213393" target="_blank"><span>第11章 同床共枕</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425224268"><a class="text-ellips" href="/chapter/6953112530_227839425224268/" pbflag="章节区" pbtag="227839425224268" target="_blank"><span>第12章 一定是嫁了假老公</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425225385"><a class="text-ellips" href="/chapter/6953112530_227839425225385/" pbflag="章节区" pbtag="227839425225385" target="_blank"><span>第13章 你是我太太</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425240538"><a class="text-ellips" href="/chapter/6953112530_227839425240538/" pbflag="章节区" pbtag="227839425240538" target="_blank"><span>第14章 把他叫来医院</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425243562"><a class="text-ellips" href="/chapter/6953112530_227839425243562/" pbflag="章节区" pbtag="227839425243562" target="_blank"><span>第15章 请他吃饭</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425249999"><a class="text-ellips" href="/chapter/6953112530_227839425249999/" pbflag="章节区" pbtag="227839425249999" target="_blank"><span>第16章 小时候的记忆</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425262375"><a class="text-ellips" href="/chapter/6953112530_227839425262375/" pbflag="章节区" pbtag="227839425262375" target="_blank"><span>第17章 教训韩菲儿</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425271526"><a class="text-ellips" href="/chapter/6953112530_227839425271526/" pbflag="章节区" pbtag="227839425271526" target="_blank"><span>第18章 我是让你滚</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425277693"><a class="text-ellips" href="/chapter/6953112530_227839425277693/" pbflag="章节区" pbtag="227839425277693" target="_blank"><span>第19章 何必那么麻烦</span></a><i class="icon"></i></li>
	                            <li className="c2" data-cid="227839425282265"><a class="text-ellips" href="/chapter/6953112530_227839425282265/" pbflag="章节区" pbtag="227839425282265" target="_blank"><span>第20章 在他面前丢脸</span></a><i class="icon"></i></li>
	                    	</ul>
                		</div>
                		<div className="chapter-more"><a href="/list/6953112530" pbflag="章节区" pbtag="全部章节" target="_blank">查看全部章节</a></div>
                		<div className="bdr-tit"><span className="text-title">猜你喜欢</span><a href="#" className="r fresh" pbflag="换一换" id="freshGuess">换一换</a></div>
                		<div className="tuijian-l-b">
                            <ul>
                                {((arr) => {
                                    return arr.map((e, i) => {
                                        if(i<6){
                                        	return <li key={i}>
                                            <div className="box" onMouseEnter={this.slideup.bind(this,i)} onMouseLeave={this.slidedown.bind(this,i)}>
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
					
					<div className="right">
						<div id="authorBooks">
                    		<div className="bdr-tit"><span className="text-title">该作者的其他作品</span></div>
                    		<ul className="mix-nav-list">
                    			<li pbflag="其他作品_0"><a pbtag="封面_1667103592_名门宠婚1000亿：齐少的娇妻" href="/book/1667103592/" target="_blank"><img className="fl" src="//yue05.sogoucdn.com/cdn/image/book/1667103592_1492574954254.png" alt="" /></a><div className="info fr"><a pbtag="文字_1667103592_名门宠婚1000亿：齐少的娇妻" href="/book/1667103592/" target="_blank"><h4 className="text-title text-ellips">名门宠婚1000亿：齐少的娇妻</h4><span className="d text-ellips">作者：无尽相思</span><span className="d">深夜，他潜进她的房间，“老婆...<span className="more">详细</span></span></a></div></li>
                    			<li pbflag="其他作品_1"><a pbtag="封面_3432444347_霸道宠婚：老婆，你被潜了" href="/book/3432444347/" target="_blank"><img className="fl" src="//yue03.sogoucdn.com/cdn/image/book/3432444347_1492617335646.jpg" alt="" /></a><div className="info fr"><a pbtag="文字_3432444347_霸道宠婚：老婆，你被潜了" href="/book/3432444347/" target="_blank"><h4 className="text-title text-ellips">霸道宠婚：老婆，你被潜了</h4><span className="d text-ellips">作者：无尽相思</span><span className="d">“老婆，我爱你……” 他是年...<span className="more">详细</span></span></a></div></li>
                    		</ul>
		                </div>
		                <div id="catBooks">
		                	<div className="bdr-tit"><span className="text-title">豪门总裁榜</span><a href="/58_0_0_0_heat/" pbtag="更多" target="_blank" className="r">更多&gt;</a></div>
		               		<ul className="top-list">
		               			<li className="on" pbflag=""><a pbtag="书名_871768095_豪门逃嫁101次" href="/book/871768095/" target="_blank" className="top-detail"><img src="//yue02.sogoucdn.com/cdn/image/book/871768095_1490614535541.jpeg" /><i className="icon text-num num1">1</i><span className="text-ellips fl">豪门逃嫁101次</span><span className="book-author fl hide">作者：唐小涵</span><span className="book-type fl hide">分类：豪门总裁</span><span class="fr">豪门总裁</span></a></li>
		               			<li pbflag="" className="on"><a pbtag="书名_6626331130_天价宠妻：总裁夫人休想逃" href="/book/6626331130/" target="_blank" className="top-detail"><img src="//yue07.sogoucdn.com/cdn/image/book/6626331130_1502875525554.jpg" /><i className="icon text-num num2">2</i><span className="text-ellips fl">天价宠妻：总裁夫人休想逃</span><span className="book-author fl hide">作者：白茶</span><span className="book-type fl hide">分类：豪门总裁</span><span className="fr">豪门总裁</span></a></li>
		               			<li pbflag="" className="on"><a pbtag="书名_3498581593_冥冥之中喜欢你" href="/book/3498581593/" target="_blank" className="top-detail"><img src="//yue06.sogoucdn.com/cdn/image/book/3498581593_1492619132764.jpg" /><i className="icon text-num num3">3</i><span className="text-ellips fl">冥冥之中喜欢你</span><span className="book-author fl hide">作者：姒城城</span><span className="book-type fl hide">分类：豪门总裁</span><span className="fr">豪门总裁</span></a></li>
		               		</ul>
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
			console.log(res)
			
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
    return {

    }
})(Info);