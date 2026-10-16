# Pinturas PV – Pintu Valle

Sitio estático multipágina (HTML + CSS + JS, sin dependencias ni compilación) reconstruido a partir del export de Canva.
Para verlo: abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático.

## Páginas

| Archivo | Contenido |
|---|---|
| `index.html` | Nosotros: hero, lo más buscado, acabados, carta de colores, beneficios, contacto |
| `vinilos.html` | Vinilo Tipo 1, Tipo 2, Protecmax y Premium, con presentaciones (cuñete, balde, galón, cuarto) |
| `emfabcolors.html` | Pintura ecológica EMFABcolors |
| `carta-de-colores.html` | 116 muestras de color con nombre |
| `estuco-mastick.html` | Estuco plástico, estuco relleno y mastick |
| `grafiado.html` | Grafiado y base de Graniplast |

## Estructura

```
css/base.css          Fuentes, tokens de diseño (colores, tipografía, espacios), reset, utilidades
css/components.css    Header/menú, botones, tarjeta de producto, logo
css/sections.css      Secciones de la página de inicio
css/pages.css         Páginas interiores
css/animations.css    Animaciones de entrada
js/main.js            Menú móvil + animaciones al hacer scroll
assets/img/           Fotos en WebP optimizado + logos SVG
assets/fonts/         Tipografías extraídas del export
```

## Animaciones

- **Hero:** el título, el texto, el botón, la foto y el logo entran con fundido/ascenso escalonado al cargar.
- **Resto de secciones:** fundido + ascenso al entrar en pantalla; las tarjetas y listas aparecen en cascada.
- Para animar otro elemento basta con añadirle `data-reveal` (o `data-reveal="left|right|fade"`); en un contenedor, `data-reveal-stagger` anima a sus hijos en cascada.
- Se desactivan solas con `prefers-reduced-motion`, y sin JavaScript el contenido siempre queda visible.
- Son una reproducción del efecto del diseño original (Canva no exporta los parámetros exactos), no una copia exacta de tiempos.

## Diseño central

Todo se controla desde `:root` en `css/base.css`:

| Token | Valor |
|---|---|
| `--c-yellow` | `#f5df4e` |
| `--c-blue` | `#054c9b` |
| `--c-blue-strong` | `#0000b5` |
| `--c-surface` | `#eceff2` |

## Tipografías (extraídas del export de Canva)

| Uso | Fuente |
|---|---|
| Títulos | The Seasons (`PV Display`) |
| Cuerpo y menú | Codec Pro (`PV Sans`) |
| EMFABcolors | Open Sans (`PV Open`) |

Son fuentes de la biblioteca de Canva: revisa su licencia antes de publicar fuera de Canva.

## Pendientes

- Añadir `og:image` y `og:url` en cada página cuando se conozca el dominio final.
- La cabecera está repetida en cada HTML (sin paso de compilación); si cambias el menú, cámbialo en los 6 archivos.
