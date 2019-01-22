import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, blankErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        user: { username: "", password: "" },
        errors: state.errors.session,
        formType: 'login',
        otherLink: <Link to="/signup">Create Account</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(blankErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);