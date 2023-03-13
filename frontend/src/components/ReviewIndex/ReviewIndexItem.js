import { useDispatch, useSelector } from 'react-redux';

import ReviewShowMoreModal from './ReviewShowMoreModal/ReviewShowMoreModal';
import { closeModalHandler } from '../../store/modal';

import './ReviewIndexItem.css';

const ReviewIndexItem = ({review}) => {
  const dispatch = useDispatch();

  const modalState = useSelector((state)=>{
    return state.modal;
  });

  const modalComponent = () => {
    if (modalState.component === 'reviewmore') {
      return <ReviewShowMoreModal />;
    }
  };

  return (
    <div className='review-index-item'>
    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
      <div className='review-index-item-author'>{review.author.fullName}</div>
      {/* <div className='review-index-item-ratings'>
        <div className='review-index-item-rating-each'>{review.cleanlinessRating}</div>
        <div className='review-index-item-rating-each'>{review.communicationRating}</div>
        <div className='review-index-item-rating-each'>{review.checkinRating}</div>
        <div className='review-index-item-rating-each'>{review.accuracyRating}</div>
        <div className='review-index-item-rating-each'>{review.locationRating}</div>
        <div className='review-index-item-rating-each'>{review.valueRating}</div>
      </div> */}
      <div className='review-index-item-body'>{review.body}</div>
      <button className='review-index-item-show-more-button' review={review}>Show more </button>
    </div>
  )
};

export default ReviewIndexItem;