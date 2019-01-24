class Api::ChannelsController < ApplicationController 

    def create
        @channel = current_user.channels.new(channel_params);
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end

    def show
        @channel = Channel.find(params[:id])
    end

    def index 
        
    end

    def update 
        @channel = Channel.find(params[:id])
        if @channel && @channel.user_id == current_user.id && @channel.update(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 400
        end
    end

    def destroy
        @channel = Channel.find(params[:id])
        if @channel && @channel.user_id == current_user.id
            @channel.destroy
            render 'api/users/show' 
        else
            render json: @channel.errors.full_messages
        end
    end
    
    private
    def channel_params
        params.require(:channel).permit(:name, :description, :user_id)
    end

end