json.listing do
  json.extract! @listing, :id, :title, :description, :price, :city, :region
end