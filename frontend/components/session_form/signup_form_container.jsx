import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, blankErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        user: { username: "", email: "", password: ""},
        errors: errors.session,
        formType: 'signup',
        otherLink: <Link to="/login">Sign In Instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(blankErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);