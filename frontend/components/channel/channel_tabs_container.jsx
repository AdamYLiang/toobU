import { connect } from 'react-redux';
import ChannelTabs from './channel_tabs';

const mapStateToProps = (state, ownProps) => {
    const owner = ownProps.owner || {};
    const channel = ownProps.channel || {};
    return {
        owner: owner,
        channel: channel
    };  
};

export default connect(mapStateToProps)(ChannelTabs);