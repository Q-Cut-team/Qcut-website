import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DJPage from './pages/DJPage';
import EditorPage from './pages/EditorPage';
import PricingPage from './pages/PricingPage';
import HelpPage from './pages/HelpPage';
import SuccessPage from './pages/SuccessPage';
import ImpressumPage from './pages/ImpressumPage';
import PrivacyNoticePage from './pages/PrivacyNoticePage';
import TestPage from './pages/TestPage';
import SimpleVideoTest from './pages/SimpleVideoTest';

// ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Beta Bar Component
function BetaBar() {
  return (
    <div className="beta-bar">
      <span className="pulse" />
      <span>Free testing week — TBA soon</span>
      <span className="pulse" />
    </div>
  );
}

// Brand Component
function Brand() {
  const navigate = useNavigate();
  return (
    <span className="brand" onClick={() => navigate('/')} style={{display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}>
      <img src="/qcut_logo.png" alt="Q" style={{height: '28px', width: 'auto'}} />
      <span style={{fontSize: '16px', fontWeight: 600, letterSpacing: '0.05em'}}>CUT</span>
    </span>
  );
}

// Navigation Component
function Nav() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/dj', label: 'DJ' },
    { path: '/editor', label: 'Editor' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/help', label: 'Help' },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Brand />
        <button 
          className="nav-toggle" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand />
          <p className="footer-text">
            Professional multicam editing.<br />
            Synced to the beat.
          </p>
        </div>
        <div className="footer-links">

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link to="/dj">DJ Version</Link></li>
              <li><Link to="/editor">Editor Version</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link to="/help">Help Center</Link></li>
              <li><a href="mailto:support@qcut.app">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-notice">Privacy</Link></li>
              <li><Link to="/impressum">Impressum</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <BetaBar />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dj" element={<DJPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/privacy-notice" element={<PrivacyNoticePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/video-test" element={<SimpleVideoTest />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;