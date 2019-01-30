import React from 'react';
import VideoListItem from './video_list_item';
import UserIcon from '../main/user_icon';
import { Link } from 'react-router-dom';

class VideoList extends React.Component {
    render() {
        const { channel, videos, channelVids, author } = this.props;
        const videoList = channelVids ? channelVids.map((videoId, idx) => {
            return(
                <div key={idx} className="single-video">
                    <VideoListItem 
                    video={videos[videoId]}
                    author={author}
                    />
                </div>
            )
        }) : "";

        return (
            <>
                <div className="channel-detail">
                    <Link to={`/channel/${channel.id}`}><UserIcon currentUser={author} type="channel-and-nav-icon" /></Link>
                    <Link to={`/channel/${channel.id}`}><h1 className="channel-title">{channel.name}</h1></Link>
                </div>
                <ul className="channel-video-list">
                    {videoList}
                </ul>
            </>
        )
    }
}

export default VideoList;