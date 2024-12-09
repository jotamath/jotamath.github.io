import { useState } from 'react';
import React from 'react';
import './styles.css';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-top">
        <a href="#home" className="logo">
          <img 
            src="https://framerusercontent.com/images/0pmP7cQ03JIL5aewD6ty1lLhR0.png" 
            alt="Logo João Costa"
          />
        </a>
      </div>

      <div className={`header-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <a 
          href="https://github.com/jotamath/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </nav>
  );
} 