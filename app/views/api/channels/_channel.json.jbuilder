videos = channel.videos
videoIds = []

videos.each do |video|
    videoIds.push(video.id)
end


json.extract! channel, :id, :name, :description
json.userId channel.user_id
json.videoIds videoIds