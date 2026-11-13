import React, { useState, useMemo } from 'react';
import PageBanner from '../components/common/PageBanner';
import { FaSearch, FaTint, FaFlask, FaFilter, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { allTests, testCategories, centreInfo, centreRates } from '../data/siteData';
import './Tests.css';

const categories = ['All', ...testCategories];
const officialCatalogUrl = 'https://www.thyrocare.com/diagnostics/all-tests-packages';

export default function Tests({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const matchesSearch =
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.sample.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'All' || test.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="tests-page">
      <PageBanner
        title="Thyrocare Tests & Profiles"
        subtitle={`Browse ${allTests.length} selected test and profile examples across Thyrocare’s catalogue categories.`}
        breadcrumbs={[{ label: 'Test Menu' }]}
      />

      <div className="tests-page-wrap">
        <div className="tests-container">
          <section className="centre-rate-strip" aria-label="Popular test rates from the centre flyer">
            <div className="centre-rate-intro">
              <span className="section-subtitle">From the centre flyer</span>
              <h2>Popular test rates</h2>
              <p>Call to confirm current pricing and requirements.</p>
            </div>
            <div className="centre-rate-cards">
              {centreRates.map((rate) => (
                <button key={rate.name} className="centre-rate-card" onClick={() => onOpenBooking(rate.name)}>
                  <span>{rate.name}</span>
                  <strong>₹{rate.price.toLocaleString('en-IN')}</strong>
                  <small>Enquire <FaArrowRight /></small>
                </button>
              ))}
            </div>
          </section>

          {/* Search & Category Filter Box */}
          <div className="test-search-filter-box">
            <div className="search-input-wrap">
              <FaSearch />
              <input
                type="text"
                placeholder="Search tests and profiles: thyroid, HbA1c, Vitamin D, dengue, CBC…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-categories-row">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)', marginRight: '6px' }}>
                <FaFilter style={{ color: 'var(--primary)' }} /> Categories:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count header */}
          <div className="test-results-header">
            <span>
              Showing <strong>{filteredTests.length}</strong> of <strong>{allTests.length}</strong> selected tests and profiles
            </span>
            {(searchTerm || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Clear Filters ✕
              </button>
            )}
          </div>

          {/* Results List / Table */}
          {filteredTests.length > 0 ? (
            <div className="tests-table-card">
              <table className="tests-table">
                <thead>
                  <tr>
                    <th>Test / Profile</th>
                    <th>Category</th>
                    <th>Sample Type</th>
                    <th style={{ textAlign: 'right' }}>Enquiry</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTests.map((test) => (
                    <tr key={test.id}>
                      <td className="test-name-cell">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <FaFlask style={{ color: 'var(--primary)', fontSize: '0.9rem', flexShrink: 0 }} />
                          <span>{test.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className="category-tag">{test.category}</span>
                      </td>
                      <td>
                        <span className="sample-badge">
                          <FaTint style={{ color: 'var(--primary)' }} />
                          {test.sample}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          className="btn-book-test-row"
                          onClick={() => onOpenBooking(test.name)}
                        >
                          Enquire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-tests-state">
              <FaFlask style={{ fontSize: '3rem', color: '#D1D5DB', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '8px' }}>
                No tests matching "{searchTerm}"
              </h3>
              <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
                Try adjusting your search keywords or resetting your category filter.
              </p>
              <button
                className="btn btn-primary"
                style={{
                  background: 'var(--secondary)',
                  color: '#fff',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}

          <div className="catalogue-note">
            <div>
              <strong>Selected examples from Thyrocare’s catalogue</strong>
              <p>Test availability, current price, fasting instructions and report timing depend on the selected test and location.</p>
            </div>
            <a href={officialCatalogUrl} target="_blank" rel="noreferrer">
              Open Thyrocare’s live catalogue <FaExternalLinkAlt />
            </a>
          </div>

          {/* Quick Help Footer */}
          <div
            style={{
              marginTop: '40px',
              padding: '24px 30px',
              background: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 4px', color: '#1F2937', fontSize: '1.1rem' }}>
                Looking for another Thyrocare test or profile?
              </h4>
              <p style={{ margin: 0, color: '#6B7280', fontSize: '0.9rem' }}>
                Ask us to check the current Thyrocare catalogue and collection requirements for your selected test.
              </p>
            </div>
            <a
              href={`tel:${centreInfo.phoneHref}`}
              className="btn btn-primary test-help-call"
            >
              Call Collection Centre: {centreInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

