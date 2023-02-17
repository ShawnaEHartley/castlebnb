# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)



require "open-uri"


ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Listing.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('listings')

  puts "Creating users..."

  #1
  User.create!(
    full_name: 'Demo User', 
    email: 'demo@test.com', 
    password: 'hello123'
  )

  #2
  User.create!(
    full_name: 'Jon Snow', 
    email: 'youknownothing@test.com', 
    password: 'password'
  )

  #3
  User.create!(
    full_name: 'Daenerys Targaryen', 
    email: 'dragonmama@test.com', 
    password: 'password'
  )

  #4
  User.create!(
    full_name: 'Cersei Lannister', 
    email: 'queencee@test.com', 
    password: 'password'
  )

  #5
  User.create!(
    full_name: 'Olenna Tyrell', 
    email: 'tellcersei@test.com', 
    password: 'password'
  )

  #6
  User.create!(
    full_name: 'Jamie Lannister', 
    email: 'kingslayer@test.com', 
    password: 'password'
  )

  #7
  User.create!(
    full_name: 'Hodor', 
    email: 'hodor@test.com', 
    password: 'hodorhodor'
  )

  #8
  User.create!(
    full_name: 'Tyrion Lannister', 
    email: 'drinkandknowthings@test.com', 
    password: 'password'
  )

  #9
  User.create!(
    full_name: 'Arya Stark', 
    email: 'pointyend@test.com', 
    password: 'password'
  )

  #10
  User.create!(
    full_name: 'Oberyn Martell', 
    email: 'ifightfordorne@test.com', 
    password: 'password'
  )

  #11
  User.create!(
    full_name: 'Lyanna Mormont', 
    email: 'noknitting@test.com', 
    password: 'password'
  )


  puts "Creating listings..."


  l1 = Listing.create!(
    title: "A wing in Dragonstone",
    subtitle: 'Built in 114 BC',
    lister_id: 3,
    description: "Welcome to the magnificent wing of Dragonstone, a stunning castle located in the heart of Westeros. This beautiful space, once the seat of House Targaryen, offers breathtaking views of the surrounding mountains and the Narrow Sea.
    As you enter the wing, you'll be greeted by a grand hall with soaring ceilings and elegant furnishings. Admire the intricate stone carvings, the majestic dragon sculptures, and the shimmering chandeliers. The hall is the perfect space for hosting dinner parties or simply relaxing after a long day of exploring the castle. 
    The wing boasts three spacious bedrooms, each with its own unique style and luxurious amenities. You'll find plush bedding, warm fireplaces, and stunning views from every window. The master suite features a magnificent four-poster bed, a grand bathtub, and a private balcony with breathtaking views. 
    The kitchen is fully equipped with all the modern appliances you need to prepare meals for your stay. Dine in the elegant dining room, or enjoy a relaxed meal on the terrace while taking in the views. As a guest in the wing of Dragonstone, you'll have access to all the castle's common areas, including the grand courtyard, the impressive gardens, and the stone throne room. Take a stroll through the castle's secret passages, or relax in the library with a good book. 
    This magnificent wing of Dragonstone offers the ultimate escape from the hustle and bustle of modern life. Come and experience the grandeur and luxury of Westeros for yourself. Book your stay now!",
    street_address: "1 Aegon Rd",
    city: "Dragonstone",
    state: "The Crownlands",
    zip_code: "01754",
    country: "Kings Landing",
    latitude: 53.1464,
    longitude: 0.3379,
    region: "Kings Landing",
    price: 300,
    max_guests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 3,
    pets: false
  )

  l2 = Listing.create!(
    title: "The Red Keep",
    subtitle: 'Built in 45 AC',
    lister_id: 2,
    description: "Experience the epitome of architectual grandeur with a stay at the magnificent Red Keep. This stunning fortress, located in the heart of a bustling city, is a true gem of medieval architecture and the perfect choice for travelers seeking a unique and unforgettable experience.
    Enter the castle's grand halls, filled with elaborate tapestries and antique furnishings, and feel like royalty as you bask in the richness of its history. With room for up to 30 guests, this castle is perfect for families, friends, and large groups looking for a one-of-a-kind getaway.
    The castle features a number of spacious and well-appointed bedrooms, each with its own unique charm and character. Soak in the views of the surrounding city from the comfort of your bed, or take a stroll around the castle's battlements and imagine yourself as a medieval lord, surveying your lands.
    The castle also boasts a magnificent dining hall, where you can enjoy feasts fit for a king and share tales of your adventures. The fully equipped kitchen will allow you to cook up your own creations or let the castle's staff cook for you.
    If you're looking for a historic and grand vacation home, the Red Keep is the perfect choice. Book your stay today and experience the magic of medieval times for yourself!",
    street_address: "1 Gold Coat Way",
    city: "King's Landing",
    state: "The Crownlands",
    zip_code: "10000",
    country: "Westeros",
    latitude: 52.7901,
    longitude: -0.1557,
    region: "King's Landing",
    price: 1000,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    kitchen: false,
    parking: false,
    fireplace: false,
    patio: false,
    pets: false,
    self_checkin: true,
    rules: "No burning cities or killing of your fellow guests.",
    cancellation: "Strict"
  )

  l3 = Listing.create!(
    title: "The Western Castle at The Twins",
    subtitle: 'Built 300 BC',
    lister_id: 9,
    description: "Experience the splendor of Westeros with a stay at the historic and magnificent Castle at The Twins! This magnificent fortress, located in the heart of the Riverlands, is a true gem of Westerosi architecture and the perfect choice for travelers seeking an unforgettable experience.
    Enter the castle's grand halls, filled with elaborate tapestries and antique furnishings, and feel like royalty as you bask in the richness of its history. With room for up to 20 guests, this castle is perfect for families, friends, and large groups looking for a unique and unforgettable getaway.
    The castle features a number of spacious and well-appointed bedrooms, each with its own unique charm and character. Soak in the views of the surrounding countryside from the comfort of your bed, or take a stroll around the castle's battlements and imagine yourself as a medieval lord, surveying your lands.
    The castle also boasts a magnificent dining hall, where you can enjoy feasts fit for a king and share tales of your adventures. The fully equipped kitchen will allow you to cook up your own creations or let the castle's staff cook for you.
    If you're looking for a grand vacation home, the Castle at The Twins is the perfect choice. Book your stay today and experience the magic of Westeros for yourself!",
    street_address: "299 Kings Rd",
    city: "The Twins",
    state: "The Riverlands",
    zip_code: "10001",
    country: "Westeros",
    latitude: 53.8156,
    longitude: -3.0558,
    region: "The Riverlands",
    price: 800,
    max_guests: 4,
    bedrooms: 4,
    beds: 4,
    baths: 4,
    kitchen: true,
    parking: false,
    heating: true,
    fireplace: false,
    patio: false,
    wifi: true,
    pets: false,
    self_checkin: true,
    rules: "No burning cities or killing of dragons.",
    cancellation: "Moderate"
  )
  
  l4 = Listing.create!(
    title: "Winterfell Castle",
    subtitle: 'Built 8,000 BC',
    lister_id: 9,
    description: "Escape to the heart of the North with a stay in a room at the historic Winterfell Castle. This magnificent fortress, located in the rolling hills of the North, is a true testament to the ancestrial home of the Starks.
    Your spacious and well-appointed room features antique furnishings, elegant tapestries, and breathtaking views of the surrounding countryside. Relax in the comfort of your bed and soak in the ambiance of this ancient castle, or take a stroll around the castle's ramparts and imagine yourself as a medieval lord, surveying your lands.
    The castle also features a grand dining hall, where you can enjoy feasts fit for a king and share tales of your adventures. The fully equipped kitchen will allow you to cook up your own creations or let the castle's staff cook for you.
    Whether you're looking for a peaceful retreat in the countryside or a unique and historic vacation experience, a stay in a room at Winterfell Castle is the perfect choice. Book your stay today and experience the magic of the North for yourself!",
    street_address: "Winterfell Castle",
    city: "Winterfell",
    state: "The North",
    zip_code: "10002",
    country: "Westeros",
    latitude: 51.5074,
    longitude: -0.1278,
    region: "The North",
    price: 120,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    kitchen: true,
    parking: false,
    heating: true,
    fireplace: true,
    patio: false,
    wifi: true,
    pets: false,
    self_checkin: true
  )

  puts 'Attaching photos...'

  l1.photos.attach([
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/Dragonstone-image-1.png"), filename: "Dragonstone-image-1.png"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-approach.png"), filename: "Dragonstone-approach.png"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-1.jpeg"), filename: "Dragonstone-bedroom-1.jpeg"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-bedroom-2.jpeg"), filename: "Dragonstone-bedroom-2.jpeg"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-ext.jpg"), filename: "Dragonstone-ext.jpg"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-painted-table.png"), filename: "Dragonstone-painted-table.png"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-throne-room.jpeg"), filename: "Dragonstone-throne-room.jpeg"},
  {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dragonstone-painted-table2.jpeg"), filename: "Dragonstone-painted-table.jpeg"}
  ])

  l2.photos.attach([
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/RedKeep_1.png'), filename: 'RedKeep_1.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/RedKeep_bedroom.png'), filename: 'RedKeep_bedroom.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/RedKeep_dining_room.png'), filename: 'RedKeep_dining_room.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/RedKeep_iron_throne.png'), filename: 'RedKeep_iron_throne.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/RedKeep_throne_room.jpeg'), filename: 'RedKeep_throne_room.jpeg'}
  ])

  l3.photos.attach([
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_ext_2.png'), filename:'Twins_ext_2.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_bedroom.jpeg'), filename:'Twins_bedroom.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_dining_room_2.png'), filename:'Twins_dining_room_2.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_dining_room.png'), filename:'Twins_dining_room.png'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_ext_3.jpeg'), filename:'Twins_ext_3.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Twins_ext.png'), filename:'Twins_ext.png'}
  ])

  l4.photos.attach([
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Winterfell_ext.jpeg'), filename:'Winterfell_ext.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Winterfell_bedroom.jpeg'), filename:'Winterfell_bedroom.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Winterfell_dining_room.jpeg'), filename:'Winterfell_dining_room.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Winterfell_hallway.jpeg'), filename:'Winterfell_hallway.jpeg'},
    {io: URI.open('https://castlebnb-seeds.s3.amazonaws.com/Winterfell_int.jpeg'), filename:'Winterfell_int.jpeg'}
  ])

  
  puts 'Writing reviews... '

  Review.create!(
    listing_id: 1,
    user_id: 10,
    cleanliness_rating: 4,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 4,
    location_rating: 4,
    value_rating: 4,
    body:"Great stay! We didn't need to contact the host for anything. Everything we needed was included and provided. The castle grounds were fantastic to wonder around, and we loved walking the beach toward the dragon pit. Be careful, though; sometimes the trainers are out with the dragons ... keep your distance. They are can territorial (so we heard, thank goodness we didn't experience that)."
  )

  puts "Done!"

end


