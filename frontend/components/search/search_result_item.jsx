import React from 'react';
import { Link } from 'react-router-dom';
import { formatTimeAgo } from '../../util/date_util'; 

class SearchResultItem extends React.Component {

    render() {
        const { video, author } = this.props;
        return(
            <>
                <img src={video.thumbURL} />
                <h1>{video.title}</h1>
                <h1>{video.description}</h1>
                <h1>{author.username}</h1>
            </>
        )
    }
}

export default SearchResultItem;