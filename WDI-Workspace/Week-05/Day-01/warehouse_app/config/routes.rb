Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'shoes/' => 'shoes#index'
  get 'balls/' => 'balls#index'
  get 'drugs/' => 'drugs#index'
  get 'plants/' => 'plants#index'
end
