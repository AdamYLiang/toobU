
import { postSession, postUser, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_BLANK_ERRORS = 'RECEIVE_BLANK_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user,
    };
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const blankErrors = () => ({
    type: RECEIVE_BLANK_ERRORS,
});

export const signup = (formUser) => dispatch => {
    dispatch(blankErrors()); 
    
    return (
        postUser(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)), 
            err => dispatch(receiveErrors(err.responseJSON))
        )
    );
};

export const login = (formUser) => dispatch => {
    dispatch(blankErrors());

    return (
        postSession(formUser)
        .then(
            user => dispatch(receiveCurrentUser(user)), 
            err => dispatch(receiveErrors(err.responseJSON))
        )
    );
};

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));