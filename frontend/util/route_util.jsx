import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return ({
        loggedIn: Boolean(state.session.currentUser),
        users: state.entities.users,
        channels: state.entities.channels,
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

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
);

const CreateChannel = ({ loggedIn, users, currentUser, path, component: Component}) => {
    return (
        <Route
            path={path}
            render={props => {
                if(loggedIn) {
                    const user = users[currentUser.id].ownChannels || [];
                    if(user.length !== 0){
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

const EditChannel = ({ loggedIn, users, channels, currentUser, path, location, component: Component}) => {
    return (
        <Route
            path={path}
            render={props => {
                if(loggedIn) {
                    const user = users[currentUser.id] || {};
                    const ownChannel = user.ownChannels || [];
                    if( ownChannel.length === 0){
                        return <Redirect to={`/create_channel`} />
                    }
                    else if(location.pathname === `/channel/${ownChannel[0]}/edit`){
                        return <Component {...props} />
                    } else {
                        return <Redirect to={`/channel/${ownChannel[0]}`} />
                    }
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const CreateChannelRoute = withRouter(connect(mapStateToProps)(CreateChannel));
export const EditChannelRoute = withRouter(connect(mapStateToProps)(EditChannel))