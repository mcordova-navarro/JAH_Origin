import { useEffect, useState } from 'react'
import { ContactForm } from './components/ContactForm'
import { LightningLogo } from './components/LightningLogo'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#confianza', label: 'Respaldo' },
  { href: '#contacto', label: 'Contacto' },
]

const services = [
  {
    icon: '⚡',
    title: 'Automatización inteligente',
    description:
      'Eliminamos tareas repetitivas con flujos conectados, bots y orquestación en tiempo real.',
  },
  {
    icon: '🔗',
    title: 'Integración de sistemas',
    description:
      'Unimos ERP, CRM, inventarios y canales digitales en un ecosistema coherente y escalable.',
  },
  {
    icon: '📊',
    title: 'Datos y decisiones',
    description:
      'Dashboards, alertas y analítica predictiva para que cada movimiento tenga respaldo.',
  },
  {
    icon: '🛡️',
    title: 'Infraestructura segura',
    description:
      'Arquitectura cloud-native con monitoreo, respaldos y cumplimiento desde el diseño.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Diagnóstico',
    text: 'Mapeamos procesos, cuellos de botella y objetivos de crecimiento.',
  },
  {
    step: '02',
    title: 'Diseño',
    text: 'Definimos la arquitectura tecnológica y el plan de automatización.',
  },
  {
    step: '03',
    title: 'Implementación',
    text: 'Desplegamos, integramos y capacitamos a tu equipo paso a paso.',
  },
  {
    step: '04',
    title: 'Evolución',
    text: 'Medimos resultados y optimizamos continuamente hacia el objetivo común.',
  },
]

const clients = [
  {
    name: "D'Nava",
    category: 'Panadería · Pastelería',
    logo: '/dnava-logo2.png',
    description:
      'Automatización de operaciones y presencia digital para escalar su negocio artesanal.',
    featured: true,
  },
  {
    name: 'Próximamente',
    category: 'Retail',
    logo: null,
    description: 'Espacio reservado para nuestra próxima alianza estratégica.',
    featured: false,
  },
  {
    name: 'Próximamente',
    category: 'Servicios',
    logo: null,
    description: 'Construyendo historias de crecimiento junto a más empresas.',
    featured: false,
  },
]

const partners = [
  { name: 'Microsoft Azure', tag: 'Cloud Partner' },
  { name: 'AWS', tag: 'Infrastructure' },
  { name: 'Google Cloud', tag: 'Analytics & AI' },
  { name: 'ISO 27001', tag: 'Seguridad' },
  { name: 'SOC 2', tag: 'Cumplimiento' },
  { name: 'Open Source', tag: 'Comunidad global' },
]

