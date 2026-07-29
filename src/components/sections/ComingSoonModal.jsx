import React, { useState } from 'react';
import Button from '../ui/Button';
import { Check } from '../ui/Icon';
import SuccessModal from './SuccessModal';

const ComingSoonModal = ({ onClose }) => {
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const features = [
    'Real-time collector tracking',
    'TidyPoints rewards for loyal customers',
    'Scheduled + on-demand booking in one tap',
    'Proof-of-service photo history',
    'NGN secure payments'
  ];

  const handleNotify = (e) => {
    e.preventDefault && e.preventDefault();
    if (!contact.trim()) {
      // minimal validation: require something
      return;
    }
    setLoading(true);
    // simulate async request
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
    }, 1000);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // also close the parent modal so user returns to page
    onClose && onClose();
  };

  return (
    <>
      <div className="modal-overlay" role="dialog" aria-modal="true">
        <div className="modal-card">
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close coming soon modal">×</button>
          <div className="modal-content">
            <span className="badge">COMING SOON</span>
            <h2>Careers at Tidy Naija</h2>
            <p>We're growing — join us when we launch our careers portal.</p>

            <ul>
              {features.map((f, i) => (
                <li key={i}><Check /> {f}</li>
              ))}
            </ul>

            <div style={{ marginTop: 18 }}>
              <p className="sm">Want to be notified when careers open? Send us a quick note.</p>
              <form className="notify-form" onSubmit={handleNotify}>
                <input
                  type="text"
                  placeholder="Your email or phone number"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  disabled={loading}
                />
                <Button variant="solid" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Notify Me'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && <SuccessModal onClose={handleSuccessClose} />}
    </>
  );
};

export default ComingSoonModal;
