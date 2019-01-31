import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import channelsReducer from './channels_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    channels: channelsReducer,
    videos: videosReducer,
    comments: commentsReducer,
});

export default entitiesReducer; 