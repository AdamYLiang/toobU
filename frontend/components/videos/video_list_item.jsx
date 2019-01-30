import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../util/date_util'; 

class VideoListItem extends React.Component {
    
    render() {
        const { author } = this.props;
        const video = this.props.video || {};
        return (
            <>
                <Link to={`/videos/${video.id}`}>
                    <img src={video.thumbURL}/>
                    <div className="single-video-details">
                        <h2 className="single-video-details-title">{video.title}</h2>
                        <h2 className="single-video-details-details">{author.username}</h2>
                        <h2 className="single-video-details-details">{formatTimeAgo(video.createdAt)}</h2>
                    </div>
                </Link>
            </>
        )
    }
}

export default VideoListItem; 