import React, { useState } from 'react';
import { redirectToCheckout } from '../utils/checkout';
import TrialConsentModal from './TrialConsentModal';
import OneTimeConsentModal from './OneTimeConsentModal';

const STUDIO_MONTH = 'price_1UFaEpPjWn7pNPmYKgvp4VFC';
const STUDIO_ONETIME = 'price_1UFaNtPjWn7pNPmY3It5h7VK';

export default function StudioPurchaseButtons() {
  const [purchaseType, setPurchaseType] = useState(null);

  const handleContinue = async () => {
    const priceId = purchaseType === 'subscription' ? STUDIO_MONTH : STUDIO_ONETIME;
    setPurchaseType(null);
    await redirectToCheckout(priceId);
  };

  return (
    <>
      <button type="button" className="btn btn-amber" onClick={() => setPurchaseType('subscription')}>
        Subscribe
      </button>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => setPurchaseType('one-time')}
        style={{ marginTop: 8 }}
      >
        One-time - €480
      </button>
      <TrialConsentModal
        isOpen={purchaseType === 'subscription'}
        isTrial={false}
        onClose={() => setPurchaseType(null)}
        onContinue={handleContinue}
      />
      <OneTimeConsentModal
        isOpen={purchaseType === 'one-time'}
        onClose={() => setPurchaseType(null)}
        onContinue={handleContinue}
      />
    </>
  );
}
