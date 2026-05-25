import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToBillingPortal } from '../utils/checkout';

function HelpPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus({ type: 'loading', message: 'Looking up your subscription…' });

    try {
      await redirectToBillingPortal(email);
      // On success the browser is redirected to Stripe and this code does not continue.
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Could not open the billing portal. Try again or contact support.',
      });
    }
  };

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
          {/*
          <div className="card" style={{marginBottom: 16}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>What's the difference between subscription and one-time purchase?</h3>
            <p className="t-body">
              Subscriptions include all updates and new features. One-time purchases include 12 months of updates, after which you can continue using your version or renew for updates.
            </p>
          </div>*/}
        </div>
      </section>

      {/*/!* Subscription Check Section *!/*/}
      {/*<section id="check-subscription" className="container section">*/}
      {/*  <div className="card" style={{maxWidth: 560, margin: '0 auto', textAlign: 'center'}}>*/}
      {/*    <div>*/}
      {/*      <h2 className="t-h3">Check your subscription status</h2>*/}
      {/*      <p className="t-body" style={{fontSize:14, marginTop: 8}}>*/}
      {/*        Enter the email you bought with — we'll redirect to your Stripe billing portal.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <form onSubmit={handleCheck} style={{marginTop: 24}}>*/}
      {/*      <div className="billing-check-row" style={{display: 'flex', gap: 8}}>*/}
      {/*        <input*/}
      {/*          type="email"*/}
      {/*          value={email}*/}
      {/*          onChange={(e) => setEmail(e.target.value)}*/}
      {/*          placeholder="your@email.com"*/}
      {/*          required*/}
      {/*          style={{*/}
      {/*            flex: 1,*/}
      {/*            padding: '12px 16px',*/}
      {/*            background: 'var(--surface-2)',*/}
      {/*            border: '1px solid var(--line-2)',*/}
      {/*            borderRadius: '8px',*/}
      {/*            color: 'var(--text)',*/}
      {/*            fontSize: '14px'*/}
      {/*          }}*/}
      {/*        />*/}
      {/*        <button*/}
      {/*          type="submit"*/}
      {/*          className="btn btn-amber"*/}
      {/*          disabled={status.type === 'loading'}*/}
      {/*        >*/}
      {/*          {status.type === 'loading' ? 'Checking…' : 'Check'}*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*      {status.type === 'loading' && (*/}
      {/*        <p className="t-body" style={{fontSize:13, marginTop: 12, color:"var(--amber)"}}>*/}
      {/*          {status.message}*/}
      {/*        </p>*/}
      {/*      )}*/}
      {/*      {status.type === 'error' && (*/}
      {/*        <p className="t-body" style={{fontSize:13, marginTop: 12, color:"#ff6b6b"}}>*/}
      {/*          ✗ {status.message}*/}
      {/*        </p>*/}
      {/*      )}*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Contact Section */}
      <section id="contact" className="container section" style={{textAlign: 'center'}}>
        <h2 className="t-h2" style={{marginBottom: 32}}>
          Still need help?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '0 auto 32px'}}>
          Our support team typically responds within 24 hours.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="mailto:support@qcut.app" className="btn btn-amber">
            Email support
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
