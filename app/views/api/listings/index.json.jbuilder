

json.listings do 
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing,
      :id,
      :city,
      :region,
      :price,
      :subtitle
      json.photoUrl ["https://castlebnb-seeds.s3.amazonaws.com/Dragonstone-image-1.webp", 
        'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-1.jpeg',
        'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-2.jpeg',
        'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-approach.webp',
        'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-throne-room.jpeg'
      ].sample
    end
  end
end