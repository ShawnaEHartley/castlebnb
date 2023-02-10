// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChessRook, faSearch, faArrowAltCircleUp, faCaretSquareDown, faExclamationTriangle } from '@fortawesome/fontawesome-free-solid'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation'
import * as sessionActions from '../../store/session';
import SignUpPage from '../UserAuthModal/SignUpPage.js';
import LogInFormPage from '../UserAuthModal/LoginFormPage.js';
import { closeModalHandler } from '../../store/modal';


import icon from '../../assets/images/castle_icon.png';
import github from '../../assets/images/icons8-github-30.png';
import linkedin from '../../assets/images/icons8-linkedin-circled-30.png';
import angellist from '../../assets/images/icons8-angellist-30.png';
import globe from '../../assets/images/icons8-earth-globe-30.png';
import menu from '../../assets/images/icons8-menu-rounded-30.png';
import profile from '../../assets/images/icons8-customer-30.png';

import './NavBar.css'
import LoginFormPage from '../UserAuthModal/LoginFormPage.js';



function NavBar() {

  const [profileToggle, setProfileToggle] = useState(false);
  // const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const modalState = useSelector((state)=>{
    return state.modal;
  });

  const dispatch = useDispatch();

  const toggleProfileHandler = () => {
    setProfileToggle(!profileToggle)
  };

  const signUpModalHandler = () => {
    dispatch({type: "modalOn", component: "signup"})
  };
  
  const logInModalHandler = () => {
    dispatch({type: "modalOn", component: "login"});
  };

  const logOutHandler = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.logout())
  };

  const modalComponent = () => {
    if (modalState.component === "signup") {
      return <SignUpPage />;
    } else {
      return <LoginFormPage />;
    }
  };

  return (
    <>
    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
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
  </>
  )


};

export default NavBar;