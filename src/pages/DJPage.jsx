import React from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import YouTubeEmbed from '../components/YouTubeEmbed';
import BeatGrid from "../components/BeatGrid";
import qcutDjImage from '../assets/images/qcut_dj.png';
import Reveal from '../components/Reveal';

const DJ_MONTH_PRICE_ID = 'price_1TQVJyBSfJ4A9uVJTrQzprla';

function DJPage() {
  const handleSubscribe = async () => {
    await redirectToCheckout(DJ_MONTH_PRICE_ID);
  };

  return (
    <div className="page-fade-enter">
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
        <div style={{marginTop: 24, display:"flex", flexDirection:"column", gap: 12, alignItems:"flex-start"}}>
          <Link to="/dj/download" className="btn btn-amber btn-amber-lg">
            Download Q·Cut DJ
          </Link>
          <button className="btn btn-amber btn-amber-lg" onClick={handleSubscribe}>
            Get Q·Cut DJ — €20/mo
          </button>
        </div>
      </section>

      {/* Product Screenshot Section */}
      <Reveal as="section" className="container section">
        <div className="product-grid" style={{display:"grid", gridTemplateColumns:"1fr 1.4fr", gap: 32, alignItems:"center"}}>
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

      {/* Stats Section */}
      <Reveal as="section" className="container section">
        <h2 className="t-h2" style={{marginBottom: 32, maxWidth: 720}}>
          30 clips. Under a minute. Every time.
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
      </Reveal>

      {/* Tutorial Video Section */}
      <section className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">See it in action</h2>
          <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
            Watch how Q·Cut DJ transforms hours of footage into perfect clips
          </p>
        </div>
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <YouTubeEmbed
            url="https://youtu.be/Bzbe1ti2tC8"
            showControls={true}
            autoPlay={false}
            title="Q·Cut DJ Tutorial"
          />
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Start cutting smarter.
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>
          €20/month. Cancel anytime. No questions asked.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <button className="btn btn-amber btn-amber-lg" onClick={handleSubscribe}>
            Get Q·Cut DJ
          </button>
          <Link to="/pricing" className="btn btn-ghost">
            Compare all plans
          </Link>
        </div>
      </section>
    </div>
  );
}

export default DJPage;