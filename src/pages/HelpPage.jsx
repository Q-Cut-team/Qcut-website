import React from 'react';
import { Link } from 'react-router-dom';

function HelpPage() {
  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <section className="hero-page container">
        <h1 className="t-display">
          We're here to help
        </h1>
        <p className="t-body-lg" style={{maxWidth: 560, marginTop: 16}}>
          Find answers, contact support, or learn how to get the most out of Q·Cut.
        </p>
      </section>

      {/* Subscription Management Section */}
      <section id="check-subscription" className="container section">
        <div className="card" style={{maxWidth: 560, margin: '0 auto', textAlign: 'center'}}>
          <h2 className="t-h3">Check your subscription status</h2>
          <p className="t-body" style={{fontSize: 14, marginTop: 8}}>
            Manage your subscription, update your payment method, or cancel anytime.
          </p>
          <a
            href="https://billing.stripe.com/p/login/00w6oJ9TGb1S5vV9jB4wM00"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-amber"
            style={{marginTop: 24, display: 'inline-block'}}
          >
            Manage subscription
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container section">
        <h2 className="t-h2" style={{textAlign: 'center', marginBottom: 48}}>
          Frequently asked questions
        </h2>
        <div style={{maxWidth: 720, margin: '0 auto'}}>
          <div className="card" style={{marginBottom: 16}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>How does Q·Cut work?</h3>
            <p className="t-body">
              Q·Cut analyzes your audio to detect beats, drops, and transitions. It then automatically switches between camera angles on these musical cues, creating dynamic multicam edits that sync perfectly with your music.
            </p>
          </div>
          <div className="card" style={{marginBottom: 16}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>Do I need to upload my footage?</h3>
            <p className="t-body">
              No. Q·Cut runs entirely on your local machine. Your footage never leaves your computer, ensuring complete privacy and security of your content.
            </p>
          </div>
          <div className="card" style={{marginBottom: 16}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>Can I use Q·Cut with my existing creator?</h3>
            <p className="t-body">
              Yes! Creator & Studio versions can exports XML timelines that work with DaVinci Resolve and Adobe Premiere. Studio can also directly connect with Resolve to optimize the workflow
            </p>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="container section" style={{textAlign: 'center'}}>
        <h2 className="t-h2" style={{marginBottom: 32}}>
          Still need help?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '0 auto 32px'}}>
          We'll try to respond as fast as possible!
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="https://discord.gg/Z69HFeNWbb" className="btn btn-amber">
            Join our Discord
          </a>
          <a href="mailto:info@qcut.at" className="btn btn-ghost">
            Email us
          </a>
          <Link to="/pricing" className="btn btn-ghost">
            View pricing
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HelpPage;