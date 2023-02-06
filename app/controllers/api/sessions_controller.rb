class Api::SessionsController < ApplicationController
  
  def show
    @user = current_user
    if @user
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

  def create
    puts params
    email = params[:email]
    password = params[:password]
    @user = User.find_by_credentials(email, password)

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout!
      render json: { message: 'success' }
    end 
  end
end
