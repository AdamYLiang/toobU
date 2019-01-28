class Api::VideosController < ApplicationController

    def create
        @video = current_user.channels.first.new(video_params)
    end

    def show
        @video = Video.find(params[:id])
    end

    def index 
        if current_user
            @videos = Video.where(channel_id: current_user.channnels.first.id)
        else
            @videos = Video.all
        end
    end

    def update 
        @video = Video.find(params[:id])
    end

    def destroy
    end

    private
    def video_params 
        params.require(:video).permit(:title, :description, :user_id, :likes)
    end
    
end