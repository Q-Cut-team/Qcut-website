import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import BeatGrid from "../components/BeatGrid";
import qcutDjImage from '../assets/images/qcut_dj.png';
import Reveal from '../components/Reveal';
import { useToast } from '../hooks/useToast';
import { useTermsAccepted } from '../hooks/useTermsAccepted';
import Toast from '../components/Toast';
import TermsCheckbox from '../components/TermsCheckbox';

const DJ_UNLIMITED_MONTH_PRICE_ID   = 'price_1TduQoPjWn7pNPmYW7R0cVZl';
const DJ_UNLIMITED_ONETIME_PRICE_ID = 'price_1TduW2PjWn7pNPmYigHywfuf';

const DJ_COMPARISON_ROWS = [
  { feature: 'Core DJ sync and music-based cutting', free: 'Yes', unlimited: 'Yes' },
  { feature: 'Weekly export quota', free: '4 exports per week', unlimited: 'Unlimited' },
  { feature: 'Watermark', free: 'Yes', unlimited: 'No' },
  { feature: 'Input length', free: 'Up to 20 minutes', unlimited: 'Unlimited' },
  { feature: 'Clips export', free: 'Yes', unlimited: 'Yes' },
  { feature: 'Miniset export', free: 'No', unlimited: 'Yes, up to 60min' },
  { feature: 'Clip count', free: 'Up to 3 clips', unlimited: 'As many Drops as we can find' },
  { feature: 'Dynamic zoom', free: 'Included, locked on', unlimited: 'Editable' },
  { feature: 'Drop camera shake', free: 'No', unlimited: 'Editable' },
  { feature: 'Export window', free: 'Up to 20 minutes for clips', unlimited: 'Unlimited' },
  {
    feature: 'Best for',
    free: 'Trying Q-Cut DJ and short clip exports',
    unlimited: 'Regular DJ content, longer exports, minisets, and full creative control',
  },
];

