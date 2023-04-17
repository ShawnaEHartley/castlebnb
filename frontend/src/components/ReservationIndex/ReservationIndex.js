import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, getReservations } from "../../store/reservations";
import ReservationIndexItem from './ReservationIndexItem';


const ReservationIndex = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(getReservations);
  
  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch])

  if (!reservations[0]) {
    return (
      <div className='res-index-wrapper'>
      </div>
    )
  } else {
    const currentReservations = reservations[0].currentReservations;
    const pastReservations = reservations[0].pastReservations;
  
    return (
      <div className='res-index-wrapper'>
        <div className='res-index-title'>Trips</div>
          <div className='res-index'>
            {!currentReservations ? <div>No Stays Booked</div> : currentReservations.map((reservation) => {
              return (
                <ReservationIndexItem reservation={reservation} key={reservation.id} />
              )
            })}
          </div>
  
        <div className='res-index-subtitle'> Where you've been</div>
          <div className='res-index'>
          {!pastReservations ? <div></div> : pastReservations.map((reservation) => {
            return (
              <ReservationIndexItem reservation={reservation} key={reservation.id} />
            )
          })}
          </div>
      </div>
    )
  }

};

export default ReservationIndex;