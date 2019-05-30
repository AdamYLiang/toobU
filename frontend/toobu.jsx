import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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
    const rootEl = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, rootEl );
})