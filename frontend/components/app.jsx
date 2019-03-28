import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import MainContainer from './main/main_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';

const App = () => (
    <div id="MainApp">
        <Switch>
            <AuthRoute exact path="/login/" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup/" component={SignupFormContainer}/>
            <Route path="/" component={MainContainer}/>
        </Switch>
        <footer>
            <a href="https://github.com/AdamYLiang"><i className="fab fa-github fa-2x "></i></a>
            <a href="https://www.linkedin.com/in/adamyliang/"><i className="fab fa-linkedin fa-2x"></i></a>
        </footer>
    </div>
);

export default App;