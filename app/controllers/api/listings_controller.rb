class Api::ListingsController < ApplicationController
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
    @listing = Listing.find(params[:id])
    puts "HIHIHI"
    puts @listing
    if @listing 
      puts "inside the if"
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
