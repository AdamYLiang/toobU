import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel, clearChannelErrors } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        channel: { name: "", description: "" },
        errors: state.errors.channel,
        formType: 'create',
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const history = ownProps.history;
    return {
        submitForm: (channel) => dispatch(createChannel(channel, history)),
        clearErrors: () => dispatch(clearChannelErrors()),
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));