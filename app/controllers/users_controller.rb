class UsersController < ApplicationController

  def new
  end

  def show
    @user = current_user
  end

  def create
    @user = User.new(username:params[:username],password:params[:password],email:params[:email])
    if @user.save
      session[:user_id] = @user.id
      @errors = nil
      render json: { errors: @errors }
    else
      @errors = @user.errors.full_messages
      render json: { errors: @errors }
    end
  end

end
