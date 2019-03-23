import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchResults from './search_results';

const mapStateToProps = ({ entities: { videos }}) => {
    return {
        videos,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults));