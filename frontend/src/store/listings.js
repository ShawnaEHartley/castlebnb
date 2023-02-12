import csrfFetch from './csrf';

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
  console.log('I AM in the get listing')
  if (state.listings) {
    console.log(state.listings)
    return state.listings[listingId];
  } else {
    console.log("null")
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
    dispatch(receiveListing(data.listing));
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

const listingsReducer = (state = {}, action) => {
  let newState = { ...state };

  switch (action.type) {
    case RECEIVE_LISTING:
      newState[action.payload.id] = action.payload;
      return newState;
    case RECEIVE_LISTINGS:
      return action.payload;
    default:
      return state;
  }
};

export default listingsReducer;