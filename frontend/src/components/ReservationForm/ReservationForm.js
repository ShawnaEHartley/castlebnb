import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Select from 'react-select';

import LoginFormPage from '../UserAuthModal/LoginFormPage.js';
import { closeModalHandler } from '../../store/modal';
import { getListing, fetchListing, createReservation } from '../../store/listings';

import star from '../../assets/images/icons8-star-filled-100.png';

import './ReservationForm.css';


const ReservationForm = () => {
  
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));
  const sessionUser = useSelector(state => state.session.user);
  
  useEffect(()=> {
    dispatch(fetchListing(listingId));  
  }, [dispatch, listingId]);
  
  let today = dayjs();
  const [startDate, setStartDate] = useState(today);
  let plus5 = startDate.add(5, 'day')
  const [endDate, setEndDate] = useState(plus5);

  const duration = endDate.diff(startDate, 'd', false)

  const [numGuests, setNumGuests] = useState(0)
  let values = [];
  for (let i = 1; i <= listing.maxGuests; i++) {
    const ele = {value: i.toString(), label: i.toString()}  
    values.push(ele);
  };

  const reserve = (e) => {
      e.preventDefault();
      dispatch(createReservation({
      listing_id: listing.id,
      reserver_id: sessionUser.id,
      start_date: startDate,
      end_date: endDate,
      num_guests: parseInt(numGuests["value"])
      }))};


  const modalState = useSelector((state)=>{
    return state.modal;
  });

  const logInModalHandler = () => {
    dispatch({type: "modalOn", component: "login"});
  };

  const modalComponent = () => {
    if (modalState.component === 'login') {
      return <LoginFormPage />;
    }
  };

  return (
    <>

    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
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
            <Select 
            className='reservation-button' id='res-guests-button' 
            onChange={num => setNumGuests(num)}
            placeholder='GUESTS'
            options={values} 
            />
          </div>
        </div>
          <div className='reserve-button-wrapper'>
          { sessionUser ? <button className='reserve-button' onClick={reserve} >Reserve</button> : <button className='reserve-button' onClick={logInModalHandler} >Sign In to Reserve</button> }
            {/* <button className='reserve-button' onClick={reserve} >Reserve</button> */}
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
    </>
  )

};

export default ReservationForm;