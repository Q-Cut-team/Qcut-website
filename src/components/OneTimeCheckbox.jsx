import React from 'react';

export default function OneTimeCheckbox({ accepted, onChange }) {
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
        I expressly agree that the execution of the contract begins immediately and acknowledge that I lose my statutory right of withdrawal once the download or activation process has started.
      </span>
    </label>
  );
}
