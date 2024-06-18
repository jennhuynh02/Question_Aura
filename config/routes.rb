Rails.application.routes.draw do
  resources :topics
  resources :comments
  resources :answers
  resources :questions

  devise_for :users, controllers: { sessions: 'sessions' }

  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
