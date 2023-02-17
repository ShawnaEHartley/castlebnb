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
  Review.destroy_all
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
    region: "The Crownlands",
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
    region: "The Crownlands",
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

  l5 = Listing.create!(
    title: 'Casterly Rock',
    subtitle: 'Built in 6,000 BC' ,
    lister_id: 4,
    description: "Welcome to your luxurious retreat within the ancient walls of Casterly Rock. This spacious and stylish room is the perfect home base for exploring the castle and the surrounding area. The room features a comfortable king-sized bed, a seating area, and an en-suite bathroom with a shower and complimentary toiletries. The room is designed with your comfort in mind, and includes modern amenities such as a flat-screen TV with cable, free Wi-Fi, air conditioning, and heating. The room also features stunning views of the castle and the surrounding countryside. As a guest in this room, you will have access to all the amenities of the castle, including its restaurants, shops, and gardens. The host is available to help you plan your itinerary and make the most of your stay in Casterly Rock. Whether you're here to experience the history and magic of this ancient castle, or simply to relax and unwind in luxurious surroundings, this room in Casterly Rock is the perfect choice for your stay. Book now to experience the ultimate in comfort and style within the walls of one of Westeros' most iconic castles.",
    city: "Casterly Rock",
    state: "Westerlands",
    country: "Westeros",
    region: "Westerlands",
    price: 650
  )

  l6 = Listing.create!(
    title: 'Highgarden',
    subtitle: 'Built in  760 AC' ,
    lister_id: 8,
    description: "Welcome to your luxurious apartment in the heart of Highgarden, the idyllic and peaceful capital of the Reach. This beautifully designed and tastefully furnished two-bedroom apartment is the perfect home base for your stay in one of Westeros' most beautiful and historic locations. The apartment features two spacious and beautifully appointed bedrooms, each with a comfortable queen-sized bed, soft linens, and plenty of closet space. The living room is cozy and inviting, with comfortable seating, a flat-screen TV, and large windows that let in plenty of natural light. The kitchen is fully equipped with everything you need to prepare meals and snacks during your stay, including a stove, oven, microwave, and refrigerator. The apartment also features a dining area with a table that seats four, and a beautifully appointed bathroom with a shower, complimentary toiletries, and plenty of towels. Additionally, the apartment has air conditioning, heating, and free Wi-Fi throughout. As a guest in this apartment, you'll have access to all of the amenities of Highgarden, including its stunning gardens, museums, shops, and restaurants. The apartment's host is available to help you plan your itinerary and make the most of your stay in this enchanting city. Whether you're here to explore the history and culture of Highgarden, or simply to relax and unwind in luxurious surroundings, this two-bedroom apartment is the perfect choice for your stay. Book now to experience the ultimate in comfort and convenience in one of Westeros' most magical locations.",
    city: 'Highgarden',
    state: 'The Reach',
    country: 'Westeros',
    region: 'The Reach',
    price: 300
  )

  l7 = Listing.create!(
    title: 'Dothraki Hut',
    subtitle: 'Home of the nomadic warriors of the grasslands' ,
    lister_id: 4,
    description: "Experience the unique and rugged lifestyle of the Dothraki people in this authentic and cozy hut. Nestled in the heart of the vast Dothraki Sea, this traditional hut offers a one-of-a-kind experience for those seeking adventure and cultural immersion. The hut is made of natural materials, with a sturdy wooden frame and walls made of woven grasses and animal hides. Inside, you'll find a simple and comfortable space, with a plush bed draped in colorful fabrics and plenty of cushions for lounging. The hut also features a small table and chairs for dining or playing games, as well as a small fireplace for warmth and ambiance.As a guest in this hut, you'll have the opportunity to learn about the traditions and customs of the Dothraki people, from their horsemanship skills to their unique approach to food and drink. You can take part in a traditional meal, prepared over an open fire, and learn about the herbs and spices used in Dothraki cooking. The hut is located in a prime location for exploring the vast and awe-inspiring Dothraki Sea, and your hosts can help you plan excursions and activities to make the most of your stay. Whether you're interested in horseback riding, archery, or simply soaking up the breathtaking scenery, there's something for everyone in this unique and unforgettable setting. Book now to experience the raw and untamed beauty of the Dothraki Sea in the comfort of an authentic and inviting hut.",
    city: 'Vaes Dothrak',
    state: 'Dothraki Sea',
    country: 'Essos',
    region: 'Essos'
  )

  l8 = Listing.create!(
    title: 'North of the Wall',
    subtitle: 'Experience the Wildlands' ,
    lister_id: 11,
    description: "Welcome to your wild and rugged camping experience north of the Wall, where you'll have the opportunity to immerse yourself in the untamed beauty of the far north. The campsite is located in a remote and pristine wilderness area, with sweeping views of snow-capped mountains, frozen lakes, and expansive forests.
    Your camping experience will be both thrilling and comfortable, with a spacious and well-equipped tent that includes a cozy bed, warm blankets, and ample space for your gear. The campsite also features a communal fire pit, where you can gather with other guests to swap stories, cook meals, and enjoy the warmth of a roaring fire under the starry northern skies.
    As a guest in this campsite, you'll have access to a wide range of outdoor activities, from hiking and snowshoeing to ice fishing and wildlife watching. You can also opt for a guided excursion with a knowledgeable and experienced local guide, who can lead you on a journey of discovery through the stunning and rugged terrain.
    The campsite is fully equipped with all the amenities you need for a comfortable and enjoyable stay, including a well-stocked kitchen area with a stove, refrigerator, and all the cookware and utensils you need to prepare meals. The campsite also features hot showers, clean and modern bathroom facilities, and free Wi-Fi.
    Whether you're here to test your wilderness skills, to connect with the natural world, or simply to escape the stresses of modern life, this camping experience north of the Wall is the perfect choice for your next adventure. Book now to experience the thrill of the far north in comfort and style.",
    city: 'Hardhome',
    state: 'North of the Wall',
    country: 'North of the Wall',
    region: 'North of the Wall',
    price: 40
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

  l5.photos.attach([
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/casterlyrock1.webp"), filename: "casterlyrock1.webp"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/casterlyrock2.avif"), filename: "casterlyrock2.avif"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/casterlyrock3.gif"), filename: "casterlyrock3.gif"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/casterlyrock4.webp"), filename: "casterlyrock4.webp"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/casterlyrock5.jpeg"), filename: "casterlyrock5.jpeg"}
  ])

  l6.photos.attach([
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/highgarden_ext.jpeg"), filename: "highgarden_ext.jpeg"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/highgarden_int.jpeg"), filename: "highgarden_int.jpeg"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/highgarden_int_2.jpeg"), filename: "highgarden_int_2.jpeg"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/highgarden_int_3.webp"), filename: "highgarden_int_3.webp"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/highgarden_balcony.jpeg"), filename: "highgarden_balcony.jpeg"}
  ])

  l7.photos.attach([
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dothraki1.png"), filename: "dothraki1"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dolthraki2.webp"), filename: "dothraki2"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dothraki3.jpeg"), filename: "dothraki3"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dothraki4.webp"), filename: "dothraki4"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/dothraki5.jpeg"), filename: "dothraki5"}
  ])

  l8.photos.attach([
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/north3.webp"), filename: "north3"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/north1.webp"), filename: "north1"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/north2.webp"), filename: "north2"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/north4.webp"), filename: "north4"},
    {io: URI.open("https://castlebnb-seeds.s3.amazonaws.com/north5.jpeg"), filename: "north5"}
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
  
  Review.create!(
    listing_id: 1,
    user_id: 9,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "We had a great stay at Dragonstone. The room was clean and well-maintained, and the host was very responsive to our messages. Check-in was easy and the location was perfect for exploring the city. Overall, a wonderful experience and great value for the price."
    )
    
  Review.create!(
    listing_id: 1,
    user_id: 5,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 4,
    value_rating: 4,
    body: "This place was amazing! The whole castle was impeccably clean and beautifully decorated. The host was very communicative and made check-in a breeze. The location was good, with easy access to public transportation. The only downside was that it was a bit further from the city center than we would have liked. Nonetheless, we would definitely stay here again!"
  )
    
  Review.create!(
    listing_id: 1,
    user_id: 4,
    cleanliness_rating: 3,
    communication_rating: 2,
    checkin_rating: 3,
    accuracy_rating: 3,
    location_rating: 2,
    value_rating: 2,
    body: "We had a disappointing stay here. The apartment was not as clean as we had hoped, and the host was difficult to communicate with. Check-in was somewhat confusing, and the accuracy of the listing was not quite up to par. The location was not great, with limited access to the main town. Overall, we did not feel that the castle was a good value for the price."
  )
    
  Review.create!(
    listing_id: 1,
    user_id: 2,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 5,
    body: "We absolutely loved our stay! The castle was sparkling clean and very accurately described in the listing. The host was very responsive to our messages and made check-in a breeze. The location was perfect, with lots of great restaurants and shops within walking distance. Overall, a fantastic experience and excellent value for the price."
  )
    
  Review.create!(
    listing_id: 1,
    user_id: 11,
    cleanliness_rating: 4,
    communication_rating: 3,
    checkin_rating: 3,
    accuracy_rating: 4,
    location_rating: 4,
    value_rating: 3,
    body: "Our stay was decent, but not exceptional. The wing was fairly clean, but could have been better. The host was somewhat difficult to communicate with, and check-in was a bit of a hassle. The accuracy of the listing was mostly fine, but there were a few discrepancies. The location was decent, with easy access to public transportation. Overall, we feel that this Airbnb was a bit overpriced for what it was."
  )

  Review.create!(
    listing_id: 1,
    user_id: 10,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 5,
    body: "Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor "
  )
  
  Review.create!(
    listing_id: 2,
    user_id: 5,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 5,
    body: "We had a fantastic stay at The Red Keep! The room was sparkling clean and very accurately described in the listing. The host was extremely responsive and helpful throughout our stay. Check-in was easy and the location was unbeatable, right in the heart of the city. Overall, we would highly recommend this location to anyone visiting the area."
    )
      
  Review.create!(
    listing_id: 2,
    user_id: 8,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Our stay was great! The room was clean and comfortable, and the host was very communicative and helpful. Check-in was easy and the location was perfect for exploring the city. Overall, we had a wonderful experience and felt that this was a good value for the price."
  )
      
  Review.create!(
    listing_id: 2,
    user_id: 3,
    cleanliness_rating: 3,
    communication_rating: 2,
    checkin_rating: 2,
    accuracy_rating: 3,
    location_rating: 3,
    value_rating: 2,
    body: "We were disappointed with our stay. The room was not as clean as we had hoped, and the host was difficult to communicate with. Check-in was confusing and not well-organized. The accuracy of the listing was not great, and the location was further from the city center than we had expected. Overall, we do not feel that this Airbnb was a good value for the price."
  )
      
  Review.create!(
    listing_id: 2,
    user_id: 4,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 4,
    value_rating: 4,
    body: "We loved our stay here! The room was spotlessly clean and the host was extremely responsive to our messages. Check-in was a breeze and the accuracy of the listing was excellent. The location was good, with easy access to public transportation. Overall, we had a wonderful experience and would definitely recommend this place to anyone visiting the area."
  )
      
  Review.create!(
    listing_id: 2,
    user_id: 6,
    cleanliness_rating: 4,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 4,
    location_rating: 4,
    value_rating: 3,
    body: "Our stay was mostly positive. The room was clean and comfortable, and the host was fairly responsive to our messages. Check-in was smooth and the accuracy of the listing was good. The location was decent, with easy access to public transportation. However, we feel that it is a bit overpriced for what it was."
  )
  
  Review.create!(
    listing_id: 3,
    user_id: 2,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 4,
    value_rating: 3,
    body: "Experience the grandeur of a medieval castle by staying in The Twins, a historical fortress in the heart of Westeros. Immerse yourself in the rich culture and tradition of the region, while enjoying modern amenities in a unique setting."
  )
  
  Review.create!(
    listing_id: 3,
    user_id: 6,
    cleanliness_rating: 4,
    communication_rating: 3,
    checkin_rating: 3,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Escape the hustle and bustle of modern life and transport yourself back in time by staying in The Twins, a beautifully preserved castle in Westeros. Enjoy the peaceful surroundings, explore the castle's rich history, and marvel at the stunning views of the surrounding countryside."
  )
  
  Review.create!(
    listing_id: 3,
    user_id: 8,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 4,
    value_rating: 3,
    body: "Experience the unique charm of Westeros by staying in The Twins, a stunning castle that offers both historical significance and modern comforts. With excellent communication and easy check-in, you can sit back and relax, knowing that you're in good hands."
  )
  
  Review.create!(
    listing_id: 3,
    user_id: 10,
    cleanliness_rating: 3,
    communication_rating: 4,
    checkin_rating: 3,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 2,
    body: "Stay in one of the most iconic castles in Westeros, The Twins. Immerse yourself in the fascinating history of the region, explore the ancient castle's hidden corners, and enjoy breathtaking views of the countryside. Though be aware that value is reflected in the experience not in modern amenities."
  )
  
  Review.create!(
    listing_id: 3,
    user_id: 5,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 5,
    body: "Experience the ultimate in luxury by staying in The Twins, an opulent castle that offers all the comforts of modern life, while still retaining its ancient charm. With excellent communication and top-notch hospitality, your stay is sure to be unforgettable."
  )
  
  Review.create!(
    listing_id: 4,
    user_id: 8,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 4,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Stay in the heart of the North by booking a stay in Winterfell. This property offers a unique opportunity to experience life in one of the most iconic castles in Westeros. With excellent communication and a prime location, you'll be able to explore the surrounding area with ease."
  )
  
  Review.create!(
    listing_id: 4,
    user_id: 5,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 3,
    body: "Experience the grandeur and history of Winterfell by staying in this beautiful property. With a pristine cleanliness rating and excellent accuracy, you can trust that your stay will be comfortable and hassle-free. Though be aware that the value is reflected in the history and location rather than modern amenities."
  )
  
  Review.create!(
    listing_id: 4,
    user_id: 2,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Discover the beauty of Winterfell by staying in this picturesque property. With a high communication rating and easy check-in process, you'll be able to relax and enjoy your stay to the fullest. The location is great for exploring the nearby attractions."
  )
  
  Review.create!(
    listing_id: 4,
    user_id: 11,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 3,
    body: "Experience the magic of Winterfell by booking a stay in this charming property. With a perfect cleanliness rating and excellent accuracy, you can rest easy knowing that your stay will be both comfortable and memorable. However, be aware that the value may be impacted by the historical location, rather than modern amenities."
  )
  
  Review.create!(
    listing_id: 4,
    user_id: 3,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Stay in one of the most historic and culturally significant castles in Westeros by booking a stay in Winterfell. With excellent communication and easy check-in, you'll be able to relax and enjoy your stay to the fullest. The location is ideal for exploring the surrounding area and immersing yourself in the rich culture and tradition of the region."
  )
  
  Review.create!(
    listing_id: 5,
    user_id: 10,
    cleanliness_rating: 5,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 5,
    body: "Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor "
  )

  Review.create!(
    listing_id: 4,
    user_id: 7,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "This room in Casterly Rock was everything I hoped it would be and more. The room was very clean and accurately represented in the listing, and the host was incredibly communicative and helpful. The location within the castle was truly magical, and the value for the price was very good."
  )
  
  Review.create!(
    listing_id: 5,
    user_id: 6,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 3,
    body: "I would highly recommend staying in this room in Casterly Rock. The room was spotlessly clean, and the accuracy of the listing was impressive. The location within the castle was stunning, and the host was very easy to communicate with. However, the value for the price was a bit lower than expected."
  )
  
  Review.create!(
    listing_id: 5,
    user_id: 6,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "Staying in this room in Casterly Rock was an unforgettable experience. The room was very clean, and the host was very communicative, making the check-in process easy and stress-free. The location within the castle was ideal, and the value for the price was very reasonable."
  )
  
  Review.create!(
    listing_id: 5,
    user_id: 5,
    cleanliness_rating: 5,
    communication_rating: 4,
    checkin_rating: 4,
    accuracy_rating: 5,
    location_rating: 5,
    value_rating: 3,
    body: "I loved staying in this room in Casterly Rock. The room was impeccably clean, and the accuracy of the listing was very high. The location within the castle was breathtaking, and the host was very friendly and easy to communicate with. However, the value for the price was a bit lower than expected."
  )
  
  Review.create!(
    listing_id: 5,
    user_id: 9,
    cleanliness_rating: 4,
    communication_rating: 5,
    checkin_rating: 5,
    accuracy_rating: 4,
    location_rating: 5,
    value_rating: 4,
    body: "This room in Casterly Rock was everything I hoped it would be and more. The room was very clean and accurately represented in the listing, and the host was incredibly communicative and helpful. The location within the castle was truly magical, and the value for the price was very good."
  )

  puts "Done!"

end


