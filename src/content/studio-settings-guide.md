---
title: Q-Cut Studio Settings Guide
product: Q-Cut Studio
audience: users
status: source-verified
website_ready: true
---

# Q-Cut Studio Settings Guide

This guide explains the settings in Q-Cut Studio from a user point of view: where to find each setting, what it changes, when to use it, and what happens when you move it higher or lower.

## Page Structure

Use this map when you are looking at the Q-Cut Studio window and need to know which accordion to open.

| UI Section | What It Contains |
| --- | --- |
| Always visible controls | Choose Source and Resolve Settings. |
| Accordion: Synch and Prepare | Sync method, reference audio, Create Synced Timeline, Don't Prepare, Sync, and Already Synchronized. |
| Accordion: Audio Configuration | Audio-track choice and Analyze Audio. |
| Accordion: Camera Settings | Cut Timing, All Cameras, individual camera timing, Zoom, and Fusion Effects. |
| Accordion: Cut Settings | Camera weights, drop-camera routing, movement-camera routing, Analyze Movement, and the nested Advanced subsection. |
| Accordion: Export | Set/Clip export mode, Clip Settings, vertical offset, export target, timeline name, and XML output path. |
| Presets and main actions | Load, save, import, override, export, delete, and reset presets. |

Inside each accordion, this guide groups settings into smaller subsections so related controls stay together.

## Always Visible Controls

### Source Controls

These controls decide where Q-Cut Studio reads the timeline from and how it connects to Resolve.

#### Choose Source

Where to find it: Main window, Choose Source block.

Choose where Q-Cut Studio reads your timeline from.

| Option | What It Does |
| --- | --- |
| Resolve | Connects to the currently open DaVinci Resolve timeline. |
| XML | Loads a timeline from an XML file. |

Use Resolve when you want Q-Cut Studio to work directly with the timeline currently open in DaVinci Resolve. Use XML when you want to work from an exported timeline file.

#### Resolve Settings

Where to find it: Top-right toolbar, Resolve Settings icon.

Resolve Settings contains paths that help Q-Cut Studio find DaVinci Resolve and its scripting API.

| Setting | What It Does |
| --- | --- |
| Resolve scripting folder | Points Q-Cut Studio to Resolve's scripting API folder. |
| DaVinci Resolve app bundle | Points Q-Cut Studio to the Resolve app, mainly useful on macOS if Resolve is installed outside the default location. |

In most setups, Q-Cut Studio can discover these paths automatically. Set them manually only when connecting to Resolve fails or Resolve is installed in a custom location.

## Accordion: Synch And Prepare

Use this section when the source clips still need to be lined up before Q-Cut Studio analyzes and cuts the edit. If your timeline is already synchronized, use Already Synchronized to move straight to the audio step.

### Sync Setup

These settings define how synchronization should happen before you press Sync.

#### Create Synced Timeline

Where to find it: Synch and Prepare accordion.

Creates a separate synchronized timeline before continuing.

Turn this on when you want to review or adjust the synchronized timeline before Q-Cut Studio analyzes and cuts it. This is useful if the sync result needs manual checking, grading, or cleanup.

Turn it off when you want Q-Cut Studio to move through the sync workflow more directly.

#### Don't Prepare

Where to find it: Synch and Prepare accordion.

Skips Q-Cut Studio's automatic preparation step before syncing.

Turn this on only if you have already prepared the timeline yourself in Resolve and want Q-Cut Studio to use that prepared layout. This is useful for custom setups, but most users should leave it off.

#### Sync Method

Where to find it: Synch and Prepare accordion.

Chooses how Q-Cut Studio lines up camera clips.

| Option | Best For |
| --- | --- |
| Audio | Clips that share usable recorded sound. |
| Timecode | Clips recorded with matching timecode. |

Audio sync compares the sound in the clips. Timecode sync uses clip timecode metadata.

If your cameras have matching timecode but your main audio does not, use Timecode, enable Don't Prepare, then prepare the audio layout yourself in Resolve after synchronization.

#### Reference Audio Track

Where to find it: Synch and Prepare accordion, below Sync Method.

Selects the audio track Q-Cut Studio uses as the sync reference.

Choose the track that represents the real timeline position. This is not always the cleanest sounding track. It should be the track that the camera clips should align to.

