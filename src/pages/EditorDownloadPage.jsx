import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useDownloadUrls } from '../hooks/useDownloadUrls';

function PlatformCards({ urls }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
              href={urls.macSilicon || '#'}
              className="btn btn-amber"
              style={{opacity: urls.macSilicon ? 1 : 0.5, pointerEvents: urls.macSilicon ? 'auto' : 'none'}}
            >
              Download for Apple Silicon
            </a>
            <a
              href={urls.macIntel || '#'}
              className="btn btn-ghost"
              style={{opacity: urls.macIntel ? 1 : 0.5, pointerEvents: urls.macIntel ? 'auto' : 'none'}}
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
              href={urls.windows || '#'}
              className="btn btn-amber"
              style={{opacity: urls.windows ? 1 : 0.5, pointerEvents: urls.windows ? 'auto' : 'none'}}
            >
              Download for Windows
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function EditorDownloadPage() {
  const { latest, olderVersions, loading, error } = useDownloadUrls('qcut-creator');
  const [showOlder, setShowOlder] = useState(false);

  return (
    <div className="page-fade-enter">
      <section className="container hero-page">
        <h1 className="t-display">
          Download<br/>
          <span style={{color: 'var(--amber)'}}>Q·Cut Editor</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Pick your platform. Install. Take control of your cut.
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
            {latest
              ? <PlatformCards urls={latest} />
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
                    <PlatformCards urls={urls} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <div style={{textAlign: 'center', marginTop: 40}}>
          <Link to="/editor" className="btn btn-ghost">← Back to Editor</Link>
        </div>
      </section>
    </div>
  );
}

export default EditorDownloadPage;
