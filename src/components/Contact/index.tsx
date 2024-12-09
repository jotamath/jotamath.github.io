import { useState, FormEvent } from 'react';
import React from 'react';
import { api } from '../../services/api';
import './styles.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      await api.post('/contact', formData);
      alert('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>
      
      <div className="contact-container">
        <a 
          href="https://w.app/joaocosta"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img 
            src="https://framerusercontent.com/images/GgCr40asjJB0W8g9XtMCS5EBOs.png" 
            alt="WhatsApp"
            width="26"
            height="26"
          />
        </a>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Fulano de Tal"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="fulano@email.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              placeholder="Sua mensagem..."
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <button type="submit">Enviar email</button>
        </form>
      </div>
    </section>
  );
} 