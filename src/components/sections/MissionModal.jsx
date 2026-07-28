import React from 'react';

const MissionModal = ({ onClose }) => (
  <div className="modal-overlay" role="dialog" aria-modal="true">
    <div className="modal-card">
      <button className="modal-close" type="button" onClick={onClose} aria-label="Close mission modal">
        ×
      </button>
      <div className="modal-content">
        <span className="badge">MISSION</span>
        <h2>To build the operating infrastructure for a cleaner Nigeria</h2>
        <p>
          Our mission is to connect every household, business, and government office to reliable,
          technology-driven waste management.
        </p>
        <p>
          We believe clean cities are a matter of infrastructure, not charity. By combining route
          intelligence, real-time tracking, and mobile-first access, TidyNaija turns waste collection
          into a dependable utility that residents can subscribe to, businesses can rely on, and
          government can regulate with confidence.
        </p>
      </div>
    </div>
  </div>
);

export default MissionModal;
