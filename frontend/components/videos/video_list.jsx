import React from 'react';
import VideoListItem from './video_list_item';
import UserIcon from '../main/user_icon';
import { Link } from 'react-router-dom';

class VideoList extends React.Component {
    render() {
        const { videos, channelVids, author } = this.props;
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
                <ul className="channel-video-list">
                    {videoList}
                </ul>
            </>
        )
    }
}

export default VideoList;