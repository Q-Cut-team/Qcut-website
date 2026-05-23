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
    <div className="page-fade-enter pricing-page">
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
      <section id="dj" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For DJs</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Fast & Easy Clips</h2>
        </div>
        <div className="tier-grid pricing-plan-grid">
          {/* DJ Plan */}
          <div className="tier-card">
            <h3>DJ</h3>
            <div className="price">Free</div>
            <p>Perfect for regular gigs</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 20 minutes </span>
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
                <span>Up to 3 clips</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>4 exports per week</span>
              </li>
            </ul>
            <button 
              className="btn btn-amber" 
              onClick={() => handleCheckout(PRICE_IDS.DJ_MONTH)}
            >
              Get for free
            </button>
          </div>

          {/* DJ Unlimited Plan */}
          <div className="tier-card featured">
            <span className="badge">Unlimited</span>
            <h3>DJ Unlimited</h3>
            <div className="price">€TBA<span className="unit">/month</span></div>
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
                <span>Unlimited input length</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Miniset export</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No Watermark</span>
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

      {/* Creator Plans Section */}
      <section id="creator" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For Creators</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Professional multicam</h2>
        </div>
        <div className="tier-grid pricing-plan-grid">
          {/* Creator Plan */}
          <div className="tier-card">
            <h3>Creator</h3>
            <div className="price">€TBA<span className="unit">/month</span></div>
            <p>For content creators</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>XML workflow</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Vibe based Cutting</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Audio and timecode synchronization</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Preset library</span>
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
            <div className="price">€TBA<span className="unit">/month</span></div>
            <p>For production studios</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>XML and DaVinci Resolve workflow</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Audio and timecode synchronization</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Full Control over how the cut looks</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Social Media Clips</span>
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
                <span>Fusion/effect options</span>
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
          <h3 className="t-h3" style={{marginBottom: 12}}>What's the difference between DJ and Creator?</h3>
          <p className="t-body">
            DJ is optimized to quickly get highlights out of your Dj Set. Creator works with any footage and exports to professional NLE timelines.
          </p>
        </div>
        <div className="card" style={{marginBottom: 16}}>
          <h3 className="t-h3" style={{marginBottom: 12}}>Do I need to upload my footage?</h3>
          <p className="t-body">
            No. Q·Cut runs locally on your machine. Your footage never leaves your computer.
          </p>
        </div>
      </section>

      {/* CTA Section 
      <section className="container section pricing-cta-section" style={{textAlign: 'center'}}>
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
      </section>*/}

      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default PricingPage;
