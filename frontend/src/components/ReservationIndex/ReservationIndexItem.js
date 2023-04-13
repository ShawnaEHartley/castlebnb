import dayjs from 'dayjs';
import './ReservationIndex.css';

const ReservationIndexItem = ({reservation}) => {

  if (!reservation.listing) {
    return <div></div>
  };

  const start = dayjs(reservation.startDate);
  const end = dayjs(reservation.endDate);
  const duration = end.diff(start, 'day');

  const formattedStart = start.locale('en').format('MMM D');
  const formattedEnd = end.locale('en').format('MMM D');

  const totalCost = (duration+1) * reservation.listing.pricePerNight

  return (
    <div className='reservation-item-wrapper'>
    {/* <a href={`/listings/${reservation.listingId}`}> */}
      <div className='reservation-item-left'>
        <div>{reservation.reserverId}</div>
        <img className='reservation-item-pic' src={reservation.listing.image} alt={reservation.listing.title} />
      </div>
      <div className='reservation-item-content'>
        <div className='reservation-item-title'>{reservation.listing.title}</div>
        <div>Hosted by {reservation.listing.owner.name}</div>
          <div>{formattedStart} - {formattedEnd}</div>
          {/* <div>Total Cost = {duration} days * {reservation.listing.pricePerNight} + Service and Cleaning Fees = {totalCost} </div> */}
          <div>Total Cost = {totalCost}</div>
      </div>
      <div className='reservation-item-right'>
        <button>update</button>
        <button>delete</button>
      </div>
    </div>
  )
};

export default ReservationIndexItem;
