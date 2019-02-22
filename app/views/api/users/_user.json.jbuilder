channels = user.channels
channelIds = []


channels.each do |channel| 
    channelIds.push(channel.id)
end

likes = user.likes 
videoLikes = []


json.extract! user, :id, :username, :email
json.ownChannels channelIds