class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        @like = Like.find_by(
            user_id: current_user.id,
            likeable_id: params[:like][:likeable_id],
            likeable_type: params[:like][:likeable_type]
        )

        unless @like
            @like = Like.new(like_params)
            @like.user_id = current_user.id
        end

        @like.thumbs_up = params[:like][:thumbs_up]

        if @like.save 
            render :show
        else
            render json: @like.errors.full_messages
        end
    end

    def destroy
        @like = Like.find_by(
            user_id: current_user.id,
            likeable_id: params[:like][:likeable_id],
            likeable_type: params[:like][:likeable_type]
        )

        if @like 
            @like.destroy
            render :show
        else
            render json: ["No Like Found"], status: 404
        end
    end

    private
    def like_params
        params.require(:like).permit(:user_id, :thumbs_up, :likeable_type, :likeable_id)
    end
end