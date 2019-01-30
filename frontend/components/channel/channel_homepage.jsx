import React from 'react';
import VideoList from '../videos/video_list';

class ChannelHomepage extends React.Component {
    render() {
        const { videos, owner, channel } = this.props;
        return (
            <div className="channel-homepage-content">
                <div className="channel-videos-content">
                    <h1>{owner.username}</h1>
                    <VideoList
                        channel={channel}
                        videos={videos}
                        channelVids={channel.videoIds}
                        author={owner}
                    />
                </div>
            </div>
        );
    }
}

export default ChannelHomepage;