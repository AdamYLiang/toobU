Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { formt: :json } do
    resources :users, only: [:create, :update, :index, :show, :destroy]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :update, :destroy, :index, :show] do
      resources :comments, only: [:create, :index]
    end
    resources :comments, only: [:update, :destroy]
    resources :channels, only: [:create, :update, :destroy, :index, :show]
  end

end
