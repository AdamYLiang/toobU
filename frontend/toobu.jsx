import React from 'react';
import ReactDOM from 'react-dom';

//TEST FUNCTIONS
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    window.create = SessionAPIUtil.postUser;

    const rootEl = document.getElementById('root');
    ReactDOM.render( <h1>toobU</h1>, rootEl );
})