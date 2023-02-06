import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../store/users";


function UserAuth() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const user = {email, password};
    dispatch(signInUser(user))
  };

  return (
    <>
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
        <button onClick={submit}>Log In</button>
    </>
  )
};

export default UserAuth;