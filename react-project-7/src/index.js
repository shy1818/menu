import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '@lib'
import { Provider } from 'murlin-connect'
import App from '@/App';
import * as serviceWorker from '@/serviceWorker';
import store from './store'
import MainContainer from '@pages/main/MainContainer'
import ListContainer from '@pages/list/ListContainer'
import DetailContainer from '@pages/detail/DetailContainer'
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path = "/list" component = {ListContainer}  />
                    <Route path = "/detail" component = {DetailContainer}  />
                    <Route path = "/" component = {MainContainer}  />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();

