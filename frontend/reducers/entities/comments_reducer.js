import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT} from '../../actions/comment_actions';
import { RECEIVE_VIDEO } from '../../actions/video_actions';
import { merge } from 'lodash';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_COMMENT:  
            return merge({}, state, { [action.payload.comment.id]: action.payload.comment });
        case RECEIVE_COMMENTS:
            return merge({}, state, action.payload.comments);
        case REMOVE_COMMENT: 
            const newState = merge({}, state);
            delete newState[action.commentId];
            return newState;
        case RECEIVE_VIDEO:
            return { ...action.payload.comments };
        default: 
            return state;
    }
};

export default commentsReducer;