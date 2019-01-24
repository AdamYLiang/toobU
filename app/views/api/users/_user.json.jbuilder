channels = user.channels
channelIds = []


channels.each do |channel| 
    channelIds.push(channel.id)
end


json.extract! user, :id, :username, :email
json.ownChannels channelIds