import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useDownloadUrls } from '../hooks/useDownloadUrls';
import { useTermsAccepted } from '../hooks/useTermsAccepted';
import TermsCheckbox from '../components/TermsCheckbox';

function PlatformCards({ urls, disabled = false }) {
  const macSiliconEnabled = !disabled && urls.macSilicon;
  const macIntelEnabled = !disabled && urls.macIntel;
  const windowsEnabled = !disabled && urls.windows;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24,
      maxWidth: 880,
      margin: '0 auto',
    }}>
      <Reveal delay={0}>
        <div className="card" style={{textAlign: 'center'}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>macOS</h3>
          <p className="t-body" style={{marginBottom: 24}}>
            Pick the build that matches your chip
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <a
              href={macSiliconEnabled ? urls.macSilicon : '#'}
              className="btn btn-amber"
              style={{opacity: macSiliconEnabled ? 1 : 0.5, pointerEvents: macSiliconEnabled ? 'auto' : 'none'}}
            >
              Download for Apple Silicon
            </a>
            <a
              href={macIntelEnabled ? urls.macIntel : '#'}
              className="btn btn-ghost"
              style={{opacity: macIntelEnabled ? 1 : 0.5, pointerEvents: macIntelEnabled ? 'auto' : 'none'}}
            >
              Download for Intel
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="card" style={{textAlign: 'center'}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>Windows</h3>
          <p className="t-body" style={{marginBottom: 24}}>
            Windows 10 or newer · 64-bit
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <a
              href={windowsEnabled ? urls.windows : '#'}
              className="btn btn-amber"
              style={{opacity: windowsEnabled ? 1 : 0.5, pointerEvents: windowsEnabled ? 'auto' : 'none'}}
            >
              Download for Windows
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function DJDownloadPage() {
  const { latest, olderVersions, loading, error } = useDownloadUrls('qcut-dj');
  const [showOlder, setShowOlder] = useState(false);
  const terms = useTermsAccepted();

  return (
    <div className="page-fade-enter">
      <section className="container hero-page">
        <h1 className="t-display">
          Download<br/>
          <span style={{color: 'var(--amber)'}}>Q·Cut DJ</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Pick your platform. Install. Start cutting.
        </p>
      </section>

      <section className="container section">
        {loading && (
          <p className="t-body" style={{textAlign: 'center'}}>Loading downloads...</p>
        )}
        {error && (
          <p className="t-body" style={{textAlign: 'center', color: 'var(--amber)'}}>
            Could not load download links. Try again later.
          </p>
        )}
        {!loading && !error && (
          <>
            <div style={{maxWidth: 880, margin: '0 auto 24px', display: 'flex', justifyContent: 'center'}}>
              <TermsCheckbox accepted={terms.accepted} onChange={terms.setAccepted} />
            </div>
            {latest
              ? <PlatformCards urls={latest} disabled={!terms.accepted} />
              : (
                <p className="t-body" style={{textAlign: 'center', color: 'var(--text-3)'}}>
                  No downloads available yet. Check back soon.
                </p>
              )
            }
            {olderVersions.length > 0 && (
              <div style={{textAlign: 'center', marginTop: 32}}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowOlder(!showOlder)}
                >
                  {showOlder ? '↑ Hide older versions' : '↓ See older versions'}
                </button>
                {showOlder && olderVersions.map(({ version, urls }) => (
                  <div key={version} style={{marginTop: 40}}>
                    <p className="t-label" style={{textAlign: 'center', marginBottom: 20, color: 'var(--text-3)'}}>
                      Version {version}
                    </p>
                    <PlatformCards urls={urls} disabled={!terms.accepted} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <div style={{textAlign: 'center', marginTop: 40}}>
          <Link to="/dj" className="btn btn-ghost">← Back to Q·Cut DJ</Link>
        </div>
      </section>
    </div>
  );
}

export default DJDownloadPage;
