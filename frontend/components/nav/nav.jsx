import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Logo from './logo';

class Nav extends React.Component {

    render() {
        return (
            <nav className="top-nav-bar">
                <Logo />
                <input className="search-bar-input" type="text" placeholder="Search"/>
                <GreetingContainer />
            </nav>
        )
    }
}



export default Nav;