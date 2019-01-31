import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.comment.body}</h1>
                <h1>{this.props.currentUser.username}</h1>
            </>
        )
    }
}

export default Comment;