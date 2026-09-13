import React from 'react';
import { Link } from 'react-router-dom';
import qcutStudioImage from '../assets/images/startscreen.png';
import BeatGrid from "../components/BeatGrid.jsx";
import Reveal from '../components/Reveal';
import StudioPurchaseButtons from '../components/StudioPurchaseButtons';

function CreatorPage() {
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
      </section>

      {/* Studio Screenshot Section */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Q-Cut Studio</h2>
          </div>
        </Reveal>
        <div className="product-grid" style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap: 32, alignItems:"center"}}>
          <Reveal delay={0}>
            <div>
              <img src={qcutStudioImage} alt="Q-Cut Studio version 2 start screen" style={{width: '100%'}} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <h2 className="t-h2">Timeline in. Timeline out.<br/>You decide.</h2>
              <p className="t-body-lg" style={{marginTop: 16}}>
                Take full, in-depth control over your cut settings.
              </p>
              <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 10}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">DaVinci Resolve Studio integration</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">Adobe Premiere Pro integration</span>
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
                  <span className="t-body">Save or share cut presets</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">Full control over all settings</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="t-body">Integrated Fusion effects</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <h2 className="t-h2" style={{ marginBottom: 16 }}>
            See how to use Q-Cut Studio
          </h2>
          <Link to="/studio/tutorial" className="btn btn-amber" style={{ color: '#fff' }}>
            Open tutorial
          </Link>
        </div>
      </section>
      {/* Q-Cut and Q-Cut Studio comparison */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Q-Cut Free or Q-Cut Studio?</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="card" style={{marginBottom: 24}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>The fast answer</h3>
            <p className="t-body" style={{marginBottom: 10}}>
              <strong>Q-Cut Free</strong> is ideal for smaller projects. Use it with simplified settings for up to three cameras and 30-minute timelines.
            </p>
            <p className="t-body">
              It uses the same cutting engine and delivers the same results as Q-Cut Studio, so you can try the Q-Cut Free workflow at no cost. When you are ready for larger projects, upgrade to <strong>Q-Cut Studio</strong> for unlimited cameras, advanced controls, effects and social media clips.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="container section creator-cta-section" style={{textAlign: 'center'}}>
        <h2 className="t-display">
          Ready to automate?
        </h2>
      </section>

      {/* Plans Section */}
      <section id="pricing-section" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Choose your workflow</h2>
        </div>
        <div className="tier-grid" style={{maxWidth: 720, margin: '0 auto'}}>
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
            <Link to="/qcut/download" className="btn btn-amber qcut-free-button">Go to download</Link>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Version 2 released!</span>
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
                <span>DaVinci Resolve, Adobe Premiere Pro and XML workflows</span>
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
    </div>
  );
}

export default CreatorPage;
