import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-banner">
      <div className="banner-content container">
        <span className="banner-eyebrow">Thyrocare · Sithara Collection Centre</span>
        <h1>{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-home"><FaHome /> Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={`${crumb.label}-${idx}`}>
              <FaChevronRight className="breadcrumb-separator" />
              {crumb.path ? (
                <Link to={crumb.path}>{crumb.label}</Link>
              ) : (
                <span className="current" aria-current="page">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
