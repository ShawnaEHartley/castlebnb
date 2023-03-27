import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { closeModalHandler } from '../../store/modal';
import { createReview } from '../../store/listings';
import './CreateReviewForm.css';


const CreateReviewForm = ({listing}) => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [cleanliness, setCleanliness] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [checkin, setCheckin] = useState(5);
  const [accuracy, setAccuracy] = useState(5);
  const [location, setLocation] = useState(5);
  const [value, setValue] = useState(5);
  const [body, setBody] = useState('');


  const submitReview = (e) => {
    e.preventDefault();
      dispatch(createReview({
        listing_id: listing.id,
        user_id: sessionUser.id,
        cleanliness_rating: cleanliness,
        communication_rating: communication,
        checkin_rating: checkin,
        accuracy_rating: accuracy,
        location_rating: location,
        value_rating: value,
        body: body
      }));

      // Future implementation - close modal after we get a response from the backend that the review has been posted
    dispatch(closeModalHandler());
  };


  return (
    <form className='review-form-outter-wrapper' onSubmit={submitReview}>
      <div className='review-form-user'>Welcome, {sessionUser.fullName}</div>
      <div className='review-form-title'>Below, please write your review for {listing.title}</div>
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
        <textarea className='review-form-body-input' placeholder='Write your review here...' value={body} onChange={e => {setBody(e.target.value)}}></textarea>
      </div>
      <div className='review-form-submit-wrapper'>
        <button className='review-form-submit-button'>Submit your review</button>
      </div>
    </form>
  )
};

export default CreateReviewForm;