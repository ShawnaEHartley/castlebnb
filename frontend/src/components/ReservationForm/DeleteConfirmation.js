import { useDispatch } from 'react-redux';
import { deleteReservation, fetchReservations } from "../../store/reservations";
import { closeModalHandler } from "../../store/modal";
import './ReservationForm.css'

const DeleteConfirmation = ({reservation}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalHandler())
  }

  const deleteRes = (e) => {
    e.preventDefault();
    dispatch(deleteReservation(reservation.id))
  };
  return (
    <div className='reservation-outter-wrapper'>
      <div className='reservation-subtitle'>Are you sure you want to delete this reservation?</div>
      <button className='reserve-button' onClick={deleteRes}>Confirm delete</button>
      <button className='reserve-button' onClick={closeModal}>Nevermind</button>
    </div>
  )
};

export default DeleteConfirmation;