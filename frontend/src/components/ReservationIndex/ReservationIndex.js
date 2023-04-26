import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations } from "../../store/reservations";
import ReservationIndexItem from './ReservationIndexItem';
import PastReservationIndexItem from './PastReservationIndexItem';


const ReservationIndex = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(state => {
    return state.reservations});
  
  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch])

  if (!reservations.currentReservations[0]) {
    return (
      <div className='res-index-wrapper'>
      </div>
    )
  } else {
  
    return (
      <div className='res-index-wrapper'>
        <div className='res-index-title'>Trips</div>
          <div className='res-index'>
            {!reservations.currentReservations ? <div>No Stays Booked</div> : Object.values(reservations.currentReservations).map((reservation) => {
              return (
                <ReservationIndexItem reservation={reservation} key={reservation.id} />
              )
            })}
          </div>
  
        <div className='res-index-subtitle'> Where you've been</div>
          <div className='res-index'>
          {!reservations.pastReservations ? <div></div> : Object.values(reservations.pastReservations).map((reservation) => {
            return (
              <PastReservationIndexItem reservation={reservation} key={reservation.id} />
            )
          })}
          </div>
      </div>
    )
  }

};

export default ReservationIndex;