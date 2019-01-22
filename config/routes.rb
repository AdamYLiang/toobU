Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { formt: :json } do
    resources :users, only: [:create, :update, :index, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
