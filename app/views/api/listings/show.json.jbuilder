json.listing do
  json.merge! @listing.attributes
  json.listerName @listing.lister.full_name
  
  json.photoUrls ["https://castlebnb-seeds.s3.amazonaws.com/Dragonstone-image-1.webp", 
    'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-1.jpeg',
    'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-2.jpeg',
    'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-approach.webp',
    'https://castlebnb-seeds.s3.amazonaws.com/dragonstone-throne-room.jpeg'
  ]
end
