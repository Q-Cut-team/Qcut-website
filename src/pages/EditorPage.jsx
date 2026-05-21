import React from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import YouTubeEmbed from '../components/YouTubeEmbed';
import qcutCreatorImage from '../assets/images/qcut_creator.png';
import qcutStudioImage from '../assets/images/qcut_studio.png';
import BeatGrid from "../components/BeatGrid.jsx";
import Reveal from '../components/Reveal';

const KREATOR_MONTH_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJmtEhAaR3';
const KREATOR_ONETIME_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJhclSWGnr';
const STUDIO_MONTH_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJkyzTq6JV';
const STUDIO_ONETIME_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJHMHgrTxr';

function EditorPage() {
  const handleKreatorMonthly = async () => {
    await redirectToCheckout(KREATOR_MONTH_PRICE_ID);
  };

  const handleStudioMonthly = async () => {
    await redirectToCheckout(STUDIO_MONTH_PRICE_ID);
  };

  return (
    <div className="page-fade-enter">
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
            <Link to="/editor/download" className="btn btn-amber btn-amber-lg">
              Download Editor
            </Link>
            <Link to="/studio/download" className="btn btn-amber btn-amber-lg">
              Download Studio
            </Link>
          </div>
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
                  <span className="t-body">Davinci Resolve integration</span>
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
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Creator Features Grid */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Professional features</h2>
          </div>
        </Reveal>
        <div className="editor-feature-grid">
          <Reveal delay={0}>
            <div className="card">
              <h3>Real automation</h3>
              <p>Real control</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card">
              <h3>Fusion Effects</h3>
              <p>Choose your effect - we'll deal with Fusion</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="card">
              <h3>XML Export</h3>
              <p>XML in & XML out</p>
            </div>
          </Reveal>
          <Reveal delay={0}>
            <div className="card">
              <h3>Camera Shakes on Drops</h3>
              <p>Shakes or zooms on drops or beats</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card">
              <h3>Preset Library</h3>
              <p>Save your style. Re-use or share across projects.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Screenshot Section — Creator */}
      <section className="container section editor-last-section">
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
                <span className="t-body">Zoom effects </span>
              </div>
            </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <img src={qcutCreatorImage} alt="Q·Cut Studio" style={{width: '100%'}} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Plans Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Choose your workflow</h2>
        </div>
        <div className="tier-grid" style={{maxWidth: 720, margin: '0 auto'}}>
          {/* Kreator Plan */}
          <div className="tier-card">
            <h3>Kreator</h3>
            <div className="price">€30<span className="unit">/month</span></div>
            <p>Perfect for content creators and small studios</p>
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
                <span>4K export resolution</span>
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
                <span>Preset library</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Email support · 72h</span>
              </li>
            </ul>
            <button className="btn btn-amber" onClick={handleKreatorMonthly}>
              Subscribe €30/month
            </button>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Studio</span>
            <h3>Studio</h3>
            <div className="price">€50<span className="unit">/month</span></div>
            <p>For professional studios and agencies</p>
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
                <span>8K export resolution</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Advanced AI sync</span>
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
            <button className="btn btn-amber" onClick={handleStudioMonthly}>
              Subscribe €50/month
            </button>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Ready to automate?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>
          Start with Kreator. Upgrade anytime.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/pricing" className="btn btn-amber btn-amber-lg">
            See all plans
          </Link>
          <Link to="/help" className="btn btn-ghost">
            Learn more
          </Link>
        </div>
      </section>
    </div>
  );
}

export default EditorPage;