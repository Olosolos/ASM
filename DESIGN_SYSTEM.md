# Dirección artística de ASM Inc.

**Concepto:** Engineered Confidence. Una identidad corporativa que comunica control, orden y sistemas integrados sin recurrir a neones constantes ni interfaces falsas de producto.

## Paleta

| Token | Valor | Uso |
|---|---|---|
| `--bg-deep` | `#080F19` | Fondo principal, profundidad |
| `--bg-navy` | `#0D1827` | Capas intermedias |
| `--surface` | `#152333` | Paneles y tarjetas |
| `--text-main` | `#F4F8FC` | Texto principal |
| `--text-muted` | `#AEBDCD` | Texto secundario contrastado |
| `--accent` | `#80DFF3` | Foco, detalle y orientación |
| `--metal` | `#CDD5DE` | Referencia cromada de marca |
| `--light` | `#EDF2F5` | Secciones editoriales claras |
| `--ink` | `#172437` | Texto sobre fondo claro |

## Composición

- Contenedor máximo de 1376 px, con márgenes adaptativos.
- Home: portada de dos niveles (titular editorial + imagen de infraestructura original), franja de capacidades, problemas, ecosistema, misión, marco de consulta y cierre.
- Páginas interiores: hero de dos columnas, breadcrumbs, grandes módulos visuales y secciones de consulta específicas.
- Alternancia de fondos oscuros y claros para lectura y cadencia.
- 3 a 1 grandes bloques visuales frente a pequeños elementos decorativos.
- Titulares con `clamp` y espaciado negativo controlado; fuente del sistema, sin CDN.

## Motion

- Aparición selectiva en scroll con IntersectionObserver y transform/opacity.
- Si `prefers-reduced-motion: reduce`, no se oculta ni anima contenido.
- En ausencia de JavaScript, el contenido se muestra sin depender de revelados; el menú móvil tiene navegación alternativa con `noscript`.
- Hover en tarjetas con transform y borde, sin efectos GPU continuos.

## Breakpoints y accesibilidad

- 1190 px: refinamiento de cabecera y columnas.
- 990 px: paso a menú móvil.
- 710 px: composiciones de una columna.
- 390 px: ajuste de tipografías y botones a ancho compacto.
- Estados de foco visibles, áreas táctiles generosas, enlaces semánticos, alt descriptivos y texto de contraste alto.
- La conformidad WCAG AA requiere auditoría real con navegador y herramientas de asistencia antes de proclamarse.

## Recursos originales y copyright

Se conserva el contenido literal del logotipo cromado en sus proporciones; el WebP optimizado procede de un recorte y redimensionado sin modificación de los trazos. Los recortes fotográficos proceden de la imagen de marca facilitada. El resto del arte es CSS/SVG original. No se atribuyen a ASM clientes, licencias específicas, equipo humano ni métricas no acreditadas.
