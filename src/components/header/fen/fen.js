import "./fen.css"
import {connect} from "react-redux"
import React, {
    Component
} from 'react';

import {Link} from "react-router-dom";

class Fenye extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ["玄幻", "奇幻", "都市", "现代言情", "仙侠", "武侠", "言情", "穿越重生", "灵异", "悬疑", "游戏", "青春校园", "军事", "职场", "恐怖", "豪门总裁", "历史", "玄幻言情", "古代言情"]
        }
    }

    render() {
        return (
                    <div className="fen" style={(()=>{
                        if (this.props.state.booll) {
                            return {display:'block'}
                        }else {
                            return {display:'none'}
                        }
                    })()}>
                        <div className="fenlei-l-t">
                            {((arr) => {
                                return arr.map((e, i) => {
                                    return <Link to="/nansheng" key={i} onClick={this.props.sort.bind(this,e)}>{e}</Link>
                                })
                            })(this.state.arr)}
                        </div>
                        <div className="fenlei-l-b">
                            <Link to="/sort">同人小说</Link>
                            <Link to="/sort" className="aa">全部分类 ></Link>
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