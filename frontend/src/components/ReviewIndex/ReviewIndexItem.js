import { useDispatch, useSelector } from "react-redux";
import { deleteReview, updateReview } from "../../store/listings";
import { closeModalHandler } from '../../store/modal';
import UpdateReviewForm from "../CreateReviewForm/UpdateReviewFrom";
import './ReviewIndexItem.css';

const ReviewIndexItem = ({review, listingID}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const modalState = useSelector((state)=>{
    return state.modal;
  });

  const modalComponent = () => {
    if (modalState.component === 'updateReviewForm') {
      return (
        <UpdateReviewForm review={review}/>
      )
    }
  }

  const removeReview = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review, listingID));
  };

  const updateReviewForm = () => {
    dispatch({type: 'modalOn', component: 'updateReviewForm'})
  }

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
      <div className='review-index-item-body'>{review.body} </div>
      { sessionUser && sessionUser.id === review.author.authorId ? <div><button onClick={removeReview}>Remove Review</button> <button onClick={updateReviewForm}>Update Review</button> </div>: "" }
    </div>
  )
};

export default ReviewIndexItem;