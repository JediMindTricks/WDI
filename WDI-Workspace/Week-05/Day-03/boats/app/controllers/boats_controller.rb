class BoatsController < ApplicationController
	
	def index
		@boats = Boat.all
	end

	def show
		@boats = Boat.find(params[:id])
	end

	def destroy
		@boat = Boat.find(params[:id])
		@boat.delete
		redirect_to boats_path
	end
end