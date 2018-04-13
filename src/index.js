import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test/test.jsx';
import Lifecycle from './components/lifecycle/lifecycle.jsx';
import registerServiceWorker from './registerServiceWorker';
import Child from './components/child/child.jsx';
import Brother from './components/brother/brother.jsx';

import { HashRouter, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
//仓库
let store = createStore((state = {
	num:1,
	skill:"ps"
}, action) => {
	switch(action.type) {
		case 'ABC':
			return Object.assign({}, state, {num: action.num});
		case 'DECREMENT':
			return state
		default:
			return state
	}
})
ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<div>
				{/*<Test name="abc" />
				<Lifecycle />*/}
				<Link to="/brother">brother</Link>
				<Link to="/child">child</Link>
				<Route exact path="/" component={Brother} />
				<Route path="/brother" component={Brother} />
				<Route path="/child" component={Child} />
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();