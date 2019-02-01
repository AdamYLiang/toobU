import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.session.currentUser ? state.entities.users[state.session.currentUser.id] : null; 
    return {
        comment: { body: '' },
        videoId: ownProps.videoId,
        errors: state.errors.comment,
        currentUser: currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (comment) => dispatch(createComment(comment))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));