### Sync Actions

These buttons decide whether Q-Cut Studio runs synchronization or skips directly to the next accordion.

#### Sync

Where to find it: Synch and Prepare accordion.

Starts synchronization using the settings above. When synchronization finishes, Q-Cut Studio shows a review modal with confidence counts and any clips that may need checking.

If Q-Cut Studio creates a review timeline, make your adjustments in Resolve, then return to Q-Cut Studio and continue from the review modal.

#### Already Synchronized

Where to find it: Synch and Prepare accordion.

Use this when the loaded timeline is already lined up and you do not need Q-Cut Studio to sync it. It keeps your current source and moves the workflow to Audio Configuration.

## Accordion: Audio Configuration

### Track Selection And Analysis

These controls choose the music/audio source that drives beat, bar, energy, and drop detection.

#### Selected Audio Track

Where to find it: Audio Configuration accordion.

Chooses which audio track Q-Cut Studio analyzes for beats, bars, energy changes, and drops.

Changing this can change beat timing, drop detection, energy response, clip selection, and the final cut. If you switch tracks, analyze audio again before cutting.

#### Analyze Audio

Where to find it: Audio Configuration accordion.

Reads the selected audio track so Q-Cut Studio can detect beats, bars, rises, and drops.

Run this after choosing the correct audio track. If there is only one audio track, Q-Cut Studio may start this automatically when you open the Audio Configuration section.

## Accordion: Camera Settings

Camera Settings control how long Q-Cut Studio can stay on each camera and which export finishing effects should be attached to the chosen cuts.

### Cut Timing Row

This row chooses the musical grid used by the camera timing controls below it.

#### Cut Timing

Where to find it: Camera Settings accordion, at the top.

Chooses the music grid that normal cuts try to land on.

| Option | What It Means |
| --- | --- |
| Cut to Beat | Cuts prefer detected beats. |
| Cut on Bar | Cuts prefer detected bar starts. Best for 4/4 music. |
| Cut on 1/2 Bar | Cuts prefer half-bar positions. Best for 4/4 music. |

In Cut on Bar and Cut on 1/2 Bar modes, Minimal Shot Length and Maximal Shot Length are treated as bar counts when Q-Cut Studio can read the local bar length. For example, a value of `2` means about two bars, not two seconds. If bar timing is unavailable at a moment, Q-Cut Studio falls back to seconds.

### Camera Timing Rows

These settings decide how long each camera can stay on screen and how much of each clip edge is considered usable.

#### All Cameras

Where to find it: Camera Settings accordion, All Cameras row.

Controls whether all cameras share the same camera timing and finishing settings.

Turn this on when every camera should use the same shot length and zoom behavior. Click Set Individual when each camera needs its own Minimal Shot Length, Maximal Shot Length, Edge Cutoff, and Zoom settings.

Use camera weights in Cut Settings if you want a camera to appear more or less often. The Camera Settings rows are for timing and finishing, not camera probability.

#### Minimal Shot Length

Where to find it: Camera Settings accordion, All Cameras row or individual camera rows after clicking Set Individual.

The shortest time Q-Cut Studio tries to stay on a camera before cutting away.

Higher values create longer minimum holds and prevent very fast cutting. Lower values allow quicker camera changes.

In bar timing modes, this value is treated as a number of bars when possible.

#### Maximal Shot Length

Where to find it: Camera Settings accordion, All Cameras row or individual camera rows after clicking Set Individual.

The longest time Q-Cut Studio tries to stay on a camera before looking for another shot.

Higher values allow longer camera holds. Lower values make Q-Cut Studio leave the camera sooner.

Maximal Shot Length must be at least as high as Minimal Shot Length.

#### Edge Cutoff

Where to find it: Camera Settings accordion, individual camera rows after clicking Set Individual.

Ignores the beginning and end of a camera clip when Q-Cut Studio decides whether that clip is usable.

Use this when clip edges are unstable, for example when a camera is being set down, picked up, or moved away. Higher values cut off more of the clip edges. Lower values use more of the full clip.

### Zoom Controls

These controls add export finishing metadata. They change the next export, not the camera choices already calculated by Q-Cut Studio.

#### Zoom

Where to find it: Camera Settings accordion, All Cameras row or individual camera rows after clicking Set Individual.

