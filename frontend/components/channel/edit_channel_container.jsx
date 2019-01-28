import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { fetchChannel, updateChannel, clearChannelErrors } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const defaultChannel = { name: "", description: ""};
    const channel = state.entities.channels[ownProps.match.params.channelId] || defaultChannel;
    return {
        channel: channel,
        errors: state.errors.channel,
        formType: 'update',
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const channelId = ownProps.match.params.channelId;
    const history = ownProps.history;
    return {
        fetchChannel: (id) => dispatch(fetchChannel(id)),
        submitForm: (channel) => dispatch(updateChannel(channel, channelId, history)),
        clearErrors: () => dispatch(clearChannelErrors()),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));