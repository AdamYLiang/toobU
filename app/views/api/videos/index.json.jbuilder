@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description
        json.channelId video.channel_id
    end
end
