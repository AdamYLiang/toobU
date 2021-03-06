import React from 'react';
import UserIcon from '../main/user_icon';
import { formatTimeAgo } from '../../util/date_util';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
    render() {
        const commentAuthor = this.props.author ? this.props.author : {};
        const author = this.props.author || {};
        const videoAuthor = this.props.videoAuthor || {};
        const userIcon = (commentAuthor.ownChannels && commentAuthor.ownChannels.length > 0) ? 
            <Link to={`/channel/${commentAuthor.ownChannels[0]}`}><UserIcon type="commenter-icon" currentUser={author} /></Link> :
            <UserIcon type="commenter-icon" currentUser={author} />;

        const authorName = (commentAuthor.ownChannels && commentAuthor.ownChannels.length > 0) ? 
            <Link to={`/channel/${commentAuthor.ownChannels[0]}`}>
            <h2
                className={author.id === videoAuthor.id ? "single-comment-video-author" : "single-comment-author"}>
                {author.username}
            </h2></Link> :
            <h2
                className={author.id === videoAuthor.id ? "single-comment-video-author" : "single-comment-author"}>
                {author.username}
            </h2>
        
        const authorDelete = this.props.currentUserId === this.props.author.id ? 
            <h2 
            className="comment-delete" 
            onClick = {() => this.props.deleteComment(this.props.comment.id)}>
                <i className="far fa-trash-alt"></i>
            </h2> : "" ;

        return (
            <div className="single-comment">
                {userIcon}
                <div className="single-comment-details">
                    <div className="single-comment-header">
                        {authorName}
                        <h2>{formatTimeAgo(this.props.comment.createdAt)}</h2>
                        {authorDelete}
                    </div>
                    <h2 className="single-comment-body">{this.props.comment.body}</h2>
                </div>
            </div>
        )
    }
}

export default Comment;


