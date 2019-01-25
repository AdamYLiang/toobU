@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :description
        json.userId channel.user_id
    end
end