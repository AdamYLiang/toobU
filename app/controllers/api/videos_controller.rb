class Api::VideosController < ApplicationController

    def create
        @video = current_user.channels.first.videos.new(video_params)
        if ((params[:video][:thumbnail] && params[:video][:file]) &&
            (params[:video][:thumbnail] != '' && params[:video][:file] != ''))
            if @video.save
                render :show
            else
                render json: @video.errors.full_messages, status: 400
            end
        else   
            render json: ["Need video and thumbnail file"], status: 422
        end
    end

    def show
        @video = Video.find(params[:id])
    end

    def index 
        # if current_user
        #     @videos = Video.where(channel_id: current_user.channnels.first.id)
        # else
        #     @videos = Video.all
        # end
        @videos = Video.includes(:channel).limit(5)
    end

    def update 
        @video = Video.find(params[:id])
    end

    def destroy
    end

    private
    def video_params 
        params.require(:video).permit(:title, :description, :channel_id, :file, :thumbnail, :url)
    end
    
end