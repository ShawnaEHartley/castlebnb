import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/users";

function SignUp() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();


  const submit = (e) => {
    e.preventDefault();
    const user = {full_name, email, password};
    dispatch(createUser(user))
  }
  

  return (
    <>
      <form>
        <h1>Sign Up</h1>
        <label>Full Name
          <input type="text" value={full_name} onChange={(e) => {
          e.preventDefault();
          setFullName(e.target.value)
        }} />
        <p>Make sure it matches the name on your government ID.</p>
        </label>
        <label>Email
          <input type="text" value={email} onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value)
        }} />
        </label>
        <p>We'll email you trip confirmations and receipts.</p>
        <label>Password
          <input type="password" value={password} onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value)
        }} />
        </label>
        <p>By selecting Agree and continue, I agree to Airbnb’s Terms of Service, Payments Terms of Service, and Nondiscrimination Policy and acknowledge the Privacy Policy.</p>
        <button onClick={submit}>Agree and Continue</button>
      </form>
    </>
  )
};

export default SignUp