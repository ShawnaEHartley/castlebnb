import csrfFetch from './csrf';


const RECEIVE_REVIEW = 'reviews/reeceiveReview';
const RECEIVE_REVIEWS = 'reviews/receiveReviews'
const REMOVE_REVIEW = 'reviews/removeReview';

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  payload: review
});

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS, 
  payload: reviews
})

const removeReview = review => ({
  type: REMOVE_REVIEW,
  payload: review
});

export const getListingReviews = state => state.reviews ? Object.values(state.reviews) : [];

export const getReview = (reviewId) => (state) => state.reviews ? state.reviews[reviewId] : null;

export const fetchReviews = (listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${listingId}/reviews`);
  const data = await res.json();
  dispatch(receiveReviews(data.reviews))
}


export const createReview = (review) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/`, {
    method: 'POST',
    body: JSON.stringify(review)
  });
  
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveReview(data));
  }
  return res;
};

export const destroyReview = (reviewId) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE'
  });
  const data = await res.json();
  dispatch(removeReview(data));
  return res;
};

function reviewsReducer(state={}, action) {
  const newState = {...state}
  switch (action.type) {
    case RECEIVE_REVIEW:
      const review = action.payload;
      newState[review.id] = action.payload
      return newState;
    case RECEIVE_REVIEWS:
      return {...action.reviews};
    case REMOVE_REVIEW:
      return 'tbd';
    default:
      return newState;
    }
};


export default reviewsReducer;