import { RECEIVE_VIDEO, RECEIVE_VIDEOS, REMOVE_VIDEO } from '../../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_VIDEO:
            debugger
            return merge({}, state, {[action.payload.video.id]: action.payload.video});
        case RECEIVE_VIDEOS:
            return merge({}, state, action.payload.videos);
        case REMOVE_VIDEO:
            const newState = merge({}, state);
            delete newState[action.videoId];
            return newState;
        default:
            return state;
    }
};

export default videosReducer;