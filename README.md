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

<img width="389" alt="Screenshot 2023-04-26 at 2 53 02 PM" src="https://user-images.githubusercontent.com/116672563/234674803-34181472-2cef-46db-a7ca-5606e7892937.png">

<img width="610" alt="Screenshot 2023-04-26 at 2 54 28 PM" src="https://user-images.githubusercontent.com/116672563/234675032-32cae987-247c-4449-a0f1-2fd85668d4e5.png">


### Listings
* listings are seeded with thorough descriptions, photos, and relevant details to make a reservation
* Future: listings will have a calendar showing availabiilty per host and reserved days, users can become hosts and list properties or rooms for rent

<img width="587" alt="Screenshot 2023-04-26 at 2 56 38 PM" src="https://user-images.githubusercontent.com/116672563/234675499-bcaff23c-9e8d-4692-bb9a-2d1da7aaa526.png">

### Reviews
* Logged-in users can post a review on listings
* Future: reviews can only be posted on past reservations
* Full CRUD - Create, Read, Update, Delete
>* Create: form on listing show page rendered via modal
>* Read: index on listing show page for all reviews on that relevant listing
>* Update: authors of reviews can edit their review via the review listings on the listing show page
>* Delete: authors of reviews can delete their reviews

<img width="575" alt="Screenshot 2023-04-26 at 2 57 11 PM" src="https://user-images.githubusercontent.com/116672563/234675636-62057a5a-3635-47c9-a7a9-98d913876881.png">


### Reservations
* Logged-in users can reserve a listing for a future date
* Future: Available dates are reflected via calendar 
* Full CRUD - Read, Update, and Delete UI components for the reserver to see their reservations
>* Create: form on listing show page
>* Read: index of reservations by user (filtered in the backend) shown on user Trips page
>* Update: via user Trips page, update form rendered via modal
>* Delete: via user Trips page, delete and confirmation via modal

### Utilization of AWS S3
* Utilized active storage and AWS S3 buckets to attached images to seeded (saved to variables) listings

```
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
  ```

### Modal Handler in store
* Redux store modal enables any component to call the modal and pass any component or prop to the modal functionality
```
  export const closeModalHandler = () => {
    return {type: "modalOff"}
  };

const ModalReducer = (state = {on:false, component:null}, action) => {
  //any component can ask for the current modal state
    switch (action.type) {
      case "modalOn":
        return {on: true, component: action.component, reviewId: action.reviewId, reservationId: action.reservationId};
      case "modalOff":
        return {on: false, component: null};
      default:
        return state;
    }

};

export default ModalReducer;
```

### Modal function within a component
```
  const logInModalHandler = () => {
    dispatch({type: "modalOn", component: "login"});
  };

  const logOutHandler = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.logout())
  };

  const modalComponent = () => {
    if (modalState.component === "signup") {
      return <SignUpPage />;
    } else if (modalState.component === 'login') {
      return <LoginFormPage />;
    }
  };
```

### Google Maps API implementation 
* Utilized Google Maps API for all listings and each individual listing with markers placed via latitude and longitude coordinates
```
  function MyMapComponent() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const listings = useSelector(getListings);
  const history = useHistory();

  useEffect(()=>{
    dispatch(fetchListings())
  }, [dispatch])

  const center = {lat: 0.531464e2, lng: 0.3379e0};
  const zoom = 6

  useEffect(()=> {
    const myMap = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    
    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];
      
      const lat = parseInt(listing["latitude"]);
      const long = parseInt(listing["longitude"]);
      const center = {lat: lat, lng: long};

      const title = listing["title"]
      
      const marker = new window.google.maps.Marker({
        position: center,
        map: myMap,
        title: title,
        optimized: false
      }, [center, zoom, title]);
      marker.addListener("click", () => {
        history.push(`/listings/${listing.id}`)
      })
    }
  })
  return <div ref={ref} id='mappage' />;
}; 

```


<img width="1436" alt="Screenshot 2023-04-26 at 2 46 31 PM" src="https://user-images.githubusercontent.com/116672563/234673229-8f30effd-f997-4b10-9adb-1de8debb1bf0.png">



## Future Implementations
### Owner Dashboard
* Show "owned" listings and upcoming reservations for that listing
* Edit available dates per listing
* Messenging platform to listing reservers (before the reservation and in response to a review they have written)



