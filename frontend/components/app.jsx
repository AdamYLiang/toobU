import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div id="MainApp">
        <Switch>
        <AuthRoute exact path="/login/" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup/" component={SignupFormContainer}/>
        <Route path="/" component={HomeContainer}/>
        </Switch>
    </div>
);

export default App;