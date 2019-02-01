import React from 'react';
import CommentFormContainer from './comment_form_container';
import Comment from './comment';

class CommentsSection extends React.Component {
    render() {
        const { videoAuthor, comments, users } = this.props;
        const commentList = comments.length > 0 ? comments.reverse().map((comment, idx) => {
            return(
                <div key={idx}>
                    <Comment 
                        comment={comment}
                        author={users[comment.userId]}
                        videoAuthor={videoAuthor}
                    />
                </div>
            )
        }) : "";

        return(
            <div className="comments-section-container">
                <CommentFormContainer videoId={this.props.video.id} />
                <div className="comments">
                    { commentList }
                </div>
            </div>
        )
    }
}

export default CommentsSection;