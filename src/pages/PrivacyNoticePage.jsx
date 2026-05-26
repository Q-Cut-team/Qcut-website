import React, { useEffect, useState } from 'react';

function PrivacyNoticePage() {
  const [iframeHeight, setIframeHeight] = useState(520);

  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== window.location.origin) return;
      if (!event.data || event.data.type !== 'cookieDeclarationHeight') return;
      if (typeof event.data.height !== 'number') return;

      setIframeHeight(Math.max(320, Math.ceil(event.data.height)));
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <h1 className="t-h1" style={{marginBottom: 48}}>Privacy Notice</h1>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>1. General Information</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We take the protection of your personal data seriously. This Privacy Policy explains what data we collect, how we use it, and your rights in relation to your personal data.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>2. Data Collection on This Website</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            When you visit our website, certain information is automatically collected by our hosting provider. This may include:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>IP address</li>
            <li className="t-body" style={{marginBottom: 8}}>Browser type and version</li>
            <li className="t-body" style={{marginBottom: 8}}>Operating system</li>
            <li className="t-body" style={{marginBottom: 8}}>Date and time of access</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            This data is collected to ensure the proper functioning and security of the website.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>3. Purpose of Data Processing</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            We process your data for the following purposes:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>to provide and maintain our website</li>
            <li className="t-body" style={{marginBottom: 8}}>to ensure technical security</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            The legal basis for this processing is Art. 6(1)(f) GDPR (legitimate interest).
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>4. Tracking or Marketing</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We do not use our own analytics services, tracking tools, or marketing cookies. However, this website includes embedded content from third-party providers such as YouTube. When such content is loaded, including when you visit a page containing an embedded video, the third-party provider may process personal data and use cookies or similar technologies in accordance with its own privacy policy.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>5. External Links</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Our website may contain links to external websites. We are not responsible for the content or privacy practices of those websites.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>6. Data Retention</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We only retain personal data for as long as necessary to fulfill the purposes stated above or as required by law.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>7. Your Rights</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Under applicable data protection laws, you have the right to:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>access your personal data</li>
            <li className="t-body" style={{marginBottom: 8}}>request correction or deletion</li>
            <li className="t-body" style={{marginBottom: 8}}>restrict processing</li>
            <li className="t-body" style={{marginBottom: 8}}>object to processing</li>
            <li className="t-body" style={{marginBottom: 8}}>data portability</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            To exercise your rights, please contact us using the details below.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>8. Contact</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            If you have any questions about this Privacy Policy or your data, you can contact us at:
          </p>
          <p className="t-body" style={{marginTop: 12}}>
            <a href="mailto:mulcutprojects@gmail.com" style={{color: 'var(--teal)', textDecoration: 'none'}}>
              mulcutprojects@gmail.com
            </a>
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>9. Changes to This Privacy Policy</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We reserve the right to update this Privacy Policy at any time to reflect changes in our services or legal requirements.
          </p>
        </div>

        {/* Cookie declaration injected by Cookiebot script */}
        <iframe
          title="Cookie Declaration"
          src="/cookie-declaration.html"
          style={{
            width: '100%',
            border: 'none',
            marginTop: 48,
            minHeight: 320,
            height: iframeHeight,
          }}
        />
      </div>
    </div>
  );
}

export default PrivacyNoticePage;
