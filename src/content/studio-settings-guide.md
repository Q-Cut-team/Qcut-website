---
title: Q-Cut Studio Settings Guide
product: Q-Cut Studio
audience: users
status: source-verified
website_ready: true
---

# Q-Cut Studio Settings Guide

This guide explains every setting in Q-Cut Studio from a user point of view: where to find it, what it does, when to change it, and what happens when you move it higher or lower. It is written for the standard Q-Cut Studio app, not Q-Cut DJ or Q-Cut Creator.

As a rule of thumb, settings in Camera Settings, Cut Settings, and Advanced Cut Settings shape the edit itself. Settings in Export shape the output you create from that edit.

## Where To Find The Settings

Use this map when you are looking at the Q-Cut Studio window and need to know where a setting lives.

| Area | Where To Find It |
| --- | --- |
| Choose Source | Main window, left/top source block labeled Choose Source. |
| Resolve Settings | Top-right toolbar, click the Resolve Settings icon. It opens a modal with the Resolve scripting folder and Resolve app bundle fields. |
| Presets | Main window action buttons: Load Preset, Import Preset, Override Preset, Set Default Settings, Save Preset, and Export Preset. |
| Sync settings | Open the Synch and Prepare accordion. |
| Audio settings | Open the Audio Configuration accordion. |
| Camera timing, zoom, and Fusion effects | Open the Camera Settings accordion. |
| Camera weights, drop camera, and movement camera | Open the Cut Settings accordion. |
| Advanced music/drop behavior | Open Cut Settings, then open the Advanced subsection inside it. |
| Export settings | Open the Export accordion. |
| Vertical offset | Open Export, then click Adjust Offset for Vertical. |

## Source

### Choose Source

Where to find it: Main window, Choose Source block.

Choose where Q-Cut Studio reads your timeline from.

| Option | What It Does |
| --- | --- |
| Resolve | Connects to the currently open DaVinci Resolve timeline. |
| XML | Loads a timeline from an XML file. |

Use Resolve when you want Q-Cut Studio to work directly with the timeline currently open in DaVinci Resolve. Use XML when you want to work from an exported timeline file.

### Resolve Settings

Where to find it: Top-right toolbar, click the Resolve Settings icon. It opens a Resolve Settings modal.

Resolve Settings contains paths that help Q-Cut Studio find DaVinci Resolve and its scripting API.

| Setting | What It Does |
| --- | --- |
| Resolve scripting folder | Points Q-Cut Studio to Resolve's scripting API folder. |
| DaVinci Resolve app bundle | Points Q-Cut Studio to the Resolve app, mainly useful on macOS if Resolve is installed outside the default location. |

In most setups, Q-Cut Studio can discover these paths automatically. Set them manually only when connecting to Resolve fails or Resolve is installed in a custom location.

## Sync And Prepare

### Create Synced Timeline

Where to find it: Synch and Prepare accordion.

Creates a separate synchronized timeline before continuing.

Turn this on when you want to review or adjust the synchronized timeline before Q-Cut Studio analyzes and cuts it. This is useful if the sync result needs manual checking, grading, or cleanup.

Turn it off when you want Q-Cut Studio to move through the sync workflow more directly.

### Don't Prepare

Where to find it: Synch and Prepare accordion.

Skips Q-Cut Studio's automatic preparation step before syncing.

Turn this on only if you have already prepared the timeline yourself in Resolve and want Q-Cut Studio to use that prepared layout.

### Sync Method

Where to find it: Synch and Prepare accordion.

Chooses how Q-Cut Studio lines up camera clips.

| Option | Best For |
| --- | --- |
| Audio | Clips that share usable recorded sound. |
| Timecode | Clips recorded with matching timecode. |

Audio sync compares the audio in the clips. Timecode sync uses clip timecode metadata. If you used Timecode on cameras but not on the audio use don't prepare and add the audio and prepare the timeline yourself after synchronization. 

### Reference Audio Track

Where to find it: Synch and Prepare accordion, below Sync Method.

Selects the audio track Q-Cut Studio uses as the sync reference.

Choose the track that represents the real timeline audio position. This is not always the cleanest sounding track; it should be the track that the camera clips should align to.

## Audio

### Analyze Audio

Where to find it: Audio Configuration accordion.

Reads the selected audio track so Q-Cut Studio can detect beats, bars, energy changes, and drops.

