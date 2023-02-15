import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getListing } from '../../store/listings';
import { fetchListing } from '../../store/listings';

import star from '../../assets/images/icons8-star-filled-100.png';

import './ReservationForm.css';


const ReservationForm = () => {
  
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));

  
  useEffect(()=> {
    dispatch(fetchListing(listingId));  
  }, [dispatch, listingId]);



  return (
    <div className='reservation-section'>
    <div className='reservation-outter-wrapper'>
      <div className='reservation-header'>
        <div className='reservation-price-wrapper'>
          <div className='reservation-cost'> ${listing.price}</div>
          <div className='reservation-cost-text'>night</div>
        </div>
        <div className='reservation-review-pane'>
          <img src={star} alt="star" className='icon subtitle-left-item' id='show-icon-star' />
          <div className='icon-text subtitle-left-item' id='show-icon-rating-text'>4.76</div>
          <span className='subtitle-left-item'>·</span>
          <div className='icon-text subtitle-left-item' id='show-icon-review-text'>27 reviews</div>
        </div>
      </div>

      <div className='reservation-content-wrapper'>
        <div className='reservation-content-body'>
        <div className='reservation-input-wrapper'>

          <div className='reservation-content-dates'>
            <button className='reservation-button' id='res-checkin-button'>CHECK-IN</button>
            <button className='reservation-button' id='res-checkout-button'>CHECKOUT</button>
          </div>
          <div className='reservation-guests'>
            <button className='reservation-button' id='res-guests-button'>GUESTS</button>
          </div>
        </div>
          <div className='reserve-button-wrapper'>
            <button className='reserve-button'>Reserve</button>
          </div>
          <div className='reservation-subtext'>You won't be charged yet</div>
        </div>

        <div className='reservation-pricing'>
          <div className='reservation-total-wrapper'>
            <div className=' res-title reservation-nightly-calc'>${listing.price} x 5 nights</div>
            <div className='reservation-total-nightly-price'>${listing.price * 5}</div>
          </div>
          <div className='reservation-total-wrapper'>
            <div className='res-title reservation-cleaning-title'>Cleaning fee</div>
            <div className='reservation-cleaning-price'> ${listing.price * .3}</div>
          </div>
          <div className='reservation-total-wrapper'>
            <div className='res-title reservation-service-title'>Service Fee</div>
            <div className='reservation-service-price'>${listing.price * .7}</div>
          </div>
          <div className="respage-line"></div>
          <div className='reservation-total-wrapper'>
            <div className="reservation-line-bold">Total before taxes</div>
            <div className='reservation-total-price'>${listing.price * 6}</div>
          </div>
        </div>


      </div>
    </div>
    </div>
  )

};

export default ReservationForm;