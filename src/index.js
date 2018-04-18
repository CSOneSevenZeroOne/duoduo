import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Home from "./home";
import {HashRouter, Route} from "react-router-dom";
import Content from "./components/conent/conent"


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
});
ReactDOM.render(

	<HashRouter>
		<Provider store={store}>
			<div>
                <Route path="/index" component={Home} />
                <Route path="/section" component={Home} />
                <Route path="/content" component={Content} />
			</div>
		</Provider>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();