Run this after choosing the correct audio track. If there is only one audio track, Q-Cut Studio may start this automatically when you open the Audio Configuration section.

### Selected Audio Track

Where to find it: Audio Configuration accordion.

Chooses which audio track is analyzed for the edit.

Changing this can change beat timing, drop detection, energy response, and the final cut. If you switch tracks, analyze audio again before cutting.

## Camera Settings

### Cut Timing

Where to find it: Camera Settings accordion, at the top.

Chooses the music grid that normal cuts try to land on.

| Option | What It Means |
| --- | --- |
| Cut to Beat | Cuts prefer detected beats. |
| Cut on Bar | Cuts prefer detected bar starts. Made for 4/4 music |
| Cut on 1/2 Bar | Cuts prefer half-bar positions. Made for 4/4 music|

In Cut on Bar and Cut on 1/2 Bar modes, Minimal Shot Length and Maximal Shot Length are treated as bar counts when Q-Cut Studio can read the local bar length. For example, a value of `2` means about two bars, not two seconds. If bar timing is unavailable at a moment, Q-Cut Studio falls back to seconds.

### All Cameras

Where to find it: Camera Settings accordion, All Cameras row.

Controls whether all cameras share the same camera settings.

Turn this on when every camera should use the same shot length, zoom behavior. Turn it off with Set Individual when each camera needs different timing.

The individual camera checkboxes are for editing each camera's settings. To make a camera less likely to appear in the edit, lower its weight instead.

### Minimal Shot Length

Where to find it: Camera Settings accordion, either the All Cameras row or an individual camera row after clicking Set Individual.

The shortest time Q-Cut Studio tries to stay on a camera before cutting away.

Higher values create longer minimum holds and prevent very fast cutting. Lower values allow quicker camera changes.

In bar timing modes, this value is treated as a number of bars when possible.

### Maximal Shot Length

Where to find it: Camera Settings accordion, either the All Cameras row or an individual camera row after clicking Set Individual.

The longest time Q-Cut Studio tries to stay on a camera before looking for another shot.

Higher values allow longer camera holds. Lower values make Q-Cut Studio leave the camera sooner.

Maximal Shot Length must be at least as high as Minimal Shot Length.

### Edge Cutoff

Where to find it: Camera Settings accordion, individual camera rows after clicking Set Individual.

Ignores the beginning and end of a camera clip when Q-Cut Studio decides whether that clip is usable.

Use this when clip edges are unstable, for example when a camera is being set down, picked up, or moved away. Higher values cut off more of the clip edges. Lower values use more of the full clip.

Edge Cutoff is available in individual camera rows after clicking Set Individual.

### Zoom

Where to find it: Camera Settings accordion, either the All Cameras row or an individual camera row after clicking Set Individual.

Adds a zoom effect during export.

Zoom does not change which camera Q-Cut Studio chooses. It changes the finishing metadata used when exporting.

| Part | What It Does |
| --- | --- |
| Mode | Chooses zoom direction and style. |
| Timing | Chooses when the zoom is active. |
| Intensity | Chooses how strong the zoom is. |

### Zoom Mode

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls the zoom direction and style.

| Mode | Behavior |
| --- | --- |
| Dynamic In | Zooms in across the clip or active envelope. |
| Dynamic Out | Zooms out across the clip or active envelope. |
| Dynamic In/Out | Chooses in or out. |
| Static In | Uses a steadier zoom-in speed based on a reference duration. |
| Static Out | Uses a steadier zoom-out speed based on a reference duration. |
| Static In/Out | Chooses static in or static out. |

### Zoom Timing

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls when the zoom is active.

| Timing | Behavior |
| --- | --- |
| Always | Zoom is active for the whole clip. |
| Around Drops | Zoom builds before drops and fades after them. |
| After Drop | Zoom stays off before the drop, then turns on at the drop and fades after it. |

### Zoom Intensity

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls how strong the zoom is.

`0` means no zoom. Higher values create a stronger zoom. A value of `0.25` means the zoom target is about `1.25` for zoom-in modes or `0.75` for zoom-out modes.

### Fusion Effects

Where to find it: Camera Settings accordion, All Cameras row, Fusion Effects area.

Adds Fusion effects during export after Q-Cut Studio has chosen the cuts.

Fusion Effects are edited from the All Cameras row and apply to every camera.

