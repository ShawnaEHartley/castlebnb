import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getReservation, fetchReservation } from '../../store/reservations';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const reservationId = parseInt(params["reservationId"])
  const reservations = useSelector(state => state.reservations.currentReservations)
  const reservation = reservations[reservationId]
  
  useEffect(() => {
    dispatch(fetchReservation(reservationId))
  }, [dispatch, reservationId])


  if (!reservation) {
    return (
      <div>Loading...</div>
    )
  };
  
  const returnHome = () => {
    history.push('/')
  };

  const dateObj = new Date(reservation.startDate);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const date = `${month}/${day}/${year}`

  return (
    <div className='confirmation-page'>
      <div className='confirmation-wrapper'>
        <div className='confirmation-text'>{reservation.reserver.name} - you have great taste</div>
        <div className='confirmation-header'>You are confirmed!</div>
        <div className='confirmation-text'>We look forward to welcoming you to </div>
        <div className='confirmation-subheader'>{reservation.listing.title}</div>
        <div className='confirmation-text'>on {date}</div>
        <button className='confirmation-button' onClick={returnHome}>Find another stay</button>
      </div>
    </div>
  )
};

export default ConfirmationPage;