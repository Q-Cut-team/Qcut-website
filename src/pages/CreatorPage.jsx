import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { redirectToCheckout } from '../utils/checkout';
import YouTubeEmbed from '../components/YouTubeEmbed';
import qcutCreatorImage from '../assets/images/qcut_creator.png';
import qcutStudioImage from '../assets/images/qcut_studio.png';
import studioStep1Image from '../assets/images/studio-step-1.png';
import studioStep2Image from '../assets/images/studio-step-2.png';
import studioStep3Image from '../assets/images/studio-step-3.png';
import studioStep4Image from '../assets/images/studio-step-4.png';
import studioStep5Image from '../assets/images/studio-step-5.png';
import studioStep6Image from '../assets/images/studio-step-6.png';
import studioStep7Image from '../assets/images/studio-step-7.png';
import studioStep8Image from '../assets/images/studio-step-8.png';
import studioStep9Image from '../assets/images/studio-step-9.png';
import creatorStep1Image from '../assets/images/creator-step-1.png';
import creatorStep2Image from '../assets/images/creator-step-2.png';
import creatorStep3Image from '../assets/images/creator-step-3.png';
import creatorStep4Image from '../assets/images/creator-step-4.png';
import creatorStep5Image from '../assets/images/creator-step-5.png';
import BeatGrid from "../components/BeatGrid.jsx";
import Reveal from '../components/Reveal';
import { useToast } from '../hooks/useToast';
import { useTermsAccepted } from '../hooks/useTermsAccepted';
import Toast from '../components/Toast';
import TermsCheckbox from '../components/TermsCheckbox';

