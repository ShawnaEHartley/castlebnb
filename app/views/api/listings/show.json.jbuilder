
json.merge! @listing.attributes
json.listerName @listing.lister.full_name
json.photoUrl @listing.photos.map { |file| url_for(file) }
