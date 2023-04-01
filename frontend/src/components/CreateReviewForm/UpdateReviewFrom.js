import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import StarRatingComponent from 'react-star-rating-component';

import { getListing, updateReview } from '../../store/listings';
import { closeModalHandler } from '../../store/modal';

import './CreateReviewForm.css';

const UpdateReviewForm = ({review}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const {listingId} = useParams();
  const listing = useSelector(getListing(listingId));

  const [cleanliness, setCleanliness] = useState(review.cleanlinessRating);
  const [communication, setCommunication] = useState(review.communicationRating);
  const [checkin, setCheckin] = useState(review.checkingRating);
  const [accuracy, setAccuracy] = useState(review.accuracyRating);
  const [location, setLocation] = useState(review.locationRating);
  const [value, setValue] = useState(review.valueRating);
  const [body, setBody] = useState(review.body);


  const submitReviewEdit = (e) => {
    e.preventDefault();

    dispatch(updateReview({
      ...review,
      cleanliness_rating: cleanliness,
      communication_rating: communication,
      checkin_rating: checkin,
      accuracy_rating: accuracy,
      location_rating: location,
      value_rating: value,
      body: body
    }));

    dispatch(closeModalHandler());
  };

  return (
    <form className='review-form-outter-wrapper' onSubmit={submitReviewEdit}>
    <div className='review-form-user'>Welcome, {sessionUser.fullName}</div>
    <div className='review-form-title'>Below, please update your review for {listing.title}</div>
    <div className='review-form-sub-title'></div>
    <div className='review-form-rating-wrapper'>
      <div className='review-form-ratings'>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Cleanliness</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={cleanliness} onStarClick={setCleanliness} />
        </div>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Communication</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={communication} onStarClick={setCommunication} />
        </div>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Check-in</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={checkin} onStarClick={setCheckin} />
        </div>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Accuracy</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={accuracy} onStarClick={setAccuracy} />
        </div>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Location</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={location} onStarClick={setLocation} />
        </div>
        <div className='review-form-input'>
          <div className='review-form-input-title'>Total Value</div>
          <StarRatingComponent name='cleanliness' starCount={5} value={value} onStarClick={setValue} />
        </div>
      </div>
    </div>
    <div className='review-form-body-wrapper'>
      <textarea className='review-form-body-input' value={body} onChange={e => {setBody(e.target.value)}}></textarea>
    </div>
    <div className='review-form-submit-wrapper'>
      <button className='review-form-submit-button'>Update your review</button>
    </div>
    </form>
  )
};

export default UpdateReviewForm;