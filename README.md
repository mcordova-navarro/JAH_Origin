# JAH — Landing Page

Página de identidad corporativa para **JAH**, empresa de stack tecnológico y automatización de procesos.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run preview` | Vista previa del build |

## Stack

- React 19 + TypeScript
- Vite 6
- CSS moderno (sin dependencias extra)

## Configuración de contacto

Copia `.env.example` a `.env` y define tus datos:

```env
VITE_CONTACT_EMAIL=tu@correo.com
VITE_CONTACT_WHATSAPP=5215512345678
VITE_CONTACT_WHATSAPP_LABEL=+52 55 1234 5678
```

- **WhatsApp:** abre un chat con el mensaje prellenado.
- **Correo:** abre el cliente de correo del usuario con asunto y cuerpo listos.

Reinicia `npm run dev` después de cambiar `.env`.

## Despliegue (GitHub Pages)

Sitio publicado en:

**https://mcordova-navarro.github.io/JAH_Origin/**

### Activar Pages (solo la primera vez)

1. En el repo: **Settings** → **Pages**
2. En **Build and deployment** → **Source**, elige **Deploy from a branch**
3. En **Branch**, selecciona **`gh-pages`** y carpeta **`/ (root)`**
4. Guarda. Cada push a `main` vuelve a publicar el sitio automáticamente

### Contacto en producción

Los datos de WhatsApp y correo para el sitio publicado están en `.env.production`. Edítalo y vuelve a hacer push para actualizar.
