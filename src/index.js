import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Header from './components/header/header'
import Home from './components/home/home';
import Sort from './components/sort/sort';
import Info from './components/info/info';
import Section from './components/section/section';
import Footer from './components/footer/footer';
import {HashRouter, Route} from "react-router-dom";
import Register from './components/register/register'


import {createStore} from 'redux'
import {Provider} from 'react-redux'
//仓库
let store = createStore((state = {
    sort:"",
    book_id:0,
    section:0,
    status:"",
    price:""
}, action) =>{
    switch(action.type){
        case 'SORTS':
            return Object.assign({}, state, {sort : action.sort,status : "",price : ""});
        case 'WANBEN':
            return Object.assign({}, state, {sort : "",status : action.wanben,price : ""});
        case 'MIANFEI':
            return Object.assign({}, state, {sort : "",status : "",price : action.mianfei});
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
                <Route path='/nansheng' component={Sort}/>
                <Route path='/nvsheng' component={Sort}/>
                <Route path='/wanben' component={Sort}/>
                <Route path='/mianfei' component={Sort}/>
                <Route path='/info' component={Info}/>
                <Route path='/section' component={Section}/>
                <Route exact path="/register" component={Register} />
				<Footer/>
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();