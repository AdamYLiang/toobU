import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

    render() {
        const { currentUser, logout } = this.props;
        
        const loginGreeting = () => (
            <div className='logged-in-header'>
                <h2>Welcome {currentUser.username}</h2>
                <button onClick={logout}>Log Out</button>
            </div>
        );

        const sessionForms = () => (
            <nav className='login-signup-nav'>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </nav>
        );

        return currentUser ? loginGreeting() : sessionForms();
    }
}



export default Greeting;