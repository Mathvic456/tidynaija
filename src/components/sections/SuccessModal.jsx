import React from 'react';

const SuccessModal = ({ message = 'Thanks! We will notify you.', onClose }) => {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close success modal">×</button>
        <div className="modal-content">
          <span className="badge">SENT</span>
          <h2>{message}</h2>
          <p className="sm">We'll reach out when the careers portal or feature is available.</p>
          <div style={{ marginTop: 18 }}>
            <button type="button" className="btn btn-solid" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