Adds zoom finishing metadata during export. Zoom does not change which camera Q-Cut Studio chooses. It changes how exported clips are finished.

| Part | What It Does |
| --- | --- |
| On/Off | Enables or disables zoom for that camera setting row. |
| Mode | Chooses zoom direction and style. |
| Timing | Chooses when the zoom is active. |
| Intensity | Chooses how strong the zoom is. |

Changing Zoom updates the next export without requiring Q-Cut Studio to recalculate the edit.

#### Zoom Mode

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls the zoom direction and style.

| Mode | Behavior |
| --- | --- |
| Dynamic In | Zooms in across the clip or active drop envelope. |
| Dynamic Out | Zooms out across the clip or active drop envelope. |
| Dynamic In/Out | Chooses dynamic in or dynamic out. |
| Static In | Uses a steadier zoom-in speed based on a reference duration. |
| Static Out | Uses a steadier zoom-out speed based on a reference duration. |
| Static In/Out | Chooses static in or static out. |

#### Zoom Timing

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls when the zoom is active.

| Timing | Behavior |
| --- | --- |
| Always | Zoom logic is active for the whole clip. |
| Around Drops | Zoom builds before drops and fades after them. |
| After Drop | Zoom stays off before the drop, turns on at the drop, then fades after it. |

#### Zoom Intensity

Where to find it: Camera Settings accordion, inside the Zoom control.

Controls how strong the zoom is.

`0` means no visible zoom. Higher values create a stronger zoom. For zoom-in modes, a value of `0.25` means the zoom target is about `1.25`. For zoom-out modes, it means the target is about `0.75`.

### Fusion Effects Controls

These controls add Resolve/Fusion finishing effects during export.

#### Fusion Effects

Where to find it: Camera Settings accordion, All Cameras row, Fusion Effects area.

Adds Fusion effects during export after Q-Cut Studio has chosen the cuts. In Q-Cut Studio, Fusion Effects are edited from the All Cameras row and saved as shared effects for every camera.

Changing Fusion Effects updates the next export without requiring Q-Cut Studio to recalculate the edit.

| Effect Type | Main Controls | What It Does |
| --- | --- | --- |
| Camera Shake | Timing, Intensity | Adds Q-Cut Studio's built-in camera shake. |
| Drop Hit | Sub Type, Intensity | Adds a short hit effect around detected drops. |
| Beat Effect | Sub Type, Intensity, Amount of Beats | Adds repeated beat-hit effects. |
| Choose .setting | Setting file | Uses a custom Fusion `.setting` file. |

Drop Hit and Beat Effect can use different sub types, such as Zoom Punch or Camera Shake.

For custom settings, build the effect in Fusion, group the effect nodes, leave MediaIn and MediaOut outside the group, then export that group as a `.setting` file and load it here.

## Accordion: Cut Settings

Cut Settings control which camera wins when several cameras are usable.

### Camera Weighting

These settings control the normal camera-selection balance.

#### Weights

Where to find it: Cut Settings accordion, Weights section.

Controls how likely each camera is to be chosen when several cameras are valid.

Higher weight makes a camera more likely to appear. Lower weight makes it less likely. Weights are relative: a camera at `200` is favored more than a camera at `100`, but it is not guaranteed to appear exactly twice as often.

Weights do not override everything. Shot length, available clips, drop camera behavior, movement camera behavior, and same-camera repeat avoidance can still affect the final edit.

#### Equal Weights

Where to find it: Cut Settings accordion, next to the Weights heading.

Gives every camera the same base chance.

Turn this on for balanced camera usage. Turn it off when some cameras should appear more or less often.

### Drop Camera Controls

These settings control what happens around detected music drops.

#### Fix Camera On Drop

Where to find it: Cut Settings accordion.

Chooses a camera Q-Cut Studio should prefer around detected music drops.

Use this when one camera should carry the biggest moments, for example a wide shot, crowd shot, or main performer angle. Choose none if drops should use the normal camera selection logic.

This is stronger than a small preference. Q-Cut Studio reserves and boosts the selected drop camera near drop targets and can force it when the drop-camera timing requirement becomes due.

#### Drop Offset

Where to find it: Cut Settings accordion, below Fix Camera On Drop. It is enabled when a drop camera is selected.

