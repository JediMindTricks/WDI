Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'boats/' => 'boats#index', as: :boats
  get 'boats/:id' => 'boats#show', as: :boat
  delete 'boats/:id' => 'boats#destroy', as: :burn_it
end
