package com.portfolio.service

import com.portfolio.model.Contact
import com.portfolio.repository.ContactRepository
import org.springframework.mail.SimpleMailMessage
import org.springframework.mail.javamail.JavaMailSender
import org.springframework.stereotype.Service
import java.time.LocalDateTime

@Service
class ContactService(
    private val contactRepository: ContactRepository,
    private val mailSender: JavaMailSender
) {
    fun processContact(contactDTO: ContactDTO): Contact {
        val contact = Contact(
            name = contactDTO.name,
            email = contactDTO.email,
            message = contactDTO.message,
            createdAt = LocalDateTime.now()
        )
        
        // Salva no banco
        val savedContact = contactRepository.save(contact)
        
        // Envia email de notificação
        sendNotificationEmail(contact)
        
        return savedContact
    }

    private fun sendNotificationEmail(contact: Contact) {
        val message = SimpleMailMessage().apply {
            setTo("contato@joaocosta.dev")
            setSubject("Novo contato do portfólio")
            setText("""
                Nome: ${contact.name}
                Email: ${contact.email}
                Mensagem: ${contact.message}
            """.trimIndent())
        }
        mailSender.send(message)
    }
} 