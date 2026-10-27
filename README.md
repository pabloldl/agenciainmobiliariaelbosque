# Agencia inmobiliaria de El Bosque — El plano vivo

Rediseño integral local. HTML5, CSS3 y JavaScript vanilla, sin compilación ni dependencias de ejecución. Abrir `index.html` con Live Server. No se ha publicado ni modificado ningún otro proyecto.

## Concepto y nueva estructura

La identidad responde a un plano arquitectónico: barra de herramientas con recorrido activo, portada en L con cotas gráficas sin medidas inventadas, exploración por capas del territorio, trazado A–B–C para preparar una consulta, plano de encuentro con contacto y cajetín de cierre.

Se sustituyeron cabecera, hero, orden y composición de contenidos, tipografías, colores, controles, textos, animaciones, contacto, favicon y footer. No se mantiene la portada editorial ni sus secciones de presentación. El catálogo de servicios y los inmuebles se omiten por falta de información verificada.

Paleta: #F0F0EA, #202522, #557B68, #C4CBC3 y #D67B48. El verde de las anotaciones pequeñas se oscurece a #41614F para el contraste. El naranja identifica el acceso de contacto y los nodos de conexión.

Fuentes locales: Space Grotesk y IBM Plex Mono. Descargadas de las carpetas oficiales `ofl/spacegrotesk` y `ofl/ibmplexmono` de https://github.com/google/fonts . Licencias SIL OFL en `fonts/OFL-space.txt` y `fonts/OFL-plex.txt`. Se retiraron las fuentes anteriores.

## Información comercial

Datos conservados por instrucción del cliente:

- Agencia inmobiliaria de El Bosque.
- A-372, 11670 El Bosque, Cádiz.
- 682 196 319; enlace `tel:+34682196319`.

La investigación inicial no encontró una fuente inequívoca que vincule estos datos con la agencia. El teléfono también aparecía en un directorio de otro negocio: https://www.extend-system.com/es/distribuidores-vigas-telescopicas-extend-system/ . No se deduce que sea incorrecto; se mantiene el dato facilitado. No se ha añadido una marca comercial distinta ni se ha hecho una nueva confirmación externa del teléfono en este rediseño.

No se inventan inmuebles, precios, disponibilidad, servicios, equipo, reseñas, años de actividad, comisiones, horarios, correo, redes o WhatsApp. La guía A–B–C ayuda al visitante a formular su consulta; no afirma cómo trabaja la agencia ni qué servicios presta.

Contexto local procedente de la fuente oficial ya contrastada: https://www.cadizturismo.com/es/municipios/el-bosque . Se limita a El Bosque, provincia de Cádiz y entorno del Majaceite. No se indican distancias, áreas de actuación o datos de mercado.

La dirección A-372 no permite ubicar una oficina concreta. Google Maps abre una búsqueda de zona, sin coordenadas ni marcador inventados. El plano, las curvas y el norte son un lenguaje gráfico conceptual, expresamente identificado sin escala y no topográfico; no son una cartografía real del establecimiento.

## Fotografías y licencias

