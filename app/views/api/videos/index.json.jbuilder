json.videos do 
    @videos.each do |video| 
        json.set! video.id do 
            json.partial! 'api/videos/video', video: video
        end
    end
end

json.channels do 
    @videos.each do |video| 
        json.set! video.channel.id do
            json.partial! 'api/channels/channel', channel: video.channel
        end 
    end
end

json.users do 
    @videos.each do |video| 
        json.set! video.channel.user.id do 
            json.partial! 'api/users/user', user: video.channel.user
        end
    end
end
