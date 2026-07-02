/** Datos de contacto — edítalos en el archivo `.env` en la raíz del proyecto. */
const rawWhatsApp = import.meta.env.VITE_CONTACT_WHATSAPP ?? ''

/** Normaliza el número: solo dígitos y código de país si falta (Perú: 9 dígitos que empiezan en 9). */
export function normalizeWhatsAppNumber(value: string): string {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''

  // Perú: móvil 9XXXXXXXX → 519XXXXXXXX
  if (digits.length === 9 && digits.startsWith('9')) {
    return `51${digits}`
  }

  return digits
}

const whatsapp = normalizeWhatsAppNumber(rawWhatsApp)

export const contactConfig = {
  email: import.meta.env.VITE_CONTACT_EMAIL ?? 'contacto@jah.com',
  /** Número con código de país, sin + ni espacios. Ej: 51958174579 */
  whatsapp,
  whatsappLabel: import.meta.env.VITE_CONTACT_WHATSAPP_LABEL ?? 'WhatsApp',
} as const

export function isWhatsAppConfigured(): boolean {
  return /^\d{10,15}$/.test(contactConfig.whatsapp)
}

export function buildContactMessage(name: string, email: string, message: string): string {
  return [
    'Hola JAH, me interesa conocer más sobre sus servicios.',
    '',
    `Nombre: ${name}`,
    `Correo: ${email}`,
    '',
    'Mensaje:',
    message,
  ].join('\n')
}

export function getWhatsAppUrl(name: string, email: string, message: string): string {
  const text = encodeURIComponent(buildContactMessage(name, email, message))
  return `https://wa.me/${contactConfig.whatsapp}?text=${text}`
}

export function getMailtoUrl(name: string, email: string, message: string): string {
  const subject = encodeURIComponent(`Consulta web JAH — ${name}`)
  const body = encodeURIComponent(buildContactMessage(name, email, message))
  return `mailto:${contactConfig.email}?subject=${subject}&body=${body}`
}
