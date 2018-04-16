import "./home.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import Fenye from './fenye/fenlei'
import Tuijian from './tuijian/tuijian'
import Free from './free/free'
import Man from './man/man'
import Woman from './woman/woman'
import Wanben from './wanben/wanben'
import Fenlei from './fenlei/fenlei'
import Guding from  './guding/guding'
import Update from  './update/update'
import { Route,Link } from "react-router-dom";
// 库 框架
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
           <div id="all">
               <div className="content">
                    <Fenye/>
                   <Tuijian/>
                   <Free/>
                   <Man/>
                   <Woman/>
                   <Wanben/>
                   <Fenlei/>
                   <Update/>
                   <Guding/>
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