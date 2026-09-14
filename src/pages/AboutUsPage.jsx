import React from 'react';

function AboutUsPage() {
  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <section style={{marginBottom: 64}}>
          <h1 className="t-h1" style={{marginBottom: 24}}>Who we are</h1>
          
          <div style={{marginBottom: 32}}>
            <p className="t-body-lg" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              Mulcut Schwarzer & Antropow GesbR<br />
              Software for audio and video analysis and editing.
            </p>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, marginBottom: 32}}>
              <div>
                <h3 className="t-h3" style={{marginBottom: 12}}>Nils Antropow</h3>
                <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>
                  Videographer and computer science student at the University of Vienna
                </p>
              </div>
              <div>
                <h3 className="t-h3" style={{marginBottom: 12}}>Oskar Schwarzer</h3>
                <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.6}}>
                  Hobby DJ and computer science student at the University of Vienna
                </p>
              </div>
            </div>

            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
              We are two computer science students who love music, videography, and building projects that bring ideas to life or make creative work more efficient.
            </p>
          </div>
        </section>

        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Our goals</h2>
          
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24}}>
            We launched Q-Cut in 2026. It automates multicam editing for DJ sets and delivers fast, reliable results without AI guesswork.
          </p>
          
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
            Our goal is to keep improving Q-Cut, expand what it can do, and explore new uses for audio analysis through commercial and non-commercial projects.
          </p>
        </section>

        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>What we stand for</h2>
          
          <div>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              We are against the mindset of throwing AI at every problem, wrapping it in vague promises, and presenting it as a product.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              Good software should be clear about what it does.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              It should solve a real problem.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              It should behave reliably and should not make users guess what is happening behind the scenes.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16}}>
              For us, AI is something to be evaluated, not worshipped.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 32}}>
              Sometimes it helps. Sometimes it does not.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, margin: 0}}>
              We also use AI as a tool. We probably would not have come this far without it, but we recognise its limitations and do not let it replace human creativity and critical thinking.
            </p>
          </div>
        </section>

        <section style={{marginBottom: 0}}>
          <div className="card" style={{padding: 48, textAlign: 'center', background: 'linear-gradient(135deg, rgba(31,194,167,0.1) 0%, rgba(120,81,169,0.1) 100%)', borderTop: '2px solid var(--teal)', borderBottom: '2px solid var(--teal)'}}>
            <h2 className="t-h2" style={{marginBottom: 24}}>Our Q-Cut slogan</h2>
            <p className="t-display" style={{marginBottom: 32, fontSize: 'clamp(28px, 6vw, 42px)'}}>
              Skip the monotonous editing and get back to creative work.
            </p>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto'}}>
              That is what we want Mulcut GesbR to stand for: efficient, reliable products that remove monotonous work and create more space for creativity.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUsPage;
