json.video do 
    json.extract! @video, :id, :title, :description
    json.videoURL @video.file.service_url
    json.thumbURL @video.thumbnail.service_url
end

json.channel do
    json.partial! "api/channels/channel", channel: @video.channel
end

json.user do 
    json.partial! "api/users/user", user: @video.channel.user
end