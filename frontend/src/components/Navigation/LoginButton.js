import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import LoginFormPage from './UserAuthModal/LoginFormPage.js';

function LoginButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={()=>{
        setShowModal(true)
      }} className='button'>
      Log in
      </button>

      {showModal && (
        <Modal onClose={()=>{
          setShowModal(false)
        }}>
          <LoginFormPage />
        </Modal>
      )}
    </>
  )
};

export default LoginButton;