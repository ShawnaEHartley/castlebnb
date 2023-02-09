import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import alert from '../../assets/images/icons8-alert-48.png'
import * as sessionActions from '../../store/session';

import './UserAuth.css'

function SignUpPage(props) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [first_name, setFirstName] =useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />


  const full_name = `${first_name} ${last_name}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {full_name, email, password};
    dispatch(sessionActions.signup(user))
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

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email:"demo@test.com", password:"hello123" }))
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

  let nameError = null;
  let emailError = null;
  let passwordError = null;

  if (errors[0]) {
    if (full_name.length === 0) {
      nameError = 'Full name is required';
    } else {
      nameError = null;
    };

    if (email === "") {
      emailError = 'Email is required';
    } else {
      emailError = null;
    };

    if (password === "") {
      passwordError = 'Password is required';
    } else if (password.legnth < 6) 
    {
      passwordError = 'Password must be at least 6 characters';
    } else {
      passwordError = null
    };
  }
  
  const nameErrorChecker = () => {
    if (nameError) {
      return (
        <p className='signInErrors'>
          {/* <img src="" alt="" /> */}
          {nameError}
        </p>
      )
    }
  }

  const emailErrorChecker = () => {
    if (emailError) {
      return (
        <p className='signInErrors'>
          {/* <img src="" alt="" /> */}
          {emailError}
        </p>
      )
    }
  }

  const passwordErrorChecker = () => {
    if (passwordError) {
      return (
        <p className='signInErrors'>
          {/* <img src="" alt="" /> */}
          {passwordError}
        </p>
      )
    }
  }



  return (
    <div className='userauth-section'>
      <div className='userauth-header'>
        <div className='user-auth-back-arrow' onClick={props.onArrowClick}></div>
        <div>
          <h1>Sign up</h1>
        </div>
        <div className='user-auth-empty'></div>
      </div>
      <div className='user-auth-body'>
          <form className='user-auth-form' onSubmit={handleSubmit}>
            <div className='user-auth-error-pane'>
            </div>
            <div className='full-name-box'>
              {/* <label id='signup_label'>Full Name</label> */}
              <input id='first-name' className='user-auth-input' type="text"  placeholder='First name' value={first_name} onChange={(e) => {
                e.preventDefault();
                setFirstName(e.target.value)
              }} />
              <input id='last-name' className='user-auth-input' type="text"  placeholder='Last name' value={last_name} onChange={(e) => {
                e.preventDefault();
                setLastName(e.target.value)
              }} />
              <p className='user-auth-smalltext'>Make sure it matches the name on your government ID.</p>
              <div className='error-checker'>{nameErrorChecker()}</div>
            </div>
            <div className='email-box'>
              {/* <label id='signup_label'>Email</label> */}
              <input className='user-auth-input' type="text" placeholder='Email' value={email} onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value)
              }} />
              <p className='user-auth-smalltext'>We'll email you trip confirmations and receipts.</p>
              <div className='error-checker'>{emailErrorChecker()}</div>
            </div>
            <div className='password-box'>
              {/* <label id='signup_label'>Password</label> */}
              <input className='user-auth-input' type="password" placeholder='Password' value={password} onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value)
              }} />
              <div className='user-auth-password-constraints'>
                <p>At least 6 characters</p>
              </div>
                <div className='error-checker'>{passwordErrorChecker()}</div>
            </div>
            <div className='user-auth-terms'>By selecting Agree and continue, I agree to Airbnb’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</div>
            <button className='user-auth-button' type='submit'>Agree and continue</button>
            <button className="user-auth-button" onClick={handleDemoSubmit}>Demo user</button>
          </form>
        </div>
    </div>
  )
};

export default SignUpPage;