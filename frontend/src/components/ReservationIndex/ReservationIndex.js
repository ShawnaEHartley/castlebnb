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


  return (
    <div className='res-index-wrapper'>
      <div className='res-index-title'>Trips</div>
      {console.log(reservations)}
        <div className='res-index'>
          {reservations.map((reservation) => {
            return (
              reservation ? <ReservationIndexItem reservation={reservation} key={reservation.id} /> : 'loading' 
            )
          })}
        </div>

      <div className='res-index-subtitle'> Where you've been</div>
        <div className='res-index'>
        {reservations.map((reservation) => {
          return (
            reservation ? <ReservationIndexItem reservation={reservation} key={reservation.id} /> : 'loading' 
          )
        })}
        </div>
    </div>
  )
};

export default ReservationIndex;