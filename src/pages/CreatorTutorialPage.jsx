import React from 'react';
import { Link } from 'react-router-dom';
import BeatGrid from '../components/BeatGrid';
import CreatorTutorialContent from '../components/CreatorTutorialContent';

function CreatorTutorialPage() {
  return (
    <div className="page-fade-enter creator-page">
      <section className="container hero-page">
        <h1 className="t-display">
          Creator<br />
          <span style={{ color: 'var(--amber)' }}>Tutorial</span>
        </h1>
        <p className="t-body-lg" style={{ maxWidth: 640, marginTop: 16 }}>
          Full step-by-step guide for Q-Cut Creator from timeline prep to final export settings.
        </p>
        <BeatGrid />
        <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/creator" className="btn btn-ghost">
            Back to Overview
          </Link>
        </div>
      </section>

      <CreatorTutorialContent />
    </div>
  );
}

export default CreatorTutorialPage;
