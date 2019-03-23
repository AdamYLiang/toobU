import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';
import SearchResults from './search_results';

const mapStateToProps = (state, ownProps) => {
    return {
        search: ownProps.location.search.slice(14),
        videos: Object.values(state.entities.videos),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: options => dispatch(fetchVideos(options))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));