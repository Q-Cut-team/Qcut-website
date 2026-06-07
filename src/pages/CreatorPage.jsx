import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import qcutCreatorImage from '../assets/images/qcut_creator.png';
import qcutStudioImage from '../assets/images/qcut_studio.png';
import BeatGrid from "../components/BeatGrid.jsx";
import Reveal from '../components/Reveal';
import { useToast } from '../hooks/useToast';
import { useTermsAccepted } from '../hooks/useTermsAccepted';
import Toast from '../components/Toast';
import TermsCheckbox from '../components/TermsCheckbox';
import YouTubeEmbed from '../components/YouTubeEmbed';

const PRICE_IDS = {
  EDITOR_MONTH:  'price_1TecRdPjWn7pNPmY6LDpvNMv',
  STUDIO_MONTH:  'price_1TecSzPjWn7pNPmY1OqTMEk0',
  EDITOR_ONETIME:'price_1TecQoPjWn7pNPmY9b0rRmXR',
  STUDIO_ONETIME:'price_1TecUiPjWn7pNPmYvOVX4aRa',
  DJ_UNLIMITED:  null, // в дуще не ебу нахуя
};


const STUDIO_KEY_POINTS = [
  'DaVinci Resolve and XML workflows.',
  'Audio and timecode sync with clip colors for faster result checks.',
  'Directly made Social Media Clips around drops with efficient Resolve compound clip export.',
  'Advanced camera timing and zoom control.',
  'Drop-aware cutting.',
  'Fusion/effect options.',
  'Presets.',
  'Resolve export and XML export.',
];

const CREATOR_KEY_POINTS = [
  'XML import.',
  'Audio and timecode synchronization.',
  'Basic vibe-based Cut Control.',
  'Simple zoom and intensity settings.',
  'XML export.',
];

const FEATURE_SNAPSHOT = [
  { feature: 'XML workflow', studio: 'Yes', creator: 'Yes' },
  { feature: 'DaVinci Resolve workflow', studio: 'Yes', creator: 'No' },
  { feature: 'Music Based Cutting', studio: 'Yes', creator: 'Yes' },
  { feature: 'Control over how the cut looks', studio: 'Yes', creator: 'Set the vibe' },
  { feature: 'Audio and timecode synchronization', studio: 'Yes', creator: 'Yes' },
  { feature: 'Clip colors for checking sync/results', studio: 'Yes', creator: 'No' },
  { feature: 'Social Media Clips', studio: 'Yes', creator: 'No' },
  { feature: 'Fusion/effect options', studio: 'Yes', creator: 'No' },
  { feature: 'Presets and personalization', studio: 'Yes', creator: 'No' },
  { feature: 'Simple protected XML workflow', studio: 'No', creator: 'Yes' },
];

