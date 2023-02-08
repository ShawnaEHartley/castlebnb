import React, {useState} from 'react';
import {Modal} from '../../context/Modal';
import LoginFormPage from './LoginFormPage';

function UserAuthModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={()=>setShowModal(true)}>Modal</button>
      {showModal && (
        <Modal onClose={()=>setShowModal(false)}>
          <LoginFormPage />
        </Modal>
      )}
    </>
  )
}

export default UserAuthModal;