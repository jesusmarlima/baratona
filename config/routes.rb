Rails.application.routes.draw do
  root 'home#index', as: "home"
  resources :bars
  get 'sessions/logout', to: 'sessions#logout'
  get 'sessions/getuser', to: 'sessions#getuser'


  resources :events, only:[:create]
  resources :sessions, only:[:new,:create]
  resources :users, only:[:new,:create,:show]


  get 'bars/search/:keyword', to: 'bars#search'

end
