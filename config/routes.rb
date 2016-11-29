Rails.application.routes.draw do
  root 'home#index', as: "home"
  resources :bars
  get 'bars/search/:keyword', to: 'bars#search'
end
