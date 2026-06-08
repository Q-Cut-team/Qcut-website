import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import { useToast } from '../hooks/useToast';
import Toast from '../components/Toast';
import OneTimeConsentModal from '../components/OneTimeConsentModal';
import TrialConsentModal from '../components/TrialConsentModal';

// Price IDs from your requirements
const PRICE_IDS = {
  DJ_UNLIMITED:        'price_1TduQoPjWn7pNPmYW7R0cVZl',
  EDITOR_MONTH:        'price_1TecRdPjWn7pNPmY6LDpvNMv',
  STUDIO_MONTH:        'price_1TecSzPjWn7pNPmY1OqTMEk0',
  DJ_UNLIMITED_ONETIME:'price_1TduW2PjWn7pNPmYigHywfuf',
  EDITOR_ONETIME:      'price_1TecQoPjWn7pNPmY9b0rRmXR',
  STUDIO_ONETIME:      'price_1TecUiPjWn7pNPmYvOVX4aRa',
};

function PricingPage() {
  const { isVisible, message, showToast, hideToast } = useToast();
  const [trialPriceId, setTrialPriceId] = useState(null);
  const [oneTimePriceId, setOneTimePriceId] = useState(null);

  const handleCheckout = async (priceId) => {
    if (!priceId) {
      showToast("Coming soon — we're working on it! 🚧");
      return;
    }
    await redirectToCheckout(priceId);
  };

  const handleTrialContinue = async () => {
    const priceId = trialPriceId;
    setTrialPriceId(null);
    await handleCheckout(priceId);
  };

  const handleOneTimeContinue = async () => {
    const priceId = oneTimePriceId;
    setOneTimePriceId(null);
    await handleCheckout(priceId);
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
                <span>Up to 20 minutes</span>
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
            {/* Download button — links to installer page */}

              <Link to="/dj/download" className="btn btn-ghost">
                Download Q·Cut DJ
              </Link>

          </div>

          {/* DJ Unlimited Plan */}
          <div className="tier-card featured">
            <span className="badge">Unlimited</span>
            <h3>DJ Unlimited</h3>
            <div className="price">€10<span className="unit">/month</span></div>
            <span className="t-body" style={{display: 'block', fontSize: 12, color: 'var(--text-3)', marginTop: 4}}>incl. 20% VAT</span>
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
              type="button"
              className="btn btn-amber"
              onClick={() => setTrialPriceId(PRICE_IDS.DJ_UNLIMITED)}
            >
              Test for free
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setOneTimePriceId(PRICE_IDS.DJ_UNLIMITED_ONETIME)}
              style={{marginTop: 8}}
            >
              One-time - €300
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
            <div className="price">€35<span className="unit">/month</span></div>
            <span className="t-body" style={{display: 'block', fontSize: 12, color: 'var(--text-3)', marginTop: 4}}>incl. 20% VAT</span>
            {/*<p>For content creators</p>*/}
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
                <span>Set the vibe of your Cut</span>
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
                <span>Up to 4 cameras</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-amber"
              onClick={() => setTrialPriceId(PRICE_IDS.EDITOR_MONTH)}
            >
              Test for free
            </button>

            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setOneTimePriceId(PRICE_IDS.EDITOR_ONETIME)}
              style={{marginTop: 8}}
            >
              One-time - €420
            </button>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Studio</span>
            <h3>Studio</h3>
            <div className="price">€65<span className="unit">/month</span></div>
            <span className="t-body" style={{display: 'block', fontSize: 12, color: 'var(--text-3)', marginTop: 4}}>incl. 20% VAT</span>
            <p>Take full Control over your Cut</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>DaVinci Resolve Studio & XML Workflow</span>
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
                <span>Fusion/effect options</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited cameras</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-amber"
              onClick={() => setTrialPriceId(PRICE_IDS.STUDIO_MONTH)}
            >
              Test for free
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setOneTimePriceId(PRICE_IDS.STUDIO_ONETIME)}
              style={{marginTop: 8}}
            >
              One-time - €720
            </button>
          </div>
        </div>
        <p className="t-body" style={{textAlign: 'center', fontSize: 13, color: 'var(--text-3)', marginTop: 24}}>
          All prices include 20% VAT (Austria) and can differ slightly depending on your location. Final price is shown at checkout.
        </p>
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

      <TrialConsentModal
        isOpen={Boolean(trialPriceId)}
        onClose={() => setTrialPriceId(null)}
        onContinue={handleTrialContinue}
      />
      <OneTimeConsentModal
        isOpen={Boolean(oneTimePriceId)}
        onClose={() => setOneTimePriceId(null)}
        onContinue={handleOneTimeContinue}
      />
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default PricingPage;
