import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SearchContainer from '../search/search_container';
import Logo from './logo';

class Nav extends React.Component {
    
    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <nav className="top-nav-bar">
                <Link to="/"><Logo /></Link>
                <SearchContainer />
                <GreetingContainer />
            </nav>
        )
    }
}



export default Nav;