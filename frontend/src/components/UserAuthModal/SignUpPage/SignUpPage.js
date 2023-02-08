import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/users";
import * as sessionActions from '../../../store/session';


import './SignUpPage.css'

function SignUpPage(props) {
  const [first_name, setFirstName] =useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const full_name = `${first_name} ${last_name}`;
    const user = {full_name, email, password};
    dispatch(createUser(user))
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
  

  return (
    <section className='userauth-section'>
      <div className='userauth-header'>
        <div className='user-auth-back-arrow' onClick={props.onArrowClick}></div>
        <div>
          <h1>Sign up</h1>
        </div>
        <div className='user-auth-empty'></div>
      </div>
      <div className='user-auth-body'>
        <div className='user-auth-pane'>
          <form className='user-auth-form' onSubmit={handleSubmit}>
            <div className='full-name-box'>
              {/* <label id='signup_label'>Full Name</label> */}
              <input className='user-auth-input' type="text"  placeholder='First Name' value={first_name} onChange={(e) => {
                e.preventDefault();
                setFirstName(e.target.value)
              }} />
              <input className='user-auth-input' type="text"  placeholder='Last Name' value={last_name} onChange={(e) => {
                e.preventDefault();
                setLastName(e.target.value)
              }} />
              <p className='user-auth-smalltext'>Make sure it matches the name on your government ID.</p>
            </div>
            <div className='email-box'>
              {/* <label id='signup_label'>Email</label> */}
              <input className='user-auth-input' type="text" placeholder='Email' value={email} onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value)
              }} />
              <p className='user-auth-smalltext'>We'll email you trip confirmations and receipts.</p>
            </div>
            <div className='password-box'>
              {/* <label id='signup_label'>Password</label> */}
              <input className='user-auth-input' type="password" placeholder='Password' value={password} onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value)
              }} />
              <div className='user-auth-password-constraints'>
                <p>Can't contain your name or email address</p>
                <p>At least 8 characters</p>
                <p>Contins a number or symbol</p>
              </div>
            </div>
            <div className='user-auth-terms'>By selecting Agree and continue, I agree to Airbnb’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</div>
            <button className='user-auth-button' type='submit'>Agree and continue</button>
            <button className="user-auth-button" onClick={handleDemoSubmit}>Demo user</button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default SignUpPage;