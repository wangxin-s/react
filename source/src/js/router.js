import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Router} from 'react-router-dom';

import Bundle from './components/bundle';
import Index from './containers/index'

import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import Dialog from './containers/public/dialog';
require('../css/public/base.scss');
require('../css/public/dialog.scss');
import reducer from './reducers/index';
require('./untils/ajax');
require('../css/style.scss');

import {newList,Video} from './routers/indexRouter'

//redux 传入中间件
const store = createStore(reducer, compose(
    applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
//路由生成规则, 与 redux 结合.
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <BrowserRouter>
                <Index>
                    <Route path='/newList' component={newList}/>
                    <Route path='/Video' component={Video}/>
                    <Route path='/List' component={
                        (props) => (
                            <Bundle load={() => import('./containers/list')}>
                                {(List) => <List {...props} />}
                            </Bundle>
                        )
                    }/>
                    <Route path='/Three' component={
                        (props) => (
                            <Bundle load={() => import('./containers/three')}>
                                {(Index) => <Index {...props} />}
                            </Bundle>
                        )
                    }/>
                </Index>
            </BrowserRouter>
        </Router>
    </Provider>,
    document.getElementById('app')
);