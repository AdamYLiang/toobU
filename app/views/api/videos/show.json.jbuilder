json.video do 
    json.partial! "api/videos/video", video: @video
end

json.channel do
    json.partial! "api/channels/channel", channel: @video.channel
end

json.user do 
    json.partial! "api/users/user", user: @video.channel.user
end

json.comments do
    @video.comments.each do |comment| 
        json.set! comment.id do 
            json.partial! "api/comments/comment", comment: comment
        end
    end
end

