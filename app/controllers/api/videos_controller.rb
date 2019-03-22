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
        if params[:search]
            search
        end
        @videos = Video.includes(:channel).limit(10)
    end

    def update 
        @video = Video.find(params[:id])
    end

    def destroy
        @video = Video.find(params[:id])
        if @video && current_user.id == @video.channel.user_id
            @video.destroy
            render json: { id: @video.id }
        else
            render json: ["Invalid video"], status: 422
        end
    end

    def search
        debugger
    end

    private
    def video_params 
        params.require(:video).permit(:title, :description, :channel_id, :file, :thumbnail, :url)
    end
    
end