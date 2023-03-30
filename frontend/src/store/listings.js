import csrfFetch from './csrf';

export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_REVIEW = 'listings/RECEIVE_REVIEW';

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

export const createReservation = reservation => async dispatch => {
  const res = await csrfFetch('api/reservations/', {
    method: 'POST',
    body: JSON.stringify(reservation)
  });

  if (res.ok) {
    dispatch(fetchListing(reservation.listing_id))
  }
}


const listingsReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case RECEIVE_LISTING:
      newState[action.payload.id] = action.payload;
      return newState;
    case RECEIVE_LISTINGS:
      return action.payload;
    case RECEIVE_REVIEW:
      action.payload.id = 999;
      newState[action.payload.listing_id].listingReviews.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;