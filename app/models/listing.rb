# == Schema Information
#
# Table name: listings
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  lister_id        :bigint           not null
#  description      :text             not null
#  street_address   :string           default("100 Kings Rd"), not null
#  address_line_two :string
#  city             :string           default("Venice"), not null
#  state            :string           default("Veneto"), not null
#  zip_code         :string           default("10010"), not null
#  country          :string           default("Italy"), not null
#  latitude         :decimal(10, 6)   default(45.438759), not null
#  longitude        :decimal(10, 6)   default(12.327145), not null
#  region           :string           default("Valyria"), not null
#  price            :integer          default(20), not null
#  max_guests       :integer          default(4), not null
#  bedrooms         :integer          default(2), not null
#  beds             :integer          default(2), not null
#  baths            :integer          default(1), not null
#  kitchen          :boolean          default(TRUE), not null
#  parking          :boolean          default(TRUE), not null
#  heating          :boolean          default(TRUE), not null
#  fireplace        :boolean          default(TRUE), not null
#  patio            :boolean          default(TRUE), not null
#  wifi             :boolean          default(TRUE), not null
#  pets             :boolean          default(TRUE), not null
#  self_checkin     :boolean          default(TRUE), not null
#  rules            :text
#  cancellation     :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  subtitle         :string
#
class Listing < ApplicationRecord

  validates :title,
    :description,
    :street_address,
    :city,
    :state, 
    :zip_code,
    :country,
    :latitude,
    :longitude,
    :region, 
    :price,
    :max_guests,
    :bedrooms,
    :beds,
    :baths,
    presence:true

  validates :kitchen,
    :parking,
    :heating,
    :fireplace,
    :patio,
    :wifi,
    :pets,
    :self_checkin,
    inclusion: { in: [true, false] }

  validates :title, uniqueness:true 

  belongs_to :lister,
    foreign_key: :lister_id,
    class_name: :User

  has_many_attached :photos
  
end
