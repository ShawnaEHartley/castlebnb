# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  listing_id  :bigint           not null
#  reserver_id :bigint           not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  num_guests  :integer
#
class Reservation < ApplicationRecord

  validates :start_date,
    :end_date,
    :listing_id,
    :reserver_id,
    presence:true

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :reserver,
    foreign_key: :reserver_id,
    class_name: :User

  def can_reserve? 
    listing_rez = Reservation.where(listing_id: self.listing_id)
    return listing_rez.all?{ |reservation| reservation.date_valid?(self.start_date, self.end_date)}
  end


  def date_valid?(req_start_date, req_end_date) 
    booked_start_date = self.start_date
    booked_end_date = self.end_date

    # if req start date is before start date and req end date is after start date, return false
    if req_start_date <= booked_start_date && req_end_date > booked_start_date
      return false
    end

    # if req start date is between the start date and end date (>= start date and < end date)
    if req_start_date >= booked_start_date && req_start_date < booked_end_date
      return false
    end

    return true
  end
    
end
