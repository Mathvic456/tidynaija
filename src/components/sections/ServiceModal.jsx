import React, { useState } from 'react';

const ServiceModal = ({ serviceName, onClose }) => {
  const [form, setForm] = useState({ fullName: '', phone: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log form data; integrate with API later
    console.log('Service request:', { service: serviceName, ...form });
    // Close modal
    onClose();
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-card">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close service modal">×</button>
        <div className="modal-content">
          <span className="badge">REQUEST</span>
          <h2>{serviceName || 'Service Request'}</h2>
          <p>Please tell us a bit about you so we can follow up.</p>

          <form className="service-form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input name="fullName" value={form.fullName} onChange={handleChange} required />
            </label>

            <label>
              Phone Number
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
            </label>

            <label>
              Address
              <textarea name="address" value={form.address} onChange={handleChange} rows={3} required />
            </label>

            <div style={{ marginTop: 18 }}>
              <button type="submit" className="btn btn-solid">Send Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
