import React from 'react';

function ImpressumPage() {
  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <h1 className="t-h1" style={{marginBottom: 48}}>Legal Information</h1>
        
        {/* Disclaimer Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Disclaimer</h2>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Liability for Content</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The contents of our website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the information provided.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Liability for Links</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              Our website may contain links to external websites of third parties, over whose content we have no control. Therefore, we cannot accept any responsibility for such external content. The respective provider or operator of the linked pages is always responsible for their content.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Copyright</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The content published on this website (texts, images, graphics, and other materials) is subject to copyright law. Any use beyond the limits of copyright law requires the prior written consent of the respective rights holder.
            </p>
          </div>
          
          <div style={{marginBottom: 32}}>
            <h3 className="t-h3" style={{marginBottom: 16}}>Software Disclaimer</h3>
            <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
              The information provided about our software is for informational purposes only. We do not guarantee that the software is suitable for any specific purpose or that it will produce error-free results.
            </p>
          </div>
        </section>

        {/* Imprint Section */}
        <section style={{marginBottom: 64}}>
          <h2 className="t-h2" style={{marginBottom: 32}}>Imprint</h2>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 24, lineHeight: 1.7}}>
            Information in accordance with applicable Austrian law
          </p>
          
          <div className="card" style={{padding: 32, marginBottom: 32}}>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Name:</strong> Mulcut Schwarzer & Antropow GesbR
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Address:</strong> Schwarzhorngasse 13/24, 1050 Vienna, Austria
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Email:</strong>{' '}
              <a href="mailto:mulcutprojects@gmail.com" style={{color: 'var(--teal)', textDecoration: 'none'}}>
                mulcutprojects@gmail.com
              </a>
            </p>
            <p className="t-body" style={{marginBottom: 8}}>
              <strong>Business Type:</strong> Civil-law partnership (GesbR)
            </p>
            <p className="t-body">
              <strong>Business Purpose:</strong> Development and distribution of software for automated analysis and processing of audio and video files.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ImpressumPage;