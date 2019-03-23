import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import { fetchVideos, resetVideos } from '../../actions/video_actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: options => dispatch(fetchVideos(options)), 
        resetVideos: () => dispatch(resetVideos())
    };
};

export default withRouter(connect(null,mapDispatchToProps)(SearchForm));
