import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENT_ERRORS,
} from '../../actions/comment_actions';

const channelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        // case RECEIVE_BLANK_CHANNEL_ERRORS:
        //     return [];
        default:
            return state;
    }
};

export default channelErrorsReducer; 