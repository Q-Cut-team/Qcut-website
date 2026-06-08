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
          <span style={{color:"var(--amber)"}}>Start Q-cutting</span>
        </h1>
        <p className="t-body-lg" style={{maxWidth: 580, margin:"24px auto 0"}}>
          Drop your set. Personalize. Press go. Done. All your footage becomes ready-to-post clips.
        </p>
        <div style={{display:"flex", gap: 12, justifyContent:"center", marginTop: 32, flexWrap:"wrap"}}>

          <Link to="/dj" className="btn btn-amber btn-amber-lg">
            I'm a DJ
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <Link to="/creator" className="btn btn-amber btn-amber-lg">
            I'm a Creator
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
          <h2 className="t-h2">See how it performs</h2>
          <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
            Watch how Q-Cut DJ transforms hours of footage into perfect clips
          </p>
        </div>
        <div style={{maxWidth: 960, margin: '0 auto'}}>
          <YouTubeEmbed
            url="https://youtu.be/lgJy2JXM8jY?is=F9xpB80_X3YiURKG"
            showControls={true}
            autoPlay={false}
            title="Q·Cut DJ Tutorial"
          />
        </div>
      </Reveal>

      {/* Two Tools Section */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 24}}>
            <h2 className="t-h2">
              Two tools<br/>
            </h2>
            <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0', color: 'var(--text-2)'}}>
              Choose between easy clips and full control
            </p>
          </div>
        </Reveal>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24}}>
          <Reveal delay={0}>
            <Link to="/dj" className="tool-card">
              <span className="tag">For DJs</span>
              <h3> For DJs cutting their own clips</h3>
              <div className="arrow">
                Explore DJ version
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/creator" className="tool-card">
              <span className="tag">For Creators</span>
              <h3>For creators dealing with multicam sets</h3>
              <div className="arrow">
                Explore Creator version
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </Link>
          </Reveal>

        </div>
      </section>

      {/* CTA Section */}
      <section className="container home-cta-section" style={{textAlign: 'center', padding: '64px 32px 24px'}}>
        <Reveal>
          <h2 className="t-display" style={{color:"white"}}>
            Skip the monotonous editing and get back to 
          </h2>
          <h2 className="t-display" style={{color:"var(--amber)"}}>
            creative work
          </h2>
        </Reveal>

        {/*<p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>*/}
        {/*  Try for free and see how Q-Cut can transform your workflow*/}
        {/*</p>*/}
        {/*<div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>*/}
        {/*  <Link to="/pricing" className="btn btn-amber btn-amber-lg">*/}
        {/*    See Pricing*/}
        {/*  </Link>*/}
        {/*</div>*/}

      </section>
    </div>
  );
}

export default HomePage;
