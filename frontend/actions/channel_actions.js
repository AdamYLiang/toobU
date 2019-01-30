import * as ChannelApiUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const RECEIVE_BLANK_CHANNEL_ERRORS = "RECEIVE_BLANK_CHANNEL_ERRORS";

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_CHANNELS,
        channels
    };
};

const receiveChannel = (payload) => {
    debugger
    return {
        type: RECEIVE_CHANNEL,
        payload
    };
};

const removeChannel = (channel) => {
    return {
        type: REMOVE_CHANNEL,
        channelId : channel.id
    };
};

const receiveErrors = errors => ({
    type: RECEIVE_CHANNEL_ERRORS,
    errors
});

export const clearChannelErrors = () => ({
    type: RECEIVE_BLANK_CHANNEL_ERRORS,
});

export const fetchChannels = () => dispatch => ChannelApiUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));

export const fetchChannel = (id) => dispatch => ChannelApiUtil.fetchChannel(id)
    .then(payload => dispatch(receiveChannel(payload)));

export const createChannel = (channel, history) => dispatch => {
    return (
        ChannelApiUtil.createChannel(channel)
            .then(payload => {
                dispatch(receiveChannel(payload));
                (history.push(`/channel/${payload.channel.id}`));
            },
                err => dispatch(receiveErrors(err.responseJSON))
        )
    );
};

export const updateChannel = (channel, channelId, history) => dispatch => {
    return (
        ChannelApiUtil.updateChannel(channel, channelId)
            .then(channel => {
                dispatch(receiveChannel(channel));
                (history.push(`/channel/${channelId}`));
            },
                err => dispatch(receiveErrors(err.responseJSON))
            )
    );
};

export const deleteChannel = (channel) => dispatch => ChannelApiUtil.removeChannel(channel)
    .then(channel => dispatch(removeChannel(channel)));


    