import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SubscriptionCheckbox from './SubscriptionCheckbox';
import TermsCheckbox from './TermsCheckbox';

export default function TrialConsentModal({ isOpen, onClose, onContinue }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [subscriptionAccepted, setSubscriptionAccepted] = useState(false);
  const canContinue = termsAccepted && subscriptionAccepted;

  useEffect(() => {
    if (!isOpen) {
      setTermsAccepted(false);
      setSubscriptionAccepted(false);
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'grid',
        placeItems: 'center',
        padding: 16,
        background: 'rgba(0, 0, 0, 0.78)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-consent-title"
        style={{
          position: 'relative',
          width: 'min(620px, 100%)',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          padding: 24,
          background: 'var(--surface)',
          border: '1px solid var(--line-2)',
          borderRadius: 8,
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.5)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          title="Close"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            border: '1px solid var(--line-2)',
            borderRadius: 8,
            background: 'transparent',
            color: 'var(--text-2)',
            cursor: 'pointer',
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <h2 id="trial-consent-title" className="t-h3" style={{ paddingRight: 48, marginBottom: 8 }}>
          Confirm your free trial
        </h2>
        <p className="t-body" style={{ marginBottom: 24 }}>
          Please review and accept both confirmations before continuing.
        </p>

        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ padding: 16, border: '1px solid var(--line)', borderRadius: 8 }}>
            <TermsCheckbox accepted={termsAccepted} onChange={setTermsAccepted} />
          </div>
          <div style={{ padding: 16, border: '1px solid var(--line)', borderRadius: 8 }}>
            <SubscriptionCheckbox accepted={subscriptionAccepted} onChange={setSubscriptionAccepted} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
          <button
            type="button"
            className="btn btn-amber"
            disabled={!canContinue}
            onClick={() => canContinue && onContinue()}
            style={{
              opacity: canContinue ? 1 : 0.5,
              cursor: canContinue ? 'pointer' : 'not-allowed',
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
