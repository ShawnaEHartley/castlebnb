json.reservations do 
  @reservations.each do |reservation|
    json.set! reservation.id do 
      json.extract! reservation, 
      :id,
      :start_date,
      :end_date,
      :reserver_id,
      :listing_id
      json.listing do
        json.title reservation.listing.title
        json.region reservation.listing.region
        json.maxGuests reservation.listing.max_guests
        json.bedrooms reservation.listing.bedrooms
        json.beds reservation.listing.beds
        json.baths reservation.listing.baths
        json.pricePerNight reservation.listing.price
        json.image url_for(reservation.listing.photos[0])
        json.owner do 
          json.name reservation.listing.lister.full_name
        end
      end
    end
  end
end


