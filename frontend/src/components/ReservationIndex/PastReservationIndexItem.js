import dayjs from 'dayjs';
import './ReservationIndex.css';

const ReservationIndexItem = ({reservation}) => {

  const start = dayjs(reservation.startDate);
  const end = dayjs(reservation.endDate);
  const duration = end.diff(start, 'day');
  
  const formattedStart = start.locale('en').format('MMM D');
  const formattedEnd = end.locale('en').format('MMM D');
  
  const totalCost = (duration+1) * reservation.listing.pricePerNight;

  
  if (!reservation.listing) {
    return <div></div>
  };

  return (
    <div className='reservation-item-wrapper'>
      <div className='reservation-item-left'>
        <img className='reservation-item-pic' src={reservation.listing.image} alt={reservation.listing.title} />
      </div>
      <div className='reservation-item-content'>
        <div className='reservation-item-title'>{reservation.listing.title}</div>
        <div className='reservation-item-text'>Hosted by {reservation.listing.owner.name}</div>
          <div className='reservation-item-text'>{formattedStart} - {formattedEnd}</div>
          <div className='reservation-item-text'>Total Cost = ${totalCost}</div>
      </div>
      <div className='reservation-item-right'>
      </div>
    </div>
  )
};

export default ReservationIndexItem;