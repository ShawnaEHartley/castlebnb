class Api::ReservationsController < ApplicationController


  def index 
    @reservations = Reservation
      .where(reserver_id: current_user.id)
      .order(start_date: :asc)

      @current_reservations = []
      @past_reservations = []
    
      @reservations.each do |reservation|
        if reservation.start_date >= Date.today
          @current_reservations << reservation
        else
          @past_reservations << reservation
        end
      end
      
    render 'api/reservations/index'
  end

  def show 
    @reservation = Reservation.find_by(id: params[:id])

    if !@reservation 
      render json: {errors: 'unable to find reservation'}, status: 404
      return
    else 
      render 'api/reservations/show'
    end
  end

  def create 
    @reservation = Reservation.new(reservation_params)

    # if @reservation.can_reserve?
      if @reservation.save
        render 'api/reservations/confirmation'
      else
        render json: { errors: @reservation.errors.full_message }, status: 404
      end
    # else 
    #   render json: { errors: 'booking overlap'}, status: 409
    #   return
    # end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.reserver_id === current_user.id
      @reservation.delete
    end
  end

  def update
    @reservation = Reservation.find(params[:id])

    if @reservation.reserver_id === current_user.id
      # if @reservation.can_reserve?
        if @reservation.update(reservation_params)
          render 'api/reservations/confirmation'
        else
          render json: { errors: @reservation.errors.full_messages }, status: 404
        end
      # else
      #   render json: { errors: 'booking overlap' }, status: 409
      # end
    end
  end

  private
  def reservation_params
    params.require(:reservation).permit(
      :listing_id,
      :reserver_id,
      :start_date,
      :end_date,
      :num_guests
    )
  end
end
