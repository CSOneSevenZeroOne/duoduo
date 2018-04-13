import store from "../../store/store.js"
import { connect } from "react-redux"
import React, {
	Component
} from 'react';

import { Route,Link } from "react-router-dom";
import {Pageone,Pagetwo} from "../page/page.jsx"
// 库 框架
class Brother extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: ["a", "b", "c"],
			num: 1
		}
	}
	testClick() {
		store.num = 5;
	}
	getInputValue(e) {
		this.setState({
			num: e.target.value
		})
	}
	render() {
		return(
			<div style={{
	           border:'1px solid blue',
	           padding:'50px'
	         }}>
			<p>兄弟组件</p>
			<input value={this.state.num} onChange={this.getInputValue.bind(this)} />
			<button onClick={this.props.testClick.bind(this)}>通信</button>
			<Link to="/brother/page1">page1</Link>
			<Link to="/brother/page2">page2</Link>
			<Route path="/brother/page1" component={Pageone} />
			<Route path="/brother/page2" component={Pagetwo} />
			</div>
		)
	}
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
		testClick() {
			console.log(this.state.num)
			dipatch({
				type: "ABC",
				num: this.state.num
			})
		}
	}
})(Brother);