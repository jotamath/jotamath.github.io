import React from 'react';
import './styles.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© João Costa 2024</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/_jmath" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/jotamath" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="mailto:contato@joaocosta.dev">Mail</a>
        </div>
      </div>
    </footer>
  );
} 