import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComments = payload => {
    return {
        type: RECEIVE_COMMENTS,
        payload
    };
};

const receiveComment = payload => {
    return {
        type: RECEIVE_COMMENT, 
        payload
    };
};

const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        commentId: comment.id
    };
};

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const fetchComments = videoId => dispatch => {
    return CommentApiUtil.fetchComments(videoId).then(payload => {
        dispatch(receiveComments(payload));
    });
};

export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment).then(payload => {
        dispatch(receiveComment(payload));
    });
};

export const updateComment = comment => dispatch => {
    return CommentApiUtil.updateComment(comment).then(payload => {
        dispatch(receiveComment(payload));
    });
};

export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.removeComment(commentId).then(payload => {
        dispatch(removeComment(payload));
    });
};

