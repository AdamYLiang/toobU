import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search_form';
import { fetchVideos } from '../../actions/video_actions';

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: options => dispatch(fetchVideos(options)), 
    };
};

export default withRouter(connect(null,mapDispatchToProps)(SearchForm));
