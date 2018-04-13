import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';


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
				<Link to="/brother">brother</Link>
				<Link to="/child">child</Link>
				<Route exact path="/" component={ } />
				<Route path="/brother" component={} />
				<Route path="/child" component={} />
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();