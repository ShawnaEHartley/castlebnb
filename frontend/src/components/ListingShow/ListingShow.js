import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchListing, getListing } from '../../store/listings';
import NavBar from "../NavBar/NavBar";

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
  }, [dispatch, listingId])

  if (!listing) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <NavBar />
      <div className='listing-show-page'>

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

        <div className='picture-wrapper'>
          <img src={pic} alt="coming soon" className='main-pic' />
        </div>

        <div className='description-wrapper'>
          <div className='description-title'>Description</div>
          <p className='description-content'>{listing.description}</p>
        </div>
        
      </div>
    </div>
  )
};

export default ListingShow;