const PRICE_IDS = {
  EDITOR_MONTH: 'price_1TZZd5PjWn7pNPmYOmu7e4o9',//now free trial
  EDITOR_ONETIME: null,
  STUDIO_MONTH: 'price_1TZZcZPjWn7pNPmYlst2j6X3',//now free trial
  STUDIO_ONETIME: null,
  DJ_UNLIMITED: null // Coming soon
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
  const [openStudioGuideStep, setOpenStudioGuideStep] = useState(1);
  const [openCreatorGuideStep, setOpenCreatorGuideStep] = useState(1);
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

  const toggleCreatorGuideStep = (step) => {
    setOpenCreatorGuideStep((currentStep) => (currentStep === step ? 0 : step));
  };

  const toggleStudioGuideStep = (step) => {
    setOpenStudioGuideStep((currentStep) => (currentStep === step ? 0 : step));
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
            <h2 className="t-h2">Studio Quick Start</h2>
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

        <Reveal as="section" className="container" style={{paddingTop: 8, paddingBottom: 24}}>
          <div style={{textAlign: 'center', marginBottom: 32}}>
            <h2 className="t-h2">How to Use Q-Cut Studio</h2>
            <p className="t-body-lg" style={{maxWidth: 760, margin: '16px auto 0'}}>
              This tutorial walks you through the full Studio workflow: timeline prep, project loading,
              synchronization, camera and cut settings, export, and troubleshooting.
            </p>
          </div>

          <div style={{display: 'grid', gap: 16, maxWidth: 980, margin: '0 auto'}}>
            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(1)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 1}
                aria-controls="studio-guide-step-1"
              >
                <h3 className="t-h3">1. Prepare Your Timeline</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 1 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 1 ? (
                <div id="studio-guide-step-1" style={{marginTop: 14}}>
                  <img
                    src={studioStep1Image}
                    alt="Timeline prepared with separate camera tracks and recorded audio"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body" style={{marginBottom: 10}}>
                    Put footage from each camera on its own track and place recorded audio underneath video tracks. This gives Studio a clear structure.
                  </p>
                  <p className="t-body" style={{marginBottom: 8}}><strong>What your timeline should look like</strong></p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Each camera on its own video track (multiple files per camera are fine).</li>
                    <li className="t-body">Recorded audio below video tracks.</li>
                    <li className="t-body">If audio is split into multiple files, keep clips seamlessly connected.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12, marginBottom: 8}}><strong>Avoid these elements</strong></p>
                  <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Compound clips</li>
                    <li className="t-body">Fusion compositions</li>
                    <li className="t-body">Text elements</li>
                    <li className="t-body">Any non-video or non-audio elements</li>
                  </ul>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(2)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 2}
                aria-controls="studio-guide-step-2"
              >
                <h3 className="t-h3">2. Load the Timeline into Q-Cut Studio</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 2 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 2 ? (
                <div id="studio-guide-step-2" style={{marginTop: 14}}>
                  <p className="t-body" style={{marginBottom: 10}}>
                    You can load your timeline through a direct editor connection or via exported XML.
                  </p>
                  <p className="t-body" style={{marginBottom: 6}}><strong>Option A: direct connection</strong></p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Open your prepared timeline in your editor.</li>
                    <li className="t-body">In Studio, go to the direct connection tab.</li>
                    <li className="t-body">Click <strong>Connect</strong>.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12, marginBottom: 6}}><strong>Option B: XML</strong></p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Export as <strong>FCP7 XML</strong> from your editing software.</li>
                    <li className="t-body">In Studio, open the <strong>XML</strong> tab.</li>
                    <li className="t-body">Drag and drop the XML file, or click to select manually.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12}}>
                    XML is fast and reliable. The only limitation is that Fusion effects are excluded in this path.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(3)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 3}
                aria-controls="studio-guide-step-3"
              >
                <h3 className="t-h3">3. Synchronize and Prepare the Project</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 3 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 3 ? (
                <div id="studio-guide-step-3" style={{marginTop: 14}}>
                  <img
                    src={studioStep2Image}
                    alt="Sync and Prepare panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body" style={{marginBottom: 8}}>
                    Use <strong>Sync and Prepare</strong> to control how footage is synchronized and prepared.
                  </p>
                  <p className="t-body" style={{marginBottom: 6}}><strong>Create a new synced timeline</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Enable <strong>Create Synced Timeline</strong> when you want to review sync, adjust properties, or apply color grades after sync.
                  </p>
                  <p className="t-body" style={{marginBottom: 6}}><strong>Preparation settings</strong></p>
                  <p className="t-body" style={{marginBottom: 8}}>
                    Preparation deletes video-audio files after sync and cuts the timeline to the recorded audio range.
                  </p>
                  <p className="t-body">
                    Enable <strong>Don't Prepare</strong> if you only want synchronization or prefer manual timeline prep.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(4)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 4}
                aria-controls="studio-guide-step-4"
              >
                <h3 className="t-h3">4. Choose the Synchronization Method</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 4 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 4 ? (
                <div id="studio-guide-step-4" style={{marginTop: 14}}>
                  <p className="t-body" style={{marginBottom: 8}}><strong>Audio synchronization</strong></p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Select <strong>Audio</strong>.</li>
                    <li className="t-body">Choose the reference track.</li>
                    <li className="t-body">Reference should be your recorded audio track.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12, marginBottom: 8}}><strong>Timecode synchronization</strong></p>
                  <p className="t-body" style={{marginBottom: 8}}>
                    If your audio has correct timecode, select <strong>Timecode</strong> and choose the recorded audio track as reference.
                  </p>
                  <p className="t-body">
                    If only video has timecode, select <strong>Timecode</strong>, enable <strong>Don't Prepare</strong>, and Studio will build a timeline directly from timecode.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(5)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 5}
                aria-controls="studio-guide-step-5"
              >
                <h3 className="t-h3">5. Review the Synchronization Results</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 5 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 5 ? (
                <div id="studio-guide-step-5" style={{marginTop: 14}}>
                  <img
                    src={studioStep3Image}
                    alt="Sync Ready results panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 14}}
                  />
                  <p className="t-body" style={{marginBottom: 12}}>
                    After sync, Studio shows whether it is unsure about any files. If needed, create a new timeline and review the colored clip output.
                  </p>
                  <img
                    src={studioStep4Image}
                    alt="Colored clips in the synced timeline"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 12}}
                  />
                  <p className="t-body">
                    After review and adjustments, click <strong>Changes Done</strong>.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(6)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 6}
                aria-controls="studio-guide-step-6"
              >
                <h3 className="t-h3">6. Configure the Audio</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 6 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 6 ? (
                <div id="studio-guide-step-6" style={{marginTop: 14}}>
                  <p className="t-body" style={{marginBottom: 10}}>
                    If you used Studio synchronization workflow, audio configuration starts automatically.
                  </p>
                  <p className="t-body" style={{marginBottom: 8}}>
                    If you have multiple audio files:
                  </p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Click the track containing the recorded file.</li>
                    <li className="t-body">Click <strong>Analyze</strong>.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12}}>
                    This lets Studio understand the audio before cutting around beats, bars, drops, and energy changes.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(7)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 7}
                aria-controls="studio-guide-step-7"
              >
                <h3 className="t-h3">7. Set Up Each Camera</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 7 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 7 ? (
                <div id="studio-guide-step-7" style={{marginTop: 14}}>
                  <img
                    src={studioStep5Image}
                    alt="Camera Settings panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body" style={{marginBottom: 8}}><strong>Cut Timing</strong></p>
                  <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body"><strong>Cut on beat:</strong> genre-unspecific beat cuts.</li>
                    <li className="t-body"><strong>Cut on bar / half bar:</strong> optimized for 4/4 music.</li>
                    <li className="t-body"><strong>Min Shot Length:</strong> shortest visible clip duration.</li>
                    <li className="t-body"><strong>Max Shot Length:</strong> longest visible clip duration.</li>
                  </ul>
                  <p className="t-body" style={{marginTop: 12, marginBottom: 6}}><strong>Zoom</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Add zoom-in or zoom-out effects to make static angles feel more dynamic.
                  </p>
                  <p className="t-body" style={{marginBottom: 6}}><strong>Fusion Effect</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Add effects on beats, on drops, or throughout the full video.
                  </p>
                  <p className="t-body" style={{marginBottom: 6}}><strong>Camera Cutoff</strong></p>
                  <p className="t-body">
                    Remove start/end segments from each recording when those parts should not be shown.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(8)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 8}
                aria-controls="studio-guide-step-8"
              >
                <h3 className="t-h3">8. Shape the Automatic Cut</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 8 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 8 ? (
                <div id="studio-guide-step-8" style={{marginTop: 14}}>
                  <img
                    src={studioStep6Image}
                    alt="Cut Settings panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body" style={{marginBottom: 8}}><strong>Camera weights</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Weights are relative. Higher weight cameras appear more often.
                  </p>
                  <p className="t-body" style={{marginBottom: 8}}><strong>Fix Camera on Drop</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Choose which camera should appear on drops.
                  </p>
                  <p className="t-body" style={{marginBottom: 8}}><strong>Movement Only Camera (Experimental)</strong></p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">Select an area in the frame.</li>
                    <li className="t-body">Studio analyzes pixel changes in that area.</li>
                    <li className="t-body">Camera appears only when enough movement is detected.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12}}>
                    Use <strong>Advanced Settings</strong> to shape energy curves that control faster/slower cut behavior.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(9)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 9}
                aria-controls="studio-guide-step-9"
              >
                <h3 className="t-h3">9. Export the Result</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 9 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 9 ? (
                <div id="studio-guide-step-9" style={{marginTop: 14}}>
                  <img
                    src={studioStep7Image}
                    alt="Export panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body" style={{marginBottom: 8}}><strong>Export full set</strong></p>
                  <p className="t-body" style={{marginBottom: 10}}>
                    Choose <strong>Set</strong> to cut the full performance from start to finish.
                  </p>
                  <p className="t-body" style={{marginBottom: 8}}><strong>Export clips around drops</strong></p>
                  <p className="t-body">
                    Choose <strong>Clips</strong> to auto-generate highlight clips around drops. You can set clip length and clip count.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(10)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 10}
                aria-controls="studio-guide-step-10"
              >
                <h3 className="t-h3">10. Adjust Cameras for Vertical Content</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 10 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 10 ? (
                <div id="studio-guide-step-10" style={{marginTop: 14}}>
                  <img
                    src={studioStep8Image}
                    alt="Adjust Offset for Vertical panel"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <p className="t-body">
                    Use <strong>Adjust Offset for Vertical</strong> to reposition cameras quickly so shots fit a vertical frame better.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(11)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 11}
                aria-controls="studio-guide-step-11"
              >
                <h3 className="t-h3">11. Save and Reuse Presets</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 11 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 11 ? (
                <div id="studio-guide-step-11" style={{marginTop: 14}}>
                  <img
                    src={studioStep9Image}
                    alt="Preset buttons"
                    style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                  />
                  <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body"><strong>Save Preset:</strong> stores current settings for future sessions.</li>
                    <li className="t-body"><strong>Export Preset:</strong> creates a shareable/importable preset file.</li>
                  </ul>
                  <p className="t-body" style={{marginTop: 12}}>
                    This is useful when you often use similar camera setups, music styles, or export formats.
                  </p>
                </div>
              ) : null}
            </article>

            <article className="card">
              <button
                type="button"
                onClick={() => toggleStudioGuideStep(12)}
                style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                aria-expanded={openStudioGuideStep === 12}
                aria-controls="studio-guide-step-12"
              >
                <h3 className="t-h3">12. Troubleshooting: Problems Connecting to Resolve</h3>
                <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 12 ? '−' : '+'}</span>
              </button>
              {openStudioGuideStep === 12 ? (
                <div id="studio-guide-step-12" style={{marginTop: 14}}>
                  <p className="t-body" style={{marginBottom: 8}}>If connection fails, check these first:</p>
                  <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                    <li className="t-body">In Resolve, go to <strong>Preferences → General</strong>.</li>
                    <li className="t-body">Set <strong>External scripting usage</strong> to <strong>Local</strong> or <strong>Network</strong>.</li>
                    <li className="t-body">In Studio, click the library button (top-right).</li>
                    <li className="t-body">Confirm a scripting path is shown and exists on your system.</li>
                    <li className="t-body">Confirm timeline has no compound clips, text, Fusion comps, or non-video/non-audio files.</li>
                    <li className="t-body">Make sure DaVinci Resolve is open and you are on a created timeline.</li>
                  </ol>
                  <p className="t-body" style={{marginTop: 12, marginBottom: 8}}>
                    If connection still does not work, use XML workflow instead.
                  </p>
                  <p className="t-body">
                    XML workflow is fast and reliable (Fusion effects are excluded). If needed, contact support.
                  </p>
                </div>
              ) : null}
            </article>
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
              <h2 className="t-h2">Creator Quick Start</h2>
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

          <Reveal as="section" className="container" style={{paddingTop: 8, paddingBottom: 24}}>
            <div style={{textAlign: 'center', marginBottom: 32}}>
              <h2 className="t-h2">How to Use Q-Cut Creator</h2>
              <p className="t-body-lg" style={{maxWidth: 760, margin: '16px auto 0'}}>
                This guide walks you through the basic Q-Cut Creator workflow: preparing your timeline,
                importing XML, syncing your clips, checking results, and shaping the final cut style.
              </p>
            </div>

            <div style={{display: 'grid', gap: 16, maxWidth: 980, margin: '0 auto'}}>
              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(1)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 1}
                  aria-controls="creator-guide-step-1"
                >
                  <h3 className="t-h3">1. Prepare Your Timeline</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 1 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 1 ? (
                  <div id="creator-guide-step-1" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 14}}>
                      Before exporting your project, make sure the timeline is clean and easy for Q-Cut Creator to read.
                    </p>
                    <img
                      src={creatorStep1Image}
                      alt="Prepared timeline example"
                      style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                    />
                    <p className="t-body" style={{marginBottom: 8}}><strong>Set up your camera tracks</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Place clips from each camera on separate video tracks. Multiple files from the same camera are fine, as long as they stay on that camera track.
                    </p>
                    <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                      <li className="t-body">Camera 1 on Track 1</li>
                      <li className="t-body">Camera 2 on Track 2</li>
                      <li className="t-body">Camera 3 on Track 3</li>
                    </ul>
                    <p className="t-body" style={{marginTop: 12, marginBottom: 8}}><strong>Add your recorded audio</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Place the final recorded audio underneath camera tracks. If audio is split into multiple files, place them seamlessly in order.
                    </p>
                    <p className="t-body" style={{marginBottom: 8}}><strong>Use Track 1 for your main camera</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Track 1 should be your main camera. Q-Cut Creator slightly prefers this camera and will try to show it on drops.
                    </p>
                    <p className="t-body" style={{marginBottom: 8}}><strong>Do not use non-video/non-audio elements</strong></p>
                    <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                      <li className="t-body">Nested clips</li>
                      <li className="t-body">Compound clips</li>
                      <li className="t-body">Text layers</li>
                    </ul>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(2)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 2}
                  aria-controls="creator-guide-step-2"
                >
                  <h3 className="t-h3">2. Load the Timeline into Q-Cut Creator</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 2 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 2 ? (
                  <div id="creator-guide-step-2" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 14}}>
                      Q-Cut Creator imports your project through an FCP7 XML file.
                    </p>
                    <img
                      src={creatorStep2Image}
                      alt="XML import screen"
                      style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                    />
                    <p className="t-body" style={{marginBottom: 8}}><strong>Export your timeline</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Export your editing timeline as an <strong>FCP7 XML</strong> file from your editing software.
                    </p>
                    <p className="t-body" style={{marginBottom: 8}}><strong>Import the XML into Q-Cut Creator</strong></p>
                    <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                      <li className="t-body">Open the <strong>XML</strong> tab.</li>
                      <li className="t-body">Drag and drop the XML file onto the import button.</li>
                      <li className="t-body">Or click the button and select the XML manually.</li>
                    </ol>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(3)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 3}
                  aria-controls="creator-guide-step-3"
                >
                  <h3 className="t-h3">3. Sync Your Footage</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 3 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 3 ? (
                  <div id="creator-guide-step-3" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 14}}>
                      After importing XML, Q-Cut Creator can synchronize your camera clips to the recorded audio.
                    </p>
                    <img
                      src={creatorStep3Image}
                      alt="Sync settings"
                      style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                    />
                    <p className="t-body" style={{marginBottom: 8}}><strong>Use audio sync</strong></p>
                    <p className="t-body">
                      Select <strong>Audio</strong>, then choose the track containing your recorded audio as the sync reference.
                    </p>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(4)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 4}
                  aria-controls="creator-guide-step-4"
                >
                  <h3 className="t-h3">4. Check the Sync Results</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 4 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 4 ? (
                  <div id="creator-guide-step-4" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 14}}>
                      After syncing, Q-Cut Creator shows the result and flags any files it is unsure about.
                    </p>
                    <img
                      src={creatorStep4Image}
                      alt="Sync results"
                      style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                    />
                    <p className="t-body">
                      If anything looks uncertain, build a synced XML, review it in your editor, make adjustments, and import it back into Q-Cut Creator.
                    </p>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(5)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 5}
                  aria-controls="creator-guide-step-5"
                >
                  <h3 className="t-h3">5. Audio Configuration</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 5 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 5 ? (
                  <div id="creator-guide-step-5" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 10}}>
                      If you used the Creator sync workflow, audio configuration starts automatically.
                    </p>
                    <p className="t-body">
                      If you have multiple audio files, click the track containing the recorded audio and then click <strong>Analyze</strong>.
                    </p>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(6)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 6}
                  aria-controls="creator-guide-step-6"
                >
                  <h3 className="t-h3">6. Cut Settings</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 6 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 6 ? (
                  <div id="creator-guide-step-6" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 14}}>
                      Cut Settings control the overall vibe and pacing of your set.
                    </p>
                    <img
                      src={creatorStep5Image}
                      alt="Cut settings overview"
                      style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
                    />
                    <p className="t-body" style={{marginBottom: 8}}><strong>Beat Mode</strong></p>
                    <p className="t-body" style={{marginBottom: 8}}>
                      Beat Mode controls how closely cuts follow the music.
                    </p>
                    <p className="t-body" style={{marginBottom: 6}}><strong>4/4</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Use for 4/4 genres like techno. It follows bar structure more closely and can look very musical.
                    </p>
                    <p className="t-body" style={{marginBottom: 6}}><strong>Other</strong></p>
                    <p className="t-body">
                      Use for a genre-unspecific style. It still reacts to beats and bigger changes without relying on bar structure.
                    </p>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(7)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 7}
                  aria-controls="creator-guide-step-7"
                >
                  <h3 className="t-h3">7. Zoom Timing</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 7 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 7 ? (
                  <div id="creator-guide-step-7" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 10}}>
                      Zoom Timing controls when zoom effects appear during the set:
                    </p>
                    <ul style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
                      <li className="t-body"><strong>Always:</strong> zooms are used throughout the full set.</li>
                      <li className="t-body"><strong>Around Drops:</strong> zooms build toward drops and fade out shortly after.</li>
                      <li className="t-body"><strong>After Drop:</strong> zooms start on the first cut after a drop.</li>
                    </ul>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(8)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 8}
                  aria-controls="creator-guide-step-8"
                >
                  <h3 className="t-h3">8. Zoom Settings per Camera</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 8 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 8 ? (
                  <div id="creator-guide-step-8" style={{marginTop: 14}}>
                    <p className="t-body" style={{marginBottom: 8}}>
                      You can set different zoom settings for each camera.
                    </p>
                    <p className="t-body" style={{marginBottom: 6}}><strong>Mode</strong></p>
                    <p className="t-body" style={{marginBottom: 10}}>
                      <strong>Dynamic</strong> zooms feel faster when clips are short. <strong>Static</strong> zooms keep a more constant speed.
                    </p>
                    <p className="t-body" style={{marginBottom: 6}}><strong>Intensity</strong></p>
                    <p className="t-body">
                      Intensity controls how strong or harsh the zoom effect feels.
                    </p>
                  </div>
                ) : null}
              </article>

              <article className="card">
                <button
                  type="button"
                  onClick={() => toggleCreatorGuideStep(9)}
                  style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
                  aria-expanded={openCreatorGuideStep === 9}
                  aria-controls="creator-guide-step-9"
                >
                  <h3 className="t-h3">9. Intensity</h3>
                  <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openCreatorGuideStep === 9 ? '−' : '+'}</span>
                </button>
                {openCreatorGuideStep === 9 ? (
                  <div id="creator-guide-step-9" style={{marginTop: 14}}>
                    <p className="t-body">
                      The Intensity slider controls how fast and energetic the final edit feels. Higher intensity creates faster, more energetic cuts, while lower intensity creates calmer edits with slower camera switching.
                    </p>
                  </div>
                ) : null}
              </article>
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
            <div className="comparison-card-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24}}>
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
                <div className="comparison-table-wrap">
                  <table className="comparison-table" style={{width: '100%', borderCollapse: 'collapse'}}>
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
                          <td data-label="Feature" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text-2)'}}>{row.feature}</td>
                          <td data-label="Q/Cut Studio" style={{padding: '10px 12px', borderBottom: '1px solid var(--line-2)', color: 'var(--text)'}}>{row.studio}</td>
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
            <div className="price">€TBA<span className="unit">/month</span></div>
            <p>Perfect for content creators and small studios</p>
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
                <span>Vibe based Cutting</span>
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
                <span>Preset library</span>
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
              One-time (Coming soon)
            </button>
          </div>

          {/* Studio Plan */}
          <div className="tier-card featured">
            <span className="badge">Studio</span>
            <h3>Studio</h3>
            <div className="price">€TBA<span className="unit">/month</span></div>
            <p>For professional studios and agencies</p>
            <ul>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>XML and DaVinci Resolve workflow</span>
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
                <span>Priority render</span>
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
              One-time (Coming soon)
            </button>
          </div>
        </div>
      </section>
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </div>
  );
}

export default CreatorPage;
