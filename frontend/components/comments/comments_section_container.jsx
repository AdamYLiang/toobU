import { connect } from 'react-redux';
import CommentsSection from './comments_section';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const video = ownProps.video || {};
    const channel = state.entities.channels[video.channelId] || {};
    const videoAuthor = state.entities.users[channel.userId] || {};
    const comments = Object.values(state.entities.comments);
    const users = state.entities.users;
    return {
        video, 
        comments,
        users,
        videoAuthor,
        history: ownProps.history
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsSection));