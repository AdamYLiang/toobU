import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container.jsx';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => (
    <div id="MainApp">
        <header>
            <h1>toobU</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>
    </div>
);

export default App;