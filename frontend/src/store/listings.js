import { STATIC_LISTINGS_INDEX, STATIC_LISTINGS_SHOW } from './staticData';

export const RECEIVE_LISTING  = 'listings/RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';

const receiveListing  = listing  => ({ type: RECEIVE_LISTING,  payload: listing });
const receiveListings = listings => ({ type: RECEIVE_LISTINGS, payload: listings });

export const getListing  = listingId => state =>
  state.listings?.show?.[listingId] ?? null;

export const getListings = state =>
  state.listings?.index ? Object.values(state.listings.index) : [];

export const fetchListing = listingId => async dispatch => {
  const base = STATIC_LISTINGS_SHOW[listingId];
  if (!base) return;

  // merge any localStorage reviews on top of seed reviews
  const stored = JSON.parse(localStorage.getItem('castlebnb_reviews') || '[]');
  const extra  = stored.filter(r => r.listingId === Number(listingId));
  const storedRes = JSON.parse(localStorage.getItem('castlebnb_reservations') || '[]');
  const listingReservations = storedRes
    .filter(r => r.listing_id === Number(listingId))
    .map(r => ({ start_date: r.start_date, end_date: r.end_date, reserver: { fullName: r.reserver_name } }));

  const allReviews = [...base.listingReviews, ...extra];

  let reviewAverage = base.reviewAverage;
  if (allReviews.length > 0) {
    const avg = (key) =>
      Math.round((allReviews.reduce((s, r) => s + r[key], 0) / allReviews.length) * 100) / 100;
    const cl = avg('cleanlinessRating'), co = avg('communicationRating'),
          ch = avg('checkinRating'),     ac = avg('accuracyRating'),
          lo = avg('locationRating'),    va = avg('valueRating');
    reviewAverage = {
      cleanlinessRating: cl, communicationRating: co, checkinRating: ch,
      accuracyRating: ac,    locationRating: lo,      valueRating: va,
      overallRating: Math.round(((cl+co+ch+ac+lo+va)/6) * 100) / 100,
    };
  }

  dispatch(receiveListing({ ...base, listingReviews: allReviews, reviewAverage, listingReservations }));
};

export const fetchListings = () => async dispatch => {
  dispatch(receiveListings(STATIC_LISTINGS_INDEX));
};

let _nextReviewId = 100;

export const createReview = (review) => async dispatch => {
  const stored = JSON.parse(localStorage.getItem('castlebnb_reviews') || '[]');
  const newReview = {
    id: _nextReviewId++,
    listingId: review.listing_id,
    body: review.body,
    cleanlinessRating: review.cleanliness_rating,
    communicationRating: review.communication_rating,
    checkinRating: review.checkin_rating,
    accuracyRating: review.accuracy_rating,
    locationRating: review.location_rating,
    valueRating: review.value_rating,
    author: { fullName: review.authorName || 'You', authorId: review.user_id },
  };
  localStorage.setItem('castlebnb_reviews', JSON.stringify([...stored, newReview]));
  dispatch(fetchListing(review.listing_id));
};

export const deleteReview = (review, listingID) => async dispatch => {
  const stored = JSON.parse(localStorage.getItem('castlebnb_reviews') || '[]');
  localStorage.setItem('castlebnb_reviews', JSON.stringify(stored.filter(r => r.id !== review.id)));
  dispatch(fetchListing(listingID));
};

export const updateReview = (review) => async dispatch => {
  const stored = JSON.parse(localStorage.getItem('castlebnb_reviews') || '[]');
  const updated = stored.map(r => r.id === review.id ? { ...r,
    body: review.body,
    cleanlinessRating: review.cleanliness_rating,
    communicationRating: review.communication_rating,
    checkinRating: review.checkin_rating,
    accuracyRating: review.accuracy_rating,
    locationRating: review.location_rating,
    valueRating: review.value_rating,
  } : r);
  localStorage.setItem('castlebnb_reviews', JSON.stringify(updated));
  dispatch(fetchListing(review.listingId));
};

const listingsReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_LISTING:
      newState.show = { ...(newState.show || {}), [action.payload.id]: action.payload };
      newState.index = null;
      return newState;
    case RECEIVE_LISTINGS:
      newState.index = action.payload;
      newState.show  = null;
      return newState;
    default:
      return newState;
  }
};

export default listingsReducer;
