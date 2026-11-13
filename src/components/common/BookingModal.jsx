import React, { useState } from 'react';
import { FaTimes, FaCheckCircle, FaCalendarAlt, FaUser, FaPhone, FaMapMarkerAlt, FaFlask } from 'react-icons/fa';
import { centreInfo } from '../../data/siteData';

export default function BookingModal({ isOpen, onClose, initialItem = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    collectionType: 'centre',
    date: '',
    address: '',
    item: initialItem || ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync initialItem if changed
  React.useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({ ...prev, item: initialItem }));
    }
  }, [initialItem]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      collectionType: 'centre',
      date: '',
      address: '',
      item: ''
    });
    onClose();
  };

  return (
    <div
      className="booking-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 34, 39, 0.75)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="booking-dialog"
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '540px',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#F3F4F6',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#4B5563',
            transition: 'background-color 0.2s'
          }}
        >
          <FaTimes />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <FaCheckCircle style={{ fontSize: '4rem', color: 'var(--success, #059669)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.6rem', color: '#1F2937', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Enquiry Details Ready
            </h3>
            <p style={{ color: '#4B5563', marginBottom: '16px', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Contact the Sithara collection centre at{' '}
              <strong>{centreInfo.phone}</strong> to confirm the selected test, sample requirements and collection details.
            </p>
            <div
              style={{
                background: '#F8FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '24px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.9rem', color: '#6B7280' }}>Enquiry Summary:</div>
              <div style={{ fontWeight: 600, color: 'var(--primary, #0D7377)', marginTop: '4px' }}>
                {formData.item || 'Thyrocare test or health profile'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#4B5563', marginTop: '4px' }}>
                Collection: {formData.collectionType === 'home' ? 'Free home sample collection (confirm area)' : 'Sithara Diagnostic Center, Kurnool'}
              </div>
            </div>
            <button
              onClick={handleReset}
              className="btn btn-primary"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  color: 'var(--primary, #0D7377)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Thyrocare Collection Enquiry
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#1F2937',
                  fontSize: '1.75rem',
                  marginTop: '4px'
                }}
              >
                Ask About a Test or Profile
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '4px' }}>
                Share the test and preferred collection option. Call the centre to confirm the service area and appointment details.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <FaUser style={{ position: 'absolute', left: '12px', top: '13px', color: '#9CA3AF' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px 10px 36px',
                      borderRadius: '8px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FaPhone style={{ position: 'absolute', left: '12px', top: '13px', color: '#9CA3AF' }} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px 10px 36px',
                        borderRadius: '8px',
                        border: '1px solid #D1D5DB',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FaCalendarAlt style={{ position: 'absolute', left: '12px', top: '13px', color: '#9CA3AF' }} />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px 10px 36px',
                        borderRadius: '8px',
                        border: '1px solid #D1D5DB',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                  Test / Package Name
                </label>
                <div style={{ position: 'relative' }}>
                  <FaFlask style={{ position: 'absolute', left: '12px', top: '13px', color: '#9CA3AF' }} />
                  <input
                    type="text"
                    placeholder="e.g. Thyroid Profile, Master Health Checkup"
                    value={formData.item}
                    onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px 10px 36px',
                      borderRadius: '8px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div className="collection-choice-group">
                <label className="collection-choice">
                  <input
                    type="radio"
                    name="collectionType"
                    value="centre"
                    checked={formData.collectionType === 'centre'}
                    onChange={() => setFormData({ ...formData, collectionType: 'centre' })}
                  />
                  <span>Visit Sithara Diagnostic Center</span>
                </label>
                <label className="collection-choice">
                  <input
                    type="radio"
                    name="collectionType"
                    value="home"
                    checked={formData.collectionType === 'home'}
                    onChange={() => setFormData({ ...formData, collectionType: 'home' })}
                  />
                  <span>Free home sample collection <small>(area confirmation required)</small></span>
                </label>
              </div>

              {formData.collectionType === 'home' ? (
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
                    Home Collection Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FaMapMarkerAlt style={{ position: 'absolute', left: '12px', top: '13px', color: '#9CA3AF' }} />
                    <input
                      type="text"
                      required
                      placeholder="House / street / area"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px 10px 36px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>
                </div>
              ) : (
                <div className="collection-location-note">
                  <FaMapMarkerAlt />
                  <span>{centreInfo.name} · {centreInfo.franchiseCode}, Kurnool</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary booking-submit"
              >
                Review Enquiry Details
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

