import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Toast from "./Toast";
import { useToast } from "../hooks/useToast";

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible, message, showToast, hideToast } = useToast();
  
  const handleComingSoon = () => {
    showToast("Coming soon — we're working on it! 🚧");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            <span className="brand-mark"></span>
            <span>Q-Cut</span>
          </Link>

          <div className="nav-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/help" 
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              Help
            </NavLink>
            <button onClick={handleComingSoon} className="btn btn-amber">
              Get Q-Cut Free
            </button>
          </div>

          <button 
            className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/pricing" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Pricing
        </NavLink>
        <NavLink 
          to="/help" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Help
        </NavLink>
        <button 
          className="btn btn-amber w-full"
          onClick={() => { setMobileMenuOpen(false); handleComingSoon(); }}
        >
          Get Q-Cut Free
        </button>
      </div>
      <Toast message={message} isVisible={isVisible} onClose={hideToast} />
    </>
  );
}

export default SiteHeader;
