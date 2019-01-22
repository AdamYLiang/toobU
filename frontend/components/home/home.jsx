import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';

class Home extends React.Component {

    render() {
        return (
            <div id="homepage">
                <NavContainer />
            </div>
        )
    }
}



export default Home;