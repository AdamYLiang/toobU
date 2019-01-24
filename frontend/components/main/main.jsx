import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import HomeContainer from '../home/home_container';
import ChannelContainer from '../channel/channel_container';
import { AuthRoute } from '../../util/route_util';

class Home extends React.Component {

    componentDidMount(){
        this.props.fetchChannels();
    }

    render() {
        return (
            <>
            <NavContainer />
            <div id="main-content">
                <Switch>
                    <Route path="/channel/:channelId" component={ChannelContainer}/>
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </div>
            </>
        )
    }
}



export default withRouter(Home);