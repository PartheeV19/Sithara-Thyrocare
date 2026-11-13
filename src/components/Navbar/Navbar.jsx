import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { centreInfo } from '../../data/siteData';
import './Navbar.css';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header>
      {/* Top utility bar */}
      <div className="topbar">
        <div className="topbar-content">
          <div className="topbar-left">
            <span className="topbar-item">
              <FaPhoneAlt /> Call: <strong>{centreInfo.phone} / {centreInfo.alternatePhone}</strong>
            </span>
            <span className="topbar-item">
              <FaMapMarkerAlt /> Kurnool · {centreInfo.franchiseCode}
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-item" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              <FaArrowRight /> Samples collected at Sithara · Processed by Thyrocare
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-brand" onClick={closeMobile}>
            <div className="brand-icon">
              <img src="/thyrocare-mark.png" alt="" />
            </div>
            <div className="brand-text">
              <h2 className="brand-wordmark"><span>Thyro</span><span>care</span></h2>
              <span>Sithara Diagnostic Center · {centreInfo.franchiseCode}</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Collection Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/tests" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Thyrocare Test Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Health Profiles
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="btn-book-nav"
              onClick={() => {
                closeMobile();
                onOpenBooking('Thyrocare test collection enquiry');
              }}
            >
              Enquire Now
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            About Sithara Centre
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Collection Services
          </NavLink>
          <NavLink to="/tests" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Thyrocare Test Menu
          </NavLink>
          <NavLink to="/packages" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Health Profiles
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Contact & Location
          </NavLink>

          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
            <div style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '8px' }}>Sample collection enquiries:</div>
            <a
              href={`tel:${centreInfo.phoneHref}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--primary, #0D7377)',
                fontWeight: 700,
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}
            >
              <FaPhoneAlt /> {centreInfo.phone}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

