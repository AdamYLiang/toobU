import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import HomeContainer from '../home/home_container';
import ChannelContainer from '../channel/channel_container';
import CreateChannelContainer from '../channel/create_channel_container';
import EditChannelContainer from '../channel/edit_channel_container';
import { AuthRoute, CreateChannelRoute, EditChannelRoute } from '../../util/route_util';

class Main extends React.Component {

    componentDidMount(){
        // this.props.fetchChannels();
    }

    render() {
        return (
            <>
            <NavContainer />
            <div id="main-content">
                <Switch>
                    <CreateChannelRoute path="/create_channel" component={CreateChannelContainer} />
                    <EditChannelRoute path="/channel/:channelId/edit" component={EditChannelContainer} />
                    <Route path="/channel/:channelId" component={ChannelContainer}/>
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </div>
            </>
        )
    }
}

export default withRouter(Main);