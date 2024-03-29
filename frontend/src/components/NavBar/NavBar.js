import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import Navigation from '../Navigation/Navigation'
import * as sessionActions from '../../store/session';
import SignUpPage from '../UserAuthModal/SignUpPage.js';
import LoginFormPage from '../UserAuthModal/LoginFormPage.js';
import { closeModalHandler } from '../../store/modal';

import icon from '../../assets/images/castle_icon.png';
import globe from '../../assets/images/icons8-earth-globe-30.png';
import menu from '../../assets/images/icons8-menu-rounded-30.png';
import profile from '../../assets/images/icons8-customer-30.png';
import shawna from '../../assets/images/cartoon_shawna.png';

import './NavBar.css'



function NavBar() {

  const [profileToggle, setProfileToggle] = useState(false);
  // const [signUpModalToggle, setSignUpModalToggle] = useState(false);
  const modalState = useSelector((state)=>{
    return state.modal;
  });

  const currentUser = useSelector(state => state.session.user)

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
    dispatch(sessionActions.logout());
    history.push('/');
  };

  const modalComponent = () => {
    if (modalState.component === "signup") {
      return <SignUpPage />;
    } else if (modalState.component === 'login') {
      return <LoginFormPage />;
    }
  };

  const history = useHistory();
  
  const returnHome = () => {
    history.push('/')
  };

  return (
    <>
    { modalState.on ? <div className='modal-background' onClick={()=>{dispatch(closeModalHandler())}}></div> : "" }
    { modalState.on ? <div className='modal-wrapper'>{ modalComponent() }</div> : "" }
    <section id="header">
      <div id='header_left' onClick={returnHome}>
        <img src={icon} alt="" />
        <span className='logo-title'>castlebnb</span>
      </div>
      {/* <div id='header_center'> */}
        {/* <div>Anywhere | Any week | Add guests</div> */}
      {/* </div> */}
      <div id='header_right'>
        <Menu menuButton={ <MenuButton className="personal-link-menu">
            <span className='personal-links'>
              <p>Personal links</p>
              <img src={globe} alt="globe" />
            </span>
          </MenuButton> }>
          <MenuItem href='https://www.shawna.dev' target='_blank'>Personal Site</MenuItem>
          <MenuItem href='https://gh.io/shawna' target='_blank'>GitHub</MenuItem>
          <MenuItem href='https://www.linkedin.com/in/shawna-e-hartley/' target='_blank'>LinkedIn</MenuItem>
          <MenuItem href='https://wellfound.com/u/shawna-hartley' target='_blank'>Wellfound</MenuItem>
        </Menu>
          <div className='profile-nav-icon' onClick={toggleProfileHandler}>
            <img id='menu-icon' src={menu} alt="" />
            {!currentUser ? <img id='profile-icon' src={profile} alt="" /> : <img id='profile-icon' src={shawna} alt="" />}
          { profileToggle ? <Navigation onSignUp={signUpModalHandler} onLogIn={logInModalHandler} onLogOut={logOutHandler} /> : "" }
          </div>
      </div>
    </section>
  </>
  )


};

export default NavBar;