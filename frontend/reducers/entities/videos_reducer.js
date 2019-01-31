import { RECEIVE_VIDEO, RECEIVE_VIDEOS, REMOVE_VIDEO } from '../../actions/video_actions';
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_COMMENT } from '../../actions/comment_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_VIDEO:
            return merge({}, state, {[action.payload.video.id]: action.payload.video});
        case RECEIVE_CHANNEL:
        case RECEIVE_VIDEOS:
            return merge({}, state, action.payload.videos);
        case REMOVE_VIDEO:
            newState = merge({}, state);
            delete newState[action.videoId];
            return newState;
        case RECEIVE_COMMENT:
            newState = merge({}, state); 
            return newState;
        default:
            return state;
    }
};

export default videosReducer;