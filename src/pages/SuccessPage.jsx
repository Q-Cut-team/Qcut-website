import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <div className="page-fade-enter">
      <section className="container" style={{minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{textAlign: 'center', maxWidth: 640}}>
          {/* Success Icon */}
          <div style={{
            width: 80, 
            height: 80, 
            margin: '0 auto 32px',
            background: 'rgba(255, 178, 56, 0.1)',
            border: '2px solid var(--amber)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="t-display" style={{marginBottom: 24}}>
            Welcome to Q·Cut!
          </h1>
          
          <p className="t-body-lg" style={{marginBottom: 16}}>
            Your subscription is now active. Check your email for download links and license key.
          </p>
          
          <p className="t-body" style={{marginBottom: 40, color: 'var(--text-3)'}}>
            Having trouble? Contact us at{' '}
            <a href="mailto:info@qcut.at" style={{color: 'var(--amber)'}}>
              info@qcut.at
            </a>
          </p>

          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/help" className="btn btn-amber">
              Get started
            </Link>
            <Link to="/" className="btn btn-ghost">
              Back to home
            </Link>
          </div>

          {/* Additional Info */}
          <div style={{marginTop: 80, padding: 32, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r)', textAlign: 'left'}}>
            <h3 className="t-h3" style={{marginBottom: 20}}>What happens next?</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              <div style={{display: 'flex', gap: 12}}>
                <span style={{color: 'var(--amber)', fontWeight: 600}}>1.</span>
                <span className="t-body">Check your email for download links and installation instructions</span>
              </div>
              <div style={{display: 'flex', gap: 12}}>
                <span style={{color: 'var(--amber)', fontWeight: 600}}>2.</span>
                <span className="t-body">Install Q·Cut and activate with your license key</span>
              </div>
              <div style={{display: 'flex', gap: 12}}>
                <span style={{color: 'var(--amber)', fontWeight: 600}}>3.</span>
                <span className="t-body">Start cutting your footage to the beat!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessPage;