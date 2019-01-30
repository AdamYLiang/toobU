import React from 'react';
import VideoList from './video_list';
import { Link } from 'react-router-dom';
import UserIcon from '../main/user_icon';

class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const { videos, users, channels } = this.props;
        const channelIndex = channels.length > 5 ? channels.slice(0, 5) : channels; 
        const indexContent = channelIndex.length > 0 ? 
                            channelIndex.map((channel, idx) => {
                                return (
                                <div key={idx} className="single-channel-list">
                                    <div className="channel-detail">
                                        <Link 
                                        to={`/channel/${channel.id}`}>
                                            <UserIcon currentUser={users[channel.userId]} type="channel-and-nav-icon" />
                                        </Link>
                                        <Link 
                                        to={`/channel/${channel.id}`}>
                                            <h1 className="channel-title">{channel.name}</h1>
                                        </Link>
                                    </div>
                                    <VideoList 
                                    videos={videos} 
                                    channelVids={channel.videoIds} 
                                    author={users[channel.userId]}
                                    key={idx}/>
                                </div>)
                            }) : ""; 
        return(
            <>
                <ul className="channel-index-list">
                    {indexContent}
                </ul>
            </>
        )
    }
}

export default VideoIndex;