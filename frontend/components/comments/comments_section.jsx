import React from 'react';
import CommentFormContainer from './comment_form_container';
import Comment from './comment';

class CommentsSection extends React.Component {
    render() {
        const commentIds = this.props.video.commentIds || [];
        const comments = commentIds.length > 0 ? 
        this.props.video.commentIds.map((commentId, idx) => {
            return(
                <div key={idx}>
                    <Comment
                    key={idx}
                    currentUser={this.props.currentUser}
                    comment={this.props.comments[commentId]}
                    />
                </div>
            )
        }) : "";
        debugger
        return(
            <div className="comments-section-container">
                <CommentFormContainer videoId={this.props.video.id}/>
                <div className="comments">
                    { comments }
                </div>
            </div>
        )
    }
}

export default CommentsSection;