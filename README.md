# ASM Inc. — Corporate Website

Sitio corporativo estático para **ASM Inc. / Advanced System Managers**. Reconstrucción original basada en las capturas y las dos imágenes de marca entregadas. No había código fuente del sitio previo.

## Lo que se entrega

- **11 rutas HTML reales** y `404.html`.
- Diseño responsive con componentes editoriales, recursos optimizados, animaciones discretas, menú accesible, breadcrumbs y enlaces internos.
- SEO por página, Open Graph, datos estructurados mínimos, sitemap y robots de producción.
- Configuración para GitHub Pages en raíz o bajo `/nombre-del-repo/`.
- Código y assets **sin dependencias npm** de terceros, sin SSR ni backend.
- Los logos originales se guardan intactos en `public/brand/originals`.

## Nota sobre el stack

El encargo prefería Astro + TypeScript. Este entorno no pudo resolver el registro npm (`EAI_AGAIN`); por ello se ha construido un **generador estático en Node.js con datos tipados en TypeScript**. Produce HTML estático real y se ha ejecutado y verificado localmente. No se presenta falsamente como un proyecto Astro. El código de salida sirve directamente para GitHub Pages y el diseño no requiere un servidor de aplicaciones.

## Uso local

Requisito: **Node.js 22.10 o superior** (Node 22 usa la opción experimental de eliminación de tipos de TypeScript), npm y, solo para la vista previa, Python 3 opcional.

```bash
npm ci
npm run build
npm test
python3 -m http.server 4173 --directory dist
```

Abre `http://localhost:4173`. El comando `npm run dev` ejecuta la compilación y después inicia ese servidor local.

En Node 24+ puede sustituirse el flag `--experimental-strip-types` si se prefiere la eliminación de tipos nativa.

## GitHub Pages

1. Crea un **repositorio nuevo y específico para ASM**, en lugar de utilizar un repositorio de otro proyecto.
2. Sube el contenido de esta carpeta a la rama `main`, incluidos `.github/workflows/deploy.yml`, `public/`, `src/`, `scripts/` y `package-lock.json`.
3. En GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. Cada push a `main` ejecutará el build, revisará enlaces/archivos y publicará el artefacto `dist`.
5. El workflow detecta `GITHUB_REPOSITORY` y construye enlaces bajo `/<repo>/`. Si el repositorio se llama `<usuario>.github.io`, se publica bajo `/`.

El dominio de producción, cuando se conoce, puede definirse mediante la variable de repositorio **`SITE_URL`** (por ejemplo `https://www.ejemplo.com`), y su ruta base mediante **`BASE_PATH`** (por ejemplo `/`). No se ha incluido un `CNAME` ficticio. Sin `SITE_URL`, el build en GitHub Pages deriva la dirección esperada `https://<usuario>.github.io/<repo>/`. Debes validar la URL pública real y el dominio antes de anunciarla.

**Prueba de base path en local:**

```bash
BASE_PATH=/asm-demo/ SITE_URL=https://example.org/asm-demo/ npm run build
npm test
```

El resultado de ese build está preparado para servirse desde `/asm-demo/`, no directamente desde `/`.

## Configuración de negocio

- `src/data.ts`: descripción, navegación, páginas, canales y estados de verificación.
- `scripts/build.mjs`: layouts HTML, secciones y generación de rutas.
- `src/styles.css`: sistema visual y responsive.
- `src/app.js`: menú y animaciones de mejora progresiva.
- `CONTENT_REVIEW.md`: campos pendientes imprescindibles para activar conversiones reales.

## Contacto y datos personales

Los dos correos visibles en las capturas están **sin verificar** y aparentemente asociados a departamentos intercambiados. No se publican como enlaces funcionales. La web no recoge CV, envía mensajes, guarda cookies de seguimiento ni simula entrevistas. Para habilitar un canal real, ASM debe confirmar la dirección, su finalidad y las condiciones de tratamiento de datos.

## Assets, licencias y límites

- `public/brand/originals/`: recursos facilitados por el usuario, no modificados; confirmar los derechos de explotación de la empresa antes de una publicación pública.
- `public/brand/optimized/`: recorte y escalado fiel del logotipo original.
- `public/images/`: detalles de la imagen corporativa aportada, recortados y convertidos a WebP, más elementos visuales originales hechos con CSS/SVG.
- El favicon es un patrón geométrico **neutro y provisional**, no un nuevo logotipo ASM.
- No hay fotografías de stock de terceros, fuentes o scripts alojados en CDN, ni logos de proveedores.
- El sitio usa fuentes del sistema para evitar descarga externa y mejorar el rendimiento.

## Comprobaciones

`npm test` verifica páginas, un solo H1, atributos SEO, ausencia de contenido de relleno, correos no confirmados y destinos locales, tanto en raíz como en subruta. La inspección de dispositivos mediante Chromium resultó restringida por políticas del navegador del entorno; **no se declaran puntuaciones Lighthouse ni conformidad WCAG formal medida**. Ver `QA_REPORT.md`.