function DJPage() {
  const ctaSectionRef = useRef(null);
  const [showDetailedComparison, setShowDetailedComparison] = useState(false);
  const { isVisible, message, showToast, hideToast } = useToast();
  const djUnlimitedTerms = useTermsAccepted();

  const handleCheckout = async (priceId) => {
    if (!priceId) {
      showToast("DJ Unlimited coming soon — we're working on it! 🚧");
      return;
    }
    await redirectToCheckout(priceId);
  };

  const handleGetFree = async () => {
    await redirectToCheckout(DJ_UNLIMITED_MONTH_PRICE_ID);
  };

  const scrollToCtaSection = () => {
    if (!ctaSectionRef.current) return;

    const stickyHeaderOffset = 96;
    const targetTop = ctaSectionRef.current.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  };

  return (
    <div className="page-fade-enter dj-page">
      {/* Hero Section */}
      <section className="container hero-page">
        <h1 className="t-display" style={{
          background: 'linear-gradient(180deg, #fff 0%, var(--text-2) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Stop editing<br/>
          <span style={{color: 'var(--amber)', WebkitTextFillColor: 'var(--amber)'}}>Start dropping</span><br/>

        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Drag in your video. Drag in your audio. Hit export. That's literally it.
        </p>
        <div style={{marginTop: 24, display:"flex", gap: 12, flexWrap:"wrap"}}>
          <button type="button" className="btn btn-amber btn-amber-lg" onClick={scrollToCtaSection}>
            Get Q-Cut DJ
          </button>

        </div>
      </section>

      <Reveal as="section" className="container" style={{paddingTop: 12, paddingBottom: 8}}>
        <p className="t-body-lg" style={{maxWidth: 780, margin: '0 auto', textAlign: 'center'}}>
          Film Yourself mixing with up to 3 cameras simultaniously (example: phone and laptop) and record the audio seperately. Drag and Drop The Clips into Q-Cut and well make Social Media Clips in Minutes!
        </p>
      </Reveal>

      {/* Product Screenshot Section */}
      <Reveal as="section" className="container section">
        <div className="product-grid dj-product-grid" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap: 32, alignItems:"center"}}>
          <div>
            <h2 className="t-h2">Two clicks<br/>One button</h2>
            <p className="t-body-lg" style={{marginTop: 16, maxWidth: 440}}>
              Drop video. Drop audio. Pick a format. Export.
            </p>
            <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Ready-to-post social clips</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Cuts to the beat</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">9:16 and 16:9 social presets</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">No upload. Runs on your machine.</span>
              </div>
            </div>
          </div>
          <Reveal delay={150}>
            <div>
              <div style={{
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid var(--line)',
                boxShadow: '0 20px 60px -20px rgba(255,178,56,0.15)'
              }}>
                <img src={qcutDjImage} alt="Q·Cut DJ" style={{width: '100%', display: 'block'}} />
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>

      {/* Stats Section 
      <Reveal as="section" className="container section">
        <h2 className="t-h2" style={{marginBottom: 32, maxWidth: 720}}>
          Fast Social Media Clips. Every Time.
        </h2>
        <div className="scoreboard-row">
          <div className="scoreboard">
            <div className="corner" />
            <div className="num"><span className="unit">Social clips</span></div>
            <div className="lbl">Average export</div>
          </div>
          <div className="scoreboard">
            <div className="corner" />
            <div className="num"><span className="unit">Mini-sets</span></div>
            <div className="lbl">Per session</div>
          </div>
          <div className="scoreboard">
            <div className="corner" />
            <div className="num"><span className="unit">3 cams</span></div>
            <div className="lbl">Total effort</div>
          </div>
        </div>
      </Reveal>*/}


      {/* Features Section */}
      <section className="container section dj-last-section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Built for your workflow</h2>
          </div>
        </Reveal>
        <div className="feature-grid-3">
          <Reveal delay={0}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Beat-synced</h3>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Music-adapted</h3>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Vertical & Horizontal</h3>
            </div>
          </Reveal>
          <Reveal delay={0}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Mini-sets</h3>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Up to 3 cams</h3>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card">
              <h3 className="t-h3" style={{marginBottom: 12}}>Local & private</h3>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DJ Free vs Unlimited Section */}
      <section className="container section dj-compare-section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Q-Cut DJ Free or Q-Cut DJ Unlimited?</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="card" style={{marginBottom: 24}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>The fast answer</h3>
            <p className="t-body" style={{marginBottom: 10}}>
              Choose <strong>Q-Cut DJ Free</strong> if you want to use Q-Cut for free with short exports and basic limits.
            </p>
            <p className="t-body">
              Choose <strong>Q-Cut DJ Unlimited</strong> if you produce regular DJ content, need longer exports and minisets, and want full creative control.
            </p>
            <div style={{marginTop: 20}}>
              <button
                type="button"
                className="btn btn-amber"
                onClick={() => setShowDetailedComparison(!showDetailedComparison)}
                aria-expanded={showDetailedComparison}
                aria-controls="dj-compare-in-detail"
              >
                {showDetailedComparison ? 'Hide detailed comparison' : 'Compare in detail'}
              </button>
            </div>
          </div>
        </Reveal>

        {showDetailedComparison ? (
          <Reveal delay={120}>
            <div id="dj-compare-in-detail" className="card">
              <h3 className="t-h3" style={{marginBottom: 16}}>Feature snapshot</h3>
              <div className="comparison-table-wrap">
                <table className="comparison-table" style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr>
                      <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Feature</th>
                      <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q-Cut DJ Free</th>
                      <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q-Cut DJ Unlimited</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DJ_COMPARISON_ROWS.map((row) => (
                      <tr key={row.feature}>
                        <td data-label="Feature" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text-2)'}}>{row.feature}</td>
                        <td data-label="Q-Cut DJ Free" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.free}</td>
                        <td data-label="Q-Cut DJ Unlimited" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.unlimited}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        ) : null}
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} id="dj-cta-section" className="container section dj-cta-section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <span className="t-label">For DJs</span>
          <h2 className="t-h2" style={{marginTop: 12}}>Choose your plan</h2>
        </div>
        <div className="tier-grid pricing-plan-grid">
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
            <Link to="/dj/download" className="btn btn-ghost">
              Download Q·Cut DJ
            </Link>
            {/*<button*/}
            {/*  className="btn btn-amber"*/}
            {/*  onClick={handleGetFree}*/}
            {/*>*/}
            {/*  Download for free*/}
            {/*</button>*/}
          </div>

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

            <TermsCheckbox accepted={djUnlimitedTerms.accepted} onChange={djUnlimitedTerms.setAccepted} />
            <button
              className="btn btn-amber"
              disabled={!djUnlimitedTerms.accepted}
              style={{opacity: djUnlimitedTerms.accepted ? 1 : 0.5, cursor: djUnlimitedTerms.accepted ? 'pointer' : 'not-allowed'}}
              onClick={() => djUnlimitedTerms.accepted && handleGetFree()}
            >
              Test for Free
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => handleCheckout(DJ_UNLIMITED_ONETIME_PRICE_ID)}
              style={{marginTop: 8}}
            >
              One-time for €300
            </button>
          </div>
        </div>
        <p className="t-body" style={{textAlign: 'center', fontSize: 13, color: 'var(--text-3)', marginTop: 24}}>
          All prices include 20% VAT (Austria) and can differ slightly depending on your location. Final price is shown at checkout.
        </p>
      </section>

      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default DJPage;
