import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Select from 'react-select';

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

  
  let today = dayjs();
  const [startDate, setStartDate] = useState(today);
  let plus5 = startDate.add(5, 'day')
  const [endDate, setEndDate] = useState(plus5);

  const duration = endDate.diff(startDate, 'd', false)

  let values = [];
  for (let i = 0; i < listing.maxGuests; i++) {
    const ele = {value: i.toString(), label: i.toString()}  
    values.push(ele);
  };


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
          <a href='#show-page-review-wrapper' className='icon-text subtitle-left-item' id='show-icon-review-text'>{listing.listingReviews.length} reviews</a>
        </div>
      </div>

      <div className='reservation-content-wrapper'>
        <div className='reservation-content-body'>
        <div className='reservation-input-wrapper'>
          <div className='reservation-content-dates'>
            <DatePicker
            className='reservation-button' id='res-checkin-button'
            value={startDate}
            onChange={date => {
              setStartDate(date);
              if (date.isAfter(endDate)) {
                setEndDate(date.add(5, 'day'));
              }
            }}
            />
            <DatePicker
            className='reservation-button' id='res-checkin-button'
            value={endDate}
            onChange={date => setEndDate(date)}
            />
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
            <div className=' res-title reservation-nightly-calc'>${listing.price} x {duration} nights</div>
            <div className='reservation-total-nightly-price'>${listing.price * duration}</div>
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
            <div className='reservation-total-price'>${listing.price * (duration + 1)}</div>
          </div>
        </div>


      </div>
    </div>
    </div>
  )

};

export default ReservationForm;