class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :redirect_not_logged_in

  def current_user
    @user = User.find_by(id: session[:user_id])
  end

  def redirect_not_logged_in
    redirect_to new_session_path unless current_user
  end

end
