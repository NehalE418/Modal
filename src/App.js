import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
Modal.setAppElement('#root');

function App() {
  const [open, setopen] = useState(false);

  function openModal() {
    setopen(true);
  }

  function closeModal() {
    setopen(false);
  }

  return (
    <div className="bulu">
      <Modal
        className="modal"
        isOpen={open}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>here is the Modal</h2>
        <div className="btns">
          <button onClick={closeModal}>Cancle</button>
          <button
            onClick={() => {
              closeModal();
              console.log('ok');
            }}
          >
            ok
          </button>
        </div>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
}

export default App;
