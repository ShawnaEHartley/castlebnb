import csrfFetch from './csrf';
import { closeModalHandler } from './modal';
import { fetchReservations } from './reservations';


export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';

const receiveListing = listing => {
  return {
    type: RECEIVE_LISTING,
    payload: listing
  };
};

const receiveListings = listings => {
  return {
    type: RECEIVE_LISTINGS,
    payload: listings
  };
};

export const getListing = listingId => state => {
  if (state.listings) {
    return state.listings[listingId];
  } else {
    return null;
  }
};

export const getListings = state => {
  if (state.listings) {
    return Object.values(state.listings);
  } else {
    return [];
  }
};

export const fetchListing = listingId => async dispatch => {
  const res = await csrfFetch(`/api/listings/${listingId}`);
  
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveListing(data));
    return res;
  }
};

export const fetchListings = () => async dispatch => {
  const res = await csrfFetch(`/api/listings`);
  
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveListings(data.listings));
    return res;
  }
};


export const createReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/`, {
    method: 'POST',
    body: JSON.stringify(review)
  });
  
  if (res.ok) {
    // const data = await res.json();
    dispatch(fetchListing(review.listing_id));
  }
  return res;
};

export const deleteReview = (review, listingID) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "DELETE"
  });
  if (res.ok) {
    dispatch(fetchListing(listingID));
  }
  return res;
};

export const updateReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PATCH',
    body: JSON.stringify(review)
  });

  if (res.ok) {
    dispatch(fetchListing(review.listingId))
  }
  return res;
};

export const createReservation = (history, reservation) => async dispatch => {
  console.log('1')
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
  const res = await csrfFetch(`/api/reservations/${reservation.id}/`, {
    method: 'PATCH',
    body: JSON.stringify(reservation)
  });

  if (res.ok) {
    dispatch(fetchReservations());
    dispatch(closeModalHandler());
  }
  return res;
};

export const deleteReservation = (reservationId) => async dispatch => {
  const res = await csrfFetch(`/api/reservations/${reservationId}`, {
    method: 'DELETE'
  });
  if (res.ok) {
    dispatch(fetchReservations());
    dispatch(closeModalHandler());
  }
  return res;
};


const listingsReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case RECEIVE_LISTING:
      newState[action.payload.id] = action.payload;
      return newState;
    case RECEIVE_LISTINGS:
      return action.payload;
    default:
      return newState;
  }
};

export default listingsReducer;