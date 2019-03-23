import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';

const mapStateToProps = ({ entities: { users, channels, videos } }) => {
    const channelIndex = Object.values(channels); 
    return {
        videos,
        users,
        channels: channelIndex,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: options => dispatch(fetchVideos(options))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);