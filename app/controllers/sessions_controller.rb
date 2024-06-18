class SessionsController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    user = User.find_by(email: params[:email])
    puts user
    if user && user.valid_password?(params[:password])
      sign_in(user)
      respond_with(user, location: root_path)
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    sign_out(current_user)
    respond_to_on_destroy
  end

  private

  def respond_with(resource, _opts = {})
    render json: { message: 'Logged in successfully.', user: resource }, status: :ok
  end

  def respond_to_on_destroy
    render json: { message: 'Logged out successfully.' }, status: :ok
  end
end
