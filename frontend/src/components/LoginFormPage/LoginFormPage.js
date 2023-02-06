import React, { useState } from "react";
import * as sessionActions from '../../store/session'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import { login } from "../../store/session";
import './LoginForm.css'


function LoginFormPage() {

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
    <>
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Email
          <input type="text" value={email} onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value)
        }} />
        </label>
        <label>Password
          <input type="password" value={password} onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value)
        }} />
        </label>
        <button onSubmit={login}>Log In</button>
    </form>
    </>
  )
};

export default LoginFormPage;