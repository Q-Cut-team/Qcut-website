import React from 'react';
import { useNavigate } from 'react-router-dom';

function TermsOfUsePage() {
  const navigate = useNavigate();

  return (
    <div className="page-fade-enter">
      <div className="container-narrow" style={{paddingTop: 80, paddingBottom: 80}}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-ghost"
          style={{marginBottom: 32}}
        >
          ← Back
        </button>

        <h1 className="t-h1" style={{marginBottom: 8}}>Mulcut Terms of Use</h1>
        <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 48}}>
          Last updated: 24.05.2026
        </p>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>1. Introduction</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            These Terms of Use (“Terms”) govern the use of all software products and services provided by Mulcut Schwarzer &amp; Antropow GesbR (“Mulcut”, “we”, “our”, or “us”).
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            By downloading, installing, accessing, or using our software, you agree to these Terms.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            If you do not agree to these Terms, you may not use the software.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>2. Products and Plans</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            These Terms apply to all Mulcut software products, including but not limited to:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>Q-Cut Studio</li>
            <li className="t-body" style={{marginBottom: 8}}>Q-Cut Creator</li>
            <li className="t-body" style={{marginBottom: 8}}>Q-Cut DJ</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, marginBottom: 12, lineHeight: 1.7}}>
            Different products or subscription plans may provide different features, limitations, or usage rights.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Feature availability depends on the selected product and license plan.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>3. License Grant</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The software is licensed, not sold.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Subject to these Terms, Mulcut grants you a limited, non-exclusive, non-transferable, and revocable license to use the software in accordance with your selected product, plan, or license type.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            You may not:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>redistribute or resell the software</li>
            <li className="t-body" style={{marginBottom: 8}}>share or transfer activation keys</li>
            <li className="t-body" style={{marginBottom: 8}}>reverse engineer or modify the software except where permitted by law</li>
            <li className="t-body" style={{marginBottom: 8}}>use the software for unlawful purposes</li>
          </ul>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>4. Activation and License Verification</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Certain products require activation using a valid activation key.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            An internet connection may be required for software activation and periodic license verification.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The software may need to communicate with our servers to verify license validity and prevent unauthorized use.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            We reserve the right to suspend or revoke licenses in cases of:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>fraud</li>
            <li className="t-body" style={{marginBottom: 8}}>abuse</li>
            <li className="t-body" style={{marginBottom: 8}}>unauthorized sharing</li>
            <li className="t-body" style={{marginBottom: 8}}>violation of these Terms</li>
          </ul>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>5. Free Versions</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Free versions of the software may contain limited functionality and may be modified, restricted, or discontinued at any time without notice.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Mulcut provides no guarantee regarding the continued availability of free plans or features.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>6. Payments and Subscriptions</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Certain products or features require payment.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Subscription plans renew automatically unless cancelled before the renewal date.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Prices, billing intervals, and included features are displayed during the purchase process.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Payments may be processed through third-party payment providers such as Stripe.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Free trials may be offered for certain products or plans.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Unless cancelled before the end of the trial period, the subscription will automatically convert into a paid subscription at the rate displayed during the purchase process.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>6A. One-Time Purchases</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Certain products may be offered as one-time purchases.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Unless explicitly stated otherwise during the purchase process, one-time purchases grant access to the purchased software version and included features at the time of purchase.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Mulcut may provide updates, bug fixes, and compatibility improvements at its discretion. However, we do not guarantee indefinite support, future feature updates, or compatibility with all future operating systems, hardware configurations, or third-party software.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>7. Right of Withdrawal (EU Consumers)</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            For consumers located in the European Union:
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            By starting a free trial or purchasing the software, you expressly request and consent to the immediate provision of digital content and acknowledge that your statutory right of withdrawal is lost once the download, activation, or access process has started.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Where a free trial converts into a paid subscription, the subscription terms and pricing are displayed during the purchase process.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>8. Refunds</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Unless otherwise required by applicable law, all purchases are final.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Refund requests may be reviewed on a case-by-case basis at our sole discretion.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>9. Software Disclaimer</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The software is provided for automated analysis and processing of audio and video content.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            While we strive to provide reliable functionality, we do not guarantee:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>uninterrupted operation</li>
            <li className="t-body" style={{marginBottom: 8}}>error-free performance</li>
            <li className="t-body" style={{marginBottom: 8}}>compatibility with all systems or third-party software</li>
            <li className="t-body" style={{marginBottom: 8}}>perfect or accurate editing, cutting, or analysis results</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            Users are responsible for reviewing all generated results before publishing or distributing content.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>10. Third-Party Software and Services</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Some Mulcut products may interact with or support third-party software and services.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            DaVinci Resolve is a trademark of Blackmagic Design Pty. Ltd. Mulcut is not affiliated with, endorsed by, or sponsored by Blackmagic Design.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We are not responsible for changes, incompatibilities, or issues caused by third-party software.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>11. Limitation of Liability</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            To the maximum extent permitted by law, Mulcut shall not be liable for:
          </p>
          <ul style={{paddingLeft: 24, color: 'var(--text-2)'}}>
            <li className="t-body" style={{marginBottom: 8}}>indirect or consequential damages</li>
            <li className="t-body" style={{marginBottom: 8}}>loss of profits</li>
            <li className="t-body" style={{marginBottom: 8}}>loss of business</li>
            <li className="t-body" style={{marginBottom: 8}}>data loss</li>
            <li className="t-body" style={{marginBottom: 8}}>project loss</li>
            <li className="t-body" style={{marginBottom: 8}}>editing inaccuracies</li>
            <li className="t-body" style={{marginBottom: 8}}>interruptions caused by third-party services or software</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            Our total liability shall not exceed the amount paid for the software during the previous 12 months.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>12. Termination</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            We may suspend or terminate access to the software if you violate these Terms.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Upon termination, your license to use the software ends immediately.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>13. Changes to the Terms</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            We reserve the right to modify these Terms at any time.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Updated versions will be published on our website.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Continued use of the software after changes become effective constitutes acceptance of the updated Terms.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>14. Governing Law</h3>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            These Terms shall be governed by the laws of Austria, excluding conflict of law provisions.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>15. Contact</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 4, lineHeight: 1.7}}>
            Mulcut Schwarzer &amp; Antropow GesbR
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 4, lineHeight: 1.7}}>
            Schwarzhorngasse 13/24
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 4, lineHeight: 1.7}}>
            1050 Vienna
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Austria
          </p>
          <p className="t-body" style={{color: 'var(--text-2)'}}>
            Email:{' '}
            <a href="mailto:mulcutprojects@gmail.com" style={{color: 'var(--teal)', textDecoration: 'none'}}>
              mulcutprojects@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUsePage;
