import React, { useEffect, useState } from 'react';

const bodyStyle = {color: 'var(--text-2)', marginBottom: 12, lineHeight: 1.7};
const listStyle = {paddingLeft: 24, color: 'var(--text-2)', marginBottom: 12};
const linkStyle = {color: 'var(--teal)', textDecoration: 'none'};

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
        <h1 className="t-h1" style={{marginBottom: 8}}>Q-CUT Privacy Notice</h1>
        <p className="t-body" style={{color: 'var(--text-2)', marginBottom: 24}}>
          Effective date: 10 August 2026
        </p>
        <p className="t-body" style={{...bodyStyle, marginBottom: 48}}>
          This Privacy Notice applies to the Q-CUT website, checkout, desktop applications, licensing and update services, and the Q-CUT Studio plugin for Adobe Premiere Pro.
        </p>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>1. Controller</h2>
          <p className="t-body" style={bodyStyle}>
            Mulcut Schwarzer &amp; Antropow GesbR<br />
            Schwarzhorngasse 13/24<br />
            1050 Vienna<br />
            Austria
          </p>
          <p className="t-body" style={bodyStyle}>
            Email:{' '}
            <a href="mailto:mulcutprojects@gmail.com" style={linkStyle}>mulcutprojects@gmail.com</a>
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>2. Website, Cookies, and External Content</h2>
          <p className="t-body" style={bodyStyle}>
            When you visit qcut.at or use a download link, we and our hosting providers process technical connection data such as your IP address, requested page, date and time, browser and operating-system information, referrer, response status, and security information. We use these data to deliver and secure the website and downloads and to diagnose errors. The legal basis is our legitimate interest in providing secure and reliable services (Article 6(1)(f) GDPR).
          </p>
          <p className="t-body" style={bodyStyle}>
            We use Cookiebot by Usercentrics to display the consent dialogue and store your privacy choices. The consent record may contain a pseudonymous consent key, your selections, and the date and time of the selection. We process this record to respect and demonstrate your choices. The legal basis is compliance with legal obligations and our legitimate interest in consent management (Article 6(1)(c) and (f) GDPR).
          </p>
          <p className="t-body" style={bodyStyle}>
            The website uses Google Tag Manager to manage website tags and consent states and currently loads Google Fonts from Google servers. These connections may transmit technical connection data, including your IP address, browser information, and the page address, to Google. We use Google Tag Manager for the reliable, consent-controlled operation of website components and Google Fonts for a consistent presentation of the website. The legal basis for these limited purposes is our legitimate interest in operating and presenting the website (Article 6(1)(f) GDPR). Non-essential analytics or marketing tags, if used, are based on consent (Article 6(1)(a) GDPR).
          </p>
          <p className="t-body" style={bodyStyle}>
            The website may embed videos from YouTube. Loading or playing an embedded video can transmit your IP address, browser and device information, the page visited, and information about your interaction with the video to Google and YouTube. If you are signed in to a Google account, Google may associate the interaction with that account. Where consent is required, the legal basis is your consent (Article 6(1)(a) GDPR).
          </p>
          <p className="t-body" style={bodyStyle}>
            You can change or withdraw consent at any time through the website&apos;s privacy settings. Withdrawal does not affect processing carried out before the withdrawal. The current services, cookies, purposes, providers, and storage periods are also shown in the consent dialogue or cookie declaration.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>3. Checkout and Payments</h2>
          <p className="t-body" style={bodyStyle}>
            When you start a trial or purchase a Q-CUT product, Stripe collects the information required for checkout and payment. Depending on the transaction, this may include your name, email address, billing address, country, tax information, payment information, and fraud-prevention signals. Stripe provides us with the product and plan, payment and subscription status, and related Stripe customer, checkout, payment, invoice, charge, or subscription identifiers. We do not receive or store your complete payment-card number.
          </p>
          <p className="t-body" style={bodyStyle}>
            For purchases completed through Stripe Managed Payments, Link acts as merchant of record and processes transaction data under its own terms and privacy notice. Mulcut receives the transaction and subscription information required to issue and administer the software licence.
          </p>
          <p className="t-body" style={bodyStyle}>
            Mulcut processes the information it receives to conclude and perform the software licence contract, administer licence entitlements and subscription status, provide product support, prevent fraud, and comply with accounting and legal obligations. The legal bases are Article 6(1)(b), (c), and (f) GDPR.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>4. Licensing, Usage Limits, and Updates</h2>
          <p className="t-body" style={bodyStyle}>
            When you activate or verify a Q-CUT licence, the application sends the licensing service the application identifier, licence key, a random installation identifier, a public cryptographic device key, and, if supplied, an optional device label. The service stores activation and validation times, licence status, seat and validity information, and the associated internal licence and Stripe identifiers. The licensing database does not store the customer&apos;s name or email address.
          </p>
          <p className="t-body" style={bodyStyle}>
            For plans with usage limits and for limited free versions, the service also processes an export counter, event time, quantity, a unique event identifier, and the requested action. For a limited free version, the installation identifier is stored as a hash. We use these data to activate and recover licences, verify validity, apply seat and usage limits, prevent unauthorised sharing, and investigate licensing errors. The legal bases are performance of the licence contract and our legitimate interest in protecting paid and limited free offers (Article 6(1)(b) and (f) GDPR).
          </p>
          <p className="t-body" style={bodyStyle}>
            When Q-CUT checks for updates or startup information, it sends the product or variant, installed version, release channel, and operating-system platform to the update service. The service stores aggregate daily counts by product, version, and platform. Hosting logs may additionally contain the technical connection data described in section 2. We use these data to provide compatible and secure updates and to operate the download service. The legal bases are Article 6(1)(b) and (f) GDPR.
          </p>
          <p className="t-body" style={bodyStyle}>
            Automated licence checks apply the payment, licence status, seat, expiry, and usage rules of the selected plan. They are not used to profile you. If you believe that access was restricted incorrectly, contact us and we will review the licence status.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>5. Local Media Processing and the Premiere Plugin</h2>
          <p className="t-body" style={bodyStyle}>
            Q-CUT processes media and editing projects locally unless a feature expressly states otherwise. The Q-CUT Studio plugin for Adobe Premiere Pro has local file-system access so that it can exchange bridge files with the Q-CUT Studio desktop application. These local files may contain project and sequence names, item identifiers, media paths, timeline data, session tokens, commands, and results.
          </p>
          <p className="t-body" style={bodyStyle}>
            The plugin has no direct network permission, and these bridge data are not sent to Mulcut by the plugin. The desktop application separately contacts the licensing and update services as described in section 4.
          </p>
          <p className="t-body" style={bodyStyle}>
            If you voluntarily send logs, screenshots, project information, bridge files, or media samples to support, we use them only to answer the request and investigate the reported issue. The legal bases are Article 6(1)(b) and (f) GDPR.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>6. Recipients and International Transfers</h2>
          <p className="t-body" style={bodyStyle}>
            We disclose personal data only where needed for the purposes described above. Recipient categories and the principal services currently used are:
          </p>
          <ul style={listStyle}>
            <li className="t-body" style={{marginBottom: 8}}>hosting, database, storage, security, email, and download providers, including Railway Corporation for Q-CUT backend services;</li>
            <li className="t-body" style={{marginBottom: 8}}>Stripe group companies for checkout, payment, subscription, invoicing, and fraud prevention;</li>
            <li className="t-body" style={{marginBottom: 8}}>Usercentrics and Cookiebot for consent management;</li>
            <li className="t-body" style={{marginBottom: 8}}>Google services, including Google Tag Manager, Google Fonts, and YouTube; and</li>
            <li className="t-body" style={{marginBottom: 8}}>professional advisers, courts, or authorities where required to establish, exercise, or defend legal claims or comply with law.</li>
          </ul>
          <p className="t-body" style={bodyStyle}>
            Some providers may process data outside the European Economic Area. Depending on the provider and processing, transfers are protected by an applicable adequacy decision, including the EU-U.S. Data Privacy Framework for certified recipients, or by the European Commission&apos;s Standard Contractual Clauses and appropriate supplementary measures. You may contact us for further information about the safeguard used for a particular transfer.
          </p>
          <p className="t-body" style={bodyStyle}>Provider information:</p>
          <ul style={listStyle}>
            <li className="t-body" style={{marginBottom: 8}}><a href="https://stripe.com/legal/privacy-center" style={linkStyle}>Stripe Privacy Center</a></li>
            <li className="t-body" style={{marginBottom: 8}}><a href="https://railway.com/legal/privacy" style={linkStyle}>Railway Privacy Policy</a></li>
            <li className="t-body" style={{marginBottom: 8}}><a href="https://usercentrics.com/privacy-policy/" style={linkStyle}>Usercentrics Privacy Policy</a></li>
            <li className="t-body" style={{marginBottom: 8}}><a href="https://policies.google.com/privacy" style={linkStyle}>Google Privacy Policy</a></li>
          </ul>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>7. Retention</h2>
          <p className="t-body" style={bodyStyle}>We retain personal data only for as long as needed for the purpose for which it was collected:</p>
          <ul style={listStyle}>
            <li className="t-body" style={{marginBottom: 8}}>website, download, and security logs are retained for the period needed to operate and secure the service and to investigate incidents;</li>
            <li className="t-body" style={{marginBottom: 8}}>consent records are retained until the choice expires or is replaced and, where necessary, for the period needed to demonstrate compliance;</li>
            <li className="t-body" style={{marginBottom: 8}}>order, payment, and accounting information is retained for the duration of the contract and the applicable statutory accounting, tax, and limitation periods;</li>
            <li className="t-body" style={{marginBottom: 8}}>licence, activation, and usage-limit information is retained while needed to provide or verify the entitlement and afterwards while needed for fraud prevention, disputes, or legal claims; and</li>
            <li className="t-body" style={{marginBottom: 8}}>support communications are retained until the request is resolved and afterwards only while needed for the contract or possible legal claims.</li>
          </ul>
          <p className="t-body" style={bodyStyle}>
            Data may be retained longer where required by law, a legal hold, or an active dispute. Local project and bridge files remain under the user&apos;s control on the user&apos;s device.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>8. Required and Optional Data</h2>
          <p className="t-body" style={bodyStyle}>
            Checkout and payment data and the licence and installation identifiers marked as required are necessary to conclude the purchase, issue or verify a licence, or apply a limited free plan. Without them, the relevant product or feature cannot be provided.
          </p>
          <p className="t-body" style={bodyStyle}>
            Consent to non-essential website services and optional support attachments is voluntary. Refusing or withdrawing such consent does not prevent use of the basic website or purchased software.
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>9. Your Rights</h2>
          <p className="t-body" style={bodyStyle}>
            Subject to the conditions and exceptions of the GDPR, you have the right to request access, rectification, erasure, restriction of processing, and data portability and to object to processing based on legitimate interests. Where processing is based on consent, you may withdraw consent at any time for the future.
          </p>
          <p className="t-body" style={bodyStyle}>
            To exercise your rights, contact <a href="mailto:mulcutprojects@gmail.com" style={linkStyle}>mulcutprojects@gmail.com</a>. We may request the information necessary to verify your identity.
          </p>
          <p className="t-body" style={bodyStyle}>
            You also have the right to lodge a complaint with:
          </p>
          <p className="t-body" style={bodyStyle}>
            Österreichische Datenschutzbehörde<br />
            Barichgasse 40-42<br />
            1030 Vienna<br />
            Austria
          </p>
          <p className="t-body" style={bodyStyle}>
            Email: <a href="mailto:dsb@dsb.gv.at" style={linkStyle}>dsb@dsb.gv.at</a><br />
            Website: <a href="https://www.dsb.gv.at/" style={linkStyle}>https://www.dsb.gv.at/</a>
          </p>
        </div>

        <div style={{marginBottom: 32}}>
          <h2 className="t-h3" style={{marginBottom: 16}}>10. Changes</h2>
          <p className="t-body" style={bodyStyle}>
            We may update this Privacy Notice when our products, providers, or legal requirements change. The current version and effective date will be available on the Q-CUT website and with the software.
          </p>
        </div>

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
