import ReviewIndexItem from "./ReviewIndexItem";
import StarRatingComponent from 'react-star-rating-component';
import './ReviewIndex.css';


const ReviewIndex = ({listing}) => {
  return (
    <div className='review-index-wrapper'>

      <div className='review-index-star-wrapper'>
        <div className='review-index-star'>
          <div>Cleanliness</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.cleanlinessRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star'>
          <div>Communication</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.communicationRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star'>
          <div>Check in</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.checkinRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star'>
          <div>Accuracy</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.accuracyRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star'>
          <div>Location</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.locationRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star'>
          <div>Value</div>
          <div>
            <StarRatingComponent
              value={listing.reviewAverage.valueRating}
              editing={false}
              starCount={5}
            />
          </div>
      </div>
      </div>
      { listing.listingReviews.map(review => <ReviewIndexItem review={review} key={review.id} />) }
    </div>
  )
};

export default ReviewIndex;