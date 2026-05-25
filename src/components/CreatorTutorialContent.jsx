import React, { useState } from 'react';
import Reveal from './Reveal';
import YouTubeEmbed from './YouTubeEmbed';
import creatorStep1Image from '../assets/images/creator-step-1.png';
import creatorStep2Image from '../assets/images/creator-step-2.png';
import creatorStep3Image from '../assets/images/creator-step-3.png';
import creatorStep4Image from '../assets/images/creator-step-4.png';
import creatorStep5Image from '../assets/images/creator-step-5.png';

function CreatorTutorialContent() {
  const [openCreatorGuideStep, setOpenCreatorGuideStep] = useState(1);

  const toggleCreatorGuideStep = (step) => {
    setOpenCreatorGuideStep((currentStep) => (currentStep === step ? 0 : step));
  };

  return (
    <>
      <Reveal as="section" className="container" style={{ marginTop: 40, paddingTop: 16, paddingBottom: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 className="t-h2">Creator Quick Start</h2>
          <p className="t-body-lg" style={{ maxWidth: 640, margin: '20px auto 0' }}>
            How to use Creator to create a fully automated cut with custom settings and effects
          </p>
        </div>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <YouTubeEmbed
            url="https://youtu.be/nZ1dXmnT3HA?si=BCEzHNKIZOVHH45I"
            showControls={true}
            autoPlay={false}
            title="Q·Cut Creator Tutorial"
          />
        </div>
      </Reveal>

      <Reveal as="section" className="container" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 className="t-h2">How to Use Q-Cut Creator</h2>
          <p className="t-body-lg" style={{ maxWidth: 760, margin: '16px auto 0' }}>
            This guide walks you through the basic Q-Cut Creator workflow: preparing your timeline,
            importing XML, syncing your clips, checking results, and shaping the final cut style.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 16, maxWidth: 980, margin: '0 auto' }}>
          <article className="card">
            <button
              type="button"
              onClick={() => toggleCreatorGuideStep(1)}
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 1}
              aria-controls="creator-guide-step-1"
            >
              <h3 className="t-h3">1. Prepare Your Timeline</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 1 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 1 ? (
              <div id="creator-guide-step-1" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 14 }}>
                  Before exporting your project, make sure the timeline is clean and easy for Q-Cut Creator to read.
                </p>
                <img
                  src={creatorStep1Image}
                  alt="Prepared timeline example"
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
                />
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Set up your camera tracks</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Place clips from each camera on separate video tracks. Multiple files from the same camera are fine, as long as they stay on that camera track.
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
                  <li className="t-body">Camera 1 on Track 1</li>
                  <li className="t-body">Camera 2 on Track 2</li>
                  <li className="t-body">Camera 3 on Track 3</li>
                </ul>
                <p className="t-body" style={{ marginTop: 12, marginBottom: 8 }}><strong>Add your recorded audio</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Place the final recorded audio underneath camera tracks. If audio is split into multiple files, place them seamlessly in order.
                </p>
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Use Track 1 for your main camera</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Track 1 should be your main camera. Q-Cut Creator slightly prefers this camera and will try to show it on drops.
                </p>
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Do not use non-video/non-audio elements</strong></p>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 2}
              aria-controls="creator-guide-step-2"
            >
              <h3 className="t-h3">2. Load the Timeline into Q-Cut Creator</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 2 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 2 ? (
              <div id="creator-guide-step-2" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 14 }}>
                  Q-Cut Creator imports your project through an FCP7 XML file.
                </p>
                <img
                  src={creatorStep2Image}
                  alt="XML import screen"
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
                />
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Export your timeline</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Export your editing timeline as an <strong>FCP7 XML</strong> file from your editing software.
                </p>
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Import the XML into Q-Cut Creator</strong></p>
                <ol style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 3}
              aria-controls="creator-guide-step-3"
            >
              <h3 className="t-h3">3. Sync Your Footage</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 3 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 3 ? (
              <div id="creator-guide-step-3" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 14 }}>
                  After importing XML, Q-Cut Creator can synchronize your camera clips to the recorded audio.
                </p>
                <img
                  src={creatorStep3Image}
                  alt="Sync settings"
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
                />
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Use audio sync</strong></p>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 4}
              aria-controls="creator-guide-step-4"
            >
              <h3 className="t-h3">4. Check the Sync Results</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 4 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 4 ? (
              <div id="creator-guide-step-4" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 14 }}>
                  After syncing, Q-Cut Creator shows the result and flags any files it is unsure about.
                </p>
                <img
                  src={creatorStep4Image}
                  alt="Sync results"
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 5}
              aria-controls="creator-guide-step-5"
            >
              <h3 className="t-h3">5. Audio Configuration</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 5 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 5 ? (
              <div id="creator-guide-step-5" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 10 }}>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 6}
              aria-controls="creator-guide-step-6"
            >
              <h3 className="t-h3">6. Cut Settings</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 6 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 6 ? (
              <div id="creator-guide-step-6" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 14 }}>
                  Cut Settings control the overall vibe and pacing of your set.
                </p>
                <img
                  src={creatorStep5Image}
                  alt="Cut settings overview"
                  style={{ width: '100%', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
                />
                <p className="t-body" style={{ marginBottom: 8 }}><strong>Beat Mode</strong></p>
                <p className="t-body" style={{ marginBottom: 8 }}>
                  Beat Mode controls how closely cuts follow the music.
                </p>
                <p className="t-body" style={{ marginBottom: 6 }}><strong>4/4</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Use for 4/4 genres like techno. It follows bar structure more closely and can look very musical.
                </p>
                <p className="t-body" style={{ marginBottom: 6 }}><strong>Other</strong></p>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 7}
              aria-controls="creator-guide-step-7"
            >
              <h3 className="t-h3">6.1 Zoom Timing</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 7 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 7 ? (
              <div id="creator-guide-step-7" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  Zoom Timing controls when zoom effects appear during the set:
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 8}
              aria-controls="creator-guide-step-8"
            >
              <h3 className="t-h3">6.2 Zoom Settings per Camera</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 8 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 8 ? (
              <div id="creator-guide-step-8" style={{ marginTop: 14 }}>
                <p className="t-body" style={{ marginBottom: 8 }}>
                  You can set different zoom settings for each camera.
                </p>
                <p className="t-body" style={{ marginBottom: 6 }}><strong>Mode</strong></p>
                <p className="t-body" style={{ marginBottom: 10 }}>
                  <strong>Dynamic</strong> zooms feel faster when clips are short. <strong>Static</strong> zooms keep a more constant speed.
                </p>
                <p className="t-body" style={{ marginBottom: 6 }}><strong>Intensity</strong></p>
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
              style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', cursor: 'pointer' }}
              aria-expanded={openCreatorGuideStep === 9}
              aria-controls="creator-guide-step-9"
            >
              <h3 className="t-h3">7. Intensity</h3>
              <span style={{ fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>{openCreatorGuideStep === 9 ? '−' : '+'}</span>
            </button>
            {openCreatorGuideStep === 9 ? (
              <div id="creator-guide-step-9" style={{ marginTop: 14 }}>
                <p className="t-body">
                  The Intensity slider controls how fast and energetic the final edit feels. Higher intensity creates faster, more energetic cuts, while lower intensity creates calmer edits with slower camera switching.
                </p>
              </div>
            ) : null}
          </article>
        </div>
      </Reveal>
    </>
  );
}

export default CreatorTutorialContent;
