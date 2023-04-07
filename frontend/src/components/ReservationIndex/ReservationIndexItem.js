import dayjs from 'dayjs';
import './ReservationIndex.css';

const ReservationIndexItem = ({reservation}) => {

  const start = dayjs(reservation.startDate);
  const end = dayjs(reservation.endDate);
  const duration = end.diff(start, 'day');

  const formattedStart = reservation.startDate.split('T')[0]
  const formattedEnd = reservation.endDate.split('T')[0]

  const totalCost = (duration+1) * reservation.listing.pricePerNight

  return (
    <div className='reservation-item-wrapper'>
    {/* <a href={`/listings/${reservation.listingId}`}> */}
      <div className='reservation-item-left'>
        <img className='reservation-item-pic' src={reservation.listing.image} alt={reservation.listing.title} />
      </div>
      <div className='reservation-item-content'>
        <div className='reservation-item-title'>{reservation.listing.title}</div>
        <div>Hosted by {reservation.listing.owner.name}</div>
        <div>Your Reservation Details
          <div>Dates: {formattedStart} - {formattedEnd}</div>
          {/* <div>Total Cost = {duration} days * {reservation.listing.pricePerNight} + Service and Cleaning Fees = {totalCost} </div> */}
          <div>Total Cost = {totalCost}</div>
        </div>
      </div>
      <div className='reservation-item-right'>
        <button>update</button>
        <button>delete</button>
      </div>
    </div>
  )
};

export default ReservationIndexItem;
