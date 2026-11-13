import React from 'react';
import PageBanner from '../components/common/PageBanner';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { centreOffers, packages } from '../data/siteData';
import './Packages.css';

const officialCatalogUrl = 'https://www.thyrocare.com/diagnostics/all-tests-packages';

export default function Packages({ onOpenBooking }) {
  return (
    <div className="packages-page">
      <PageBanner
        title="Thyrocare Health Profiles"
        subtitle="Explore examples of preventive health check-ups listed by Thyrocare. Current availability and package details can vary."
        breadcrumbs={[{ label: 'Health Profiles' }]}
      />

      <div className="packages-page-wrap">
        <div className="packages-container">
          <div className="catalogue-intro">
            <span className="section-subtitle">Current catalogue examples</span>
            <h2>Choose from Thyrocare profiles</h2>
            <p>
              Package inclusions, prices, fasting requirements and report timing can change. Open Thyrocare’s live catalogue for the latest details, then ask us to confirm collection at the Sithara centre.
            </p>
            <a className="btn btn-secondary" href={officialCatalogUrl} target="_blank" rel="noreferrer">
              View Thyrocare catalogue <FaExternalLinkAlt />
            </a>
          </div>

          <section className="centre-offers-section" aria-labelledby="centre-offers-title">
            <div className="section-head">
              <span className="section-subtitle">Sithara centre flyer</span>
              <h2 className="section-title" id="centre-offers-title">Aarogyam camp opening offers</h2>
              <p className="section-desc">Parameter counts, profile highlights and offer prices shown on the centre flyer.</p>
            </div>

            <div className="centre-offers-grid">
              {centreOffers.map((offer) => (
                <article key={offer.id} className="centre-offer-card">
                  <span className="profile-card-label">Limited-time opening offer</span>
                  <h3>{offer.name}</h3>
                  <p className="offer-parameter-count">{offer.parameterCount} parameters</p>
                  <div className="offer-price-row">
                    <strong>₹{offer.price.toLocaleString('en-IN')}</strong>
                    <del>₹{offer.originalPrice.toLocaleString('en-IN')}</del>
                  </div>
                  <h4>Profile highlights</h4>
                  <ul>
                    {offer.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <button className="btn btn-primary package-book-button" onClick={() => onOpenBooking(offer.name)}>
                    Enquire about this profile <FaArrowRight />
                  </button>
                </article>
              ))}
            </div>
            <p className="offer-terms">Offer prices are transcribed from the centre flyer. Limited-time terms apply; call Sithara to confirm current availability before visiting.</p>
          </section>

          <div className="catalogue-intro listed-profiles-intro">
            <span className="section-subtitle">More catalogue profiles</span>
            <h2>Other Thyrocare health profiles</h2>
            <p>These profile names are examples. Open Thyrocare’s live catalogue for current inclusions, prices and availability.</p>
          </div>

          <div className="packages-grid-all">
            {packages.map((pkg) => (
              <article key={pkg.id} className="pkg-card-full profile-card">
                <div className="pkg-header-box">
                  <span className="profile-card-label">Thyrocare profile</span>
                  <h3>{pkg.name}</h3>
                  <p className="pkg-subtitle-for">{pkg.idealFor}</p>
                </div>

                <p className="profile-detail-note">Check the live listing for current inclusions, preparation and price.</p>

                <button className="btn btn-primary package-book-button" onClick={() => onOpenBooking(pkg.name)}>
                  Enquire about this profile <FaArrowRight />
                </button>
              </article>
            ))}
          </div>

          <div className="catalogue-note profile-note">
            <div>
              <strong>Profile names shown as catalogue examples</strong>
              <p>Check the official listing for exact inclusions and location-specific availability before booking.</p>
            </div>
            <a href={officialCatalogUrl} target="_blank" rel="noreferrer">
              See current packages <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
