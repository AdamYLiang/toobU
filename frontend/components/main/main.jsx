import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import HomeContainer from '../home/home_container';

class Home extends React.Component {

    render() {
        return (
            <>
            <NavContainer />
            <div id="main-content">
                <Switch>
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </div>
            </>
        )
    }
}



export default Home;