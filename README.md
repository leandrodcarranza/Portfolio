# Portfolio — Leandro Carranza

Sitio armado con Next.js (App Router). Diseño temático de "esquema de base de datos": la barra
lateral lista las secciones como tablas de un schema (public.perfil, public.proyectos, etc.),
inspirado en el explorador de pgAdmin.

## Correr en local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Personalizar

- **Perfil / hero**: `components/Hero.js` — cambiá el texto de presentación.
- **Proyectos**: `data/projects.js` — agregá, editá o sacá proyectos. Cada uno tiene id, nombre,
  descripción, stack, estado (`completo` / `en mejora`), repo y demo (opcional).
- **Dashboards de Power BI**: `data/dashboards.js` — ver instrucciones dentro del archivo.
  - Opción A (recomendada si el dato no es sensible): en Power BI, `Archivo > Publicar en la Web`,
    copiá el link y pegalo en `embedUrl`. Se ve embebido y en vivo.
  - Opción B (si el dato es sensible o de un cliente): exportá el reporte como imagen y ponela en
    `public/screenshots/`, referenciándola en el campo `screenshot`.
- **Contacto**: `components/Contact.js` — actualizá mail, LinkedIn, etc.
- **Links de GitHub/LinkedIn en la barra lateral**: `components/Sidebar.js`.
- **Colores / tipografías**: todo el sistema de diseño vive en `app/globals.css` (variables al
  principio del archivo).

## Deploy en Vercel

1. Subí esta carpeta a un repo nuevo en GitHub.
2. Entrá a vercel.com, iniciá sesión con GitHub.
3. "Add New Project" → elegí el repo → Deploy (no hace falta tocar ninguna configuración, Vercel
   detecta Next.js solo).
4. Cada vez que hagas push a `main`, el sitio se actualiza solo.
5. Opcional: en el proyecto de Vercel podés conectar un dominio propio desde Settings > Domains.
