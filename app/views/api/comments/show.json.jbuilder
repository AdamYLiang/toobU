comments = @video.comments
commentIds = []
comments.each do |comment|
    commentIds.push(comment.id)
end

json.video do 
    json.extract! @video, :id, :title, :description
    json.channelId @video.channel.id
    json.videoURL @video.file.service_url
    json.thumbURL @video.thumbnail.service_url
    json.commentIds commentIds
    json.createdAt @video.created_at
end

json.comment do 
    json.partial! "api/comments/comment", comment: @comment
end 

json.user do 
    json.partial! "api/users/user", user: @comment.user
end