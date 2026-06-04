import React from 'react';

function AboutUsPage() {
  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <section style={{marginBottom: 64}}>
          <h1 className="t-h1" style={{marginBottom: 24}}>Who we are:</h1>
          
          <div style={{marginBottom: 32}}>
            <p className="t-body-lg" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              Mulcut Schwarzer & Antropow GesbR<br />
              Software in Audio/Video-Analysis and video editing.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginBottom: 32}}>
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

            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
              We are a CS student Duo fully into music, videography and starting projects to either bring cool things to life or build tools for efficiency.
            </p>
          </div>
        </section>

        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Our Goals:</h2>
          
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24}}>
            We launched in 2026 with our first Software Q-Cut, Q-Cut is a MultiCam Editing Automation software for DJ sets, it stands for fast reliable results without ai-guessing.
          </p>
          
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
            Our Goal is to Improve Q-Cut, extend its usability and functionality but also dive deeper into audio analysis to tip our toe into other cool areas and noncommercial ideas.
          </p>
        </section>

        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>What we stand for:</h2>
          
          <div>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              We are against the mindset of throwing AI at every problem, wrapping it in vague promises, and calling it a product.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              Good software should be clear about what it does.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              It should solve a real problem.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              It should behave reliably.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              It should not make users guess what is happening behind the scenes.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              For us, AI is something to evaluate, not something to worship.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              Sometimes it helps.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              Sometimes it does not.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
              We also use AI as a tool, honestly we probably wouldn’t be this far without. but It’s important to distinguish it as a helper in cases where it shines and keep it away from cases where it tries to replace people with creativity and thinking skills.
            </p>
          </div>
        </section>

        <section style={{marginBottom: 0}}>
          <div className="card" style={{padding: 48, textAlign: 'center', background: 'linear-gradient(135deg, rgba(31,194,167,0.1) 0%, rgba(120,81,169,0.1) 100%)', borderTop: '2px solid var(--teal)', borderBottom: '2px solid var(--teal)'}}>
            <h2 className="t-h2" style={{marginBottom: 24}}>Our Slogan for Q-Cut:</h2>
            <p className="t-display" style={{marginBottom: 32, fontSize: 'clamp(28px, 6vw, 42px)'}}>
              Skip the monotonous editing and get back to creative work.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto'}}>
              That is what we want Mulcut GesbR to stand for, for efficient and reliant products that takes away work that feels like Labor to give more place for creativity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUsPage;
