import React from 'react';
import { Link } from 'react-router-dom';
import BeatGrid from '../components/BeatGrid';
import StudioTutorialContent from '../components/StudioTutorialContent';

function StudioTutorialPage() {
  return (
    <div className="page-fade-enter creator-page">
      <section className="container hero-page">
        <h1 className="t-display">
          Studio<br />
          <span style={{ color: 'var(--amber)' }}>Tutorial</span>
        </h1>
        <p className="t-body-lg" style={{ maxWidth: 640, marginTop: 16 }}>
          A full step-by-step guide to Q-Cut Studio, from timeline preparation to final export.
        </p>
        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/studio" className="btn btn-ghost">
            Back to overview
          </Link>
        </div>
      </section>

      <StudioTutorialContent />
    </div>
  );
}

export default StudioTutorialPage;
