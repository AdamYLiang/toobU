import { RECEIVE_CHANNEL, RECEIVE_CHANNELS,REMOVE_CHANNEL } from '../../actions/channel_actions';
import { RECEIVE_VIDEO } from '../../actions/video_actions';
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CHANNEL:
            return merge({}, state, {[action.channel.id]: action.channel});
        case RECEIVE_CHANNELS:
            return merge({}, state, action.channels);
        case REMOVE_CHANNEL:
            const newState = merge({}, state);
            delete newState[action.channelId];
            return newState;
        case RECEIVE_VIDEO: 
            return merge({}, state, { [action.payload.channel.id]: action.payload.channel });
        default: 
            return state;
    }
};

export default channelsReducer;