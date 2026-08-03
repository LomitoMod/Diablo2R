---
name: ux-search
description: >-
  Skill de UX enfocada en que las páginas y el usuario se entiendan: arquitectura
  de información, navegación, findability y búsqueda. Usa esta skill cuando el
  usuario pida mejorar la información de un sitio o página, que la información sea
  fácil de encontrar, que las búsquedas sean precisas y acordes a lo que busca,
  o cuando mencione términos como "buscador", "búsqueda", "encontrar",
  "navegación", "arquitectura de información", "IA", "resultados de búsqueda",
  "sin resultados", "etiquetas", "filtros", "sinónimos", "títulos", "SEO" o
  "contenido". También úsala al crear nuevas páginas para que nazcan bien
  estructuradas y encontrables.
---

# Search UX y Arquitectura de Información

## Misión

Hacer que **la página y el usuario se entiendan perfectamente**. Concretamente:

- El usuario **encuentra la información correcta rápido** (pocos pasos, pocos clics).
- Los resultados de búsqueda se sienten **precisos y acordes a lo que busca**.
- La distancia entre **las palabras que usa el usuario** y **las palabras que usa la página** es mínima.

Trabaja en tres niveles, en este orden:

1. **Intención de búsqueda** (qué quiere realmente el usuario)
2. **Contenido e IA** (qué hay publicado y cómo está organizado)
3. **Comportamiento de búsqueda** (cómo se expone: sinónimos, etiquetas, filtros, mensajes)

---

## 0. Empieza con un encuadre rápido

Antes de tocar cualquier página, confirma con el usuario (puedes usar la herramienta de preguntas):

- ¿Dónde está el contenido? (páginas del sitio, documentación, carpeta `web/`, catálogo, archivos MD…)
- ¿Quién es el usuario? (principiante o experto, idioma, móvil o escritorio)
- ¿Existe buscador hoy? ¿Qué muestra? (títulos de página, catálogo, FAQ…)
- ¿Qué términos usa el público frente a los términos que usa la página?
- Si no hay buscador, propón crearlo.

---

## 1. Entender al usuario (alinear vocabulario)

Páginas y usuarios se entienden cuando **hablan el mismo vocabulario**.

### Desajustes típicos que rompen la búsqueda

| El usuario dice | La página dice | Problema |
|-----------------|----------------|----------|
| "el buscador" | "Encontrar" (etiqueta poco clara) | El usuario no reconoce dónde buscar |
| "runas de 2 huecos" | "Palabras Rúnicas" | La página usa términos distintos a los del usuario |
| "buscar por tema" | Solo una caja de texto libre | El usuario no sabe qué escribir |
| "buscar rápido" | Resultados que exigen leer títulos largos | La búsqueda no coincide con la forma de pensar del usuario |

### Entrega un glosario de alineación

Para cada área temática define:

```yaml
intención de búsqueda: frase nominal que usaría el usuario
sinónimos: lista de variantes que usa el público (ej. "garra", "katar", "claw")
etiqueta visible: el término que debe aparecer en la UI (menú, botones, títulos)
ubicación esperada: dónde buscaría el usuario esa información (header, footer, categoría)
```

**Regla de oro**: el título de una página debe poder **encontrarse escribiendo cualquiera de sus sinónimos** en el buscador. Si "katar" no devuelve la página de garras, hay un desajuste de vocabulario que hay que corregir.

---

## 2. Arquitectura de información (IA)

Estructura el contenido para que sea predecible y se recorra en pocos pasos.

### Reglas de estructura

- **Regla de los 3 clics**: cualquier información debe estar a 3 clics o menos de la portada.
- **Menú horizontal**: 5–7 opciones máximo; si hay más, agrupar en categorías.
- **Navegación de apoyo**: migas de pan (breadcrumbs), enlaces relacionados y "seguir leyendo".
- **Jerarquía visual**: título principal (H1) claro, subtítulos (H2/H3) escaneables, negritas solo en lo esencial.
- **Cada página responde a 3 preguntas** antes de 5 segundos de lectura:
  1. ¿Qué es esto? → Título claro
  2. ¿Para qué sirve? → Subtítulo o primer párrafo
  3. ¿Qué hago ahora? → Enlace/acción destacada

