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
          Last updated: 10.08.2026
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
            <li className="t-body" style={{marginBottom: 8}}>Q-Cut Studio plugin for Adobe Premiere Pro</li>
          </ul>
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, marginBottom: 12, lineHeight: 1.7}}>
            The Q-Cut Studio plugin for Adobe Premiere Pro is a companion component of Q-Cut Studio. It requires a compatible installation of Adobe Premiere Pro and a valid Q-Cut Studio entitlement or an expressly offered free mode.
          </p>
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
            Subject to these Terms, Mulcut grants you a limited, non-exclusive, and non-transferable license, subject to termination under Section 12, to use the software in accordance with your selected product, plan, or license type.
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
          <p className="t-body" style={{color: 'var(--text-2)', marginTop: 12, lineHeight: 1.7}}>
            The Q-Cut Studio plugin for Adobe Premiere Pro does not provide a separate Q-Cut Studio license or entitlement.
          </p>
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
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Mulcut may suspend or terminate a license only in the circumstances described in Section 12.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>4A. Premiere Plugin and Local Bridge</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The Q-Cut Studio plugin for Adobe Premiere Pro communicates with the Q-Cut Studio desktop application through a local per-user file bridge.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The plugin requests Adobe UXP&apos;s <code>localFileSystem: fullAccess</code> permission. This permission is required so that the plugin can access the local bridge and the OTIO, XML, media, and project-related paths that Q-Cut Studio asks Adobe Premiere Pro to import or export.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The local bridge may exchange project and sequence names, sequence and item identifiers, clip names, local media paths, timeline metadata, commands, status information, and export results between Adobe Premiere Pro and Q-Cut Studio.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            When instructed through Q-Cut Studio, the plugin may read the active project and sequence, import or export timeline files, create or clone sequences, add or remove timeline items or markers, and open or activate sequences.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The production plugin does not request direct network access and does not itself upload footage or Adobe Premiere Pro project data to Mulcut. The Q-Cut Studio desktop application may separately communicate with Mulcut&apos;s licensing and update services.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Users are responsible for confirming the intended project and sequence, maintaining appropriate backups, and reviewing changes made through the plugin.
          </p>
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
            Payments are processed through Stripe Managed Payments. For transactions completed through Managed Payments, Link acts as merchant of record and handles payment processing, applicable indirect taxes, receipts, transaction support, and payment-related refunds. Mulcut remains responsible for licensing the software and providing product-related support.
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
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Mulcut does not guarantee indefinite support, future feature upgrades, or access to future major versions. Optional feature updates and future major versions may be offered separately at Mulcut&apos;s discretion.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            This does not affect any security, compatibility, or conformity updates that Mulcut is required to provide under applicable law. Such required updates will be provided only for the period required by applicable law.
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
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Adobe, Adobe Premiere, Premiere Pro, and Creative Cloud are trademarks or registered trademarks of Adobe in the United States and/or other countries. Mulcut is not affiliated with, endorsed by, or sponsored by Adobe.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The Q-Cut Studio plugin for Adobe Premiere Pro requires separately licensed Adobe Premiere Pro and, where required by Adobe, Adobe Creative Cloud.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            We are not responsible for changes, incompatibilities, or issues caused by third-party software.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>11. Liability</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            The limitations of liability in these Terms apply only to the extent permitted by applicable law. They do not apply in cases of intent, gross negligence, personal injury, or any other liability that cannot legally be excluded or limited.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            For Consumers, Mulcut&apos;s liability is governed by the applicable mandatory statutory provisions.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            For Business Customers, in cases of slight negligence, Mulcut shall be liable only for a breach of a material contractual obligation, meaning an obligation whose performance is essential for the proper performance of the contract and on which the customer may reasonably rely. In such cases, liability is limited to the foreseeable damage typical for this type of contract.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Subject to the exceptions above, Mulcut&apos;s aggregate liability to a Business Customer shall not exceed:
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            (a) for a subscription, the fees actually paid for the affected product during the twelve months preceding the event giving rise to the claim; or
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            (b) for a one-time purchase, the purchase price paid for the affected license.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Q-Cut assists with automated audio and video editing. Users remain responsible for reviewing generated timelines, cuts, exports and project files before publishing or further processing them, and for maintaining appropriate backups. Any failure to review results or maintain backups shall be taken into account only to the extent permitted by applicable law and to the extent that it contributed to the damage.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>12. Termination</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Mulcut may suspend or terminate a license in cases of non-payment, fraud, unauthorized credential or license sharing, security abuse, unlawful use, or a material breach of these Terms. If a material breach can reasonably be remedied, Mulcut will provide notice and a reasonable opportunity to remedy the breach before termination. No prior remedy period is required where the breach cannot be remedied or immediate suspension is reasonably necessary to protect the software, its users, Mulcut&apos;s rights, or comply with applicable law.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Upon termination, your license to use the software ends immediately.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h3 className="t-h3" style={{marginBottom: 16}}>13. Changes to the Terms</h3>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            We may update these Terms for future contracts by publishing a new version.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7}}>
            Changes to an existing contract take effect only where permitted by applicable law and after appropriate notice. Where express consent is required, we will request that consent separately.
          </p>
          <p className="t-body" style={{color: 'var(--text-2)', lineHeight: 1.7}}>
            Continued use alone does not constitute acceptance where applicable law requires an express declaration.
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
