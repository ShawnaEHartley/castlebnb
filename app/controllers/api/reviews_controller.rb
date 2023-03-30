class Api::ReviewsController < ApplicationController

  def create 
    @review = Review.new(review_params)

    if !@review.save
      render json: { errors: @review.errors.full_messages }, status: 422
    # else 
    #   render json
    end


  end

  def destroy
    # if current user === author
    @review = Review.find(params[:id])
    if @review.user_id === current_user.id
      @review.delete
    end
  end


private
  def review_params 
    params.require(:review).permit(
      :user_id,
      :listing_id,
      :cleanliness_rating, 
      :communication_rating,
      :checkin_rating,
      :accuracy_rating,
      :location_rating,
      :value_rating,
      :body
    )
  end

end
