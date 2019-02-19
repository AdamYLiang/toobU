class Api::LikesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :destroy]

    def create
        
    end

    def destroy
    end

    private
    def like_params
        params.require(:like).permit(:user_id, :thumps_up, :likeable_type, :likeable_id)
    end
end