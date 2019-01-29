import React from 'react';
import VideoPlayer from './video_player';

class VideoShow extends React.Component {

    componentDidMount() {
        this.props.fetchVideo(this.props.videoId);
    }

    render () {
        const { owner, channel, currentUser, video, videoId } = this.props;
        return (
            <>
                <div className="video-show-column">
                    <VideoPlayer src={video.videoURL} />
                    <h1>THIS IS THE AMAZING VIDEO</h1>
                </div>
            </>
        )
    }
}

export default VideoShow;
//access show with Video.first.file.service_url as src 