import React from 'react';
import { connect } from 'react-redux';
import VideoLikes from './video_likes';
import { createVideoLike, deleteVideoLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
    const video = ownProps.video;
    const numLikes = video.numLikes;
    const numDislikes = video.numDislikes;
    return {
        numLikes,
        numDislikes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createVideoLike: (thumbs_up, videoId) => dispatch(createVideoLike(thumbs_up, videoId)),
        deleteVideoLike: (videoId) => dispatch(deleteVideoLike(videoId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoLikes);