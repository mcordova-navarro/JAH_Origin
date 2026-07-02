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

## Despliegue gratis (GitHub Pages)

### 1. Crear repositorio en GitHub

1. Entra a [github.com/new](https://github.com/new)
2. Nombre sugerido: `jah-origin` (o el que prefieras)
3. Déjalo **público**
4. **No** marques README ni .gitignore (ya existen en el proyecto)
5. Clic en **Create repository**

### 2. Subir el código

En la terminal, dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Landing JAH con despliegue GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/jah-origin.git
git push -u origin main
```

Reemplaza `TU-USUARIO` y `jah-origin` por tu usuario y nombre del repo.

### 3. Activar GitHub Pages

1. En el repo: **Settings** → **Pages**
2. En **Build and deployment**, elige **Source: GitHub Actions**
3. Tras el primer push, el workflow publicará el sitio automáticamente

Tu URL será:

`https://TU-USUARIO.github.io/jah-origin/`

(La URL usa el **nombre exacto del repositorio**.)

### Contacto en producción

Los datos de WhatsApp y correo para el sitio publicado están en `.env.production`. Edítalo y vuelve a hacer push para actualizar.
