import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from './login_container';
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
                <LoginContainer />
            </nav>
        )
    }
}



export default Nav;