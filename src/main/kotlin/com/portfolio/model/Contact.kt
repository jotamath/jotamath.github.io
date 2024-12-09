package com.portfolio.model

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
data class Contact(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String,
    val email: String,
    @Column(columnDefinition = "TEXT")
    val message: String,
    val createdAt: LocalDateTime
) 