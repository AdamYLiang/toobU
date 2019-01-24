export const fetchChannels = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/channels'
    });
};

export const fetchChannel = (channelId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/channels/${channelId}`
    });
};

export const createChannel = (channel) => {
    return $.ajax({
        method: 'POST',
        url: '/api/channels',
        data: { channel }
    });
};

export const updateChannel = (channel) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/channels/${channel.id}`,
        data: { channel }
    });
};

export const removeChannel = (channel) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/channels/${channel.id}`
    });
};