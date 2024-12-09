import React from 'react';
import './styles.css';

export function Projects() {
  return (
    <section id="projetos" className="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {/* Projeto BTG */}
        <div className="project-card">
          <h3>Desafio Backend - BTG Pactual</h3>
          <p>Java | RabbitMQ | MongoDB | Spring Boot</p>
          <p>Microsserviço realizado utilizando RabbitMQ e MongoDB.</p>
          <a href="https://github.com/jotamath/orderms/" target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </div>

        {/* Outros projetos seguem o mesmo padrão */}
      </div>
    </section>
  );
} 