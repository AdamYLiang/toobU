import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../../actions/video_actions';
import { merge } from 'lodash';

const userReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER: 
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_VIDEOS:
            return merge({}, state, action.payload.users);
        case RECEIVE_VIDEO: 
            return merge({}, state, { [action.payload.user.id]: action.payload.user });
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        default:
            return state;
    }
};

export default userReducer;