| Effect Type | What It Does |
| --- | --- |
| Camera Shake | Adds Q-Cut Studio's built-in camera shake effect. |
| Drop Hit | Adds a short effect around detected drops. |
| Beat Effect | Adds an effect on beat hits. |
| Choose .setting | Uses a custom Fusion `.setting` file. |

For custom settings, build the effect in Fusion, group the effect nodes, leave MediaIn and MediaOut outside the group, then export that group as a `.setting` file.

## Cut Settings

### Weights

Where to find it: Cut Settings accordion, Weights section.

Controls how likely each camera is to be chosen when several cameras are valid.

Higher weight makes a camera more likely to appear. Lower weight makes it less likely. A weight of `0` strongly discourages the camera, but Q-Cut Studio still needs at least one camera with a weight above `0`.

Weights are relative. They do not guarantee exact screen-time percentages because other rules also matter, such as shot length, available clips, drop camera, and movement camera behavior.

### Equal Weights

Where to find it: Cut Settings accordion, next to the Weights heading.

Gives every camera the same base chance.

Turn this on for balanced camera usage. Turn it off when some cameras should appear more or less often.

### Fix Camera On Drop

Where to find it: Cut Settings accordion.

Chooses a camera Q-Cut Studio should prefer around detected music drops.

Use this when one camera should carry the biggest moments, for example a wide shot, crowd shot, or main performer angle. Choose none if drops should use the normal camera selection logic.

This setting does more than a small preference. Q-Cut Studio reserves and boosts the drop camera near drop targets and can force it when the drop-camera timing requirement becomes due.

### Drop Offset

Where to find it: Cut Settings accordion, below Fix Camera On Drop. It is enabled when a drop camera is selected.

Moves the drop-camera target earlier or later than the detected drop.

Negative values aim the drop camera earlier. Positive values aim it later. This changes the timing target for the drop camera; it does not move the detected audio drop itself.

### Movement Only Camera (Experimental)

Where to find it: Cut Settings accordion.

Chooses one camera that should only be used when Q-Cut Studio detects enough movement.

This is useful for a special camera, such as a top-down mixer camera, where the shot should appear mainly when hands or objects are moving in the tracked area.

This feature depends on Analyze Movement. Without movement analysis, Q-Cut Studio has no movement map to use for this decision.

### Movement Cutoff

Where to find it: Cut Settings accordion, below Movement Only Camera. It is enabled when a movement camera is selected.

Controls how much movement is needed before the Movement Only Camera is allowed.

Lower values make the movement camera trigger more easily. Higher values require clearer movement.

### Weight Boost

Where to find it: Cut Settings accordion, below Movement Only Camera. It is enabled when a movement camera is selected.

Gives the movement camera an extra chance to win after it passes the movement cutoff.

Higher values make the movement camera win more often during movement moments. Values below `1` do not reduce the camera below its normal camera weight; use camera weights if you want to lower its base chance.

## Advanced Cut Settings

Advanced settings shape how Q-Cut Studio reacts to music energy and drops. The defaults are meant to be usable for most edits. Change these when the cut feels too calm, too nervous, too early, too late, or too loose around drops.

### Drop Confidence

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Controls how sure Q-Cut Studio must be before it accepts a detected drop.

Higher values keep only clearer drops. Lower values allow more possible drops.

### Drop Prominence

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Controls how large an energy rise must be before it becomes a drop candidate.

Higher values focus on bigger hits. Lower values allow smaller rises to count.

### Drop Min Spacing

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Sets the minimum time between selected drops.

Higher values spread drop moments farther apart. Lower values allow drops closer together.

This affects drop-camera behavior, drop-aware timing, drop-aware zoom, and drop/beat Fusion effects.

### Energy Adaptation

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls how strongly music energy changes cut timing.

Higher values let high-energy and low-energy sections move the cut timing more. Lower values keep timing steadier and closer to the neutral position.

### Varianz Unadapted

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls the timing spread in neutral or calmer sections.

Lower values make cuts tighter around the target beat or bar. Higher values allow looser timing and more variation.

### Default Neutral Energy

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Sets where neutral-energy sections land between the Minimal Shot Length and Maximal Shot Length.

`0` aims near the Minimal Shot Length. `1` aims near the Maximal Shot Length. Higher values make neutral sections hold shots longer. Lower values make neutral sections cut sooner.

Example: if a camera can cut between 2 and 12 seconds, the window is 10 seconds wide. A value of `0.8` aims around `2 + 0.8 * 10 = 10` seconds.

### Varianz Adapted

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls the timing spread in high-energy or drop-shaped sections.

