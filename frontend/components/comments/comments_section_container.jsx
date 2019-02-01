import { connect } from 'react-redux';
import CommentsSection from './comments_section';
import { withRouter } from 'react-router-dom';
import { deleteComment } from '../../actions/comment_actions';

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
        history: ownProps.history,
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsSection));