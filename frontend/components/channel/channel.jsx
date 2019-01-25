import React from 'react';
import ChannelTab from './channel_tabs';
import Homepage from './channel_homepage';
import VideosPage from './channel_videos';
import AboutPage from './channel_about';
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
                        <Route 
                        exact path="/channel/:channelId/videos" 
                        render={() => <VideosPage {...this.props}/>} 
                        />
                        <Route 
                        exact path="/channel/:channelId/about" 
                        render={() => <AboutPage {...this.props}/>} 
                        />
                        <Route 
                        exact path="/channel/:channelId/" 
                        render={() => <Homepage {...this.props}/>} 
                        />
                    </Switch>
                </div>
            </>
        )
    }
}

export default withRouter(Channel);