import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchListing, getListing } from '../../store/listings';
import NavBar from "../NavBar/NavBar";
import { closeModalHandler } from '../../store/modal';

import pic from '../../assets/images/image-coming-soon.png';
import star from '../../assets/images/icons8-star-filled-100.png';
import badge from '../../assets/images/super-host.png';
import share from '../../assets/images/icons8-share-rounded-96.png';
import like from '../../assets/images/icons8-favorite-90.png';

import './ListingShow.css';


const ListingShow = () => {
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));

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

  if (!listing.photoUrls) {
    return ( 
      <div>...loading</div>
    )
  };

  const showDescriptionModal = () => {
    dispatch({type: 'modalOn', component: 'showDescription'});
  };

  const modalComponent = () => {
    if (modalState.component === 'showDescription') {
      return (
        <div className="listing-description-modal-content">
          {listing.description}
        </div>
      )
    }
  };

  const amenities = ["kitchen", "parking", "heating", "fireplace", "patio", "wifi", "pets", "self_checkin"]


  return (
    <>
    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
    <div class='whole-show-page'>
      <NavBar />
      <div className='listing-show-page'>

      <div className='title-subtitle-outter-wrapper'>
        <div className='title-wrapper'>
          <h1 className='title'>{listing.title}</h1>
        </div>

        <div className='subtitle-wrapper'>

          <div className='subtitle-left'>
            <img src={star} alt="star" className='icon subtitle-left-item' id='show-icon-star' />
            <div className='icon-text subtitle-left-item' id='show-icon-rating-text'>4.76</div>
            <span className='subtitle-left-item'>·</span>
            <div className='icon-text subtitle-left-item' id='show-icon-review-text'>27 reviews</div>
            <span className='subtitle-left-item'>·</span>
            <img src={badge} alt="badge" className='icon subtitle-left-item' id='show-icon-badge' />
            <div className='icon-text subtitle-left-item' id='show-icon-host-text'>Superhost</div>
            <span className='subtitle-left-item'>·</span>
            <h2 className='location subtitle-left-item'>{listing.city}, {listing.region}</h2>
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
          <img src={listing.photoUrls[0]} alt="listing-main" className='show-main-pic' />
        </div>
        <div className='show-images-container'>
          <img src={listing.photoUrls[1]} alt="" className='show-pic' id='listing-show-pic-1'/>
          <img src={listing.photoUrls[2]} alt="" className='show-pic' id='listing-show-pic-2'/>
          <img src={listing.photoUrls[3]} alt="" className='show-pic' id='listing-show-pic-3'/>
          <img src={listing.photoUrls[4]} alt="" className='show-pic' id='listing-show-pic-4'/>
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
        
          <div className='listing-inclusion-icons'>
            { amenities.map((amenity, i) => {
              if ( listing[amenity] ) {
              return (
                <div className='amenity' id={`amenity-id-${i}`}>
                  <img src={`https://castlebnb-seeds.s3.amazonaws.com/icon-${amenity}.png`} alt={amenity} />
                  <span className='amenity-text'>{amenity[0].toUpperCase() + amenity.slice(1)}</span>
                </div>
              )
              } else return ("")
            }) }
          </div>
        </div>

        <div className='reservation-wrapper'> 
          <div class='reservation'>Reservation placeholder</div>
        </div>
        </div>
        <div className='long-placeholder'> Reviews placeholder </div>
        <div className='long-placeholder'> Map placeholder </div>
        <div className='long-placeholder'> Host Info placeholder </div>
        
      </div>
    </div>
    </>
  )
};

export default ListingShow;