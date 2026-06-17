import React, { useState } from 'react';

/**
 * Example 3: TextInput Component
 * Demonstrates controlled form inputs with useState.
 */
export function TextInput() {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    setCharCount(value.length);
  };

  const clearText = () => {
    setText('');
    setCharCount(0);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>✍️ TextInput Example</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Type something: </label>
        <br />
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here..."
          style={{
            width: '100%',
            height: '80px',
            padding: '8px',
            marginTop: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ddd',
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <p>
          Character Count: <strong>{charCount}</strong>
        </p>
        <p>
          Your text: <em>{text || '(empty)'}</em>
        </p>
      </div>

      <button onClick={clearText} style={{ padding: '8px 16px' }} type="button">
        Clear
      </button>
    </div>
  );
}