| Archivo | Procedencia / autor | Licencia y adaptación |
| --- | --- | --- |
| `img/paisaje.jpg` | [El Bosque 20210609 18](https://commons.wikimedia.org/wiki/File:El_Bosque_20210609_18.jpg), Ismael Olea | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). 1600 × 556; reescalado y recompresión JPEG; recorte visual CSS. |
| `img/fuente.jpg` | [Fuente de San Antonio, IMG 20190622 193026 727](https://commons.wikimedia.org/wiki/File:Fuente_-_El_Bosque_-_IMG_20190622_193026_727.jpg), El Pantera | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Recorte superior derecho de 1000 × 1500 a partir de x=350,y=0, reescalado a 800 × 1200 y exportación JPEG. La adaptación mantiene CC BY-SA 4.0. |
| `img/ribera.jpg` | [P1470060](https://commons.wikimedia.org/wiki/File:El_Bosque_(provincia_de_C%C3%A1diz,_Espa%C3%B1a)_-_P1470060.jpg), El Pantera | CC BY-SA 4.0. 1920 × 1440; recompresión JPEG y recorte visual CSS. La adaptación mantiene CC BY-SA 4.0. |

Las imágenes son del territorio, no inmuebles de la agencia. Atribución y enlaces de licencia en el footer; metadatos de Wikimedia en `img/sources.json`. Se descargaron con comprobación HTTP, se abrieron para inspección visual, se decodificaron con System.Drawing y se verificaron en Chrome. Ningún archivo HTML se utiliza como imagen. Las nuevas versiones se reexportaron con codificador JPEG, no cambiando extensiones. La panorámica se guardó con calidad 83. Se conservó la ribera válida de la primera versión.

La revisión de fuentes documentadas detectó que P1460803 se utilizaba en Mafloras y P1460804 en La Casa del Muro; se retiraron del proyecto. También se descartaron P1470062 y P1470071 al aparecer en La Casa Ronda y Mafloras. Los dos nuevos originales no aparecieron en la búsqueda de identificadores de fuentes de los otros proyectos. Esto es una comprobación documental, no una garantía sobre archivos ajenos sin procedencia registrada.

## Interacciones

- Índice móvil desplegable, sin hamburguesa; cierre tras seleccionar una sección y con Escape. Foco devuelto al botón al usar Escape.
- Navegación técnica con indicador de sección activa según desplazamiento; no intercepta ni secuestra el scroll.
- Botones de capas Paisaje / Arquitectura / Ribera: muestran la fotografía y leyenda correspondiente, con `aria-pressed` y `aria-controls`. Sin JavaScript se muestran las tres imágenes y no aparecen controles inertes.
- Teléfono y llamada con enlaces reales `tel:`.
- Copia con Clipboard API; alternativa seleccionable si no está disponible o se deniega el permiso, con anuncio `aria-live`.
- Enlace externo a búsqueda de Google Maps con `noopener noreferrer`.
- Curvas que se trazan al entrar en pantalla, línea de acceso al teléfono y máscara escalonada al cambiar de capa. Contenido legible sin animaciones; `prefers-reduced-motion` desactiva movimiento.

## Originalidad

Antes de programar se revisaron el HTML y JavaScript de la versión anterior, la captura disponible de Realty Canoe y el código de Lavandería Salvi, Piscifactoría El Bosque y Las Buganvillas. Las comparaciones se limitan a esos recursos accesibles. No se afirma una comparación visual de todo el directorio.

La nueva portada no es una composición editorial de título junto a una imagen vertical o franja panorámica de ancho completo: es un plano en L, con identidad en el área superior, fotografía geométrica inferior y referencia de dirección. La secuencia no mantiene agencia / entorno / consulta / ubicación / contacto: se reduce a punto de partida / capas / trazado de consulta / encuentro, fusionando contacto y ubicación.

La pareja Space Grotesk / IBM Plex Mono es distinta de la anterior Cormorant Garamond / Outfit y de Space Grotesk / IBM Plex Sans de Peluquería Mari Carmen. Se han conservado únicamente los recursos locales válidos y las funciones necesarias, con implementaciones nuevas de recorrido y capas.

## SEO y accesibilidad

Título, descripción, Open Graph, idioma español y JSON-LD RealEstateAgent limitado a nombre, teléfono y dirección facilitados. Enlace para saltar al contenido, jerarquía de encabezados, foco visible, alternativas de imagen y controles HTML nativos. No se introduce un dominio ficticio: `og:image` es relativo; al publicar en un dominio real deberán configurarse URL absoluta, `og:url` y canonical.

Los textos verdes pequeños usan un tono más oscuro para alcanzar contraste suficiente. No hay dependencias remotas de tipografías, cookies, analítica o formularios.

## Verificación ejecutada

Chrome headless con Playwright, en instalación de QA aislada dentro de `.qa/`, ignorada en Git y ajena a los archivos necesarios para Live Server:

- 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, imágenes visibles decodificadas, destinos internos existentes y sin errores JavaScript ni HTTP locales.
- Menú móvil: apertura, Escape y cierre al navegar.
- Copia real al portapapeles y alternativa ante denegación.
- Tres botones de capas: cambio efectivo y decodificación de cada imagen.
- Indicador de sección activa actualizado al desplazarse al contacto; destinos telefónicos y búsqueda de Google Maps comprobados en el DOM.
- JavaScript desactivado a 375 px: navegación accesible, fotografías presentes y sin desbordamiento; herramientas interactivas ocultas.
- Preferencia de movimiento reducido: scroll automático sin suavizado.
- Axe-core: reglas WCAG 2 A/AA y WCAG 2.1 A/AA, sin infracciones detectadas en las cuatro vistas iniciales.
- Axe-core también sin infracciones en la capa Arquitectura abierta y con la alternativa de copia visible en móvil.
- Capturas completas revisadas visualmente en escritorio, tablet y móvil durante el rediseño.
- JavaScript comprobado con `node --check`.

El test no realiza llamadas ni verifica físicamente el establecimiento. La auditoría automatizada no sustituye pruebas con lectores de pantalla o dispositivos físicos. Resultados y capturas en `.qa/`.
