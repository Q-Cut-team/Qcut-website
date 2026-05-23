import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import YouTubeEmbed from '../components/YouTubeEmbed';
import qcutCreatorImage from '../assets/images/qcut_creator.png';
import qcutStudioImage from '../assets/images/qcut_studio.png';
import BeatGrid from "../components/BeatGrid.jsx";
import Reveal from '../components/Reveal';

const CREATOR_MONTH_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJmtEhAaR3';
const CREATOR_ONETIME_PRICE_ID = 'price_1TQVNtBSfJ4A9uVJhclSWGnr';
const STUDIO_MONTH_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJkyzTq6JV';
const STUDIO_ONETIME_PRICE_ID = 'price_1TQVSjBSfJ4A9uVJHMHgrTxr';

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
  { feature: 'Music Based Cutting', studio: 'No', creator: 'Yes' },
  { feature: 'Control over how the cut looks', studio: 'Yes', creator: 'Set the vibe' },
  { feature: 'Audio and timecode synchronization', studio: 'Yes', creator: 'Yes' },
  { feature: 'Clip colors for checking sync/results', studio: 'Yes', creator: 'No' },
  { feature: 'Social Media Clips', studio: 'Yes', creator: 'No' },
  { feature: 'Fusion/effect options', studio: 'Yes', creator: 'No' },
  { feature: 'Presets and personalization', studio: 'Yes', creator: 'No' },
  { feature: 'Simple protected XML workflow', studio: 'No', creator: 'Yes' },
];

const STUDIO_WORKFLOW_STEPS = [
  {
    title: 'Prepare timeline',
    description: 'One camera per track, recorded audio below, and no compound clips, Fusion comps, or text.',
  },
  {
    title: 'Load timeline',
    description: 'Connect directly to your editor or import an FCP7 XML file for a reliable fallback workflow.',
  },
  {
    title: 'Sync and prepare',
    description: 'Create a synced timeline for review and choose whether Studio should auto-prepare the timeline.',
  },
  {
    title: 'Choose sync method',
    description: 'Use Audio with a recorded reference track, or Timecode when your files are timecode aligned.',
  },
  {
    title: 'Review sync results',
    description: 'Inspect the synced timeline, check highlighted clips, fix issues, then confirm with Changes Done.',
  },
  {
    title: 'Configure audio',
    description: 'Audio setup starts automatically in sync workflow, or analyze the correct track manually.',
  },
  {
    title: 'Set up each camera',
    description: 'Define cut timing, min/max shot length, zoom behavior, Fusion effects, and camera cutoff.',
  },
  {
    title: 'Shape automatic cut',
    description: 'Adjust camera weights, fix camera on drops, movement-only cameras, and advanced energy curves.',
  },
  {
    title: 'Export result',
    description: 'Export a full set or generate drop-based clips by choosing clip length and clip amount.',
  },
  {
    title: 'Adjust for vertical',
    description: 'Use vertical offset controls to reposition cameras quickly for portrait content formats.',
  },
  {
    title: 'Save presets',
    description: 'Save your full setup for reuse, or export presets to share across projects and teams.',
  },
  {
    title: 'Troubleshoot Resolve',
    description: 'Check scripting permissions, paths, and timeline validity. If needed, switch to the XML workflow.',
  },
];

