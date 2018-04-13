import React, {
	Component
} from 'react';
// 库 框架
class Pageone extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	render() {
		return(
			<div style={{
	           border:'1px solid blue',
	           padding:'50px'
	         }}>
			<p>page1组件</p>
			</div>
		)
	}
}

class Pagetwo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
	}
	render() {
		return(
			<div style={{
	           border:'1px solid blue',
	           padding:'50px'
	         }}>
			<p>page2组件</p>
			</div>
		)
	}
}

export {
	Pageone,
	Pagetwo
};