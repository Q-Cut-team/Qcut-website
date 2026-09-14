import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../components/YouTubeEmbed';
import Reveal from '../components/Reveal';

function HomePage() {
  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <div style={{position: 'relative'}}>
        <section className="hero-home">
        <h1 className="t-display-xl">
          Stop editing<br/>
          <span style={{color:"var(--amber)"}}>Start Q-Cutting</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 580, margin:"24px auto 0"}}>
          Drop your set. Personalize. Press go. Done. All your footage becomes ready-to-post clips.
        </p>
        <div style={{display:"flex", gap: 12, justifyContent:"center", marginTop: 32, flexWrap:"wrap"}}>

          <Link to="/studio" className="btn btn-amber btn-amber-lg">
            Try Q-Cut Studio now
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>

        </section>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          
          pointerEvents: 'none',
          zIndex: 2
        }} />
      </div>

      {/* Tutorial Video Section */}
      <Reveal as="section" className="container" style={{ paddingTop: 16, paddingBottom: 40}}>
        <div style={{textAlign: 'center', marginBottom: 32}}>
          <h2 className="t-h2">Version 2 released!</h2>
          <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
            Check out the workflow.
          </p>
        </div>
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=5mILZI3xo-o"
            showControls={true}
            autoPlay={false}
            title="Q-Cut Studio Tutorial"
          />
        </div>
      </Reveal>

      {/* Workflow Section */}
      <section className="container section" style={{textAlign: 'center'}}>
        <Reveal>
          <h2 className="t-h2" style={{maxWidth: 800, margin: '0 auto'}}>
            Optimize your workflow for XML, Da Vinci Resolve Studio, or Adobe Premiere Pro
          </h2>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32}}>
            <Link to="/free/download" className="btn btn-amber btn-amber-lg">Try Q-Cut Free</Link>
            <Link to="/studio" className="btn btn-ghost">Learn more</Link>
          </div>
        </Reveal>
      </section>

      <section className="container home-cta-section" style={{textAlign: 'center', padding: '64px 32px 24px'}}>
        <Reveal>
          <h2 className="t-display" style={{color: 'white'}}>
            Skip the monotonous editing and get back to
          </h2>
          <h2 className="t-display" style={{color: 'var(--amber)'}}>
            creative work
          </h2>
        </Reveal>
      </section>
    </div>
  );
}

export default HomePage;