Lower values make energetic sections tighter and more locked to the target beat or bar. Higher values allow more variation even during high-energy moments.

### Pre Drop Length

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how early Q-Cut Studio starts building tension before a detected drop.

Higher values start the build earlier. Lower values keep the build closer to the drop.

### Pre Drop Curve

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Shapes how the pre-drop build rises.

Lower values start changing earlier and more gently. Higher values stay calmer for longer, then ramp harder near the drop.

### Pre Drop Energy

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how close the pre-drop build gets to full drop energy.

Higher values make the build feel more intense before the drop. Lower values preserve more contrast for the drop itself.

### Post Drop Fall

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how strongly the post-drop high-energy feeling fades back toward neutral during Fall Length.

Higher values make the fall stronger and return closer to neutral by the end of the fade. Lower values keep more of the drop energy alive for longer.

### Fall Offset

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how long Q-Cut Studio waits after the actual detected drop before the fall begins.

Higher values keep the post-drop energy at full strength longer. Lower values start the return sooner.

### Fall Length

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how long the post-drop return takes after Fall Offset.

Higher values create a longer, smoother fade back. Lower values return faster.

## Export

### Export Mode

Where to find it: Export accordion, first choice row.

Chooses what Q-Cut Studio exports.

| Option | What It Does |
| --- | --- |
| Set | Exports the full calculated cut set. |
| Clip | Exports selected snippets from the calculated cut set. |

### Max Num Of Clips

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Sets the maximum number of snippets exported in Clip mode.

Higher values export more snippets if enough valid snippet windows are available. Lower values export fewer snippets.

### Min Clip Length

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Sets the shortest allowed exported snippet.

Use higher values when every snippet should feel complete. Use lower values when shorter highlight clips are acceptable.

### Max Clip Length

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Sets the longest allowed exported snippet.

Use higher values for longer clips. Use lower values for tighter clips.

### Min Clip Spacing

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Keeps exported snippets separated from each other.

Higher values spread snippets farther apart in the source timeline. Lower values allow snippets closer together.

### Drop Middle Point

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Controls where the selected anchor time lands inside each exported snippet.

`0` places the anchor near the start. `0.5` places it in the middle. `1` places it near the end.

### Fusion Overlay

Where to find it: Export accordion, Clip mode settings. It is available when Clip export is selected.

Adds a custom Fusion overlay to Resolve snippet exports.

Use this for reusable text, frames, branding, or other screen overlays. This is applied after Q-Cut Studio builds each exported clip for Resolve snippet export.

### Adjust Offset For Vertical

Where to find it: Export accordion, click Adjust Offset for Vertical.

Sets a horizontal pan offset per camera for vertical exports.

Use this when the automatic vertical crop is not centered correctly for a camera. The slider runs from `-1` to `1`; `0` means no added offset. Q-Cut Studio converts the value into a pixel pan based on the source size and a 9:16 vertical crop.

### Choose Export Medium

Where to find it: Export accordion, Choose Export Medium section.

Chooses where the result should be exported.

| Option | What It Does |
| --- | --- |
| Resolve | Exports back into DaVinci Resolve. |
| XML | Exports an XML file. |

### Timeline Name

Where to find it: Export accordion, Resolve export target panel.

Sets the name used for Resolve export output.

Use a clear name so the exported timeline is easy to find in Resolve.

### Save XML As

Where to find it: Export accordion, XML export target panel.

Chooses the output path for XML export.

## Presets

### Load Preset

Where to find it: Main window, Load Preset button near the top settings actions.

Loads saved user settings into Q-Cut Studio.

If a source is already loaded, Q-Cut Studio keeps enough camera rows to cover both the loaded source and the preset.

### Save Preset

Where to find it: Main window, Save Preset button near the main Go button.

Saves the current settings as a Q-Cut Studio preset.

Q-Cut Studio will not save a preset if nothing differs from the default settings for the current camera count. Preset names are cleaned so they are safe as file names.

### Import Preset

Where to find it: Main window, Import Preset button near the top settings actions.

Copies an external `.json` preset into Q-Cut Studio's user preset folder.

The file must be readable JSON. If a preset with the same file name already exists, it is replaced.

### Export Preset

Where to find it: Main window, Export Preset button near the main Go button.

Writes the current settings to a chosen `.json` file.

If the chosen file name does not end with `.json`, Q-Cut Studio adds the suffix.
