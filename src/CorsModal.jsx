import React, { useState } from "react";

const CorsModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <div className="cors-modal">
          <h2>This site uses Vanilla JavaScript for its logic.</h2>
          <h2>It needs a CORS proxy to check if websites actually exist.</h2>
          <h2>
            Please go to this URL to get permission to use the CORS policy:
          </h2>
          <h2>
            {" "}
            <a className="cors-link" target="_blank" href="https://cors-anywhere.herokuapp.com/corsdemo" rel="noreferrer">
              https://cors-anywhere.herokuapp.com/corsdemo
            </a>
          </h2>
          <button
            className="cors-modal-button"
            onClick={() => setShowModal(false)}
          >
            Click Here When You Are Ready.
          </button>
        </div>
      )}
    </>
  );
};

export default CorsModal;
