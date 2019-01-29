import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveVideos = (payload) => {
    return {
        type: RECEIVE_VIDEOS,
        payload
    };
};

const receiveVideo = (payload) => {
    return {
        type: RECEIVE_VIDEO,
        payload
    };
};

const removeVideo = (video) => {
    return {
        type: REMOVE_VIDEO,
        videoId: video.id
    };
};

const receiveErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const fetchVideos = () => dispatch => VideoApiUtil.fetchVideos() 
    .then(payload => dispatch(receiveVideos(payload)));

export const fetchVideo = (id) => dispatch => VideoApiUtil.fetchVideo(id) 
    .then(payload => dispatch(receiveVideo(payload)));

export const createVideo = (video, enableSubmit, history) => dispatch => {
    return (
        VideoApiUtil.createVideo(video)
            .then(
                payload => {
                    dispatch(receiveVideo(payload));
                    history.push(`/videos/${payload.video.id}`);
                },
                err => {
                    enableSubmit();
                    dispatch(receiveErrors(err.responseJSON));
                }
            )
    );
};

export const updateVideo = (video, videoId) => dispatch => {
    return (
        VideoApiUtil.updateVideo(video)
            .then(payload => {
                dispatch(receiveVideo(payload));
            },
                err => dispatch(receiveErrors(err.responseJSON))
            )
    );
};

export const deleteVideo = (video) => dispatch => VideoApiUtil.removeVideo(video)
    .then(video => dispatch(removeChannel(channel)));

