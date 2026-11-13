import React from 'react';
import PageBanner from '../components/common/PageBanner';
import {
  FaFlask,
  FaVial,
  FaHeartbeat,
  FaSyringe,
  FaMicroscope,
  FaAllergies,
  FaTint,
  FaBone,
  FaDna,
  FaClock,
  FaUtensils,
  FaShieldAlt
} from 'react-icons/fa';
import { GiKidneys, GiLiver } from 'react-icons/gi';
import { services } from '../data/siteData';
import './Services.css';

const renderIcon = (name) => {
  switch (name) {
    case 'FaFlask': return <FaFlask />;
    case 'FaVial': return <FaVial />;
    case 'FaSyringe': return <FaSyringe />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'GiLiver': return <GiLiver />;
    case 'GiKidneys': return <GiKidneys />;
    case 'FaTint': return <FaTint />;
    case 'FaBone': return <FaBone />;
    case 'FaAllergies': return <FaAllergies />;
    case 'FaDna': return <FaDna />;
    case 'FaMicroscope': return <FaMicroscope />;
    default: return <FaMicroscope />;
  }
};

export default function Services({ onOpenBooking }) {
  return (
    <div className="services-page">
      <PageBanner
        title="Sample Collection for Thyrocare Tests"
        subtitle="Sithara is a local collection point for individual Thyrocare tests and health profiles. Laboratory processing is handled by Thyrocare."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <div className="services-page-wrap">
        <div className="services-page-container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
            <span
              style={{
                color: 'var(--primary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Thyrocare Test Categories
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.4rem',
                color: '#1F2937',
                marginTop: '6px'
              }}
            >
              Explore the Test Menu
            </h2>
            <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.6 }}>
              These are selected examples from Thyrocare’s test menu. Confirm current availability, pricing, sample type and preparation on the live catalogue or with our collection centre.
            </p>
          </div>

          <div className="services-grid-full">
            {services.map((svc) => (
              <div key={svc.id} className="svc-card-detailed">
                <div className="svc-card-top">
                  <div className="svc-card-icon-wrap">{renderIcon(svc.icon)}</div>
                  <h3>{svc.title}</h3>
                </div>

                <p className="svc-card-desc">{svc.shortDesc}</p>

                <div className="svc-card-subheading">Popular tests / profiles:</div>
                <div className="svc-tests-chip-grid">
                  {svc.tests.map((testName, i) => (
                    <span key={i} className="svc-chip">
                      {testName}
                    </span>
                  ))}
                </div>

                <div className="svc-card-bottom-bar">
                  <span className="svc-price-tag">Sample: {svc.sampleType}</span>
                  <button
                    className="btn btn-primary"
                    style={{
                      background: 'var(--secondary)',
                      color: '#ffffff',
                      padding: '8px 18px',
                      borderRadius: '6px',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                    onClick={() => onOpenBooking(svc.title)}
                  >
                    Ask about tests
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Collection and preparation information */}
          <div className="guidelines-box">
            <div className="guideline-col">
              <h4>
                <FaUtensils style={{ color: 'var(--accent)' }} /> Fasting Instructions
              </h4>
              <p>
                Preparation varies by test and profile. Check the exact Thyrocare listing before you visit; do not assume every test requires fasting.
              </p>
            </div>

            <div className="guideline-col">
              <h4>
                <FaClock style={{ color: 'var(--primary, #18375a)' }} /> Processing & Reports
              </h4>
              <p>
                Samples are sent through Thyrocare’s network for processing. Report timing depends on the selected test, transit and processing requirements.
              </p>
            </div>

            <div className="guideline-col">
              <h4>
                <FaShieldAlt style={{ color: 'var(--secondary, #f15f56)' }} /> Sample Collection
              </h4>
              <p>
                Give your sample at the centre or ask about the free home collection advertised by Sithara. Call to confirm area and appointment availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

