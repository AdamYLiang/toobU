import { connect } from 'react-redux';
import CommentsSection from './comments_section';

const mapStateToProps = (state, ownProps) => {
    const video = ownProps.video || {};
    const comments = state.entities.comments;
    let currentUser = {}; 
    
    if(video) {
        currentUser = state.entities.users[state.session.currentUser.id];
    }
    return {
        video, 
        currentUser,
        comments,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);