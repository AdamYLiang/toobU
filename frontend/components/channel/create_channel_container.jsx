import { connect } from 'react-redux';
import ChannelForm from './channel_form';
import { createChannel } from '../../util/channel_api_util';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);