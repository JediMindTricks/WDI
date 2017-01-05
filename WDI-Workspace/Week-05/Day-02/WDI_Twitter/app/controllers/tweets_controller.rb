class TweetsController < ApplicationController
	
	def index
		@title = "Booooom"
		@subheading = "What a time to be alive!"
		@tweets.all
	end

	def show
	end
end