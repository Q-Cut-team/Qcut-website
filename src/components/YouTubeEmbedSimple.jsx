import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function YouTubeEmbedSimple({ videoId }) {
  // Default to the specific video ID if not provided
  const id = videoId || 'Bzbe1ti2tC8';

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <YouTubeEmbed
        url={`https://youtu.be/${id}`}
        title="YouTube video"
      />
    </div>
  );
}

export default YouTubeEmbedSimple;
