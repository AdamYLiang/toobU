class Api::UsersController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy, :update]

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/sessions/show'
        else
            render json: @user.errors.full_messages, status: 400
        end
    end

    def index
    end

    def show
        @user = user.find(params[:id])
        render :show
    end

    def update
        @user = User.find(params[:id])
        if @user && (@user.id == current_user.id)
            if @user.update
                render :show
            else
                render json: @user.errors.full_messages, status: 400
            end
        else
            render json: ["User not found"], status: 404
        end
    end

    def destroy
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end