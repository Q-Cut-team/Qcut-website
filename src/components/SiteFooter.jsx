import { Link } from "react-router-dom";

function SiteFooter() {
  return (
    <footer style={{borderTop: "1px solid var(--line)", background: "var(--surface)"}}>
      <div className="container" style={{padding: "32px"}}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="brand-mark"></span>
            <span className="t-label">© 2026 Q·Cut. Built for fast multicam workflows.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link className="t-label" style={{transition: "color .2s ease"}} 
                  to="/impressum"
                  onMouseEnter={(e) => e.target.style.color = "var(--text)"}
                  onMouseLeave={(e) => e.target.style.color = ""}>
              Impressum
            </Link>
            <Link className="t-label" style={{transition: "color .2s ease"}}
                  to="/terms-of-use"
                  onMouseEnter={(e) => e.target.style.color = "var(--text)"}
                  onMouseLeave={(e) => e.target.style.color = ""}>
              Terms
            </Link>
            <Link className="t-label" style={{transition: "color .2s ease"}}
                  to="/privacy-notice"
                  onMouseEnter={(e) => e.target.style.color = "var(--text)"}
                  onMouseLeave={(e) => e.target.style.color = ""}>
              Privacy
            </Link>
            <a href="mailto:info@qcut.at" 
               className="t-label" 
               style={{transition: "color .2s ease"}}
               onMouseEnter={(e) => e.target.style.color = "var(--amber)"}
               onMouseLeave={(e) => e.target.style.color = ""}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