function CreatorPage() {
  const pricingSectionRef = useRef(null);
  const [showDetailedComparison, setShowDetailedComparison] = useState(false);

  const handleCreatorMonthly = async () => {
    await redirectToCheckout(CREATOR_MONTH_PRICE_ID);
  };

  const handleStudioMonthly = async () => {
    await redirectToCheckout(STUDIO_MONTH_PRICE_ID);
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
            <button type="button" className="btn btn-amber btn-amber-lg" onClick={scrollToPricingSection}>
              Download Creator
            </button>
            <button type="button" className="btn btn-amber btn-amber-lg" onClick={scrollToPricingSection}>
              Download Studio
            </button>
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
                  <span className="t-body">DaVinci Resolve integration</span>
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
      {/* Tutorial Video Section */}
        <Reveal as="section" className="container" style={{marginTop: 40, paddingTop: 16, paddingBottom: 40}}>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">How it works</h2>
            <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
              How to use Studio to create a fully automated cut with custom settings and effects
            </p>
          </div>
          <div style={{maxWidth: 960, margin: '0 auto'}}>
            <YouTubeEmbed
              url="https://youtu.be/duT_VXu5W0Y?si=NSc5fd21Ew415gLM"
              showControls={true}
              autoPlay={false}
              title="Q·Cut Studio Tutorial"
            />
          </div>
        </Reveal>
      </section>

      {/* Studio Workflow Grid 
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">How Studio works</h2>
            <p className="t-body-lg" style={{maxWidth: 760, margin: '16px auto 0'}}>
              End-to-end workflow from timeline prep to export and troubleshooting.
            </p>
          </div>
        </Reveal>
        <div className="creator-feature-grid">
          {STUDIO_WORKFLOW_STEPS.map((step, index) => (
            <Reveal key={step.title} delay={(index % 3) * 80}>
              <div className="card">
                <h3>{index + 1}. {step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>*/}

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
        {/* Tutorial Video Section */}
          <Reveal as="section" className="container" style={{marginTop: 40, paddingTop: 16, paddingBottom: 40}}>
            <div style={{textAlign: 'center', marginBottom: 32}}>
              <h2 className="t-h2">How it works</h2>
              <p className="t-body-lg" style={{maxWidth: 640, margin: '20px auto 0'}}>
                How to use Creator to create a fully automated cut with custom settings and effects
              </p>
            </div>
            <div style={{maxWidth: 960, margin: '0 auto'}}>
              <YouTubeEmbed
                url="https://youtu.be/nZ1dXmnT3HA?si=BCEzHNKIZOVHH45I"
                showControls={true}
                autoPlay={false}
                title="Q·Cut Creator Tutorial"
              />
            </div>
          </Reveal>
      </section>

      {/* Studio vs Creator Section */}
      <section className="container section">
        <Reveal>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">Q/Cut Studio or Q-Cut Creator?</h2>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="card" style={{marginBottom: 24}}>
            <h3 className="t-h3" style={{marginBottom: 12}}>The fast answer</h3>
            <p className="t-body" style={{marginBottom: 10}}>
              Choose <strong>Q/Cut Studio</strong> if you want the full editing tool. Choose <strong>Q-Cut Creator</strong> if you want a simple XML-in/XML-out workflow.
            </p>
            <p className="t-body">
              For most editors, <strong>Q/Cut Studio is the better choice</strong> because it gives you more ways to start, more ways to finish, and more control over the edit.
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
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24}}>
              <Reveal delay={100}>
                <div className="card">
                  <h3 className="t-h3" style={{marginBottom: 8}}>Q/Cut Studio</h3>
                  <p className="t-body" style={{marginBottom: 14}}><strong>Best for editors who want control.</strong></p>
                  <p className="t-body" style={{marginBottom: 16}}>
                    Q/Cut Studio is the professional version. It is made for multicam jobs where you want full control, strong workflow integration, personalized settings, flexible export paths, and fast revision rounds from start to finish.
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
                <div style={{overflowX: 'auto'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', minWidth: 680}}>
                    <thead>
                      <tr>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Feature</th>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q/Cut Studio</th>
                        <th style={{textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>Q-Cut Creator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEATURE_SNAPSHOT.map((row) => (
                        <tr key={row.feature}>
                          <td style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text-2)'}}>{row.feature}</td>
                          <td style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.studio}</td>
                          <td style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.creator}</td>
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
                  <strong>Q/Cut Studio is the full production tool.</strong> It is better when you want control, the workflow is more complex, or you want room to adjust the edit.
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
      <section className="container section" style={{textAlign: 'center', padding: '80px 32px'}}>
        <h2 className="t-display">
          Ready to automate?
        </h2>
        <p className="t-body-lg" style={{maxWidth: 560, margin: '24px auto 40px'}}>
          Start with Creator. Upgrade anytime.
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

      {/* Plans Section */}
      <section ref={pricingSectionRef} id="pricing-section" className="container section">
        <div style={{textAlign: 'center', marginBottom: 48}}>
          <h2 className="t-h2">Choose your workflow</h2>
        </div>
        <div className="tier-grid" style={{maxWidth: 720, margin: '0 auto'}}>
          {/* Creator Plan */}
          <div className="tier-card">
            <h3>Creator</h3>
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
            <button className="btn btn-amber" onClick={handleCreatorMonthly}>
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
    </div>
  );
}

export default CreatorPage;
