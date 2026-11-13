import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFlask,
  FaVial,
  FaHeartbeat,
  FaSyringe,
  FaPhoneAlt,
  FaAward,
  FaMicroscope,
  FaUserMd,
  FaClock,
  FaHome,
  FaTruck,
  FaFileAlt,
  FaMoneyBillWave,
  FaLaptopMedical,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';
import { GiLiver, GiKidneys } from 'react-icons/gi';
import { services, whyChooseUs, collectionSteps, centreOffers, centreInfo } from '../data/siteData';
import './Home.css';

// Helper to render icon for services
const renderServiceIcon = (iconName) => {
  switch (iconName) {
    case 'FaFlask': return <FaFlask />;
    case 'FaVial': return <FaVial />;
    case 'FaSyringe': return <FaSyringe />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'GiLiver': return <GiLiver />;
    case 'GiKidneys': return <GiKidneys />;
    default: return <FaMicroscope />;
  }
};

// Helper for Why Choose Us icons
const renderWhyIcon = (iconName) => {
  switch (iconName) {
    case 'FaHome': return <FaHome />;
    case 'FaClock': return <FaClock />;
    case 'FaMoneyBillWave': return <FaMoneyBillWave />;
    case 'FaMedal': return <FaAward />;
    case 'FaUserMd': return <FaUserMd />;
    case 'FaLaptopMedical': return <FaLaptopMedical />;
    default: return <FaShieldAlt />;
  }
};

