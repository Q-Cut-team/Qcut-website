import React from 'react';
import useCookiebotMarketingConsent from '../hooks/useCookiebotMarketingConsent';

function getYouTubeVideoId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (host.endsWith("youtube.com")) {
      return parsed.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function YouTubeEmbed({
  url,
  title = "YouTube video",
  className = "",
  showControls = true,
  autoPlay = false
}) {
  const videoId = getYouTubeVideoId(url);
  const { isAllowed, openPrivacySettings } = useCookiebotMarketingConsent();

  if (!videoId) {
    return (
      <div 
        className={className}
        style={{
          borderRadius: '16px',
          border: '1px solid rgba(239, 68, 68, 0.4)',
          background: 'rgba(239, 68, 68, 0.1)',
          padding: '20px',
          textAlign: 'center'
        }}
      >
        <p style={{color: '#fca5a5', fontSize: '14px'}}>
          Invalid YouTube URL. Please pass a valid youtu.be link.
        </p>
      </div>
    );
  }

  const params = new URLSearchParams({
    autoplay: autoPlay ? "1" : "0",
    controls: showControls ? "1" : "0",
    rel: "0",
    playsinline: "1"
  });

  if (autoPlay) {
    // Autoplay is commonly blocked unless muted.
    params.set("mute", "1");
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  const containerStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    borderRadius: '16px',
    background: '#000',
    border: '1px solid #333'
  };

  if (!isAllowed) {
    return (
      <div className={className} style={containerStyle}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            padding: '24px',
            textAlign: 'center',
            background: 'linear-gradient(145deg, #171717, #0a0a0a)'
          }}
        >
          <p className="t-body" style={{maxWidth: '520px', margin: 0, color: 'var(--text-2)'}}>
            To view this YouTube video, please allow marketing cookies.
          </p>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={openPrivacySettings}
          >
            Manage privacy settings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={className}
      style={containerStyle}
    >
      <iframe
        src={embedUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '16px'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default YouTubeEmbed;
