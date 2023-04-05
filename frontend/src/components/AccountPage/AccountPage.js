import { useSelector } from 'react-redux';
import NavBar from "../NavBar/NavBar";
import ReservationIndex from "../ReservationIndex/ReservationIndex";


const AccountPage = () => {
  const currentUser = useSelector(state => state.session.user)

  return (
    <div>
      <div><NavBar /></div>
      <div>
        {!currentUser ? <div> Please login to view your account page </div> : <ReservationIndex />}
      </div>
    </div>
  )
};

export default AccountPage;