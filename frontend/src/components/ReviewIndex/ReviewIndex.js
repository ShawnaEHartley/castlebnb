import ReviewIndexItem from "./ReviewIndexItem";
import StarRatingComponent from 'react-star-rating-component';
import './ReviewIndex.css';


const ReviewIndex = ({listing}) => {
  return (
    <div className='review-index-wrapper'>

      <div className='review-index-star-wrapper'>
        <div className='review-index-star' title={listing.reviewAverage.cleanlinessRating.toFixed(2)}>
          <div>Cleanliness</div>
          <div>
            <StarRatingComponent
              name='cleanliness'
              value={listing.reviewAverage.cleanlinessRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star' title={listing.reviewAverage.communicationRating.toFixed(2)}>
          <div>Communication</div>
          <div>
            <StarRatingComponent
              name='communication'
              value={listing.reviewAverage.communicationRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star' title={listing.reviewAverage.checkinRating.toFixed(2)}>
          <div>Check in</div>
          <div>
            <StarRatingComponent
              name='checkin'
              value={listing.reviewAverage.checkinRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star' title={listing.reviewAverage.accuracyRating.toFixed(2)}>
          <div>Accuracy</div>
          <div>
            <StarRatingComponent
              name='accuracy'
              value={listing.reviewAverage.accuracyRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star' title={listing.reviewAverage.locationRating.toFixed(2)}>
          <div>Location</div>
          <div>
            <StarRatingComponent
              name='location'
              value={listing.reviewAverage.locationRating}
              editing={false}
              starCount={5}
            />
          </div>
        </div>
        <div className='review-index-star' title={listing.reviewAverage.valueRating.toFixed(2)}>
          <div>Value</div>
          <div>
            <StarRatingComponent
              name='value'
              value={listing.reviewAverage.valueRating}
              editing={false}
              starCount={5}
            />
          </div>
      </div>
      </div>
      { listing.listingReviews.map(review => <ReviewIndexItem review={review} key={review.id} listingID={listing.id} />) }
    </div>
  )
};

export default ReviewIndex;