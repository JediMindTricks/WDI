Rails.application.routes.draw do

 	get "bounceback/" => "bounceback#index"
 	get "things/" => "things#index"
 	get "mynums/:num1/:num2" => "mynums#show"
end
