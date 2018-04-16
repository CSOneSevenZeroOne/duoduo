import "./home.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import { Route,Link } from "react-router-dom";
// 库 框架
class Brother extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
           <div id="all">

           </div>
        )
    }
}

export default connect((state) => {
    console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {

    }
})(Brother);