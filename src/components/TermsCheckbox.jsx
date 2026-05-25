import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsCheckbox({ accepted, onChange }) {
  return (
    <label style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: 'pointer',
      marginBottom: 12,
      fontSize: 14,
      color: 'var(--text-2)',
      lineHeight: 1.4,
    }}>
      <input
        type="checkbox"
        checked={accepted}
        onChange={e => onChange(e.target.checked)}
        style={{
          marginTop: 2,
          width: 16,
          height: 16,
          accentColor: 'var(--amber)',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      />
      <span>
        I agree to the{' '}
        <Link
          to="/terms-of-use"
          style={{color: '#3b82f6', textDecoration: 'underline'}}
          onClick={e => e.stopPropagation()}
        >
          Terms of Use
        </Link>
      </span>
    </label>
  );
}
