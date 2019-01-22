import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container.jsx';
// import { AuthRoute } from '../util/route_util';

const App = () => (
    <div id="MainApp">
        <header>
            <h1>toobU</h1>
            <GreetingContainer />
        </header>
    </div>
);

export default App;