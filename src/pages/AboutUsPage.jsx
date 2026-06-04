import React from 'react';
import { Link } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <h1 className="t-h1" style={{marginBottom: 16}}>About Us</h1>
        <p className="t-body-lg" style={{color: 'var(--text-2)', marginBottom: 48, fontSize: '18px', lineHeight: 1.7}}>
          Mulcut Schwarzer & Antropow GesbR — Software in Audio/Video-Analysis and video editing.
        </p>
        
        {/* Who We Are Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Who We Are</h2>
          
          <div className="card" style={{padding: 32, marginBottom: 32, borderLeft: '4px solid var(--teal)'}}>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24}}>
              We are a CS student duo fully into music, videography and starting projects to either bring cool things to life or build tools for efficiency.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32}}>
              <div>
                <h3 className="t-h3" style={{marginBottom: 12}}>Nils Antropow</h3>
                <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>
                  Videographer, CS Student at univie
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{marginBottom: 12}}>Oskar Schwarzer</h3>
                <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>
                  Hobby DJ, CS Student at univie
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Goals Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Our Goals</h2>
          
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24}}>
            We launched in 2026 with our first software <strong>Q·Cut</strong> — a MultiCam Editing Automation software for DJ sets that stands for <strong>fast reliable results without AI-guessing</strong>.
          </p>
          
          <div className="card" style={{padding: 32, background: 'linear-gradient(135deg, rgba(31,194,167,0.05) 0%, rgba(120,81,169,0.05) 100%)'}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Our Mission</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              <li style={{marginBottom: 12, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span style={{color: 'var(--teal)', marginTop: 4}}>→</span>
                <span className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>Improve Q·Cut and extend its usability and functionality</span>
              </li>
              <li style={{marginBottom: 12, display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span style={{color: 'var(--teal)', marginTop: 4}}>→</span>
                <span className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>Dive deeper into audio analysis</span>
              </li>
              <li style={{display: 'flex', gap: 12, alignItems: 'flex-start'}}>
                <span style={{color: 'var(--teal)', marginTop: 4}}>→</span>
                <span className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>Explore other cool areas and noncommercial ideas</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What We Stand For Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>What We Stand For</h2>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Good Software Principles</h3>
            <div className="card" style={{padding: 32, borderLeft: '4px solid var(--amber)'}}>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                <li style={{marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--line)'}}>
                  <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6, margin: 0}}>
                    <strong>Clear about what it does</strong> — Good software should be transparent.
                  </p>
                </li>
                <li style={{marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--line)'}}>
                  <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6, margin: 0}}>
                    <strong>Solves a real problem</strong> — It should address genuine user needs.
                  </p>
                </li>
                <li style={{marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--line)'}}>
                  <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6, margin: 0}}>
                    <strong>Behaves reliably</strong> — Users can depend on it.
                  </p>
                </li>
                <li>
                  <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6, margin: 0}}>
                    <strong>No guessing games</strong> — Users should know what's happening behind the scenes.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="t-h3" style={{marginBottom: 16}}>On AI & Technology</h3>
            <div className="card" style={{padding: 32}}>
              <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
                We are against the mindset of <strong>throwing AI at every problem</strong>, wrapping it in vague promises, and calling it a product.
              </p>
              
              <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
                <strong>For us, AI is something to evaluate, not something to worship.</strong> Sometimes it helps. Sometimes it does not.
              </p>
              
              <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
                We also use AI as a tool — honestly, we probably wouldn't be this far without it. But it's important to distinguish it as a helper in cases where it shines and keep it away from cases where it tries to replace people with creativity and thinking skills.
              </p>
            </div>
          </div>
        </section>

        {/* Our Slogan Section */}
        <section style={{marginBottom: 0}}>
          <div className="card" style={{padding: 48, textAlign: 'center', background: 'linear-gradient(135deg, rgba(31,194,167,0.1) 0%, rgba(120,81,169,0.1) 100%)', borderTop: '2px solid var(--teal)', borderBottom: '2px solid var(--teal)'}}>
            <h2 className="t-display" style={{marginBottom: 24, fontSize: 'clamp(28px, 6vw, 42px)'}}>
              Skip the monotonous editing
            </h2>
            <p className="t-body-lg" style={{color: 'var(--text-2)', lineHeight: 1.7, fontSize: '18px', marginBottom: 32}}>
              and get back to creative work.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto'}}>
              This is what Mulcut stands for: <strong>efficient and reliable products</strong> that take away work that feels like labor, giving more place for creativity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUsPage;
