import React from 'react';
import VideoListItem from './video_list_item';

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