Moves the drop-camera target earlier or later than the detected drop.

Negative values aim the drop camera earlier. Positive values aim it later. This changes where Q-Cut Studio aims the drop camera; it does not move the detected audio drop itself.

### Movement Camera Controls

These settings are for one special camera that should appear mainly during detected movement.

#### Movement Only Camera

Where to find it: Cut Settings accordion.

Chooses one camera that should only be used when Q-Cut Studio detects enough movement.

This is useful for a special camera, such as a top-down mixer camera, where the shot should appear mainly when hands or objects are moving in the tracked area.

This feature depends on Analyze Movement. Without movement analysis, Q-Cut Studio has no movement map to use for this decision. Best results are usually in controlled footage without heavy flashing lights.

#### Movement Cutoff

Where to find it: Cut Settings accordion, below Movement Only Camera. It is enabled when a movement camera is selected.

Controls how much movement is needed before the Movement Only Camera is allowed.

Lower values make the movement camera trigger more easily. Higher values require clearer movement. The range is `0` to `1`.

#### Weight Boost

Where to find it: Cut Settings accordion, below Movement Only Camera. It is enabled when a movement camera is selected.

Gives the movement camera an extra chance to win after it passes the movement cutoff.

Higher values make the movement camera win more often during movement moments. Values below `1` do not reduce the camera below its normal camera weight; use camera weights if you want to lower its base chance.

#### Analyze Movement

Where to find it: Cut Settings accordion, below Movement Only Camera settings.

Builds the movement data used by Movement Only Camera.

Run this after choosing a movement camera. Q-Cut Studio shows movement-analysis progress while it works.

### Advanced Subsection

Advanced settings shape how Q-Cut Studio reacts to music energy and drops. The defaults are meant to be usable for most edits. Change these when the cut feels too calm, too nervous, too early, too late, or too loose around drops.

#### Music Detection Group

These settings control which moments count as drops and how close selected drops may be to each other.

##### Drop Confidence

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Controls how sure Q-Cut Studio must be before it accepts a detected drop.

Higher values keep only clearer drops. Lower values allow more possible drops.

##### Drop Prominence

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Controls how large an energy rise must be before it becomes a drop candidate.

Higher values focus on bigger hits. Lower values allow smaller rises to count.

##### Drop Min Spacing

Where to find it: Cut Settings accordion, Advanced subsection, Music Detection group.

Sets the minimum time between selected drops.

Higher values spread drop moments farther apart. Lower values allow drops closer together.

This affects drop-camera behavior, drop-aware timing, drop-aware zoom, drop/beat Fusion effects, and Clip export anchor selection. The Clip export Min Clip Spacing slider follows this value when you change Drop Min Spacing.

#### Energy Response Group

These settings control the general timing reaction to calm and intense music sections.

##### Energy Adaptation

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls how strongly music energy changes cut timing.

Higher values let calm and intense song sections move the cut timing more. Lower values keep timing steadier and closer to the neutral position. At `0`, the Drop Timing Shape settings have little to no effect.

##### Varianz Unadapted

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls the timing spread in neutral or calmer sections.

Lower values make cuts tighter around the target beat or bar. Higher values allow looser timing and more variation.

##### Default Neutral Energy

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Sets where neutral-energy sections land between Minimal Shot Length and Maximal Shot Length.

`0` aims near the Minimal Shot Length. `1` aims near the Maximal Shot Length. Higher values make neutral sections hold shots longer. Lower values make neutral sections cut sooner.

Example: if a camera can cut between 2 and 12 seconds, the window is 10 seconds wide. A value of `0.8` aims around `2 + 0.8 * 10 = 10` seconds.

##### Varianz Adapted

Where to find it: Cut Settings accordion, Advanced subsection, Energy Response group.

Controls the timing spread in high-energy or drop-shaped sections.

Lower values make energetic sections tighter and more locked to the target beat or bar. Higher values allow more variation even during high-energy moments.

#### Drop Timing Shape Group

These settings control how the edit builds into a drop and settles afterward.

##### Pre Drop Length

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how early Q-Cut Studio starts building tension before a detected drop.

Higher values start the build earlier. Lower values keep the build closer to the drop.

##### Pre Drop Curve

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Shapes how the pre-drop build rises.

