## castlebnb

Welcome to CastleBnB. This is a clone of AirBnB which features only castle listings in Westeros.
Westeros is the continent located in the far west of the known world in A Game of Thrones.

Find your next fairytale adventure here.


Live Site:
https://castlebnb-xot7upsj5a-uc.a.run.app/




## About the Site
This web app allows users to create an account, find and book unique accomodations in various locations around Westeros.
Similar to a bed and breakfast, hosts can rent out spare rooms, private or shared, or entire places for users to stay. Guests search for avaiable listings and book a place to stay for a night, a week, or longer. This is a popular alternative to traditional hotels and provides a more unique accomodation experience to guests while providing property owners the opportunity to earn extra income on a flexible basis.

## Technologies Used:
* Ruby on Rails
* Ruby
* PostgreSQL
* JavaScript
* React
* Redux
* HTML
* CSS

## Features

### User Authentication
* Login
* Sign Up
* Logout
* Demo User Capabilities

### Listings
* TBD users can become hosts and list properties or rooms for rent
* current listings are seeded with thorough descriptions
* Future: listings will have a calendar showing availabiilty per host and reserved days

### Reviews
* Logged-in users can post a review on listings
* Future: reviews can only be posted on past reservations
* Full CRUD - Create, Read, Update, Destroy
>* Create: form on listing show page rendered via modal
>* Read: index on listing show page for all reviews on that relevant listing
>* Update: authors of reviews can edit their review via the review listings on the listing show page
>* Delete: authors of reviews can delete their reviews


### Reservations
* Logged-in users can reserve a listing for a future date
* Available dates are reflected via calendar 
* (future implementation) Read, Update, and Delete UI components for the reserver to see their reservations

### Utilization of AWS S3
** code snippet of S3 attch photos to listing

### Modal Handler in store
** code snippet of Modal Handler functionality js code

### Google Maps API implementation 
** code snippet of MapPage component

## Future Implementations
### Owner Dashboard
** Show "owned" listings and upcoming reservations for that listing
** Edit available dates per listing
** Messenging platform to listing reservers (before the reservation and in response to a review they have written)



