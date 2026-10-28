# Agencia Inmobiliaria El Bosque

Rediseño local de la web existente. HTML5, CSS3 y JavaScript vanilla; funciona con Live Server, sin compilación. No se han realizado despliegues, commits ni pushes.

## Diseño y estructura

Identidad cálida en cal, terracota y marrón, con Georgia y Arial del sistema. Cabecera con símbolo de vivienda, introducción editorial sobre una panorámica real, consulta de disponibilidad, presentación de la agencia con fotografía en arco, sección del entorno del Majaceite, contacto y pie compacto. Se elimina el concepto anterior de plano técnico y sus capas fotográficas; las tres imágenes quedan visibles en secciones propias sin repetirse.

Se revisó el HTML de Realty Canoe únicamente como comparación: esta propuesta utiliza otra paleta, tipografías, portada con texto fuera de la fotografía, fotografía arquitectónica en arco y sección local propia. No se modificó ese proyecto.

No existe catálogo ni documentación suficiente para anunciar servicios. Se ofrece consulta telefónica de disponibilidad, sin fichas ficticias, buscadores decorativos ni servicios supuestos. No se añaden WhatsApp, correo, redes, formularios o testimonios sin datos confirmados.

## Datos conservados y pendientes

Se mantienen los datos existentes: Agencia inmobiliaria de El Bosque, 682 196 319 y A-372, 11670 El Bosque, Cádiz. El README anterior advertía que no se había encontrado una fuente inequívoca que vinculara el teléfono con el negocio; también se había localizado en un directorio de otro negocio. Se conserva por instrucción de mantener los datos existentes, pero NO se considera verificado externamente en este trabajo.

Antes de una publicación comercial, confirmar teléfono y nombre comercial, dirección exacta, servicios y ámbito de actuación, horarios y documentación legal. La dirección carece de número o punto kilométrico: Google Maps abre una búsqueda de zona y se indica al visitante que confirme el punto de encuentro. No se afirma cobertura de toda la Sierra de Cádiz.

Para incorporar un catálogo hacen falta fotografías autorizadas de cada inmueble, referencia, operación, localidad, precio, superficie, características y disponibilidad confirmados. Para sustituir la fotografía ambiental por material de agencia, hacen falta imágenes autorizadas de viviendas o interiores y de la oficina. Las imágenes actuales nunca se presentan como inmuebles anunciados ni oficina propia.

## Fotografías

Se inspeccionaron visualmente los tres archivos existentes. Se mantienen las atribuciones y licencias en el pie; fuentes originales en `img/sources.json`.

- `img/paisaje.jpg`: Ismael Olea, El Bosque 20210609 18, CC BY 4.0. Portada, 1600 × 556.
- `img/fuente.jpg`: El Pantera, fuente de San Antonio, CC BY-SA 4.0. Detalle arquitectónico previamente recortado, 800 × 1200.
- `img/ribera-web.jpg`: derivada de `img/ribera.jpg`, El Pantera, P1470060, CC BY-SA 4.0. Reescalado a 1400 × 1050, JPEG calidad 82. Se mantiene la licencia de la adaptación. Original conservado.

Fotografías sin repetición, dimensiones explícitas, recortes CSS sin deformación, carga prioritaria de portada y diferida del resto. No se necesitan fuentes ni librerías remotas en ejecución. Los archivos de fuentes anteriores se conservan aunque ya no se cargan.

## Funcionalidad y accesibilidad

Navegación móvil progresiva: visible sin JavaScript; con JavaScript, botón Menú, cierre al navegar y con Escape, devolviendo el foco. Llamadas mediante `tel:`, copia por Clipboard API con alternativa manual seleccionable y aviso accesible, búsqueda de zona en Google Maps, enlace a Cádiz Turismo y créditos desplegables. SVG monocromáticos, salto al contenido y foco visible. Movimiento reducido desactiva animaciones y scroll suave.

Se conserva `noindex, nofollow`, descripción, Open Graph válido y JSON-LD con los datos comerciales existentes. Se actualizan título y color de tema. `og:image` sigue siendo relativo; al publicar deberá ajustarse al dominio real sin inventarlo.

## Verificación ejecutada en este rediseño

Script `.qa/redesign-check.cjs`, Playwright con Chrome headless y axe-core ya disponibles en el proyecto. Resultados en `.qa/redesign-results.json` y capturas `.qa/redesign-{anchura}.png`.

- 375, 768, 1440 y 1920 px: sin desbordamiento horizontal, imágenes decodificadas, destinos internos válidos y noindex presente.
- Axe WCAG 2 A/AA y 2.1 A/AA: cero infracciones detectadas en las cuatro vistas iniciales.
- Menú móvil: apertura, Escape con retorno de foco y cierre tras navegar.
- Portapapeles real y alternativa ante denegación de Clipboard API.
- Destinos telefónicos y URL de búsqueda de Google Maps comprobados, sin realizar llamadas.
- Movimiento reducido y navegación sin JavaScript en móvil.
- Sin errores JavaScript ni respuestas HTTP locales de error durante estas pruebas.
- `node --check js/script.js` correcto.
- Capturas de 1440 y 375 px inspeccionadas visualmente.

No se ha probado Safari, un iPhone físico, lectores de pantalla ni la atención real por teléfono. La auditoría automatizada tiene ese alcance limitado.

## Archivos

Modificados: `index.html`, `css/style.css`, `js/script.js`, `favicon.svg`, `README.md`. Añadido: `img/ribera-web.jpg`. Scripts y resultados de revisión en `.qa/`, ya ignorada por Git. Todo el trabajo se limita a esta carpeta de proyecto.
