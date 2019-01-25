import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_error_reducer';
import channelErrorsReducer from './channel_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    channel: channelErrorsReducer,
});

export default errorsReducer;