### Auditoría rápida de una página

1. ¿El título coincide con lo que el usuario escribiría para encontrarla?
2. ¿El primer párrafo resume el contenido en una frase?
3. ¿Hay un único objetivo claro (botón/enlace principal)?
4. ¿Se puede llegar a esta página desde el menú y desde enlaces relacionados?
5. ¿La URL es descriptiva? (ej. `/bases/grimoires` mejor que `/pagina3`)

---

## 3. Comportamiento de búsqueda (precisión)

Ajusta el buscador para que devuelva **lo que el usuario quiere**, no solo lo que coincide textualmente.

### Imprescindibles

- **Sinónimos**: el buscador debe mapear variantes ("garra" ↔ "katar", "runeword" ↔ "palabra rúnica", "MF" ↔ "magic find").
- **Tolerancia a errores tipográficos**: "runas" vs "runaa", acentos y mayúsculas.
- **Búsqueda por partes**: "alabarda 4 huecos" debe encontrar "Alabarda" con filtro de huecos.
- **Autocompletado/sugerencias**: mientras escribe, ofrecer términos reales del contenido.
- **Facetas/filtros**: por categoría, tipo, dificultad, nivel, etc.
- **Ranking por relevancia**: título > resumen > cuerpo. Prioriza coincidencias exactas en título.

### Manejo de "sin resultados" (no-results)

Nunca dejar al usuario sin salida. En una página de cero resultados muestra:

1. **Sugerencia de corrección**: "¿Quisiste decir 'katar'?" (detección de typo).
2. **Términos alternativos**: sinónimos del glosario ("Quizás buscabas: garras").
3. **Resultados parciales**: coincidencias en cuerpo con la palabra resaltada.
4. **Acciones útiles**: enlace a la guía general, contacto o foro.
5. **Refinar la consulta**: chips con filtros sugeridos ("Filtrar por: armas, 3 huecos").

### Métricas para medir si la búsqueda es "precisa"

| Métrica | Qué mide | Objetivo |
|---------|----------|----------|
| Tasa de cero resultados | % de búsquedas sin respuesta | < 10% |
| Tasa de clic en resultados | % de búsquedas que terminan en clic | > 60% |
| Tiempo hasta encontrar | pasos/clics hasta la página correcta | ≤ 3 |
| Clic en "sinónimo sugerido" | si el usuario usa la corrección | > 0 (indica desajuste de vocabulario) |
| Salto de página (bounce) | % que vuelve al buscador tras ver un resultado | < 30% |

---

## 4. Entrega final (cómo cerrar el trabajo)

Al terminar, entrega siempre:

1. **Diagnóstico**: qué se entendía mal hoy (lista de desajustes encontrados).
2. **Cambios aplicados**: qué archivos/páginas tocaste y qué cambiaste.
3. **Glosario de vocabulario** (términos del usuario ↔ términos de la página).
4. **Prueba de humo**: ejemplos de búsquedas de prueba y resultado esperado (ej. "katar" → página de garras; "palabra rúnica 2 huecos" → página de runewords).
5. **Siguientes pasos opcionales**: métricas a vigilar, contenidos a crear, buscador a implementar.

---

## Checklist rápido (úsalo en cada intervención)

- [ ] ¿Pregunté/confirmé quién es el usuario y dónde está el contenido?
- [ ] ¿Existe un glosario de sinónimos por área temática?
- [ ] ¿Cada página tiene título claro + resumen en 1 frase + una acción principal?
- [ ] ¿Todo está a 3 clics o menos?
- [ ] ¿El buscador acepta sinónimos, typos y búsquedas parciales?
- [ ] ¿La página de cero resultados ofrece corrección, alternativas y salida?
- [ ] ¿Dejé ejemplos de búsqueda de prueba y sus resultados esperados?
- [ ] ¿Dejé métricas definidas para comprobar que la búsqueda es precisa?
