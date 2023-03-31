import { useHistory } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {

  const history = useHistory();
  
  const returnHome = () => {
    history.push('/')
  };

  return (
    <>
      <h2>You are confirmed!</h2>
      {/* <div>You're confirmed for {reservation.startDate} - {reservation.endDate}</div> */}
      {/* <div>at {listing.title}</div> */}
      <div>We look forward to welcoming you to the castle</div>
      <button onclick={returnHome}>Find another stay</button>
    </>
  )
};

export default ConfirmationPage