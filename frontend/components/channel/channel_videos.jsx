import React from 'react';
import VideoList from '../videos/video_list';

class ChannelVideos extends React.Component {
    render() {
        const { videos, owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                <VideoList 
                channel={channel}
                videos={videos}
                channelVids={channel.videoIds}
                author={owner}
                />
            </div>
        );
    }
}

export default ChannelVideos;