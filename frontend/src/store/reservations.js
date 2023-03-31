import csrfFetch from "./csrf"

export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'

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
  const res = await csrfFetch('api/reservations');

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReservations(data.reservations));
    return res;
  }
};

const reservationsReducer = (state = {}, action) => {
  // let newState = { ...state };

  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return action.payload;
    default:
      break;
  }
};

export default reservationsReducer;