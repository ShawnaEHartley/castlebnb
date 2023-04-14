import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchListing, getListing, updateReservation } from '../../store/listings';

import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Select from 'react-select';

import './ReservationForm.css';

const UpdateReservationForm = ({reservation}) => {
  const dispatch = useDispatch();
  const listingId = reservation.listingId
  const listing = useSelector(getListing(listingId));

  useEffect(()=> {
    dispatch(fetchListing(listingId));  
  }, [dispatch, listingId]);

  const [startDate, setStartDate] = useState(new dayjs(reservation.startDate));
  const [endDate, setEndDate] = useState(new dayjs(reservation.endDate));
  const [numGuests, setNumGuests] = useState(reservation.numGuests);
  if (!listing) {
    return (
      <div>Loading...</div>
    )
  };
  let values = [];
  for (let i = 1; i <= listing.maxGuests; i++) {
    const ele = {value: i.toString(), label: i.toString()}  
    values.push(ele);
  };
  
  const today = new dayjs()
  const duration = endDate.diff(startDate, 'd', false);
  

  const update = (e) => {
    e.preventDefault();
    dispatch(updateReservation({
      ...reservation,
      start_date: startDate,
      end_date: endDate,
      num_guests: numGuests
    }))
  };

  return (
    <div className='reservation-outter-wrapper'>
      <div className='reservation-header'>
        <div className='reservation-title'>{listing.title}</div>
        <div></div>
        <div className='reservation-price-wrapper'>
          <div className='reservation-cost'> ${listing.price}</div>
          <div className='reservation-cost-text'>night</div>
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
            minDate={today}
            />
            <DatePicker
            className='reservation-button' id='res-checkin-button'
            value={endDate}
            onChange={date => setEndDate(date)}
            minDate={startDate}
            />
          </div>
          <div className='reservation-guests'>
            <Select 
            className='reservation-button' id='res-guests-button' 
            onChange={num => setNumGuests(num)}
            placeholder={numGuests}
            value={numGuests}
            options={values} 
            />
          </div>
        </div>
          <div className='reserve-button-wrapper'>
          <button type="button" className='reserve-button' onClick={update} >Update</button> 
          </div>
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
            <div className="reservation-line-bold">New total before taxes</div>
            <div className='reservation-total-price'>${listing.price * (duration + 1)}</div>
          </div>
        </div>


      </div>
    </div>
  )
};

export default UpdateReservationForm;

