json.video do 
    json.partial! "api/videos/video", video: @video
end

json.channel do
    json.partial! "api/channels/channel", channel: @video.channel
end

json.users do 
    @video.comments.each do |comment| 
    debugger
        json.set! comment.user.id do
            json.partial! "api/users/user", user: comment.user
        end
    end
    json.set! @video.channel.user.id do 
        json.partial! "api/users/user", user: @video.channel.user
    end
    
    if current_user
        json.set! current_user.id do
            json.partial! "api/users/user", user: current_user
        end
    end
end

json.comments do
    @video.comments.each do |comment| 
        json.set! comment.id do 
            json.partial! "api/comments/comment", comment: comment
        end
    end
end

