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
        const ownerInitial = owner.username ? owner.username.slice(0, 1).toUpperCase() : "";
        return (
            <>
                <div className="channel-content">

                    <div className="channel-header">
                        <div className="channel-header-detail">
                            <button className="channel-icon">{ownerInitial}</button>
                            <h2>{owner.username}</h2>
                            <button className="customize-channel-button">Customize Channel</button>
                        </div>
                        <div className="channel-header-links">
                            <NavLink exact to={`/channel/${channelId}`}>HOME</NavLink>
                            <NavLink to={`/channel/${channelId}/videos`}>VIDEOS</NavLink>
                            <NavLink to={`/channel/${channelId}/about`}>ABOUT</NavLink>

                        </div>
                    </div>
                    

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