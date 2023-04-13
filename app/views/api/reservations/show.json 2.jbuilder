json.merge! @reservation.attributes

json.listing do 
  json.title @reservation.listing.title
end

json.reserver do 
  json.name @reservation.reserver.full_name
end