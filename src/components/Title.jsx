import React from 'react';

const Title = ({ children }) => (
  <h1
    style={{
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      fontWeight: 800,
      fontSize: '3rem',
      color: '#fff',
      textAlign: 'center',
      letterSpacing: '0.02em',
      lineHeight: 1.1,
      textShadow: '0 2px 16px rgba(0,0,0,0.25)',
      margin: '2rem 0',
    }}
  >
    {children}
  </h1>
);

export default Title;
