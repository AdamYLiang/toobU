import { connect } from 'react-redux';
import Main from './main';
import { fetchChannels } from '../../actions/channel_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChannels: () => dispatch(fetchChannels())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);