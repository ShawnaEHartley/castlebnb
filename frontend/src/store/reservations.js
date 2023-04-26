import { closeModalHandler } from "./modal";
import csrfFetch from "./csrf";
import { merge } from 'lodash';

export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION'

const receiveReservations = reservations => {
  return {
    type: RECEIVE_RESERVATIONS,
    payload: reservations
  };
};

export const getReservations = state => {
  if (state.reservations) {
    return Object.values(state.reservations);
  } else {
    return [];
  }
};

export const fetchReservations = () => async dispatch => {
  const res = await csrfFetch('/api/reservations');

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservations(data.reservations));
    return res;
  }
};

// export const fetchReservationsByUser = (userId) => async dispatch => {
//   const res = await csrfFetch(`/api/reservations/${userId}`);

//   if (res.ok) {
//     const data = await res.json();
//     dispatch(receiveReservations(data.reservations));
//     return res;
//   }
// };

const receiveReservation = (reservation) => {
  return {
    type: RECEIVE_RESERVATION,
    payload: reservation
  }
};

export const getReservation = reservationId => state => {
  if (state.reservations) {
    return state.reservations.currentReservations[reservationId]
  } else { 
    return null;
  }
};

export const fetchReservation = (reservationId) => async dispatch => {
  const res = await fetch (`/api/reservations/${reservationId}`);
  if (res.ok) {
    const reservation = await res.json();
    dispatch(receiveReservation(reservation));
    return res;
  }
};

export const createReservation = (history, reservation) => async dispatch => {
  let res;

  try { 
    res = await csrfFetch(`/api/listings/${reservation.listing_id}/reservations/`, {
    method: 'POST',
    body: JSON.stringify(reservation)
  });
  } catch (error) {
    if (error.status === 409) {
      alert('Dates already taken, please choose another listing or dates')
    }}
    
  if (res && res.ok) {
    const data = await res.json();
    history.push(`/reservations/${data.reservationId}/confirmation`);
  } 
  return res;
};

export const updateReservation = (reservation) => async dispatch => {
  let res;

  try {
    res = await csrfFetch(`/api/reservations/${reservation.id}/`, {
    method: 'PATCH',
    body: JSON.stringify(reservation)
  });
  } catch (error) {
    if (error.status === 409) {
      alert ('Dates already taken, please choose another listing or dates')
    }}

  if (res && res.ok) {
    dispatch(fetchReservations());
    dispatch(closeModalHandler());
  }
  return res;
};

const removeReservation = reservationId => {
  return {
    type: REMOVE_RESERVATION,
    payload: reservationId
  };
};

export const deleteReservation = (reservationId) => async dispatch => {
  const res = await csrfFetch(`/api/reservations/${reservationId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    dispatch(removeReservation(reservationId))
    dispatch(fetchReservations());
    dispatch(closeModalHandler());
  }
  return res;
};

const reservationsReducer = (state = {currentReservations:{}, pastReservations:{}}, action) => {
  // let newState = { ...state };
  let newState = merge({}, state)

  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return {...newState, ...action.payload};
    case RECEIVE_RESERVATION:
      newState.currentReservations[action.payload.id] = action.payload;
      return newState;
    case REMOVE_RESERVATION:
      delete(newState.currentReservations[action.payload]);
      return newState;
    default:
      return newState;
  }
};

export default reservationsReducer;