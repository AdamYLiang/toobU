import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = ({ entities: { users, channels, videos } }) => {
    const videoIndex = Object.values(videos); 
    debugger
    return {
        videos: videoIndex,
        users,
        channels,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);