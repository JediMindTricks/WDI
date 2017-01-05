Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'tweets#index'

  get 'tweets/:index' => 'tweet#show'
end
