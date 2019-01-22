class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in, only: [:destroy]


  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  def destroy
    @user = current_user
    logout! 
    render 'api/users/show' 
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end