import csrfFetch from "./csrf"

export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION'

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

const receiveReservation = (reservation) => {
  return {
    type: RECEIVE_RESERVATION,
    payload: reservation
  }
};

export const getReservation = reservationId => state => {
  if (state.reservations) {
    return state.reservations[reservationId]
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
}

const reservationsReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return {...newState, ...action.payload};
    case RECEIVE_RESERVATION:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return newState;
  }
};

export default reservationsReducer;