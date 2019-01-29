import React from 'react';
import VideoPlayer from './video_player';
import UserIcon from '../main/user_icon';

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
                    <div className="video-detail-container">
                        <div className="video-detail-title">
                            <h1>{video.title}</h1>
                            <h2 className="views">999 views</h2>
                        </div>

                        <div className="video-detail-user">
                            <UserIcon type="uploader-icon" currentUser={owner} />
                            <div className="video-detail-detail">
                                <h1>{owner.username}</h1>
                                <h2>{video.description}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>
                        <h1>COMMENTS HERE</h1>

                        {/* fix comment css */}
                    </div>
                </div>
            </>
        )
    }
}

export default VideoShow;
//access show with Video.first.file.service_url as src 