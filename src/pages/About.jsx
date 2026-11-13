import React from 'react';
import PageBanner from '../components/common/PageBanner';
import { FaVial, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { centreInfo } from '../data/siteData';
import './About.css';

export default function About({ onOpenBooking }) {
  return (
    <div className="about-page">
      <PageBanner
        title="Your Local Thyrocare Collection Centre"
        subtitle="Sithara Diagnostic Center (FE 409) is a Thyrocare sample collection centre in Kurnool."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <div className="about-page-content">
        <div className="about-page-container">
          <div className="story-grid">
            <div>
              <span className="about-tag">The Sithara Centre</span>
              <h2 className="about-heading">Sample collection here. Testing through Thyrocare.</h2>
              <p className="story-lead">
                Sithara Diagnostic Center is a Thyrocare franchise sample collection centre. Visit us for a selected Thyrocare test or profile, or ask about the free home sample collection advertised for the centre.
              </p>
              <p className="story-p">
                We help you find a test in Thyrocare’s catalogue and confirm the required sample and preparation instructions before collection.
              </p>
              <p className="story-p">
                Samples are forwarded through Thyrocare’s network for processing and reports. Home collection area and appointment availability should be confirmed by phone.
              </p>
              <button className="btn btn-primary" onClick={() => onOpenBooking('Thyrocare test collection enquiry')}>
                Ask about a test <FaArrowRight />
              </button>
            </div>

            <figure className="centre-photo-card">
              <img src="/images/sithara-kurnool-centre.jpg" alt="Sithara Diagnostic Center (FE 409), a Thyrocare sample collection centre in Kurnool" />
              <figcaption>
                <strong>{centreInfo.name} · {centreInfo.franchiseCode}</strong>
                <span>{centreInfo.address}</span>
                <span>Flyer address: {centreInfo.flyerAddress}</span>
              </figcaption>
            </figure>
          </div>

          <div className="mission-vision-grid">
            <div className="mv-card mission">
              <h3><FaVial /> What happens here</h3>
              <p>We assist with Thyrocare test enquiries and collect the required sample at the centre, subject to the selected test and its requirements.</p>
            </div>
            <div className="mv-card vision">
              <h3><FaCheckCircle /> What Thyrocare handles</h3>
              <p>Thyrocare receives and processes samples through its laboratory network, then provides the report associated with the booking.</p>
            </div>
          </div>

          <div className="infra-section">
            <div className="collection-section-heading">
              <span className="about-tag">How it works</span>
              <h2>From test selection to report</h2>
              <p>Test availability, preparation and report turnaround vary by test and location.</p>
            </div>
            <div className="infra-grid">
              <div className="infra-card"><span className="collection-step-number">01</span><h4>Choose a test</h4><p>Check the Thyrocare live catalogue or ask us about a prescribed test.</p></div>
              <div className="infra-card"><span className="collection-step-number">02</span><h4>Confirm requirements</h4><p>Review sample type, fasting and prescription requirements for that test.</p></div>
              <div className="infra-card"><span className="collection-step-number">03</span><h4>Give your sample</h4><p>Visit the Sithara centre for the collection arranged for your booking.</p></div>
              <div className="infra-card"><span className="collection-step-number">04</span><h4>Receive your report</h4><p>Thyrocare processes the sample and provides report access through the booking.</p></div>
            </div>
          </div>

          <div className="about-cta-panel">
            <h3>Looking for a Thyrocare test?</h3>
            <p>Browse the current catalogue, then contact Sithara to confirm the test and collection requirements.</p>
            <button className="btn about-cta-button" onClick={() => onOpenBooking('Thyrocare test collection enquiry')}>
              Enquire at the centre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
