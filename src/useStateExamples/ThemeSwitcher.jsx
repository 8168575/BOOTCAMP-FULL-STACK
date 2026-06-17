import React, { useState } from 'react';

/**
 * Example 5: ThemeSwitcher Component
 * Demonstrates managing object state with useState
 * Use case: Theme management, application-wide settings
 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState({
    mode: 'light',
    accentColor: 'blue',
    fontSize: 'medium',
  });

  const toggleMode = () => {
    setTheme({
      ...theme,
      mode: theme.mode === 'light' ? 'dark' : 'light',
    });
  };

  const changeAccentColor = (color) => {
    setTheme({ ...theme, accentColor: color });
  };

  const changeFontSize = (size) => {
    setTheme({ ...theme, fontSize: size });
  };

  const getBgColor = () => (theme.mode === 'light' ? '#ffffff' : '#1a1a1a');
  const getTextColor = () => (theme.mode === 'light' ? '#000000' : '#ffffff');
  const getColorMap = () => ({
    blue: '#007bff',
    green: '#28a745',
    red: '#dc3545',
    purple: '#6f42c1',
  });

  const getFontSizeMap = () => ({
    small: '12px',
    medium: '16px',
    large: '20px',
  });

  const colorMap = getColorMap();
  const fontSizeMap = getFontSizeMap();

  return (
    <div
      style={{
        padding: '20px',
        border: `2px solid ${colorMap[theme.accentColor]}`,
        borderRadius: '8px',
        marginBottom: '20px',
        backgroundColor: getBgColor(),
        color: getTextColor(),
        fontSize: fontSizeMap[theme.fontSize],
        transition: 'all 0.3s ease',
      }}
    >
      <h2>🎨 ThemeSwitcher Example</h2>

      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={toggleMode}
          style={{
            padding: '8px 16px',
            marginRight: '10px',
            backgroundColor: colorMap[theme.accentColor],
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Switch to {theme.mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <p>Accent Color:</p>
        {Object.keys(colorMap).map((color) => (
          <button
            key={color}
            onClick={() => changeAccentColor(color)}
            style={{
              padding: '6px 12px',
              marginRight: '8px',
              marginBottom: '8px',
              backgroundColor: colorMap[color],
              color: 'white',
              border: theme.accentColor === color ? '3px solid yellow' : '1px solid gray',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: theme.accentColor === color ? 'bold' : 'normal',
            }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>

      <div>
        <p>Font Size:</p>
        {Object.keys(fontSizeMap).map((size) => (
          <button
            key={size}
            onClick={() => changeFontSize(size)}
            style={{
              padding: '6px 12px',
              marginRight: '8px',
              marginBottom: '8px',
              backgroundColor:
                theme.fontSize === size ? colorMap[theme.accentColor] : '#cccccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: theme.fontSize === size ? 'bold' : 'normal',
            }}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </button>
        ))}
      </div>

      <p style={{ marginTop: '15px' }}>
        Current Theme: Mode: <strong>{theme.mode}</strong>, Accent: <strong>{theme.accentColor}</strong>, Size:{' '}
        <strong>{theme.fontSize}</strong>
      </p>
    </div>
  );
}


