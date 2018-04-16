import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Header from './components/header/header'
import Home from './components/home/home';
import Sort from './components/sort/sort';
import Footer from './components/footer/footer';
import {HashRouter, Route} from "react-router-dom";
import Register from './components/register/register'


import {createStore} from 'redux'
import {Provider} from 'react-redux'
//仓库
let store = createStore((state = {
    sort:""
}, action) =>{
    switch(action.type){
        case 'SORTS':
            return Object.assign({}, state, {sort : action.sort});
        case 'WANBEN':
            return Object.assign({}, state, {sort : action.waneben});
        case 'MIANFEI':
            return Object.assign({}, state, {sort : action.mianfei});
        case 'BOOl':
            return Object.assign({}, state, {bool : action.bool});
        case 'BOOll':
            return Object.assign({}, state, {booll : action.booll});
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
                <Route path='/sort' component={Sort}/>
                <Route exact path="/register" component={Register} />
				<Footer/>
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();