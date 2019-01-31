class Api::CommentsController < ApplicationController 

    def index 
        @video = Video.find(params[:video_id])
        if @video
            @comments = @video.comments
            render :index
        else
            render json: ["Video not found"], status: 422
        end
    end

    def create 
        @video = Video.find(params[:video_id])
        if @video
            @comment = @video.comments.new(comment_params) 
            @comment.user_id = current_user.id
            @user = current_user
            if @comment.save
                render :show
            else
                render json: @comment.errors.full_messages, status: 400
            end
        else
            render json: ["Video not found"], status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment
            if @comment.user_id == current_user.id && @comment.update(comment_params)
                render :show
            end
        else 
            render json: ["Comment not found"], status: 422
        end
    end

    def destroy 
        @comment = Comment.find(params[:id])
        if @comment && @comment.user_id == current_user.id
            @comment.destroy
            render json: { id: @comment.id }
        else
            render json: ["Comment not found"], status: 422
        end
    end

    private
    def comment_params 
        params.require(:comment).permit(:body, :user_id, :video_id)
    end
end