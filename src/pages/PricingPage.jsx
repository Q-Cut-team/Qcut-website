import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import { useToast } from '../hooks/useToast';
import Toast from '../components/Toast';
import OneTimeConsentModal from '../components/OneTimeConsentModal';
import TrialConsentModal from '../components/TrialConsentModal';
import StudioPurchaseButtons from '../components/StudioPurchaseButtons';

// Price IDs from your requirements
const PRICE_IDS = {
  DJ_UNLIMITED:        'price_1TduQoPjWn7pNPmYW7R0cVZl',
  DJ_UNLIMITED_ONETIME:'price_1TduW2PjWn7pNPmYigHywfuf',
};

function PricingPlanSections({ children }) {
  const sections = React.Children.toArray(children);

  return (
    <>
      {sections.find((section) => section.props.id === 'qcut')}
      {sections.find((section) => section.props.id === 'dj')}
    </>
  );
}

function PricingPage() {
  const { isVisible, message, showToast, hideToast } = useToast();
  const [subscriptionPriceId, setSubscriptionPriceId] = useState(null);
  const [oneTimePriceId, setOneTimePriceId] = useState(null);

  const handleCheckout = async (priceId) => {
    if (!priceId) {
      showToast("Coming soon — we're working on it! 🚧");
      return;
    }
    await redirectToCheckout(priceId);
  };

  const handleSubscriptionContinue = async () => {
    const priceId = subscriptionPriceId;
    setSubscriptionPriceId(null);
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
        <p className="t-body-lg" style={{maxWidth: 640, margin:"0 auto"}}>
          Choose based on your workflow. Upgrade anytime. Cancel anytime.
        </p>
      </section>

      <PricingPlanSections>
        {/* DJ Plans Section */}
        <section id="dj" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For DJs</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Fast and easy clips</h2>
        </div>
        <div className="tier-grid pricing-plan-grid">
          {/* DJ Plan */}
          <div className="tier-card">
            <h3>Q-Cut DJ</h3>
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
                Download Q-Cut DJ
              </Link>

          </div>

          {/* DJ Unlimited Plan */}
          <div className="tier-card featured">
            <span className="badge">Unlimited</span>
            <h3>Q-Cut DJ Unlimited</h3>
            <div className="price-row">
              <div className="price">€10,20<span className="unit">/month</span></div>
            </div>
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
                <span>Mini-set export</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No watermark</span>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-amber"
              onClick={() => setSubscriptionPriceId(PRICE_IDS.DJ_UNLIMITED)}
            >
              Subscribe
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

        {/* Q-Cut Plans Section */}
        <section id="qcut" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For editors</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Professional multicam</h2>
        </div>
        <div className="tier-grid pricing-plan-grid">
          {/* Q-Cut Plan */}
          <div className="tier-card">
            <span className="badge">NEW</span>
            <div className="qcut-plan-summary">
              <h3>Q-Cut Free</h3>
              <div className="qcut-plan-price-space">
                <div className="price">Free</div>
              </div>
              <span className="qcut-plan-tax-line qcut-plan-tax-placeholder" aria-hidden="true">incl. 20% VAT</span>
              <p>Try Q-Cut Free and see what it can do.</p>
            </div>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Same engine and results as Q-Cut Studio</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Simplified settings</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 3 cameras</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Up to 30 minutes</span>
              </li>
            </ul>
            <Link to="/free/download" className="btn btn-amber qcut-free-button">Go to download</Link>
          </div>

          {/* Studio Plan */}
          <div id="studio" className="tier-card featured" style={{scrollMarginTop: 100}}>
            <span className="badge release-badge">Version 2 released!</span>
            <div className="qcut-plan-summary">
              <h3>Q-Cut Studio</h3>
              <div className="qcut-plan-price-space">
                <div className="price-row">
                  <div className="price">€45<span className="unit">/month</span></div>
                </div>
              </div>
              <span className="t-body qcut-plan-tax-line">incl. 20% VAT</span>
              <p>Take full control over your cut.</p>
            </div>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Da Vinci Resolve Studio, Adobe Premiere Pro and XML workflows</span>
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
                <span>Full control over how the cut looks</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Social media clips</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Fusion and effect options</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited cameras</span>
              </li>
            </ul>
            <StudioPurchaseButtons />
          </div>
        </div>
        <p className="t-body" style={{textAlign: 'center', fontSize: 13, color: 'var(--text-3)', marginTop: 24}}>
          All prices include 20% VAT (Austria) and can differ slightly depending on your location. Final price is shown at checkout.
        </p>
        </section>
      </PricingPlanSections>

      <TrialConsentModal
        isOpen={Boolean(subscriptionPriceId)}
        isTrial={false}
        onClose={() => setSubscriptionPriceId(null)}
        onContinue={handleSubscriptionContinue}
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
