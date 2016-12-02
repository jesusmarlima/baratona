Rails.application.routes.draw do
  root 'home#index', as: "home"
  resources :bars
  get 'sessions/logout', to: 'sessions#logout'
  get 'sessions/getuser', to: 'sessions#getuser'
  get 'events/user_events', to: 'events#user_events'
  get 'events/:event_id/bars', to: 'events#bars'

  resources :events, only:[:new,:create,:show]
  resources :sessions, only:[:new,:create]
  resources :users, only:[:new,:create,:show]


  get 'bars/search/:keyword', to: 'bars#search'

end
