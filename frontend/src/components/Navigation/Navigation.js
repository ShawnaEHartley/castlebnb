import React from 'react';
import './Navigation.css';

function Navigation(props) {
  return (
    <section id='profiledrop'>
      <div className='profileDropItem'>
        <div onClick={props.onSignUp}>Sign up</div>
      </div>
      <div className='profileDropItem'>
        <div onClick={props.onLogIn}>Log in</div>
      </div>
    </section>
  )
}

export default Navigation;