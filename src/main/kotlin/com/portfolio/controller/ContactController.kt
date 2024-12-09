@RestController
@RequestMapping("/api/contact")
class ContactController(
    private val contactService: ContactService
) {
    @PostMapping
    fun sendContact(@RequestBody contactDTO: ContactDTO): ResponseEntity<Any> {
        return try {
            contactService.processContact(contactDTO)
            ResponseEntity.ok().build()
        } catch (e: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build()
        }
    }
}

data class ContactDTO(
    val name: String,
    val email: String,
    val message: String
) 