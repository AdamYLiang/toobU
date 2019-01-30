import React from 'react';
import Homepage from './channel_homepage';
import VideosPage from './channel_videos';
import AboutPage from './channel_about';
import { NavLink, Route, withRouter, Switch, Link } from 'react-router-dom';

class Channel extends React.Component {

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
    }
    
    componentDidUpdate(oldProps) {
        if(oldProps.match.params.channelId != this.props.channelId) {
            this.props.fetchChannel(this.props.channelId);
        }
    }

    render () {
        const { owner, channel, currentUser, channelId } = this.props;
        const ownerInitial = owner.username ? owner.username.slice(0, 1).toUpperCase() : "";
        const customizeButton = owner.id === currentUser.id ? 
                                <Link className="customize-channel-button" to={`/channel/${channelId}/edit`}>CUSTOMIZE CHANNEL</Link>
                                : <></>;
        return (
            <>
                <div className="channel-content">

                    <div className="channel-header">
                        <div className="channel-header-detail">
                            <button className="channel-icon">{ownerInitial}</button>
                            <h2>{owner.username}</h2>
                            {customizeButton}
                        </div>
                        <div className="channel-header-links">
                            <NavLink exact to={`/channel/${channelId}`} activeClassName="selected">HOME</NavLink>
                            <NavLink to={`/channel/${channelId}/videos`} activeClassName="selected">VIDEOS</NavLink>
                            <NavLink to={`/channel/${channelId}/about`} activeClassName="selected">ABOUT</NavLink>

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