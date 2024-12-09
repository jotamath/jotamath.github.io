import React from 'react';
import './styles.css';

export function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-content">
        <div className="emoji">📚</div>
        <h1>Eu sou o João</h1>
        <div className="about-text">
          <p>e sou desenvolvedor Python e Java</p>
          <p>🫡 Bacharel em Ciências Militares (2019 - 2023)</p>
          <p>💻 Graduando em Engenharia da Computação (2024)</p>
          <p>📚 Pós graduado em Desenvolvimento Fullstack (2024)</p>
        </div>
        <a 
          href="/assets/cv.pdf"
          className="cv-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
} 