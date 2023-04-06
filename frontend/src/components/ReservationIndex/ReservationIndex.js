import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, getReservations } from "../../store/reservations";
import ReservationIndexItem from './ReservationIndexItem';


const ReservationIndex = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const reservations = useSelector(getReservations);
  
  useEffect(() => {
    dispatch(fetchReservations())
  }, [dispatch])

  const myReservations = () => {
    const arr = [];
    reservations.each(reservation => {
      if (reservation.reserverId === sessionUser) {
        arr.push(reservation)
      }
    });
    return arr
  };

  return (
    <div className='res-index-wrapper'>
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