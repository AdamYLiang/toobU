export const createVideoLike = (thumbs, videoId) => {
    return $.ajax({
        method: "POST",
        url: `/api/videos/${videoId}/likes`,
        data: { like: {
            thumbs,
            likeable_type: "Video",
            likeable_id: videoId,
        }}
    });
};

export const createCommentLike = (thumbs, commentId) => {
    return $.ajax({
        method: "POST",
        url: `/api/comments/${commentId}/likes`,
        data: { like: {
            thumbs,
            likeable_type: "Comment",
            likeable_id: commentId,
        }}
    });
};

export const removeVideoLike = videoId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/videos/${videoId}/likes`,
        data: {
            likeable_type: "Video",
            likeable_id: videoId,
        }
    });
};

export const removeCommentLike = commentId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}/likes`,
        data: { like: {
            likeable_type: "Comment",
            likeable_id: commentId,
        }}
    });
};
