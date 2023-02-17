# == Schema Information
#
# Table name: reviews
#
#  id                   :bigint           not null, primary key
#  listing_id           :bigint           not null
#  user_id              :bigint           not null
#  cleanliness_rating   :integer          not null
#  communication_rating :integer          not null
#  checkin_rating       :integer          not null
#  accuracy_rating      :integer          not null
#  location_rating      :integer          not null
#  value_rating         :integer          not null
#  body                 :text             not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Review < ApplicationRecord

  validates :listing_id, :user_id, :cleanliness_rating, :communication_rating, :checkin_rating, :accuracy_rating, :location_rating, :value_rating, :body, presence:true

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User

end
