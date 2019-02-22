import * as LikeApiUtil from '../util/like_api_util';

export const CREATE_VIDEO_LIKE = "CREATE_VIDEO_LIKE";
export const REMOVE_VIDEO_LIKE = "REMOVE_VIDEO_LIKE";
export const CREATE_COMMENT_LIKE = "CREATE_COMMENT_LIKE";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";

export const createVideoLike = (thumbs, videoId) => dispatch => {
    return LikeApiUtil.createVideoLike(thumbs, videoId).then(payload => {
        dispatch({
            type: CREATE_VIDEO_LIKE,
            payload
        });
    });
}; 

export const createCommentLike = (thumbs, commentId) => dispatch => {
    return LikeApiUtil.createCommentLike(thumbs, commentId).then(payload => {
        dispatch({
            type: CREATE_COMMENT_LIKE,
            payload
        });
    });
}; 

export const deleteVideoLike = videoId => dispatch => {
    return LikeApiUtil.createVideoLike(videoId).then(payload => {
        dispatch({
            type: CREATE_VIDEO_LIKE,
            payload
        });
    });
}; 

export const deleteCommentLike = commentId => dispatch => {
    return LikeApiUtil.removeCommentLike(commentId).then(payload => {
        dispatch({
            type: REMOVE_COMMENT_LIKE,
            payload
        });
    });
}; 
