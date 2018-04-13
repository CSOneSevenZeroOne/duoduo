import store from "../../store/store.js"
import { connect } from "react-redux"
import React, {
	Component
} from 'react';
// 库 框架
class Child extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: ["a", "b", "c"]
		}
	}
	render() {
		return(
			<div style={{
           border:'1px solid red',
           padding:'50px'
        }}>子组件
        	<p>{this.props.state.num}</p> 
        </div>
		)
	}
	//vue angular   单向数据绑定
	componentWillMount() {
		console.log(store);
	}
	componentWillReceiveProps() {}
	componentWillUnmount() {}
}

export default connect((state) => {
	console.log(state)
	return {
		state
	}
}, (dipatch) => {
	return {
		
	}
})(Child);