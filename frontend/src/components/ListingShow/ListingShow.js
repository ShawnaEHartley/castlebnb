import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchListing, getListing } from '../../store/listings';
import { closeModalHandler } from '../../store/modal';

import star from '../../assets/images/icons8-star-filled-100.png';
import badge from '../../assets/images/super-host.png';
import share from '../../assets/images/icons8-share-rounded-96.png';
import like from '../../assets/images/icons8-favorite-90.png';

import './ListingShow.css';

import NavBar from "../NavBar/NavBar";
import ReservationForm from '../ReservationForm/ReservationForm';
import CreateReviewForm from '../CreateReviewForm/CreateReviewForm';
import ReviewIndex from '../ReviewIndex/ReviewIndex';
import MapWrapper from '../Map/Map';


const ListingShow = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));
  const currentUser = useSelector(state => state.session.user)
  
  useEffect(()=> {
    dispatch(fetchListing(listingId));  
  }, [dispatch, listingId]);
  
  const modalState = useSelector((state)=>{
    return state.modal;
  });
  
  if (!listing) {
    return (
      <div>Loading...</div>
    )
  };

  const showDescriptionModal = () => {
    dispatch({type: 'modalOn', component: 'showDescription'});
  };

  const modalComponent = () => {
    if (modalState.component === 'showDescription') {
      return (
        <div className='listing-description-modal'>
          <button className='closebutton' onClick={()=>{dispatch(closeModalHandler())}}> x </button>
          <div className='listing-description-modal-body'>
            <div className='listing-description-modal-title'>About this space</div>
            <div className="listing-description-modal-content">
              {listing.description}
            </div>
          </div>
        </div>
      )
    } else if (modalState.component === 'showReviewForm') {
      return (
        <CreateReviewForm listing={listing}/>
      )
    }
  };

  const amenities = ["kitchen", "parking", "heating", "fireplace", "patio", "wifi", "pets", "self_checkin"]

  const writeAReview = () => {
    dispatch({type: 'modalOn', component: 'showReviewForm'})
  };

  return (
    <>
    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
    <NavBar />
    <div className='whole-show-page'>
      <div className='listing-show-page'>

      <div className='title-subtitle-outter-wrapper'>
        <div className='title-wrapper'>
          <h1 className='title'>{listing.title}</h1>
        </div>

        <div className='subtitle-wrapper'>

          <div className='subtitle-left'>
            <img src={star} alt="star" className='icon subtitle-left-item' id='show-icon-star' />
            <div className='icon-text subtitle-left-item' id='show-icon-rating-text'>{ listing.listingReviews.length ? '4.76' : 'new' }</div>
            <span className='subtitle-left-item'>·</span>
            {/* { listing.listingReviews ? <a href='#show-page-review-wrapper' className='icon-text subtitle-left-item' id='show-icon-review-text'>{listing.listingReviews.length} reviews</a> : <div>0</div>} */}
            <a href='#show-page-review-wrapper' className='icon-text subtitle-left-item' id='show-icon-review-text'>{listing.listingReviews.length} reviews</a>
            <span className='subtitle-left-item'>·</span>
            <img src={badge} alt="badge" className='icon subtitle-left-item' id='show-icon-badge' />
            <div className='icon-text subtitle-left-item' id='show-icon-host-text'>Superhost</div>
            <span className='subtitle-left-item'>·</span>
            <a href='#show-page-map-wrapper' className='location subtitle-left-item'>{listing.city}, {listing.region}</a>
          </div>

          <div className='subtitle-right'>
            <button id='share-button'>
              <img src={share} alt="share" className='icon' id='show-icon-share'/>
              <div className='icon-text' id='show-icon-share-text'>Share</div>
            </button>
            <button id='like-button'>
              <img src={like} alt="like" className='icon'/>
              <div className='icon-text' id='show-icon-like-text'>Like</div>
            </button>
          </div>
        </div>

      </div>


        <div className='picture-wrapper'>
        <div className='show-main-pic-container'>
          <img src={listing.photoUrl[0]} alt="listing-main" className='show-main-pic' />
        </div>
        <div className='show-images-container'>
          <img src={listing.photoUrl[1]} alt="" className='show-pic' id='listing-show-pic-1'/>
          <img src={listing.photoUrl[2]} alt="" className='show-pic' id='listing-show-pic-2'/>
          <img src={listing.photoUrl[3]} alt="" className='show-pic' id='listing-show-pic-3'/>
          <img src={listing.photoUrl[4]} alt="" className='show-pic' id='listing-show-pic-4'/>
        </div>
        </div>

        <div className='showpage-content-outter-wrapper'>
        <div className='showpage-content-inner-wrapper'>
          <div className='showpage-summary-info'>
            <div className='showpage-summary-host'>Castle hosted by {listing.listerName}</div>
            <div className="showpage-summary-stats">{listing.maxGuests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} bath</div>
          </div>

        <div className="showpage-line"></div>

        <div className='show-subtitle-content-wrapper'>
          <div className='show-subtitle-content'>
            <img src="https://castlebnb-seeds.s3.amazonaws.com/icon-contact-free-checkin.png" alt="contact-free-checkin" />
            <div>
              <div className='show-subtitle-content-title'>Self Check In</div>
              <div className='show-subtitle-content-subtitle'>Check yourself in with the keypad.</div>
            </div>
          </div>
          <div className='show-subtitle-content'>
            <img src="https://castlebnb-seeds.s3.amazonaws.com/super-host.png" alt="contact-free-checkin" />
            <div>
              <div className='show-subtitle-content-title'>{listing.listerName} is a superhost</div>
              <div className='show-subtitle-content-subtitle'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
            </div>
          </div>
          <div className='show-subtitle-content'>
            <img src="https://castlebnb-seeds.s3.amazonaws.com/icon-calendar.png" alt="contact-free-checkin" />
            <div className='show-subtitle-content-title'>Free cancellation for 48 hours</div>
          </div>
        </div>

        <div className="showpage-line"></div>

          <div className='description-wrapper'>
            {/* <div className='description-title'>Description</div> */}
            <div className='description-content'>{listing.description}
            </div>
            <button className='button' onClick={showDescriptionModal}>Show more </button>
          </div>

          <div className="showpage-line"></div>
        
          <div className='listing-inclusion-wrapper'>
          <div className='listing-show-inclusion-icon-title'>What this place offers</div>
          <div className='listing-inclusion-icons'>
            { amenities.map((amenity, i) => {
              if ( listing[amenity] ) {
              return (
                <div className='amenity' id={`amenity-id-${i}`} key={i}>
                  <img src={`https://castlebnb-seeds.s3.amazonaws.com/icon-${amenity}.png`} alt={amenity} />
                  <span className='amenity-text'>{amenity[0].toUpperCase() + amenity.slice(1)}</span>
                </div>
              )
              } else return ("")
            }) }
          </div>
          </div>
        </div>

        <div className='reservation-wrapper'> 
          <ReservationForm listing={listing}/>
        </div>
        </div>

        <div className='long-placeholder' id='show-page-review-wrapper'> 
          <div className='show-page-write-review-wrapper'>
          { currentUser ? <button className='write-a-review-button' onClick={writeAReview}>Write a review</button> : ""}
          </div>
          <div className='show-page-review-index-wrapper'>
            <ReviewIndex listing={listing}/>
          </div>
        </div>
        
        <div className='long-placeholder' id='show-page-map-wrapper'> 
            {/* <img className='show-page-map-image' src="https://castlebnb-seeds.s3.amazonaws.com/westeros.jpeg" alt="map_of_westeros" /> */}
            <MapWrapper center={{lat: parseInt(listing.latitude), lng: parseInt(listing.longitude)}} title={listing.title}/>
        </div>
        {/* <div className='long-placeholder'> Host Info placeholder </div> */}
        
      </div>
    </div>
    </>
  )
};

export default ListingShow;