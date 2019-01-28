json.video do 
    json.extract! @video, :id, :title, :description
end

json.channel do
    json.partial! "api/channels/channel", channel: @video.channel
end

json.user do 
    json.partial! "api/users/user", user: @video.channel.user
end