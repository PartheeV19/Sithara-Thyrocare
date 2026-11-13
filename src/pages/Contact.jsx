import React, { useState } from 'react';
import PageBanner from '../components/common/PageBanner';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaHome,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle
} from 'react-icons/fa';
import { centreInfo, faqs } from '../data/siteData';
import './Contact.css';

export default function Contact({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0); // first FAQ open by default
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Test or Health Profile Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <PageBanner
        title="Contact Sithara Collection Centre"
        subtitle="Ask about Thyrocare tests, sample collection, preparation requirements or report access."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="contact-page-wrap">
        <div className="contact-container">
          {/* 4 Info Cards */}
          <div className="contact-cards-grid">
            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <FaMapMarkerAlt />
              </div>
              <h4>Visit Sithara Diagnostic Center</h4>
              <p>{centreInfo.address}</p>
              <p className="contact-flyer-address"><strong>Full address on centre flyer:</strong> {centreInfo.flyerAddress}</p>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary, #0D7377)', fontWeight: 600 }}>
                Thyrocare sample collection centre · {centreInfo.franchiseCode}
              </span>
              <small className="address-confirm-note">The flyer and shop sign use different address formats. Call to confirm the best landmark before visiting.</small>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <FaPhoneAlt />
              </div>
              <h4>Call Our Helpline</h4>
              <p>{centreInfo.phone}<br />{centreInfo.alternatePhone}<br />Contact: {centreInfo.contactName}</p>
              <a
                href={`tel:${centreInfo.phoneHref}`}
                style={{
                  display: 'inline-block',
                  color: 'var(--primary, #0D7377)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none'
                }}
              >
                Call Now →
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <FaWhatsapp />
              </div>
              <h4>WhatsApp Hotline</h4>
              <p>Test, profile and home collection enquiries.</p>
              <a
                href={`https://wa.me/${centreInfo.phoneHref.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="contact-action-link"
              >
                Chat on WhatsApp →
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-bubble">
                <FaHome />
              </div>
              <h4>Free Home Sample Collection</h4>
              <p>{centreInfo.homeCollection}</p>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="contact-split-grid">
            {/* Form */}
            <div className="contact-form-card">
              <h3>Ask the collection centre</h3>
              <p>Ask about Thyrocare tests, sample requirements, availability or a visit to the centre.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <FaCheckCircle style={{ fontSize: '3.5rem', color: 'var(--success, #059669)', marginBottom: '14px' }} />
                  <h4 style={{ fontSize: '1.4rem', color: '#1F2937', marginBottom: '8px' }}>Enquiry Prepared</h4>
                  <p style={{ color: '#4B5563', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Call Sithara at <strong>{centreInfo.phone}</strong> to confirm the test and collection details.
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{
                      background: 'var(--primary, #0D7377)',
                      color: '#fff',
                      padding: '10px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div className="form-group-contact">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Nair"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input-contact"
                      />
                    </div>

                    <div className="form-group-contact">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input-contact"
                      />
                    </div>
                  </div>

                  <div className="form-group-contact">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input-contact"
                    />
                  </div>

                  <div className="form-group-contact">
                    <label>Enquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input-contact"
                    >
                      <option>Test or Health Profile Enquiry</option>
                      <option>Aarogyam Camp Offer</option>
                      <option>Free Home Sample Collection</option>
                      <option>Report Enquiry</option>
                    </select>
                  </div>

                  <div className="form-group-contact">
                    <label>Message / Test Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="List tests or questions you have regarding timings, preparation..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input-contact"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary contact-submit"
                  >
                    Prepare Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Location Map View */}
            <div className="map-card-wrapper">
              <div className="map-header">
                <h4>{centreInfo.name} · {centreInfo.franchiseCode}</h4>
                <p>{centreInfo.address}</p>
              </div>

              <div className="map-embed-area">
                <iframe
                  title="Thyrocare Sithara Diagnostic Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(centreInfo.mapsQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                />
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions Accordion */}
          <div className="faq-section">
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <span
                style={{
                  color: 'var(--primary, #0D7377)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Help & Clarifications
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading, "DM Serif Display", serif)',
                  fontSize: '2.2rem',
                  color: '#1F2937',
                  marginTop: '6px'
                }}
              >
                Frequently Asked Questions
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
                Quick answers on test selection, preparation, fasting instructions and reports.
              </p>
            </div>

            <div>
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <FaChevronUp style={{ color: 'var(--primary, #0D7377)', flexShrink: 0 }} />
                    ) : (
                      <FaChevronDown style={{ color: '#9CA3AF', flexShrink: 0 }} />
                    )}
                  </button>
                  {openFaq === idx && <div className="faq-answer-box">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

