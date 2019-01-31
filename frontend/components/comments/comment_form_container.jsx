import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        comment: { body: '' },
        videoId: ownProps.videoId,
        errors: state.errors.comment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (comment) => dispatch(createComment(comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);