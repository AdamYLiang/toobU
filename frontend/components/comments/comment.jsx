import React from 'react';
import UserIcon from '../main/user_icon';
import { formatTimeAgo } from '../../util/date_util';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    render() {
        const { author, comment, videoAuthor } = this.props;
        const userIcon = author.ownChannels.length > 0 ? 
            <Link to={`/channel/${author.ownChannels[0]}`}><UserIcon type="commenter-icon" currentUser={author} /></Link> :
            <UserIcon type="commenter-icon" currentUser={author} />;
        const authorName = author.ownChannels.length > 0 ? 
            <Link to={`/channel/${author.ownChannels[0]}`}>
            <h2
                className={author.id === videoAuthor.id ? "single-comment-video-author" : "single-comment-author"}>
                {author.username}
            </h2></Link> :
            <h2
                className={author.id === videoAuthor.id ? "single-comment-video-author" : "single-comment-author"}>
                {author.username}
            </h2>
        return (
            <div className="single-comment">
                {userIcon}
                <div className="single-comment-details">
                    <div className="single-comment-header">
                        {authorName}
                    </div>
                    <h2 className="single-comment-body">{this.props.comment.body}</h2>
                </div>
            </div>
        )
    }
}

export default Comment;
