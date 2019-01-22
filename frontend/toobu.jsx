import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TEST FUNCTIONS
import * as SessionAPIUtil from './util/session_api_util';
import { login } from './actions/session_actions';
//END TEST

document.addEventListener('DOMContentLoaded', () => {

    let store;
    let preloadedState = {};
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: { id: window.currentUser.id }
            },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        delete window.currentUser;
        store = configureStore(preloadedState);
    }
    else {
        store = configureStore();
    }


    //TEST FUNCTIONS
    window.create = SessionAPIUtil.postUser;
    window.login = login;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //END TEST

    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl );
})