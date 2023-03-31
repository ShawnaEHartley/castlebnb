import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/listings";
import './ReviewIndexItem.css';

const ReviewIndexItem = ({review, listingID}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const removeReview = (e) => {
    e.preventDefault();
    dispatch(deleteReview(review, listingID));
  }

  return (
    <div className='review-index-item'>
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
      { sessionUser && sessionUser.id === review.author.authorId ? <button onClick={removeReview}>Remove Review</button> : "" }
    </div>
  )
};

export default ReviewIndexItem;