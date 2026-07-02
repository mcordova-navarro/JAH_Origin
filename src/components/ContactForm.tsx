import { useState, type FormEvent } from 'react'
import {
  contactConfig,
  getMailtoUrl,
  getWhatsAppUrl,
  isWhatsAppConfigured,
} from '../config/contact'

type Channel = 'whatsapp' | 'email'

export function ContactForm() {
  const whatsappReady = isWhatsAppConfigured()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const validate = (): boolean => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Completa todos los campos antes de enviar.')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = (channel: Channel) => (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()

    if (channel === 'whatsapp') {
      if (!whatsappReady) {
        setError('WhatsApp no está configurado. Usa correo o actualiza VITE_CONTACT_WHATSAPP.')
        return
      }
      window.open(getWhatsAppUrl(trimmedName, trimmedEmail, trimmedMessage), '_blank', 'noopener')
      return
    }

    window.location.href = getMailtoUrl(trimmedName, trimmedEmail, trimmedMessage)
  }

  return (
    <form className="cta__form" noValidate>
      {error && (
        <p className="cta__error" role="alert">
          {error}
        </p>
      )}

      <label>
        <span>Nombre</span>
        <input
          type="text"
          name="name"
          required
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </label>

      <label>
        <span>Correo electrónico</span>
        <input
          type="email"
          name="email"
          required
          placeholder="tu@empresa.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </label>

      <label className="cta__full">
        <span>Mensaje</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Cuéntanos sobre tu negocio y objetivos..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <div className="cta__actions cta__full">
        <button
          type="submit"
          className="btn btn--whatsapp"
          onClick={handleSubmit('whatsapp')}
          disabled={!whatsappReady}
          title={
            whatsappReady
              ? 'Abrir WhatsApp con tu mensaje'
              : 'Configura VITE_CONTACT_WHATSAPP en .env'
          }
        >
          Enviar por WhatsApp
        </button>
        <button type="submit" className="btn btn--primary" onClick={handleSubmit('email')}>
          Enviar por correo
        </button>
      </div>

      <div className="cta__direct cta__full">
        <span>O contáctanos directamente:</span>
        <div className="cta__links">
          <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
          {whatsappReady && (
            <a
              href={`https://wa.me/${contactConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactConfig.whatsappLabel}
            </a>
          )}
        </div>
      </div>
    </form>
  )
}
