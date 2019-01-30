import { connect } from 'react-redux';
import { fetchChannel } from '../../actions/channel_actions';
import { fetchUser } from '../../actions/user_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
    const channelId = ownProps.match.params.channelId;
    const channel = state.entities.channels[channelId] || {};
    let owner = {};
    let videos = {};
    let currentUser = state.session.currentUser || {};
    
    if (channel) {
        owner = state.entities.users[channel.userId] || {};
        videos = state.entities.videos || {};
    }
    return {
        owner,
        channel,
        channelId,
        currentUser,
        videos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        fetchUser: (id) => dispatch(fetchUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);