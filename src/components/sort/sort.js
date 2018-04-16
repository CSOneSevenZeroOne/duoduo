import "./sort.css"
import {connect} from "react-redux"
import $ from "jquery"
import React, {
    Component
} from 'react';

import {Route, Link} from "react-router-dom";

// 库 框架
class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            status : false,
            status1:"",
            bookPrice:"",
            list : [],
            count : 0,
            index : 0,
            num1:0,
            num2:10000,
            nanSheng : ['玄幻', '都市', '仙侠', '游戏', '悬疑', '历史', '军事', '灵异', '言情', '奇幻', '武侠', '科幻', '职场', '恐怖', '体育', '二次元', '短篇', '其他'],
            nvSheng : ['现代言情', '穿越重生', '豪门总裁', '仙侠奇缘', '古代言情', '青春校园', '同人小说', '耽美小说', '玄幻言情', '悬疑灵异', '科幻空间', '游戏竞技'],
            hot : ['医生', '都市', '种田', '特种兵', '爽文', '美女', '热血', '激情', '搞笑', '装逼', '神魔', '养成', '猥琐', '宅男', '后宫', '才女', '背叛', '冷酷', '权谋', '复仇', '灵异', '异国情缘', '生存奇遇', '江湖恩怨']
        }
    }

    componentDidMount(){
        var self = this;
        this.setState({
            status : false,
        })
        $.ajax({
            url : "http://localhost:55555/home/sort",
            type : "get",
            dataType : "json",
            data : {
                sort : this.props.state.sort,
                index : this.state.index,
                status:this.state.status1,
                bookPrice:this.state.bookPrice,
                num1:this.state.num1,
                num2:this.state.num2
            }
        }).then(function(res){
            console.log(res);
            self.setState({
                status : true,
                list : res.list,
                count : res.count[0]['count(*)']
            })

        })
    }

    fanye(num){
        console.log(this.state.index,num);
        $('html,body').animate({scrollTop:160},100);
        var self=this;
        this.setState({
            index : num,
            status:false
        });
        $.ajax({
            url : "http://localhost:55555/home/sort",
            type : "get",
            dataType : "json",
            data : {
                sort : this.props.state.sort,
                index : num,
                status:this.state.status1,
                bookPrice:this.state.bookPrice,
                num1:this.state.num1,
                num2:this.state.num2
            }
        }).then(function(res){
            console.log(res);
            self.setState({
                status : true,
                list : res.list,
                count : res.count[0]['count(*)']
            })

        })
    }
    searchByWords(num1,num2){
        this.setState({
            index : 0,
            status:false,
            num1:num1,
            num2:num2
        })
        var self=this
        $.ajax({
            url : "http://localhost:55555/home/sort",
            type : "get",
            dataType : "json",
            data : {
                sort : this.props.state.sort,
                index : this.state.index,
                status:this.state.status1,
                bookPrice:this.state.bookPrice,
                num1:num1,
                num2:num2
            }
        }).then(function(res){
            console.log(res);
            self.setState({
                status : true,
                list : res.list,
                count : res.count[0]['count(*)']
            })

        })
    }

    searchByPrice(str){
        this.setState({
            index : 0,
            status:false,
            bookPrice:str
        })
        var self=this
        $.ajax({
            url : "http://localhost:55555/home/sort",
            type : "get",
            dataType : "json",
            data : {
                sort : this.props.state.sort,
                index : this.state.index,
                status:this.state.status1,
                bookPrice:str,
                num1:this.state.num1,
                num2:this.state.num2
            }
        }).then(function(res){
            console.log(res);
            self.setState({
                status : true,
                list : res.list,
                count : res.count[0]['count(*)']
            })

        })
    }

    searchByStatus(str){
        this.setState({
            index : 0,
            status:false,
            status1:str
        })
        var self=this
        $.ajax({
            url : "http://localhost:55555/home/sort",
            type : "get",
            dataType : "json",
            data : {
                sort : this.props.state.sort,
                index : this.state.index,
                status:str,
                bookPrice:this.state.bookPrice,
                num1:this.state.num1,
                num2:this.state.num2
            }
        }).then(function(res){
            console.log(res);
            self.setState({
                status : true,
                list : res.list,
                count : res.count[0]['count(*)']
            })

        })

    }


    render(){
        return (
            <div className={'sort'}>
                <div className="main">
                    <div className={'left'}>
                        <h2 onClick={this.props.sorts.bind(this, "")}>全部分类</h2>
                        <h3 onClick={this.props.sorts.bind(this, "男生分类")}>男生分类</h3>
                        <ul>
                            {((arr) =>{
                                return arr.map((e, i) =>{
                                    return <li key={i} onClick={this.props.sorts.bind(this, e)}>{e}</li>
                                })
                            })(this.state.nanSheng)}
                        </ul>
                        <h3 onClick={this.props.sorts.bind(this, "女生分类")}>女生分类</h3>
                        <ul>
                            {((arr) =>{
                                return arr.map((e, i) =>{
                                    return <li key={i} onClick={this.props.sorts.bind(this, e)}>{e}</li>
                                })
                            })(this.state.nvSheng)}
                        </ul>
                        <h2>热门标签</h2>
                        <ul>
                            {((arr) =>{
                                return arr.map((e, i) =>{
                                    return <li key={i} onClick={this.props.sorts.bind(this, e)}>{e}</li>
                                })
                            })(this.state.hot)}
                        </ul>
                        <h2>限时免费</h2>
                    </div>
                    <div className={'right'}>
                        <div>
                            {(function(sort){
                                if(sort === ''){
                                    return;
                                } else {
                                    return <p>已选：<span className={'tag'}>{sort}<i>x</i></span></p>

                                }
                            })(this.props.state.sort)}
                            <div>
                                <ul className={"search"}>
                                    <li>
                                        <span>按字数：</span>
                                        <i className={(this.state.num1===0&&this.state.num2==10000)?"active":""} onClick={this.searchByWords.bind(this,0,10000)}>全部</i>
                                        <i onClick={this.searchByWords.bind(this,0,10)} className={this.state.num2===10?"active":""}>10万字以下</i>
                                        <i onClick={this.searchByWords.bind(this,10,50)} className={this.state.num2===50?"active":""}>10-50万字</i>
                                        <i onClick={this.searchByWords.bind(this,50,100)} className={this.state.num2===100?"active":""}>50-100万字</i>
                                        <i onClick={this.searchByWords.bind(this,100,10000)} className={this.state.num1===100?"active":""}>100万字以上</i>
                                    </li>
                                    <li>
                                        <span>按状态：</span>
                                        <i className={this.state.status1===""?'active':''} onClick={this.searchByStatus.bind(this,"")}>全部</i>
                                        <i onClick={this.searchByStatus.bind(this,"连载中")} className={this.state.status1==="连载中"?"active":""}>连载</i>
                                        <i onClick={this.searchByStatus.bind(this,"完本")} className={this.state.status1==="完本"?"active":""}>完结</i>
                                    </li>
                                    <li>
                                        <span>按收费：</span>
                                        <i className={this.state.bookPrice===""?'active':""} onClick={this.searchByPrice.bind(this,"")}>全部</i>
                                        <i onClick={this.searchByPrice.bind(this,"免费")} className={this.state.bookPrice==="免费"?"active":""}>免费</i>
                                        <i onClick={this.searchByPrice.bind(this,"付费")} className={this.state.bookPrice==="付费"?"active":""}>付费</i>
                                        <i onClick={this.searchByPrice.bind(this,"包月")} className={this.state.bookPrice==="包月"?"active":""}>包月</i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="list">
                            {((flag) =>{
                                if(flag){
                                    return <div>
                                        <p className={"range"}><span className={"active"}>热度排序 </span><span>更新时间</span>
                                        </p>
                                        <ul>
                                            {((arr) =>{
                                                return arr.map((e, i) =>{
                                                    return <li key={i}>
                                                        <img src={e.img} alt=""/>
                                                        <div className="right">
                                                            <h4>{e.title}</h4>
                                                            <p className='author'>{e.author}</p>
                                                            <p><span>更新章节：</span><span></span></p>
                                                            <p style={{
                                                                'overflow' : 'hidden',
                                                                'textOverflow' : 'ellipsis',
                                                                'display' : '-webkit-box',
                                                                'WebkitLineClamp' : '3',
                                                                'WebkitBoxOrient' : 'vertical'
                                                            }} className="msg">{e.msg}</p>
                                                            <p>
                                                                <span className='read'>立即阅读</span>
                                                                <span className='menu'>查看目录</span>
                                                            </p>
                                                        </div>
                                                    </li>
                                                })
                                            })(this.state.list)}
                                        </ul>
                                        <div className="count">
                                            <span onClick={this.fanye.bind(this,0)} className={this.state.index===0?"active":''}>1</span>
                                            {(function(num){
                                                if(num>=3){
                                                    return <i>...</i>
                                                }
                                            })(this.state.index)}
                                            {((num) =>{
                                                var arr = [];
                                                for(var i = 1; i < Math.ceil(num / 12)-1; i++){
                                                    arr.push(<span key={i} data-info={i} style={{
                                                        'display' : (Math.abs(this.state.index - i)<2)? "inline-block" : "none"
                                                    }} className={this.state.index === i ? 'active' : ''} onClick={this.fanye.bind(this, i)}>{i + 1}</span>)
                                                }
                                                return arr
                                            })(this.state.count)}
                                            {((num)=>{
                                                if(num<= Math.ceil(this.state.count/12)-3){
                                                    return <i>...</i>
                                                }
                                            })(this.state.index)}
                                            {(()=>{
                                                if(Math.ceil(this.state.count / 12)>1){
                                                  return  <span onClick={this.fanye.bind(this, Math.ceil(this.state.count / 12)-1)} className={this.state.index===Math.ceil(this.state.count / 12)-1?"active":''}>{Math.ceil(this.state.count / 12)}</span>
                                                }
                                            })()}
                                        </div>
                                    </div>

                                } else {
                                    return <p className='loading'>正在加载中，请稍后...</p>
                                }
                            })(this.state.status)}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default connect((state) =>{
    // console.log(Sort.state.index);
    return {
        state
    }
}, (dispatch) =>{
    return {
        sorts(str){
            var self=this;
            this.setState({
                status : false,
            });
            $.ajax({
                url : "http://localhost:55555/home/sort",
                type : "get",
                dataType : "json",
                data : {
                    sort : str,
                    index : this.state.index,
                    status:this.state.status1,
                    bookPrice:this.state.bookPrice,
                    num1:this.state.num1,
                    num2:this.state.num2
                }
            }).then(function(res){
                console.log(res);
                self.setState({
                    status : true,
                    list : res.list,
                    count : res.count[0]['count(*)'],
                    index:0
                })

            });
            dispatch({
                type : "SORTS",
                sort : str
            })
        }
    }
})(Sort);