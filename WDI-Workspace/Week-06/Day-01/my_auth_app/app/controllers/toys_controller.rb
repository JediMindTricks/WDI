class ToysController < ApplicationController
  def show
  end

  def new
    if not current_user
      redirect_to new_session_path
    end
    @toys = Toy.new
  end

  def create
    if not current_user # we check that somebody is logged in
      redirect_to new_session_path # if nobody is logged in take them to the sign in page
    end
    @toys = Toy.new(toy_params)
    @toys.user = current_user # make the toy belong to the current user
    if @toys.save
      redirect_to user_path current_user
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def private
    params.require[:toys].permit(:name, :country)
  end
end
