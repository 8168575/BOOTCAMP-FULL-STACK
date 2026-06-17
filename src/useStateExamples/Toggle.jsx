import React, { useState } from 'react';

/**
 * Example 2: Toggle Component
 * Demonstrates boolean state management and conditional rendering.
 */
export function Toggle() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>🔄 Toggle Example</h2>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          Visibility Toggle
        </label>
        <button
          onClick={() => setIsVisible((v) => !v)}
          style={{ marginRight: '10px', padding: '8px 16px' }}
          type="button"
        >
          {isVisible ? 'Hide Message' : 'Show Message'}
        </button>

        {isVisible && <p style={{ color: '#333' }}>You toggled me! 🎉</p>}
      </div>

      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={isSubscribed}
            onChange={(e) => setIsSubscribed(e.target.checked)}
          />
          Subscribe to updates
        </label>
        <p style={{ marginTop: '8px', color: '#333' }}>
          Status: <strong>{isSubscribed ? 'Subscribed' : 'Not Subscribed'}</strong>
        </p>
      </div>
    </div>
  );
}


