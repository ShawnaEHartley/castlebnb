import React from 'react';
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {

  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  const goToTripPage = () => {
    history.push(`/account/${sessionUser.id}`)
  }

    if (sessionUser) {
      return (
        <section className='profiledrop'>
          <div id='profileDropLogIn' className='profileDropItem'>
            <div onClick={goToTripPage}>My Trips</div>
          </div>
          <div className='profileDropItem'>
            <div onClick={props.onLogOut}>Log out</div>
          </div>
        </section>
      )
    } else {
      return (
    <section className='profiledrop'>
      <div id='profileDropSignUp' className='profileDropItem'>
        <div onClick={props.onSignUp}>Sign up</div>
      </div>
      <div id='profileDropLogIn' className='profileDropItem'>
        <div onClick={props.onLogIn}>Log in</div>
      </div>
    </section>
      )
    }
}

export default Navigation;