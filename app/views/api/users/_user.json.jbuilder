json.extract! user, :id, :username, :email

if current_user && current_user.id == user.id 
    channels = user.channels
    channelIds = []

    channels.each do |channel| 
        channelIds.push(channel.id)
    end

    vlikes = user.likes 
    videoLikes = []

    vlikes.each do |vlike|
        videoLikes.push(vlike.id)
    end

    json.ownChannels channelIds
    json.likedVideoIds videoLikes
end