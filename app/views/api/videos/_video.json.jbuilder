comments = video.comments
commentIds = []
comments.each do |comment|
    commentIds.push(comment.id)
end

json.extract! video, :id, :title, :description
json.channelId video.channel.id
json.videoURL video.file.service_url
json.thumbURL video.thumbnail.service_url
json.numLikes video.likes.where(thumbs_up: true).count
json.numDislikes video.likes.where(thumbs_up: false).count
json.commentIds commentIds
json.createdAt video.created_at