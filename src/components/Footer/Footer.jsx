import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHome,
  FaWhatsapp
} from 'react-icons/fa';
import { centreInfo } from '../../data/siteData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col">
            <div className="footer-brand-title">
              <div className="footer-brand-icon">
                <img src="/thyrocare-mark.png" alt="" />
              </div>
              <div className="footer-brand-text">
                <h3 className="brand-wordmark"><span>Thyro</span><span>care</span></h3>
                <span>Sithara Diagnostic Center · {centreInfo.franchiseCode}</span>
              </div>
            </div>
            <p className="footer-desc">
              Sithara is a Thyrocare franchise sample collection centre in Kurnool. Centre and advertised free home sample collection are available; Thyrocare handles processing and reports.
            </p>
            <div className="footer-franchise-label">
              Thyrocare franchise collection centre
            </div>
            <div className="footer-socials">
              <a href={`https://wa.me/${centreInfo.phoneHref.replace('+', '')}`} target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Sithara Centre</Link></li>
              <li><Link to="/services">Collection Services</Link></li>
              <li><Link to="/tests">Thyrocare Test Menu</Link></li>
              <li><a href="https://www.thyrocare.com/diagnostics/all-tests-packages" target="_blank" rel="noreferrer">Official Thyrocare Catalogue</a></li>
              <li><Link to="/packages">Health Profiles</Link></li>
              <li><Link to="/contact">Contact the Centre</Link></li>
            </ul>
          </div>

          {/* Col 3: Test Specialties */}
          <div className="footer-col">
            <h4>Common Tests & Profiles</h4>
            <ul className="footer-links">
              <li><Link to="/tests">Thyroid Tests (T3, T4, TSH)</Link></li>
              <li><Link to="/tests">Diabetes Tests (Glucose, HbA1c)</Link></li>
              <li><Link to="/tests">Full Body Check-ups</Link></li>
              <li><Link to="/tests">Vitamin D & B12</Link></li>
              <li><Link to="/tests">Heart & Lipid Profiles</Link></li>
              <li><Link to="/tests">Liver & Kidney Tests</Link></li>
              <li><Link to="/tests">Vitamin & Iron Profiles</Link></li>
              <li><Link to="/tests">Fever, Infection & Allergy Tests</Link></li>
              <li><Link to="/tests">Microbiology & PCR Tests</Link></li>
              <li><Link to="/tests">Histopathology & Genetic Tests</Link></li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="footer-col">
            <h4>Contact the Centre</h4>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>{centreInfo.name} ({centreInfo.franchiseCode}). Signboard: {centreInfo.address}. Flyer: {centreInfo.flyerAddress}.</span>
            </div>
            <div className="footer-contact-item">
              <FaPhoneAlt />
              <span>{centreInfo.phone}<br />{centreInfo.alternatePhone}</span>
            </div>
            <div className="footer-contact-item">
              <FaHome />
              <span>Free home sample collection advertised · call to confirm area and appointment</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Thyrocare Sithara Collection Centre. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Diagnostics</Link>
            <Link to="/contact">Sample Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

