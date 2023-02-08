// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessRook, faSearch, faArrowAltCircleUp, faCaretSquareDown, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Navigation from '../Navigation/Navigation'
import * as sessionActions from '../../store/session';
import SignUpPage from '../UserAuthModal/SignUpPage.js';
import LogInFormPage from '../UserAuthModal/LoginFormPage.js';


import icon from '../../assets/images/castle_icon.png';
import github from '../../assets/images/icons8-github-30.png';
import linkedin from '../../assets/images/icons8-linkedin-circled-30.png';
import angellist from '../../assets/images/icons8-angellist-30.png';
import globe from '../../assets/images/icons8-earth-globe-30.png';
import menu from '../../assets/images/icons8-menu-rounded-30.png';
import profile from '../../assets/images/icons8-customer-30.png';

import './HomePage.css'



function HomePage() {

  const [profileToggle, setProfileToggle] = useState(false);
  const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const [logInModalToggle, setLogInModalToggle] = useState(false);
  const dispatch = useDispatch();


  const toggleProfileHandler = () => {
    setProfileToggle(!profileToggle)
  };

  const signUpModalHandler = () => {
    setSignUpModalToggle(!signUpModalToggle)
  };
  
  const logInModalHandler = () => {
    setLogInModalToggle(!logInModalToggle)
    logInModalHandler ? setProfileToggle(false) : setProfileToggle(true)
  };

  const logOutHandler = (e) => {
    e.preventDefault();
    console.log('logging out via handler ... ')
    return dispatch(sessionActions.logout())

  };

  return (
  <>
    <section id="header">
      <div id='header_left'>
        <img src={icon} alt="" />
        <span className='logo-title'>castlebnb</span>
      </div>
      <div id='header_center'>
        <div>
          Anywhere Any week Add guests 
        </div>
      </div>
      <div id='header_right'>
        <span className='personal-links'>
          <p>Personal links</p>
          <img src={globe} alt="" />
          {/* <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={angellist} alt="" /> */}
        </span>
          <div className='profile-nav-icon' onClick={toggleProfileHandler}>
            <img id='menu-icon' src={menu} alt="" />
            <img id='profile-icon' src={profile} alt="" />
            {/* <button id='profile-button' onClick={toggleProfileHandler}>Profile</button> */}
          { profileToggle ? <Navigation onSignUp={signUpModalHandler} onLogIn={logInModalHandler} onLogOut={logOutHandler} /> : "" }
          </div>
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
    { signUpModalToggle ? <div className='modal-background' onClick={signUpModalHandler}></div> : "" }
    { signUpModalToggle ? <div className='modal-wrapper'><SignUpPage onArrowClick={signUpModalHandler} /></div> : "" }
    { logInModalToggle ? <div className='modal-background' onClick={logInModalHandler}></div> : "" }
    { logInModalToggle ? <div className='modal-wrapper'><LogInFormPage onArrowClick={logInModalHandler} /></div> : "" }
  </>
  )


};

export default HomePage;