Lower values start changing earlier and more gently. Higher values stay calmer for longer, then ramp harder near the drop.

##### Pre Drop Energy

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how close the pre-drop build gets to full drop energy.

Higher values make the build feel more intense before the drop. Lower values preserve more contrast for the drop itself.

##### Post Drop Fall

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how strongly the post-drop high-energy feeling fades back toward neutral during Fall Length.

Higher values make the fall stronger and return closer to neutral by the end of the fade. Lower values keep more of the drop energy alive for longer.

##### Fall Offset

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how long Q-Cut Studio waits after the detected drop before the fall begins.

Higher values keep the post-drop energy at full strength longer. Lower values start the return sooner.

##### Fall Length

Where to find it: Cut Settings accordion, Advanced subsection, Drop Timing Shape group.

Controls how long the post-drop return takes after Fall Offset.

Higher values create a longer, smoother fade back. Lower values return faster.

## Accordion: Export

Export settings decide what Q-Cut Studio creates after the edit has been calculated.

### Output Choice

These settings decide whether Q-Cut Studio exports a full edit or selected snippets.

#### Export Mode

Where to find it: Export accordion, first choice row.

Chooses what Q-Cut Studio exports.

| Option | What It Does |
| --- | --- |
| Set | Exports the full calculated cut set. |
| Clip | Exports selected snippets from the timeline. |

Use Set when you want the complete automated edit. Use Clip when you want highlight snippets, social clips, or selected drop moments.

#### Clip Export At A Glance

Where to find it: Export accordion, choose Clip.

Clip export uses detected drops as anchor points where possible. Q-Cut Studio first tries strong accepted drops, then other accepted drops, and can fill remaining slots from usable timeline positions if there are not enough drop anchors.

| Export Target | Auto Cut | Manual Cut |
| --- | --- | --- |
| Resolve | Creates a Resolve clips timeline with ready-to-use compounded snippets. Optional Overlay is applied to each compound immediately. | Creates editable source-window clips in Resolve, separated by gaps for easier editing. Q-Cut Studio opens the manual workflow modal after export. |
| XML | Writes separate XML clip files, named from the chosen XML path with `_clip1`, `_clip2`, and so on. | Writes separate XML clip files from source-window snippets. No Resolve manual workflow modal opens. |

### Clip Settings Subsection

Where to find it: Export accordion, choose Clip. Max Num Of Clips is visible immediately; the remaining controls are inside the nested Clip Settings panel.

These settings are only active when Export Mode is set to Clip.

#### Snippet Count

This setting controls how many snippets Q-Cut Studio tries to create.

##### Max Num Of Clips

Where to find it: Export accordion, Clip mode settings.

Sets the maximum number of snippets exported in Clip mode. The default is `12`.

Higher values export more snippets if enough valid snippet windows are available. Lower values export fewer snippets.

#### Snippet Output Workflow

These settings decide whether snippets are ready-to-use exports or editable manual Resolve windows.

##### Clip Cut Mode

Where to find it: Export accordion, Clip Settings subsection. It is available when Clip export is selected.

Chooses whether Clip export produces finished Q-Cut snippets or editable source-window snippets.

| Option | What It Does | Use It When |
| --- | --- | --- |
| Auto Cut | Uses Q-Cut Studio's normal calculated cut assembly for each snippet. | You want ready-to-use clips based on the automated edit. |
| Manual Cut | Keeps the selected source windows available for editing instead of exporting Q-Cut's internal cut sequence. | You want to make the multicam edit yourself in Resolve, starting from Q-Cut's selected moments. |

Manual Cut is not "fewer automatic cuts." It is an editable Resolve workflow. Q-Cut Studio chooses useful windows, then lets you decide the actual camera edits inside those windows.

Manual Cut does not apply Q-Cut's normal per-camera zoom and Fusion finishing metadata to the first manual timeline. If an Overlay is selected, Q-Cut Studio applies it during the final Compound Edited Clips step.

##### Manual Cut Resolve Workflow

Where to find it: Export accordion, choose Clip, choose Resolve, set Clip Cut Mode to Manual Cut, then export.

After a Manual Cut Resolve export, Q-Cut Studio shows a modal with the next steps. The workflow is:

