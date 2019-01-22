import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        loggedIn: Boolean(state.session.currentUser),
    });
};

const Auth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route
            path={path}
            render={props => (
                loggedIn ? <Redirect to="/" /> : <Component {...props} />
            )}
        />
    );
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));