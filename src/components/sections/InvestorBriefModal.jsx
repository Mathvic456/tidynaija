import React from 'react';

const InvestorBriefModal = ({ onClose }) => (
  <div className="modal-overlay" role="dialog" aria-modal="true">
    <div className="modal-card">
      <button className="modal-close" type="button" onClick={onClose} aria-label="Close investor brief modal">×</button>
      <div className="modal-content">
        <span className="badge">INVESTOR BRIEF</span>
        <h2>Investor Brief</h2>
        <div className="investor-brief-preview">
          <iframe src="/investor-brief.pdf" title="Investor Brief Preview" />
        </div>
      </div>
    </div>
  </div>
);

export default InvestorBriefModal;