1. In Resolve, open the created clips folder.
2. Select all clips in that clips folder.
3. Right-click the selected clips and choose Convert Compound Clips to Multicam Clips.
4. Use Reference Audio / Angle 1.
5. Edit the clips as normal multicam clips in Resolve.
6. When you are finished editing, return to Q-Cut Studio and click Compound Edited Clips.
7. Q-Cut Studio will make compounds out of all clips that touch each other so they are ready to export.
8. If you want to finish the Resolve work yourself, click I'll do the rest instead.

For Manual Cut, Q-Cut Studio targets the Resolve project and timeline it just exported. It treats your multicam edit as the source of truth and only compounds touching clips on that exported timeline.

If you selected an Overlay in the Clip Settings, Q-Cut Studio skips it during the first manual export and applies it when you click Compound Edited Clips.

#### Snippet Length And Anchor

These settings control how long snippets are, how far apart they must be, and where the anchor drop lands inside the clip.

##### Min Clip Length

Where to find it: Export accordion, Clip Settings subsection.

Sets the shortest allowed exported snippet. The default is `35` seconds.

Use higher values when every snippet should feel complete. Use lower values when shorter highlight clips are acceptable.

##### Max Clip Length

Where to find it: Export accordion, Clip Settings subsection.

Sets the longest allowed exported snippet. The default is `50` seconds.

Use higher values for longer clips. Use lower values for tighter clips. Max Clip Length must be at least as high as Min Clip Length.

Q-Cut Studio can use durations between Min Clip Length and Max Clip Length. If you want every snippet to use the same duration, set both values to the same number.

##### Min Clip Spacing

Where to find it: Export accordion, Clip Settings subsection.

Keeps exported snippets separated from each other in the source timeline. The default is `60` seconds.

Higher values spread snippets farther apart. Lower values allow snippets closer together. If the spacing is too high for the source material, Q-Cut Studio may export fewer clips than Max Num Of Clips.

##### Drop Middle Point

Where to find it: Export accordion, Clip Settings subsection.

Controls where the selected anchor time lands inside each exported snippet. The default is `0.4`.

| Value | Result |
| --- | --- |
| `0` | Places the anchor near the start of the snippet. |
| `0.5` | Places the anchor near the middle. |
| `1` | Places the anchor near the end. |

For example, with a 40 second clip and Drop Middle Point at `0.4`, the anchor lands about 16 seconds after the clip starts.

#### Snippet Priority

These settings control which valid snippet windows Q-Cut Studio prefers first.

##### Clip Priority

Where to find it: Export accordion, Clip Settings subsection.

Changes which snippet windows Q-Cut Studio tries first.

| Option | What It Does |
| --- | --- |
| Default | Uses Q-Cut Studio's normal drop-anchor selection. |
| More Cams First | First tries snippets that contain more distinct cameras. Ties still favor stronger drop anchors. |
| Show Camera First | First tries snippets that contain the selected Priority Camera. |

More Cams First and Show Camera First are mutually exclusive. If neither option finds enough valid snippets, Q-Cut Studio fills remaining slots using the normal rules.

##### Priority Camera

Where to find it: Export accordion, Clip Settings subsection, below Show Camera First.

Chooses the camera used by Show Camera First.

This setting only matters when Show Camera First is enabled. Q-Cut Studio first tries to export snippets where that camera appears, then fills remaining slots with the normal rules.

#### Overlay

Where to find it: Export accordion, Clip Settings subsection.

Adds an overlay to Resolve clip exports. The overlay can be a `.png` image or a Fusion `.setting` file.

Use this for reusable branding, text, frames, social layouts, or other screen overlays.

Overlay behavior depends on the clip workflow:

| Workflow | Overlay Behavior |
| --- | --- |
| Clip + Resolve + Auto Cut | Applied to each exported compound clip immediately. |
| Clip + Resolve + Manual Cut | Skipped during the first manual export and applied when you click Compound Edited Clips. |
| Clip + XML | Not applied by the XML export path. |

### Vertical Offset Subsection

Where to find it: Export accordion, click Adjust Offset for Vertical.

Use this subsection for per-camera framing when exporting vertical clips.

#### Adjust Offset For Vertical

Where to find it: Export accordion, click Adjust Offset for Vertical.

Sets a horizontal crop offset per camera for vertical exports.

