import React from 'react';
import ChannelTabs from './channel_tabs_container';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';

class Channel extends React.Component {

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId)
            .then((promise) => this.props.fetchUser(promise.channel.userId));
    }
    
    componentDidUpdate(oldProps) {
        if(oldProps.match.params.channelId != this.props.channelId) {
            this.props.fetchChannel(this.props.channelId)
                .then((promise) => this.props.fetchUser(promise.channel.userId));
        }
    }

    render () {
        const { owner, channel, channelId } = this.props;
        return (
            <>
                <div className="channel-content">
                    <NavLink to={`/channel/${channelId}`}>HOME</NavLink>
                    <NavLink to={`/channel/${channelId}/videos`}>VIDEOS</NavLink>
                    <NavLink to={`/channel/${channelId}/about`}>ABOUT</NavLink>

                    <Switch> 
                        <Route exact path="/channel/:channelId/videos" component={ChannelTabs} />
                        <Route exact path="/channel/:channelId/about" component={ChannelTabs} />
                        <Route exact path="/channel/:channelId" component={ChannelTabs} />
                    </Switch>
                </div>
            </>
        )
    }
}

export default withRouter(Channel);