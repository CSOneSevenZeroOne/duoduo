import React, {
	Component
} from 'react';
import { connect } from 'react-redux'

import store from "../../store/store.js"
// 库 框架
class Test extends Component {
	constructor(props) {
		super(props)
		this.state = {
			arr: ["a", "b", "c"]
		}
		console.log(this)
	}
	vFor(arr) {
		return arr.map((e, i) => {
			return <li key={i}>{e}</li>
		})
	}
	render() {
		 return (
		   <div className="App" >
		     <ul>
		       {this.vFor(this.state.arr)}
		     </ul>
		     <p>{this.props.state.num}</p>
		     <button onClick={this.props.onTest}>ok</button>
		   </div>
		 );
		// 虚拟DOM   内存
		// var el = {
		//   el:div,
		//   props:{
		//     className:"App"
		//   }
		// }
		/*return React.createElement('h1', {
			className: 'App'
		}, React.createElement('ul', null, this.vFor(this.state.arr)));*/
	}
	componentWillMount(){
		console.log(store);
		store.page = 2;
		store.plus = (a,b)=>{
			return a+b
		}
		console.log(store);
	}
}

export default connect((state) => {
	console.log(state)
	return {
		state
	}
}, (dispatch) => {
	return {
		onTest(){
			dispatch({
				type:"INCREMENT",
				skill:"ppppp"
			})
		}
	}
})(Test);
//export default Test;