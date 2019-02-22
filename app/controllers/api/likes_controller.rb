class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        #find by and then create 
        #pass up the like and maybe the differential ofr the bar 
        #check the redux state after this and we're good!
        @like = Like.find_by(
            user_id: params[:like][:user_id],
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
        end
    end

    def destroy
        @like = Like.find_by(
            user_id: params[:like][:user_id],
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