Use this when the automatic vertical crop is not centered correctly for a camera. Choose a camera, adjust the preview, then click Save Offset.

The slider runs from `-1` to `1`. `0` means no added offset. Negative and positive values move the crop in opposite horizontal directions. Q-Cut Studio converts the value into the maximum safe left/right pan for a 9:16 vertical crop based on the source size.

Use Reset Camera to remove the saved offset for one camera.

### Export Target Subsection

Where to find it: Export accordion, Choose Export Medium section.

These settings decide whether Q-Cut Studio writes back to Resolve or writes XML files.

#### Choose Export Medium

Where to find it: Export accordion, Choose Export Medium section.

Chooses where the result should be exported.

| Option | What It Does |
| --- | --- |
| Resolve | Exports into DaVinci Resolve. |
| XML | Exports XML files. |

Resolve is best when you want Q-Cut Studio to build timelines or clips directly in Resolve. XML is best when you want files you can import or move into another editing workflow.

#### Timeline Name

Where to find it: Export accordion, Resolve export target panel.

Sets the name used for Resolve export output.

For Set export, this names the exported set timeline. For Clip export, Q-Cut Studio uses this as the base name and creates a clips timeline from it.

Use a clear name so the exported timeline is easy to find in Resolve. If you leave it blank, Q-Cut Studio uses the loaded source timeline name when possible.

#### Save XML As

Where to find it: Export accordion, XML export target panel.

Chooses the output path for XML export.

For Set export, Q-Cut Studio writes one XML file. For Clip export, Q-Cut Studio writes separate clip XML files using the chosen file name as the base, such as `my_export_clip1.xml`, `my_export_clip2.xml`, and so on.

#### Resolve Project Prompt

Where to find it: Appears as a notice during some Resolve exports or sync actions.

Sometimes Q-Cut Studio may need a separate temporary Resolve project for safer import work, especially when timeline format details require it. If this happens, Q-Cut Studio shows a prompt before continuing.

Use the default option unless you have a reason to stay inside the currently open Resolve project. The Use current project anyway option is smaller and riskier because Q-Cut Studio will try to do the import work inside the current project.

## Presets And Main Actions

Presets save and load Q-Cut Studio settings. They do not replace the source timeline itself, but they can remember settings such as camera timing, weights, sync choices, export choices, clip settings, vertical offsets, zoom, and Fusion effects.

### Loading And Defaults

These actions load saved settings or restore the app defaults.

#### Load Preset

Where to find it: Main window, Load Preset button near the top settings actions.

Loads a saved preset into Q-Cut Studio.

If a source is already loaded, Q-Cut Studio keeps enough camera rows to cover both the loaded source and the preset. Loading a smaller preset does not shrink a larger currently loaded timeline.

#### Set Default Settings

Where to find it: Main window, Set Default Settings button near the top settings actions.

Restores Q-Cut Studio's default settings in the UI.

This does not save a preset by itself. Use Save Preset afterward if you want to keep a changed version.

### Saving And Sharing

These actions save the current settings or move presets in and out of Q-Cut Studio.

#### Save Preset

Where to find it: Main window, Save Preset button near the Go button.

Saves the current settings as a Q-Cut Studio preset.

Q-Cut Studio will not save a preset if nothing differs from the default settings for the current camera count. Preset names are cleaned so they are safe as file names.

#### Import Preset

Where to find it: Main window, Import Preset button near the top settings actions.

Copies an external `.json` preset into Q-Cut Studio's user preset folder.

The file must be readable JSON. If a preset with the same file name already exists, it is replaced.

#### Override Preset

Where to find it: Main window, Override Preset button near the top settings actions. It is enabled after loading a preset.

Updates the currently loaded preset with the settings that are now on screen.

If the loaded preset came from bundled/default presets, Q-Cut Studio saves an editable user preset with the same name.

#### Export Preset

Where to find it: Main window, Export Preset button near the Go button.

Writes the current settings to a chosen `.json` file.

If the chosen file name does not end with `.json`, Q-Cut Studio adds the suffix.

### Managing Presets

These actions are available from the Load Preset modal for saved user presets.

#### Delete Preset

Where to find it: Load Preset modal, next to user presets.

Deletes a saved user preset. Bundled presets cannot be deleted from the Load Preset modal.
