import React from 'react';
import VideoList from './video_list';

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
                                    <VideoList 
                                    channel={channel} 
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