const stats = [
  { value: '99.9%', label: 'Disponibilidad objetivo' },
  { value: '3×', label: 'Velocidad en procesos clave' },
  { value: '24/7', label: 'Monitoreo y soporte' },
  { value: '100%', label: 'Enfoque en tu crecimiento' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow--top" aria-hidden="true" />
      <div className="bg-glow bg-glow--bottom" aria-hidden="true" />

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <a href="#" className="brand" onClick={closeMenu}>
            <LightningLogo className="brand__icon" />
            <span className="brand__text">JAH</span>
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="btn btn--primary nav__cta" onClick={closeMenu}>
              Hablemos
            </a>
          </nav>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content reveal">
              <p className="eyebrow">Stack tecnológico · Automatización · Crecimiento</p>
              <h1>
                Impulsamos tu negocio con{' '}
                <span className="text-gradient">tecnología de vanguardia</span>
              </h1>
              <p className="hero__lead">
                Mantenemos al día a empresas que visualizan crecer. Aportamos el stack más
                avanzado para automatizar cada proceso necesario y alcanzar juntos un objetivo
                común.
              </p>
              <div className="hero__actions">
                <a href="#contacto" className="btn btn--primary">
                  Agendar consulta
                </a>
                <a href="#servicios" className="btn btn--ghost">
                  Ver soluciones
                </a>
              </div>
              <div className="hero__stats">
                {stats.map((stat) => (
                  <div key={stat.label} className="hero__stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual reveal reveal--delay">
              <div className="hero__orb">
                <LightningLogo className="hero__logo" />
                <div className="hero__badge hero__badge--1">Automatización</div>
                <div className="hero__badge hero__badge--2">Cloud Native</div>
                <div className="hero__badge hero__badge--3">IA aplicada</div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">Qué hacemos</p>
              <h2>Tecnología que transforma operaciones</h2>
              <p>
                Diseñamos ecosistemas digitales completos: desde la automatización del día a día
                hasta la inteligencia que guía cada decisión estratégica.
              </p>
            </div>

            <div className="cards-grid">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className="card reveal"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="card__icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="section section--alt">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">Cómo trabajamos</p>
              <h2>Un camino claro hacia resultados</h2>
              <p>
                Metodología probada, comunicación transparente y entregables medibles en cada
                etapa.
              </p>
            </div>

            <div className="timeline">
              {processSteps.map((item, i) => (
                <div
                  key={item.step}
                  className="timeline__item reveal"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="timeline__step">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clientes" className="section">
          <div className="container">
            <div className="section__head reveal">
              <p className="eyebrow">Clientes</p>
              <h2>Empresas que confían en nosotros</h2>
              <p>
                Cada proyecto es una alianza. Acompañamos negocios reales con soluciones
                tecnológicas que generan impacto tangible.
              </p>
            </div>

            <div className="clients-grid">
              {clients.map((client, i) => (
                <article
                  key={`${client.name}-${i}`}
                  className={`client-card reveal ${client.featured ? 'client-card--featured' : ''}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="client-card__logo-wrap">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`Logo de ${client.name}`}
                        className="client-card__logo"
                        loading="lazy"
                      />
                    ) : (
                      <div className="client-card__placeholder">
                        <LightningLogo />
                      </div>
                    )}
                  </div>
                  <div className="client-card__body">
                    <span className="client-card__category">{client.category}</span>
                    <h3>{client.name}</h3>
                    <p>{client.description}</p>
                    {client.featured && (
                      <span className="client-card__badge">Cliente activo</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="confianza" className="section section--alt">
          <div className="container">
            <div className="trust reveal">
              <div className="trust__content">
                <p className="eyebrow">Respaldo y confianza</p>
                <h2>Respaldados por estándares globales</h2>
                <p>
                  Operamos con las mejores prácticas de la industria y alianzas con plataformas
                  líderes. Tu negocio merece infraestructura seria, segura y preparada para
                  escalar.
                </p>
                <ul className="trust__list">
                  <li>Arquitectura enterprise con alta disponibilidad</li>
                  <li>Protocolos de seguridad y privacidad de datos</li>
                  <li>Equipos certificados y metodologías ágiles</li>
                  <li>Soporte continuo y evolución tecnológica</li>
                </ul>
              </div>

              <div className="trust__partners">
                {partners.map((partner) => (
                  <div key={partner.name} className="partner-badge">
                    <strong>{partner.name}</strong>
                    <span>{partner.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <div className="container">
            <div className="cta reveal">
              <div className="cta__content">
                <p className="eyebrow">Contacto</p>
                <h2>¿Listo para acelerar tu crecimiento?</h2>
                <p>
                  Cuéntanos tu visión. Diseñamos juntos la hoja de ruta tecnológica que tu
                  negocio necesita para llegar más lejos.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#" className="brand brand--footer">
            <LightningLogo className="brand__icon brand__icon--sm" />
            <span className="brand__text">JAH</span>
          </a>
          <p>© {new Date().getFullYear()} JAH. Tecnología que impulsa tu crecimiento.</p>
          <nav className="footer__nav" aria-label="Pie de página">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}
