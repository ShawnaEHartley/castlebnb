
json.reservations do 
  json.current_reservations do
    json.array!(@current_reservations) do |reservation|
      json.id reservation.id
      json.start_date reservation.start_date
      json.end_date reservation.end_date
      json.reserver_id reservation.reserver_id
      json.listing_id reservation.listing_id
      json.num_guests reservation.num_guests
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

  json.past_reservations do
    json.array!(@past_reservations) do |reservation|
      json.id reservation.id
      json.start_date reservation.start_date
      json.end_date reservation.end_date
      json.reserver_id reservation.reserver_id
      json.listing_id reservation.listing_id
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



