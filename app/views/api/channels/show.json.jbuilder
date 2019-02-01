
json.videos do 
    @channel.videos.each do |video| 
        json.set! video.id do 
            json.extract! video, :id, :title
            json.thumbURL video.thumbnail.service_url
            json.channelId video.channel.id
            json.createdAt video.created_at
        end
    end
end

json.channel do 
    json.partial! "api/channels/channel", channel: @channel
end

json.user do 
    json.partial! "api/users/user", user: @channel.user
    json.createdAt @channel.user.created_at
end