function CreatorPage() {
  const pricingSectionRef = useRef(null);
  const [showDetailedComparison, setShowDetailedComparison] = useState(false);
  const { isVisible, message, showToast, hideToast } = useToast();
  const creatorTerms = useTermsAccepted();
  const studioTerms = useTermsAccepted();

  const handleCheckout = async (priceId) => {
    if (!priceId) {
      showToast("Coming soon — we're working on it! 🚧");
      return;
    }
    await redirectToCheckout(priceId);
  };

  const handleCreatorMonthly = async () => {
    await handleCheckout(PRICE_IDS.EDITOR_MONTH);
  };

  const handleStudioMonthly = async () => {
    await handleCheckout(PRICE_IDS.STUDIO_MONTH);
  };


  const scrollToPricingSection = () => {
    if (!pricingSectionRef.current) return;

    const stickyHeaderOffset = 96;
    const targetTop = pricingSectionRef.current.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  };

  return (
    <div className="page-fade-enter creator-page">
      {/* Hero Section */}
      <section className="container hero-page">
        <h1 className="t-display">
          Multicam automation.<br/>
          <span style={{color:"var(--amber)"}}>In minutes</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Timeline in. Timeline out. Full control. No AI guessing — you set the rules.
        </p>
        <div>
          <BeatGrid />
        </div>
        <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 12, alignItems:"flex-start"}}>
          <div style={{display:"flex", gap: 12, flexWrap:"wrap"}}>
            <button type="button" className="btn btn-amber btn-amber-lg" onClick={scrollToPricingSection}>
              Get Q-Cut Creator / Studio
            </button>
            {/*<Link to="/creator/download" className="btn btn-ghost">*/}
            {/*  Download Q-Cut Creator*/}
            {/*</Link>*/}
          </div>
          {/*<div style={{display:"flex", gap: 12, flexWrap:"wrap"}}>*/}
          {/*  <button type="button" className="btn btn-amber btn-amber-lg" onClick={scrollToPricingSection}>*/}
          {/*    Get Q-Cut Studio*/}
          {/*  </button>*/}
          {/*  /!*<Link to="/studio/download" className="btn btn-ghost">*!/*/}
          {/*  /!*  Download Q-Cut Studio*!/*/}
          {/*  /!*</Link>*!/*/}
          {/*</div>*/}
          {/*<Link to="/pricing" className="btn btn-amber btn-amber-lg">*/}
          {/*  Choose your plan*/}
          {/*</Link>*/}
        </div>
      </section>

      {/* Studio Screenshot Section */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Studio</h2>
          </div>
        </Reveal>
        <div className="product-grid" style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap: 32, alignItems:"center"}}>
          <Reveal delay={0}>
            <div>
              <img src={qcutStudioImage} alt="Q·Cut DJ" style={{width: '100%'}} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <h2 className="t-h2">Timeline in Timeline out<br/>You decide</h2>
              <p className="t-body-lg" style={{marginTop: 16}}>
                Take full, in-depth control over your cut settings
              </p>
              <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">DaVinci resolve Studio integration</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">XML</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">Save or share cut Presets</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">full Control Over all Settings</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">Integrated Fusion Effects</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <h2 className="t-h2" style={{ marginBottom: 16 }}>
            See how to use Studio
          </h2>
          <Link to="/studio/tutorial" className="btn btn-amber" style={{ color: '#fff' }}>
            Open tutorial
          </Link>
        </div>
      </section>
      {/* Product Screenshot Section — Creator */}
      <section className="container section creator-last-section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Creator</h2>
          </div>
        </Reveal>
        <div className="product-grid" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap: 32, alignItems:"center"}}>
          <Reveal delay={0}>
            <div>
              <h2 className="t-h2">XML in<br/>XML out</h2>
            <p className="t-body-lg" style={{marginTop: 16}}>
              Use simplified settings to match the vibe of your set
            </p>
            <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 10}}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Premiere & Resolve XML Support,</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Set the Cutting Intensity</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="t-body">Zoom effects</span>
              </div>
            </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <img src={qcutCreatorImage} alt="Q·Cut Creator" style={{width: '100%'}} />
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <h2 className="t-h2" style={{ marginBottom: 16 }}>
            See how to use Creator
          </h2>
          <Link to="/creator/tutorial" className="btn btn-amber" style={{ color: '#fff' }}>
            Open tutorial
          </Link>
        </div>
      </section>

      {/* Studio vs Creator Section */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Q-Cut Studio or Q-Cut Creator?</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="card" style={{marginBottom: 24}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>The fast answer</h3>
            <p className="t-body" style={{marginBottom: 10}}>
              Choose <strong>Q-Cut Studio</strong> if you want the full editing tool. Choose <strong>Q-Cut Creator</strong> if you want a simple XML-in/XML-out workflow.
            </p>
            <p className="t-body">
              For most editors, <strong>Q-Cut Studio is the better choice</strong> because it gives you more ways to start, more ways to finish, and more control over the edit.
            </p>
            <div style={{marginTop: 20}}>
              <button
                type="button"
                className="btn btn-amber"
                onClick={() => setShowDetailedComparison(!showDetailedComparison)}
                aria-expanded={showDetailedComparison}
                aria-controls="compare-in-detail"
              >
                {showDetailedComparison ? 'Hide detailed comparison' : 'Compare in detail'}
              </button>
            </div>
          </div>
        </Reveal>

        {showDetailedComparison ? (
          <div id="compare-in-detail">
            <div className="comparison-card-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24}}>
              <Reveal delay={100}>
                <div className="card">
                  <h3 className="t-h3" style={{marginBottom: 8}}>Q-Cut Studio</h3>
                  <p className="t-body" style={{marginBottom: 14}}><strong>Best for editors who want control.</strong></p>
                  <p className="t-body" style={{marginBottom: 16}}>
                    Q-Cut Studio is the professional version. It is made for multicam jobs where you want full control, strong workflow integration, personalized settings, flexible export paths, and fast revision rounds from start to finish.
                  </p>
                  <p className="t-body" style={{marginBottom: 10}}><strong>Studio gives you:</strong></p>
                  <ul style={{display: 'grid', gap: 10, paddingLeft: 18, margin: 0}}>
                    {STUDIO_KEY_POINTS.map((point) => (
                      <li key={point} className="t-body">{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="card">
                  <h3 className="t-h3" style={{marginBottom: 8}}>Q-Cut Creator</h3>
                  <p className="t-body" style={{marginBottom: 14}}><strong>Best for creators who want simplicity.</strong></p>
                  <p className="t-body" style={{marginBottom: 16}}>
                    Q-Cut Creator is the streamlined version. It is made for a clean path: import an XML timeline, synchronize when needed, set the feel, and export a new XML.
                  </p>
                  <p className="t-body" style={{marginBottom: 16}}>
                    Choose Creator if you want a fast, simple workflow without the extra Studio controls.
                  </p>
                  <p className="t-body" style={{marginBottom: 10}}><strong>Creator gives you:</strong></p>
                  <ul style={{display: 'grid', gap: 10, paddingLeft: 18, margin: 0}}>
                    {CREATOR_KEY_POINTS.map((point) => (
                      <li key={point} className="t-body">{point}</li>
                    ))}
                  </ul>
                  <p className="t-body" style={{marginTop: 16}}>
                    Creator stays inside what XML can reliably carry. That keeps the workflow simple and portable, but it also means only XML-supported timeline properties come through.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={220}>
              <div className="card" style={{marginTop: 24}}>
                <h3 className="t-h3" style={{marginBottom: 16}}>Feature snapshot</h3>
                <div className="comparison-table-wrap">
                  <table className="comparison-table" style={{width: '100%', borderCollapse: 'collapse'}}>
                    <thead>
                      <tr>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Feature</th>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q-Cut Studio</th>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q-Cut Creator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEATURE_SNAPSHOT.map((row) => (
                        <tr key={row.feature}>
                          <td data-label="Feature" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text-2)'}}>{row.feature}</td>
                          <td data-label="Q-Cut Studio" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.studio}</td>
                          <td data-label="Q-Cut Creator" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.creator}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="card" style={{marginTop: 24}}>
                <h3 className="t-h3" style={{marginBottom: 12}}>Main difference</h3>
                <p className="t-body" style={{marginBottom: 12}}>
                  <strong>Q-Cut Studio is the full production tool.</strong> It is better when you want control, the workflow is more complex, or you want room to adjust the edit.
                </p>
                <p className="t-body">
                  <strong>Q-Cut Creator is the focused XML tool.</strong> It is better when you want a quick, guided way to create a good cut.
                </p>
              </div>
            </Reveal>
          </div>
        ) : null}
      </section>

      {/* CTA Section */}
      <section className="container section creator-cta-section" style={{textAlign: 'center'}}>
        <h2 className="t-display">
          Ready to automate?
        </h2>
      </section>

      {/* Plans Section */}
      <section ref={pricingSectionRef} id="pricing-section" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Choose your workflow</h2>
        </div>
        <div className="tier-grid" style={{maxWidth: 720, margin: '0 auto'}}>
          {/* Creator Plan */}
          <div className="tier-card">
            <h3>Creator</h3>
            <div className="price">€35<span className="unit">/month</span></div>
            <span className="t-body" style={{display: 'block', fontSize: 12, color: 'var(--text-3)', marginTop: 4}}>incl. 20% VAT</span>
            {/*<p>Perfect for content creators and small studios</p>*/}
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
            </ul>
            <TermsCheckbox accepted={creatorTerms.accepted} onChange={creatorTerms.setAccepted} />
            <button
              className="btn btn-amber"
              disabled={!creatorTerms.accepted}
              style={{opacity: creatorTerms.accepted ? 1 : 0.5, cursor: creatorTerms.accepted ? 'pointer' : 'not-allowed'}}
              onClick={() => creatorTerms.accepted && handleCreatorMonthly()}
            >
              Test for Free
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => handleCheckout(PRICE_IDS.EDITOR_ONETIME)}
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
            </ul>
            <TermsCheckbox accepted={studioTerms.accepted} onChange={studioTerms.setAccepted} />
            <button
              className="btn btn-amber"
              disabled={!studioTerms.accepted}
              style={{opacity: studioTerms.accepted ? 1 : 0.5, cursor: studioTerms.accepted ? 'pointer' : 'not-allowed'}}
              onClick={() => studioTerms.accepted && handleStudioMonthly()}
            >
              Test for Free
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => handleCheckout(PRICE_IDS.STUDIO_ONETIME)}
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
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default CreatorPage;
