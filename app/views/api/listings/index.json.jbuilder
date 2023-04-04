

json.listings do 
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing,
      :id,
      :city,
      :region,
      :price,
      :subtitle,
      :latitude,
      :longitude,
      :title
      # json.photoUrls listing.photos.attached? ? url_for(listing.photos) : "https://castlebnb-seeds.s3.amazonaws.com/aircover.png"
      json.photoUrl listing.photos.map { |file| url_for(file) }

    end
  end
end