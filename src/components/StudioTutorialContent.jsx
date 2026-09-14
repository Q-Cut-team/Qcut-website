import React, { useLayoutEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import YouTubeEmbed from './YouTubeEmbed';
import studioInputImage from '../assets/images/startscreen.png';
import studioSyncImage from '../assets/images/studio-v2-sync.png';
import studioCameraImage from '../assets/images/studio-v2-camera.png';
import studioAudioImage from '../assets/images/studio-v2-audio.png';
import studioCutImage from '../assets/images/studio-v2-cut.png';
import studioEffectsImage from '../assets/images/studio-v2-effects.png';
import studioExportImage from '../assets/images/studio-v2-export.png';
import studioOffsetImage from '../assets/images/studio-v2-offset.png';

const TUTORIAL_STEPS = [
  {
    title: '1. Load your timeline',
    image: studioInputImage,
    width: 1521,
    height: 1198,
    alt: 'Q-Cut Studio Input tab',
    paragraphs: [
      'Prepare one video track per camera and place the recorded audio below the video tracks.',
      'Choose how Q-Cut Studio should read your project, then load the active timeline.',
    ],
    settings: [
      ['Resolve', 'Connect to the active Da Vinci Resolve Studio timeline.'],
      ['Premiere', 'Connect through the Q-Cut Studio plugin for Adobe Premiere Pro.'],
      ['XML', 'Choose or drop an XML timeline file.'],
      ['Refresh', 'Reload the active timeline after changes in your editor.'],
    ],
  },
  {
    title: '2. Synchronize the footage',
    image: studioSyncImage,
    width: 921,
    height: 391,
    alt: 'Q-Cut Studio synchronization controls',
    paragraphs: [
      'Align all camera recordings with the main audio before editing.',
    ],
    settings: [
      ['Audio', 'Synchronize clips using matching sound.'],
      ['Timecode', 'Synchronize recordings with matching timecode.'],
      ['Reference Audio Track', 'Choose the main recording the cameras should follow.'],
      ['Sync', 'Align the clips and show the result for review.'],
      ['Already Synchronized', 'Keep the current alignment and continue.'],
      ['Divide into Sets', 'Split a long recording at timeline markers.'],
    ],
  },
  {
    title: '3. Set up the cameras',
    image: studioCameraImage,
    width: 1420,
    height: 862,
    alt: 'Q-Cut Studio Camera tab',
    paragraphs: [
      'Identify each angle and decide how often it should appear in the cut.',
    ],
    settings: [
      ['Preview', 'Check which angle belongs to the camera row.'],
      ['Name', 'Give the camera a clear name.'],
      ['Type', 'Classify the angle for better recommendations.'],
      ['Use', 'Include or exclude the camera.'],
      ['Weights', 'Higher values make the camera appear more often.'],
      ['Recommend / Equal', 'Create suggested or evenly balanced weights.'],
      ['Custom Settings', 'Fine-tune selection frequency and trim unstable clip edges.'],
    ],
  },
  {
    title: '4. Analyze the audio',
    image: studioAudioImage,
    width: 1420,
    height: 1120,
    alt: 'Q-Cut Studio Audio tab with analyzed waveform',
    paragraphs: [
      'Analyze the main music recording so Q-Cut Studio can recognize timing and drops.',
    ],
    settings: [
      ['Genre', 'Choose the music profile used for analysis.'],
      ['Recording', 'Select the track Q-Cut Studio should analyze.'],
      ['Analyze', 'Detect musical timing and drops.'],
      ['Track Analysis', 'Review the waveform and detected drops.'],
      ['Edit Drops', 'Add, move or remove drop markers.'],
      ['Audio Mixing', 'Choose the final audio tracks and their levels.'],
    ],
  },
  {
    title: '5. Shape the cut',
    image: studioCutImage,
    width: 1420,
    height: 873,
    alt: 'Q-Cut Studio Cut tab',
    paragraphs: [
      'Set the editing pace and decide how the cut should react to musical drops.',
    ],
    settings: [
      ['Tempo', 'Higher values create faster camera changes.'],
      ['Randomness', 'Higher values create more varied shot lengths.'],
      ['Around / Outside drops', 'Use separate pacing near drops and between them.'],
      ['Link', 'Apply the same timing to both areas.'],
      ['Show on drop', 'Rank the cameras preferred at detected drops.'],
      ['Custom Settings', 'Adjust musical divisions, shot length and variation.'],
      ['Drop Timing Shape', 'Control the build-up and return around a drop.'],
    ],
  },
  {
    title: '6. Add effects',
    image: studioEffectsImage,
    width: 1416,
    height: 826,
    alt: 'Q-Cut Studio Effects tab',
    paragraphs: [
      'Add movement to static angles and optional Fusion effects to Resolve exports.',
    ],
    settings: [
      ['All cameras / Individual', 'Share zoom settings or edit each angle separately.'],
      ['On', 'Enable zoom for the selected camera.'],
      ['Exclude handheld', 'Leave handheld angles unchanged.'],
      ['Mode', 'Choose dynamic or steady zoom movement.'],
      ['Timing', 'Apply zoom always or around drops.'],
      ['Intensity', 'Set the strength of the zoom.'],
      ['Add effect', 'Stack supported Fusion effects for Resolve.'],
    ],
  },
  {
    title: '7. Choose the export',
    image: studioExportImage,
    width: 1420,
    height: 1164,
    alt: 'Q-Cut Studio Export tab',
    paragraphs: [
      'Choose what Q-Cut Studio should create and where the finished edit should go.',
    ],
    settings: [
      ['Set', 'Export the complete automated edit.'],
      ['Clips', 'Create selected highlight clips.'],
      ['Auto Cut / Manual Cut', 'Export finished clips or editable source windows.'],
      ['Horizontal / Vertical', 'Choose the output format.'],
      ['Resolve / Premiere / XML', 'Select the export destination.'],
      ['Export Set / Clips', 'Start the export when the status is ready.'],
    ],
  },
  {
    title: '8. Adjust vertical framing',
    image: studioOffsetImage,
    width: 1330,
    height: 773,
    alt: 'Q-Cut Studio vertical offset editor',
    paragraphs: [
      'Correct the framing of each camera before creating a vertical export.',
    ],
    settings: [
      ['Camera', 'Select the angle you want to adjust.'],
      ['Offset', 'Move the portrait crop horizontally. Zero is centered.'],
      ['Save offset', 'Store the framing for the selected camera.'],
      ['Reset camera', 'Remove the saved offset for this angle.'],
    ],
  },
];

const settingsTableWrapStyle = {
  overflowX: 'auto',
  marginTop: 18,
  border: '1px solid var(--line)',
  borderRadius: 10,
};

const settingsTableCellStyle = {
  padding: '11px 14px',
  borderTop: '1px solid var(--line)',
  color: 'var(--text-2)',
  verticalAlign: 'top',
};

function StudioTutorialContent() {
  const [openStep, setOpenStep] = useState(0);
  const pendingScrollAdjustment = useRef(null);

  useLayoutEffect(() => {
    const pending = pendingScrollAdjustment.current;
    if (!pending) return;

    const nextTop = pending.element.getBoundingClientRect().top;
    window.scrollBy(0, nextTop - pending.top);
    pendingScrollAdjustment.current = null;
  }, [openStep]);

  const toggleStep = (step, event) => {
    pendingScrollAdjustment.current = {
      element: event.currentTarget,
      top: event.currentTarget.getBoundingClientRect().top,
    };
    setOpenStep((currentStep) => (currentStep === step ? 0 : step));
  };

  return (
    <>
      <Reveal as="section" className="container" style={{ marginTop: 40, paddingTop: 16, paddingBottom: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 className="t-h2">Studio Quick Start</h2>
          <p className="t-body-lg" style={{ maxWidth: 640, margin: '20px auto 0' }}>
            See the complete Q-Cut Studio workflow from input to export.
          </p>
        </div>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=5mILZI3xo-o"
            showControls
            autoPlay={false}
            title="Q-Cut Studio Tutorial"
          />
        </div>
      </Reveal>

      <Reveal as="section" className="container" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 className="t-h2">How to Use Q-Cut Studio</h2>
          <p className="t-body-lg" style={{ maxWidth: 680, margin: '16px auto 0' }}>
            Follow the current workflow from loading your timeline to exporting the result.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 16, maxWidth: 980, margin: '0 auto' }}>
          {TUTORIAL_STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const isOpen = openStep === stepNumber;
            const contentId = `studio-guide-step-${stepNumber}`;

            return (
              <article key={step.title} className="card">
                <button
                  type="button"
                  onClick={(event) => toggleStep(stepNumber, event)}
                  style={{ width: '100%', background: 'transparent', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left', cursor: 'pointer' }}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <h3 className="t-h3">{step.title}</h3>
                  <span style={{ flexShrink: 0, fontSize: 24, lineHeight: 1, color: 'var(--amber)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div id={contentId} style={{ marginTop: 16 }}>
                    <img
                      src={step.image}
                      width={step.width}
                      height={step.height}
                      alt={step.alt}
                      style={{ width: '100%', height: 'auto', borderRadius: 12, border: '1px solid var(--line)', marginBottom: 16 }}
                    />
                    {step.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="t-body" style={{ marginTop: 10 }}>
                        {paragraph}
                      </p>
                    ))}
                    <div style={settingsTableWrapStyle}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                        <thead>
                          <tr>
                            <th className="t-label" style={{ ...settingsTableCellStyle, borderTop: 'none', width: '34%', color: 'var(--text)', background: 'rgba(255,255,255,0.035)', textAlign: 'left' }}>Setting</th>
                            <th className="t-label" style={{ ...settingsTableCellStyle, borderTop: 'none', color: 'var(--text)', background: 'rgba(255,255,255,0.035)', textAlign: 'left' }}>What it does</th>
                          </tr>
                        </thead>
                        <tbody>
                          {step.settings.map(([setting, description]) => (
                            <tr key={setting}>
                              <td className="t-body" style={{ ...settingsTableCellStyle, color: 'var(--text)', fontWeight: 600 }}>{setting}</td>
                              <td className="t-body" style={settingsTableCellStyle}>{description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Reveal>

    </>
  );
}

export default StudioTutorialContent;
