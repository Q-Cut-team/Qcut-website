import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useDownloadUrls } from '../hooks/useDownloadUrls';
import DownloadConsentModal from '../components/DownloadConsentModal';

function PlatformCards({ urls, onDownload }) {
  const macSiliconEnabled = Boolean(urls.macSilicon);
  const macIntelEnabled = Boolean(urls.macIntel);
  const windowsEnabled = Boolean(urls.windows);
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
            <button
              type="button"
              className="btn btn-amber"
              disabled={!macSiliconEnabled}
              onClick={() => onDownload(urls.macSilicon)}
              style={{opacity: macSiliconEnabled ? 1 : 0.5, cursor: macSiliconEnabled ? 'pointer' : 'not-allowed'}}
            >
              Download for Apple Silicon
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              disabled={!macIntelEnabled}
              onClick={() => onDownload(urls.macIntel)}
              style={{opacity: macIntelEnabled ? 1 : 0.5, cursor: macIntelEnabled ? 'pointer' : 'not-allowed'}}
            >
              Download for Intel
            </button>
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
            <button
              type="button"
              className="btn btn-amber"
              disabled={!windowsEnabled}
              onClick={() => onDownload(urls.windows)}
              style={{opacity: windowsEnabled ? 1 : 0.5, cursor: windowsEnabled ? 'pointer' : 'not-allowed'}}
            >
              Download for Windows
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function StudioDownloadPage() {
  const { latest, olderVersions, loading, error } = useDownloadUrls('qcut-studio');
  const [showOlder, setShowOlder] = useState(false);
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState(null);

  const handleDownloadContinue = () => {
    const downloadUrl = pendingDownloadUrl;
    setPendingDownloadUrl(null);
    window.location.href = downloadUrl;
  };

  return (
    <div className="page-fade-enter">
      <section className="container hero-page">
        <h1 className="t-display">
          Download<br/>
          <span style={{color: 'var(--amber)'}}>Q·Cut Studio</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Pick your platform. Install. Run the full Studio pipeline.
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
              ? <PlatformCards urls={latest} onDownload={setPendingDownloadUrl} />
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
                    <PlatformCards urls={urls} onDownload={setPendingDownloadUrl} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <div style={{textAlign: 'center', marginTop: 40}}>
          <Link to="/creator" className="btn btn-ghost">← Back to Creator</Link>
        </div>
      </section>
      <DownloadConsentModal
        isOpen={Boolean(pendingDownloadUrl)}
        onClose={() => setPendingDownloadUrl(null)}
        onContinue={handleDownloadContinue}
      />
    </div>
  );
}

export default StudioDownloadPage;
