class Api::ListingsController < ApplicationController

  # attributes: [cleanliness_rating, communication_rating, checkin_rating, accuracy_rating, location_rating, value_rating]
  def average_cleanliness(reviews)
    if reviews.length == 0
      return @average_cleanliness = 0
    end
    total = reviews.map {|review| review.cleanliness_rating}.reduce(0) {|num, value| num + value}
    @average_cleanliness = total / (reviews.length)
  end

  def average_communication(reviews)
    if reviews.length == 0
      return @average_communication = 0
    end
    total = reviews.map {|review| review.communication_rating}.reduce(0) {|num, value| num + value}
    @average_communication = total / (reviews.length)
  end

  def average_checkin(reviews)
    if reviews.length == 0
      return @average_checkin = 0
    end
    total = reviews.map {|review| review.checkin_rating}.reduce(0) {|num, value| num + value}
    @average_checkin = total / (reviews.length)
  end

  def average_accuracy(reviews)
    if reviews.length == 0
      return @average_accuracy = 0
    end
    total = reviews.map {|review| review.accuracy_rating}.reduce(0) {|num, value| num + value}
    @average_accuracy = total / (reviews.length)
  end

  def average_location(reviews)
    if reviews.length == 0
      return @average_location = 0
    end
    total = reviews.map {|review| review.location_rating}.reduce(0) {|num, value| num + value}
    @average_location = total / (reviews.length)
  end

  def average_value(reviews)
    if reviews.length == 0
      return @average_value = 0
    end
    total = reviews.map {|review| review.value_rating}.reduce(0) {|num, value| num + value}
    @average_value = total / (reviews.length)
  end

  def index
    @listings = Listing.all
    render 'api/listings/index'
  end

  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render :show
    else
      render json: { errors: @listing.errors.full_messages }, status: 422
    end
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    if !@listing 
      render json: { errors: 'unable to find listing' }, status: 404 
      return
    end
    reviews = @listing.reviews
    average_cleanliness(reviews)
    average_communication(reviews)
    average_checkin(reviews)
    average_accuracy(reviews)
    average_location(reviews)
    average_value(reviews)

    if @listing 
      render 'api/listings/show'
    else 
      render json: { errors: @listing.errors.full_messages }, status: 404
    end
  end

  private

  def listing_params 
    params.require(:listing).permit(
      :title, 
      :description,
      :lister_id
    )
  end
end
