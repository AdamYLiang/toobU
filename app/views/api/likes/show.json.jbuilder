json.partial! 'api/likes/like', like: @like 

json.video do 
    json.partial! "api/videos/video", video: @like.likeable
end