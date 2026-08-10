import { useCallback, useEffect, useState } from 'react';

function hasMarketingConsent() {
  return typeof window !== 'undefined'
    && window.Cookiebot?.consent?.marketing === true;
}

function useCookiebotMarketingConsent() {
  const [isAllowed, setIsAllowed] = useState(hasMarketingConsent);

  useEffect(() => {
    const syncConsent = () => setIsAllowed(hasMarketingConsent());
    const events = [
      'CookiebotOnConsentReady',
      'CookiebotOnLoad',
      'CookiebotOnAccept',
      'CookiebotOnDecline'
    ];

    events.forEach((eventName) => {
      window.addEventListener(eventName, syncConsent);
    });
    syncConsent();

    return () => {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, syncConsent);
      });
    };
  }, []);

  const openPrivacySettings = useCallback(() => {
    if (typeof window !== 'undefined' && typeof window.Cookiebot?.renew === 'function') {
      window.Cookiebot.renew();
    }
  }, []);

  return { isAllowed, openPrivacySettings };
}

export default useCookiebotMarketingConsent;
