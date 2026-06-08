import React, { useState } from 'react';
import Reveal from './Reveal';
import YouTubeEmbed from './YouTubeEmbed';
import StudioSettingsGuideAccordion from './StudioSettingsGuideAccordion';
import studioStep1Image from '../assets/images/studio-step-1.png';
import studioStep2Image from '../assets/images/studio-step-2.png';
import studioStep3Image from '../assets/images/studio-step-3.png';
import studioStep4Image from '../assets/images/studio-step-4.png';
import studioStep5Image from '../assets/images/studio-step-5.png';
import studioStep6Image from '../assets/images/studio-step-6.png';
import studioStep7Image from '../assets/images/studio-step-7.png';
import studioStep8Image from '../assets/images/studio-step-8.png';
import studioStep9Image from '../assets/images/studio-step-9.png';

function StudioTutorialContent() {
  const [openStudioGuideStep, setOpenStudioGuideStep] = useState(0);

  const toggleStudioGuideStep = (step) => {
    setOpenStudioGuideStep((currentStep) => (currentStep === step ? 0 : step));
  };

  return (
    <>
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
          <h3 className="t-h3">1. Check that you have DaVinci Resolve</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 1 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 1 ? (
          <div id="studio-guide-step-1" style={{marginTop: 14}}>
            <p className="t-body" style={{marginBottom: 10}}>
              You need to install DaVinci Resolve to use QCut Studio. 
            </p>
            <p className="t-body" style={{marginBottom: 10}}>
              Resolve Connection does not work with the free version.
            </p>
          </div>
        ) : null}
      </article>

      <article className="card">
        <button
          type="button"
          onClick={() => toggleStudioGuideStep(1)}
          style={{width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer'}}
          aria-expanded={openStudioGuideStep === 1}
          aria-controls="studio-guide-step-1"
        >
          <h3 className="t-h3">2. Prepare Your Timeline</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 1 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 2 ? (
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
          <h3 className="t-h3">3. Load the Timeline into Q-Cut Studio</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 2 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 3 ? (
          <div id="studio-guide-step-2" style={{marginTop: 14}}>
            <p className="t-body" style={{marginBottom: 10}}>
              You can load your timeline through a direct editor connection or via exported XML.
            </p>
            <p className="t-body" style={{marginBottom: 6}}><strong>Option A: Resolve Studio Connection</strong></p>
            <ol style={{margin: 0, paddingLeft: 18, display: 'grid', gap: 6}}>
              <li className="t-body">Open your prepared timeline in DaVinci Resolve Studio.</li>
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
          <h3 className="t-h3">4. Synchronize and Prepare the Project</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 3 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 4 ? (
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
              Enable Don't Prepare if you only want to synchronise your Footage or prefer prepping your timeline manually.
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
          <h3 className="t-h3">4.1 Choose the Synchronization Method</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 4 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 5 ? (
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
          <h3 className="t-h3">4.2 Review the Synchronization Results</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 5 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 6 ? (
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
          <h3 className="t-h3">5. Configure the Audio</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 6 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 7 ? (
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
          <h3 className="t-h3">6. Set Up Each Camera</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 7 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 8 ? (
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
          <h3 className="t-h3">7. Shape the Automatic Cut</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 8 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 9 ? (
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
          <h3 className="t-h3">8. Export the Result</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 9 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 10 ? (
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
          <h3 className="t-h3">9. Adjust Cameras for Vertical Content</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 10 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 11 ? (
          <div id="studio-guide-step-10" style={{marginTop: 14}}>
            <img
              src={studioStep8Image}
              alt="Adjust Offset for Vertical panel"
              style={{width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16}}
            />
            <p className="t-body">
              Use Adjust Offset for Vertical to reposition cameras quickly so shots fit a vertical frame better. We are not able to create Vertical Timelines in Resolve Copy everything in the Timeline we gave out and paste it into a new vertical timeline to get Vertical results.
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
          <h3 className="t-h3">10. Save and Reuse Presets</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 11 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 12 ? (
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
          <h3 className="t-h3">11. Troubleshooting: Problems Connecting to Resolve</h3>
          <span style={{fontSize: 24, lineHeight: 1, color: 'var(--amber)'}}>{openStudioGuideStep === 12 ? '−' : '+'}</span>
        </button>
        {openStudioGuideStep === 13 ? (
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
  <StudioSettingsGuideAccordion />
    </>
  );
}

export default StudioTutorialContent;
