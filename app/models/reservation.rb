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

    validate :reservation_date_validator

    private
    def reservation_date_validator 
      overlapping = Reservation.where("start_date < ? AND end_date > ?", end_date, tart_date)
      if overlapping.exists?
        errors.add(:base, "Reservation overlap")
      end
    end
    
end
