import React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import HomeContainer from '../home/home_container';
import ChannelContainer from '../channel/channel_container';
import CreateChannelContainer from '../channel/create_channel_container';
import EditChannelContainer from '../channel/edit_channel_container';
import VideoUploadContainer from '../videos/video_upload_container';
import VideoShowContainer from '../videos/video_show_container';
import SearchResultsContainer from '../search/search_results_container';
import { CreateChannelRoute, EditChannelRoute, ChannelExistsRoute } from '../../util/route_util';

class Main extends React.Component {

    render() {
        return (
            <>
            <NavContainer />
            <div id="main-content">
                <Switch>
                    <CreateChannelRoute path="/create_channel" component={CreateChannelContainer} />
                    <EditChannelRoute path="/channel/:channelId/edit" component={EditChannelContainer} />
                    <ChannelExistsRoute path="/upload" component={VideoUploadContainer} />
                    <Route path="/videos/:videoId" component={VideoShowContainer} />
                    <Route path="/channel/:channelId" component={ChannelContainer}/>
                    <Route path="/results" component={SearchResultsContainer}/>
                    <Route path="/" component={HomeContainer} />
                </Switch>
            </div>
            </>
        )
    }
}

export default withRouter(Main);