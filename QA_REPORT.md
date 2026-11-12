# Informe de QA · ASM Inc.

Fecha de pruebas: 12 de noviembre de 2026.

## Ejecutado y confirmado

| Control | Resultado |
|---|---|
| Inventario de referencia | 12 PNG y prompt maestro leídos; 2 originales de marca conservados |
| Compilación `npm run build` | PASA en Node 22.16.0 |
| Instalación reproducible `npm ci --offline` | PASA, sin paquetes terceros |
| Validación estática raíz `/` | PASA, 602 aserciones |
| Validación estática subruta `/asm-demo/` | PASA, 536 aserciones antes de incorporar fallback sin JS |
| Validación estática repo hipotético `/ASM-Inc/` | PASA, 536 aserciones antes de incorporar fallback sin JS |
| Prueba HTTP desde servidor estático subruta `/ASM-Inc/` | PASA, 17 URLs HTTP 200 |
| Prueba HTTP desde servidor estático raíz | PASA, 16 URLs HTTP 200 |
| Páginas HTML prerenderizadas | 11 rutas + 404.html |
| HTML: un H1 por ruta | PASA |
| Navegación: destinos internos y assets | PASA, sin referencias locales ausentes |
| Correo no confirmado fuera de HTML público | PASA |
| Meta description por ruta | PASA |
| CSS parseado con `tinycss2` | 0 errores de sintaxis de reglas |
| JavaScript y build script `node --check` | PASA |
| Robots, `.nojekyll`, sitemap en build con URL de producción | Generados |
| Versiones workflow GitHub Pages | Alineadas con documentación pública consultada: checkout v6, configure-pages v5, upload-pages-artifact v4, deploy-pages v4 |

**Nota:** se repitió el build raíz tras probar el `base` del repositorio. El contenido de `dist/` dentro del ZIP usa `/` como vista previa; el workflow de GitHub regenera el destino del repositorio real.

## Limitaciones verificadas

- **El navegador Chromium instalado bloqueó la navegación a `http://127.0.0.1` y a `file:///` mediante `ERR_BLOCKED_BY_ADMINISTRATOR`.** No se pudieron capturar ni inspeccionar visualmente las versiones 320, 375, 768, 1024, 1440 y 1920 px. Las media queries están implementadas, pero no se presenta la inspección visual como realizada.
- **Menú, hover, Escape y scroll reveal:** revisados en código, **no comprobados mediante automatización de navegador** por el bloqueo anterior.
- **Lighthouse, LCP, CLS, INP, axe y test asistivo WCAG 2.2 AA:** no medidos. No se afirma cumplimiento formal.
- **GitHub Pages real:** no publicado ni ejecutado en Actions. No había repositorio ASM identificable; falta crear/vincular uno y comprobar el workflow remoto.
- **Contacto y candidatura:** no hay endpoint validado. No se simula envío ni se publican contactos contradictorios.
- **SEO en producción:** se generan canonical, sitemap y schema al proporcionar `SITE_URL` o al construir en GitHub; aún hay que verificar la URL real publicada.
- **Derechos del logotipo:** se asume aportación legítima para elaboración; titularidad para publicación final pendiente de aprobación empresarial.

## Resultado general

Se entrega un sitio estático multipágina funcional con navegación y assets locales validados, sin backend ni enlaces ficticios. **No equivale aún a publicación confirmada ni a certificación visual/accesible.** La aceptación final debe incluir la revisión de pantallas en un navegador permitido y la confirmación de canales comerciales.
