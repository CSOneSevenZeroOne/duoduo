import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Register from './components/register/register'
import { HashRouter, Route, Link } from "react-router-dom";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
//仓库
let store = createStore((state = {

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
				<Header/>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
				<Footer/>
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();