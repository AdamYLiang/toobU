import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return ({
        loggedIn: Boolean(state.session.currentUser),
        users: state.entities.users,
        currentUser: state.session.currentUser,
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

const CreateChannel = ({ loggedIn, users, currentUser, path, component: Component}) => {
    return (
        <Route
            path={path}
            render={props => {
                if(loggedIn) {
                    if(users[currentUser.id].ownChannels.length !== 0){
                        return <Redirect to={`/channel/${users[currentUser.id].ownChannels[0]}`} />
                    } else {
                        return <Component {...props} />
                    }
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const CreateChannelRoute = withRouter(connect(mapStateToProps)(CreateChannel));