export default function Home({ onOpenBooking }) {
  // Featured test categories
  const featuredServices = services.slice(0, 6);
  const featuredPackages = centreOffers;

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-wrapper">
        <div className="hero-bg-accent-1" />
        <div className="hero-bg-accent-2" />

        <div className="hero-container">
          <div className="hero-badge">
            <FaVial /> Thyrocare Franchise Collection Centre
          </div>

          <h1 className="hero-heading">
            Tests you can trust. <span>Samples collected at Sithara.</span>
          </h1>

          <p className="hero-description">
            Sithara is your local Thyrocare sample collection centre in Kurnool. Visit us or ask about the free home sample collection advertised for the centre. Samples are processed through Thyrocare.
          </p>

          <div className="hero-cta-group">
            <button
              className="btn-hero-primary"
              onClick={() => onOpenBooking('Thyrocare test collection enquiry')}
            >
              Ask about a test
            </button>
            <Link to="/tests" className="btn-hero-secondary">
              Browse test menu <FaArrowRight style={{ fontSize: '0.85rem' }} />
            </Link>
          </div>

          {/* Collection process */}
          <div className="hero-stats-row">
            <div className="stat-box">
              <span className="stat-number">01</span>
              <span className="stat-label">Select a Thyrocare test or profile</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">02</span>
              <span className="stat-label">Give your sample at Sithara</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">03</span>
              <span className="stat-label">Thyrocare processes the sample</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">04</span>
              <span className="stat-label">Receive your Thyrocare report</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="about-preview-section">
        <div className="about-preview-grid">
          <div>
            <span className="about-tag">The Sithara Centre</span>
            <h2 className="about-heading">
              Your local connection to Thyrocare testing.
            </h2>
            <p className="about-text">
              Sithara is a Thyrocare franchise sample collection centre. We help you find a test or profile in the Thyrocare catalogue and collect the required sample here.
            </p>
            <p className="about-text">
              Thyrocare handles sample routing, laboratory processing and report generation. Requirements, availability and report timing depend on the selected test and location.
            </p>
            <Link
              to="/about"
              style={{
                color: 'var(--primary)',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1rem'
              }}
            >
              How collection works <FaArrowRight />
            </Link>
          </div>

          <div className="feature-cards-grid">
            <div className="feature-mini-card">
              <div className="feature-icon-circle">
                  <FaHome />
              </div>
              <h4>Collection at Sithara</h4>
              <p>Visit our Kurnool centre or ask about the advertised free home sample collection in your area.</p>
            </div>

            <div className="feature-mini-card">
              <div className="feature-icon-circle">
                  <FaFlask />
              </div>
              <h4>Thyrocare test menu</h4>
              <p>Choose from individual pathology tests and health profiles listed by Thyrocare.</p>
            </div>

            <div className="feature-mini-card">
              <div className="feature-icon-circle">
                  <FaTruck />
              </div>
              <h4>Thyrocare processing</h4>
              <p>Samples are forwarded through Thyrocare’s network to its processing laboratories.</p>
            </div>

            <div className="feature-mini-card">
              <div className="feature-icon-circle">
                  <FaFileAlt />
              </div>
              <h4>Thyrocare reports</h4>
              <p>Report access is provided through the contact details used for the booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIAGNOSTIC SERVICES PREVIEW */}
      <section className="services-section">
        <div className="section-head">
          <span className="section-subtitle">Browse the Thyrocare menu</span>
          <h2 className="section-title">Popular test categories</h2>
          <p className="section-desc">
            These are selected examples from Thyrocare’s current catalogue. Check the live listing for full details and availability.
          </p>
        </div>

        <div className="services-grid-home">
          {featuredServices.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-card-icon">{renderServiceIcon(svc.icon)}</div>
              <h3>{svc.title}</h3>
              <p>{svc.shortDesc}</p>
              <div className="service-card-tests">
                {svc.tests.slice(0, 4).map((t, idx) => (
                  <span key={idx} className="test-pill">
                    {t}
                  </span>
                ))}
              </div>
              <div className="service-card-footer">
                <span className="service-price">{svc.sampleType}</span>
                <button
                  className="btn btn-primary"
                  style={{
                    background: 'var(--secondary)',
                    color: '#fff',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                  onClick={() => onOpenBooking(`${svc.title} enquiry`)}
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '45px' }}>
          <Link
            to="/services"
            className="btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            View test menu <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE SITHARA SECTION */}
      <section className="why-choose-section">
        <div className="section-head">
          <span className="section-subtitle">The Sithara service</span>
          <h2 className="section-title">Support from our collection centre</h2>
          <p className="section-desc">
            We help you check the live Thyrocare catalogue and prepare for sample collection at the centre.
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="why-choose-card">
              <div className="why-choose-icon">
                {renderWhyIcon(item.icon)}
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HEALTH PACKAGES PREVIEW */}
      <section className="packages-preview-section">
        <div className="section-head">
          <span className="section-subtitle">Limited-time opening offer</span>
          <h2 className="section-title">Aarogyam camp profiles</h2>
          <p className="section-desc">
            Offer prices and parameter counts from the Sithara centre flyer. Call to confirm current availability.
          </p>
        </div>

        <div className="packages-grid-home">
          {featuredPackages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <span className="profile-card-label">{pkg.parameterCount} parameters</span>
              <h3 className="pkg-name">{pkg.name}</h3>
              <div className="home-offer-price-row">
                <strong>₹{pkg.price.toLocaleString('en-IN')}</strong>
                <del>₹{pkg.originalPrice.toLocaleString('en-IN')}</del>
              </div>
              <p className="pkg-ideal">{pkg.highlights.slice(0, 3).join(' · ')}</p>
              <p className="profile-detail-note">Flyer offer; terms apply. Confirm by phone before booking.</p>

              <button
                className="btn btn-primary package-book-button"
                onClick={() => onOpenBooking(pkg.name)}
              >
                Enquire
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            to="/packages"
            style={{
              color: 'var(--secondary, #f15f56)',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            View offer details and other profiles <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Collection flow */}
      <section className="testimonials-section collection-process-section">
        <div className="section-head">
          <span className="section-subtitle">What to expect</span>
          <h2 className="section-title">From sample collection to report</h2>
          <p className="section-desc">
            Your sample is collected at Sithara and processed through Thyrocare’s laboratory network.
          </p>
        </div>

        <div className="testimonials-grid collection-process-grid">
          {collectionSteps.map((step) => (
            <div key={step.number} className="testimonial-card collection-step-card">
              <span className="collection-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FULL CTA BANNER */}
      <section className="cta-banner-wrapper">
        <div className="cta-banner-container">
          <h2 className="cta-banner-title">Looking for a Thyrocare test?</h2>
          <p className="cta-banner-desc">
            Ask the Sithara collection centre about test availability, sample requirements and visit details.
          </p>
          <div className="cta-banner-actions">
            <button
              className="btn-cta-white"
              onClick={() => onOpenBooking('Thyrocare test collection enquiry')}
            >
              Enquire about a test
            </button>
            <a href={`tel:${centreInfo.phoneHref}`} className="cta-hotline">
              <FaPhoneAlt /> {centreInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

