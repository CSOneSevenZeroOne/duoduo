import "./sort.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import { Route,Link } from "react-router-dom";
// 库 框架
class Boy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'sort'}>
                <div className={'left'}>
                    <Link to="/">全部分类</Link>
                </div>
                <div className={'right'}>

                </div>
            </div>
        )
    }
}


export default connect((state) => {
    console.log(state);
    return {
        state
    }
}, (dipatch) => {
    return {

    }
})(Boy);