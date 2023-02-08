import React, { useState } from "react";
import * as sessionActions from '../../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import './LoginForm.css'


function LoginFormPage(props) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  
  
  if (sessionUser) return <Redirect to="/" />;
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
    .catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  }

  return (
    <section className='userauth-section'>
      <div className='userauth-header'>
        <div className='user-auth-back-arrow' onClick={props.onArrowClick}></div>
        <div>
          <h1>Log in</h1>
        </div>
        <div className='user-auth-empty'></div>
      </div>
      <div className='user-auth-body'>
        <div className='user-auth-pane'>
          <form className='user-auth-form'onSubmit={handleSubmit}>
            <div className='email-box'>
              {/* <label className='login_label'>Email</label> */}
              <input className='user-auth-input' type="text" placeholder='Email' value={email} onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value)
              }} />
            </div>
            <div className='password-box'>
              {/* <label className='login_label'>Password</label> */}
              <input className='user-auth-input'type="password" placeholder='Password' value={password} onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value)
              }} />
            </div>
            <button className='user-auth-button' type="submit">Log In</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default LoginFormPage;