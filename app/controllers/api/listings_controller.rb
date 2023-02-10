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
    if @listing 
      render 'api/listings/show'
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
