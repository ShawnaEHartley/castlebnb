class Api::ReservationsController < ApplicationController

  def create 
    @reservation = Reservation.new(reservation_params)

    if !@reservation.save
      render json: { errors: @reservation.errors.full_messages }, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.reserver_id === current_user.id
      @reservation.delete
    end
  end

  def update

  end

  private
  def reservation_params
    params.require(:reservation).permit(
      :listing_id,
      :reserver_id,
      :start_date,
      :end_date
    )
  end
end