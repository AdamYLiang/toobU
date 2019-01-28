export const fetchVideos = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/videos'
    });
};

export const fetchVideo = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`
    });
};

export const createVideo = (video) => {
    return $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: video,
        contentType: false,
        processData: false,
    });
};

export const updateVideo = (video, videoId) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/videos/${videoId}`,
        data: { video }
    });
};

export const removeVideo = (video) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/channels/${video.id}`
    });
};