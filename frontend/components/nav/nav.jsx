import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Logo from './logo';

class Nav extends React.Component {

    render() {
        return (
            <nav className="top-nav-bar">
                <Link to="/"><Logo /></Link>
                <form>
                    <input className="search-bar-input" type="text" placeholder="Search"/>
                    <button className="search-bar-icon"><i className="fas fa-search"></i></button>
                </form>
                <GreetingContainer />
            </nav>
        )
    }
}



export default Nav;