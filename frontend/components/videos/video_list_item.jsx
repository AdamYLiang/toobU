import React from 'react';
import { Link } from 'react-router-dom';

class VideoListItem extends React.Component {
    
    render() {
        const { video, author } = this.props;
        return (
            <>
                <Link to={`/videos/${video.id}`}>
                    <img src={video.thumbURL}/>
                    {video.title}
                    {author.username}
                </Link>
            </>
        )
    }
}

export default VideoListItem; 