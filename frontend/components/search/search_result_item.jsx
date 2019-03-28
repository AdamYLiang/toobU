import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../util/date_util'; 

class SearchResultItem extends React.Component {

    render() {
        const { video, author } = this.props;
        return(
            <>
                <Link to={`/videos/${video.id}`}>
                    <img src={video.thumbURL} />
                </Link>
                <div className="single-result-details">
                    <Link to={`/videos/${video.id}`}>
                        <h1 className="single-result-title">{video.title}</h1>
                    </Link>
                    <div className="single-result-details-author-date-info">
                        <h1>{author.username}</h1>
                        <h1>{formatTimeAgo(video.createdAt)}</h1>
                    </div>
                    <h1>{video.description}</h1>
                </div>
            </>
        )
    }
}

export default SearchResultItem;