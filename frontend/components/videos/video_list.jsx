import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {
    render() {
        const { title, videos, channelVids, author } = this.props;
        const videoList = channelVids.map((videoId, idx) => {
            return(
                <div key={idx}>
                    <VideoListItem 
                    video={videos[videoId]}
                    author={author}
                    />
                </div>
            )
        });
        return (
            <>
                <h1>{title}</h1>
                <ul>
                    {videoList}
                </ul>
            </>
        )
    }
}

export default VideoList;