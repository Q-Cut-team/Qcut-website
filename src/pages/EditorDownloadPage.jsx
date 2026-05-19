import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

// TODO: replace placeholders with real download URLs (S3 / GitHub releases / etc.)
const DOWNLOADS = {
  macSilicon: '#',
  macIntel: '#',
  windows: '#',
};

function EditorDownloadPage() {
  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <section className="container hero-page">
        <h1 className="t-display">
          Download<br/>
          <span style={{color: 'var(--amber)'}}>Q·Cut Editor</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Pick your platform. Install. Take control of your cut.
        </p>
      </section>

      {/* Platform Blocks */}
      <section className="container section">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
            maxWidth: 880,
            margin: '0 auto',
          }}
        >
          <Reveal delay={0}>
            <div className="card" style={{textAlign: 'center'}}>
              <h3 className="t-h3" style={{marginBottom: 12}}>macOS</h3>
              <p className="t-body" style={{marginBottom: 24, color: 'var(--text-2)'}}>
                Pick the build that matches your chip
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <a href={DOWNLOADS.macSilicon} className="btn btn-amber">
                  Download for Apple Silicon
                </a>
                <a href={DOWNLOADS.macIntel} className="btn btn-ghost">
                  Download for Intel
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card" style={{textAlign: 'center'}}>
              <h3 className="t-h3" style={{marginBottom: 12}}>Windows</h3>
              <p className="t-body" style={{marginBottom: 24, color: 'var(--text-2)'}}>
                Windows 10 or newer · 64-bit
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
                <a href={DOWNLOADS.windows} className="btn btn-amber">
                  Download for Windows
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div style={{textAlign: 'center', marginTop: 40}}>
          <Link to="/editor" className="btn btn-ghost">
            ← Back to Editor
          </Link>
        </div>
      </section>
    </div>
  );
}

export default EditorDownloadPage;
