import React from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import { useToast } from '../hooks/useToast';
import Toast from '../components/Toast';

// Price IDs from your requirements
const PRICE_IDS = {
  DJ_MONTH: 'price_1TZZc4PjWn7pNPmY9kopKsZY', //now free trial
  EDITOR_MONTH: 'price_1TZZd5PjWn7pNPmYOmu7e4o9',//now free trial
  EDITOR_ONETIME: null,
  STUDIO_MONTH: 'price_1TZZcZPjWn7pNPmYlst2j6X3',//now free trial
  STUDIO_ONETIME: null,
  DJ_UNLIMITED: null // Coming soon
};

function PricingPage() {
  const { isVisible, message, showToast, hideToast } = useToast();

  const handleCheckout = async (priceId) => {
    if (!priceId) {
      showToast("DJ Unlimited coming soon — we're working on it! 🚧");
      return;
    }
    await redirectToCheckout(priceId);
  };

  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <section className="hero-page container" style={{textAlign:"center"}}>
        <h1 className="t-display" style={{maxWidth: 880, margin:"0 auto"}}>
          One engine.<br/>Four plans.
        </h1>
        <p className="t-body-lg" style={{maxWidth: 640, margin:"20px auto 0"}}>
          Choose based on your workflow. Upgrade anytime. Cancel anytime.
        </p>
      </section>

      {/* DJ Plans Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For DJs</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Live set editing</h2>
        </div>
        <div className="tier-grid">
          {/* DJ Plan */}
          <div className="tier-card">
            <h3>DJ</h3>
            <div className="price">€20<span className="unit">/month</span></div>
            <p>Perfect for regular gigs</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 10 sets/month</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Beat detection</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Miniset + Clips modes</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Social-ready presets</span>
              </li>
            </ul>
            <button 
              className="btn btn-amber" 
              onClick={() => handleCheckout(PRICE_IDS.DJ_MONTH)}
            >
              Test for free
            </button>
          </div>

          {/* DJ Unlimited Plan */}
          <div className="tier-card featured">
            <span className="badge">Unlimited</span>
            <h3>DJ Unlimited</h3>
            <div className="price">€35<span className="unit">/month</span></div>
            <p>For touring DJs & agencies</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited sets</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>All DJ features</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Cloud backup</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Priority render queue</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Direct upload to socials</span>
              </li>
            </ul>
            <button 
              className="btn btn-amber" 
              onClick={() => handleCheckout(PRICE_IDS.DJ_UNLIMITED)}
            >
              Coming soon
            </button>
          </div>
        </div>
      </section>

      {/* Editor Plans Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For Editors</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Professional multicam</h2>
        </div>
        <div className="tier-grid">
          {/* Editor Plan */}
          <div className="tier-card">
            <h3>Editor</h3>
            <div className="price">€30<span className="unit">/month</span></div>
            <p>For content creators</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 10 projects/month</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>XML export (Resolve, FCPX)</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>4K export</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Preset library</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Email support · 72h</span>
              </li>
            </ul>
            <button 
              className="btn btn-amber" 
              onClick={() => handleCheckout(PRICE_IDS.EDITOR_MONTH)}
            >
              Test for free
            </button>

            <button 
              className="btn btn-ghost" 
              onClick={() => handleCheckout(PRICE_IDS.EDITOR_ONETIME)}
              style={{marginTop: 8}}
            >
              One-time (Coming soon)
            </button>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Studio</span>
            <h3>Studio</h3>
            <div className="price">€50<span className="unit">/month</span></div>
            <p>For production studios</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>All NLE support</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>8K export</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Custom presets</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Priority render</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Live chat support</span>
              </li>
            </ul>
            <button 
              className="btn btn-amber" 
              onClick={() => handleCheckout(PRICE_IDS.STUDIO_MONTH)}
            >
              Test for free
            </button>
            <button 
              className="btn btn-ghost" 
              onClick={() => handleCheckout(PRICE_IDS.STUDIO_ONETIME)}
              style={{marginTop: 8}}
            >
              One-time (Coming soon)
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container section" style={{maxWidth: 720}}>
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Questions?</h2>
        </div>
        <div className="card" style={{marginBottom: 16}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>Can I switch plans?</h3>
          <p className="t-body">
            Yes. Upgrade or downgrade anytime. Changes take effect on your next billing cycle.
          </p>
        </div>
        <div className="card" style={{marginBottom: 16}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>What's the difference between DJ and Editor?</h3>
          <p className="t-body">
            DJ is optimized for live set recordings with beat detection. Editor works with any footage and exports to professional NLE timelines.
          </p>
        </div>
        <div className="card" style={{marginBottom: 16}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>Do I need to upload my footage?</h3>
          <p className="t-body">
            No. Q·Cut runs locally on your machine. Your footage never leaves your computer.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Ready to start?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>
          30-day money back guarantee. Cancel anytime.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/help" className="btn btn-ghost">
            Contact sales
          </Link>
        </div>
      </section>

      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default PricingPage;