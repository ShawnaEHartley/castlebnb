

json.listings do 
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing,
      :id,
      :city,
      :region,
      :price
    end
  end
end