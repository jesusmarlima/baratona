class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email:params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      @errors = nil
      render json: { errors: @errors }
    else
      @errors = ["User or password invalid!"]
      render json: { errors: @errors }
    end
  end

  def logout
     session.clear
     redirect_to new_session_path
  end

  def getuser
    render json: current_user
  end


end
