import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';

const mapStateToProps = (state, ownProps) => {
    const videoId = ownProps.match.params.videoId;
    const video = state.entities.videos[videoId] || {};
    let owner = {};
    let channel = {};
    let currentUser = state.session.currentUser || {};
    if (video) {
        channel = state.entities.channels[video.channelId] || {};
        owner = state.entities.users[channel.userId] || {};
    }

    debugger
    return {
        video,
        videoId,
        channel,
        owner,
        currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: (id) => dispatch(fetchVideo(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);