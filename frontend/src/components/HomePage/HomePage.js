// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessRook, faSearch, faArrowAltCircleUp, faCaretSquareDown, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react';
import Navigation from '../Navigation/Navigation'
import icon from '../../assets/images/castle_icon.png';
import github from '../../assets/images/icons8-github-30.png';
import linkedin from '../../assets/images/icons8-linkedin-circled-30.png';
import angellist from '../../assets/images/icons8-angellist-30.png';
import SignUpPage from '../UserAuthModal/SignUpPage/SignUpPage.js';
import LogInFormPage from '../UserAuthModal/LoginFormPage/LoginFormPage.js';
import './HomePage.css'



function HomePage() {

  const [profileToggle, setProfileToggle] = useState(false);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const [logInModalToggle, setLogInModalToggle] = useState(false);


  const toggleProfileHandler = () => {
    setProfileToggle(!profileToggle)
  };

  const signUpModalHandler = () => {
    setSignUpModalToggle(!signUpModalToggle)
  };
  
  const logInModalHandler = () => {
    setLogInModalToggle(!logInModalToggle)
  };

  return (
  <>
    <section id="header">
      <div id='header_left'>
        <img src={icon} alt="" />
        <span>castlebnb</span>
      </div>
      <div id='header_center'>
      <div>
        <button>Anywhere</button>
        <button>Any week</button>
        <input type="text" placeholder='Add guests' />
        <div id='search_circle'>
          <div id='search'>
            {/* <FontAwesomeIcon icon={faSearch} />  */}
          </div>
        </div>
      </div>
      </div>
      <div id='header_right'>
        <span>
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={angellist} alt="" />
          <button id='profile-button' onClick={toggleProfileHandler}>Profile</button>
          { profileToggle ? <Navigation onSignUp={signUpModalHandler} onLogIn={logInModalHandler} /> : "" }
        </span>
      </div>
    </section>
    <section id='categories'>
      <p>carousel of GoT houses</p>
    </section>
    <section id='index'>
      <p>listing index</p>
    </section>
    <section id=''>
      <button>Map</button>
    </section>
    { signUpModalToggle ? <div id='modal-background' onClick={signUpModalHandler}></div> : "" }
    { signUpModalToggle ? <div id='modal-wrapper'><SignUpPage onArrowClick={signUpModalHandler} /></div> : "" }
    { logInModalToggle ? <div id='modal-background' onClick={logInModalHandler}></div> : "" }
    { logInModalToggle ? <div id='modal-wrapper'><LogInFormPage onArrowClick={logInModalHandler} /></div> : "" }
  </>
  )


};

export default HomePage;