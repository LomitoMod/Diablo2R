# Warlock — Guía de la nueva clase (expansión Reign of the Warlock)

> Clase jugable añadida en el parche 3.0 (Reign of the Warlock, 11 de febrero de 2026). Primera clase nueva de Diablo II en 25 años. Estado según Patch 3.2 (v3.2.92777, Temporada 14).

---

## Introducción

El **Warlock** (Brujo) es un oscuro erudito que estudió el arte prohibido de vincular demonios. Es la **octava clase** de Diablo II y la primera clase nueva desde Lord of Destruction (2001). Es un híbrido entre Hechicera y Nigromante: destruye enemigos con magia de fuego/caos y daño mágico, invoca y **vincula demonios** para que luchen a su lado.

- **Recurso**: Maná
- **Atributo primario**: Vitalidad
- **Estadísticas iniciales**: FUE 15 · DES 20 · VIT 25 · ENE 20
- **Firma de clase**: Grimoires (tomos de conjuro en la mano izquierda) + *Maestría de Levitación*
- **Habilidad insignia**: Echoing Strike (S-tier tras el parche 3.2)
- **Posición en el meta (Temporada 14)**: Top Tier S

## Mecánica exclusiva: Grimoires y Levitación

El Warlock usa **Grimoires**, un nuevo tipo de objeto (tomos) que ocupan la mano izquierda a modo de escudo. Gracias a la pasiva **Maestría de Levitación**, el Warlock puede equipar **armas a dos manos a la vez que un Grimoire**. Los Grimoires pueden llevar modificadores de bastón de Warlock e incluso daño elemental inherente (fuego o mágico).

Variantes (Normal → Excepcional → Élite):

| Normal | Excepcional | Élite |
|--------|-------------|-------|
| Old Book | Burnt Text | Forgotten Volume |
| Tome | Dark Tome | Occult Tome |
| Codex | Dark Codex | Occult Codex |
| Compendium | Possessed Compendium | Blasphemous Compendium |
| Grimoire | Possessed Grimoire | Blasphemous Grimoire |

**Ejemplo (Tome normal)**: Defensa 4–8 · Nivel requerido 6 · FUE 14 · Bloqueo 30% (Warlock) · 2 huecos · Durabilidad 20.

**Ejemplo (Occult Tome élite)**: Defensa 96–141 · Nivel requerido 49 · FUE 82 · Bloqueo 30% · 2 huecos.

Los Grimoires únicos se llaman *Ars Al'Diabolos*, *Ars Tor'Baalos*, *Ars Dul'Mephistos*, *Measured Wrath*, etc. (ver `05-ItemsUnicos.md`).

---

## Árboles de habilidades

El Warlock tiene **tres árboles** de 10 habilidades cada uno (30 habilidades en total).

### 1. Árbol Demonio (summoning / vinculación)

Enfocado en invocar, vincular y consumir demonios.

| Habilidad | Nivel | Descripción |
|-----------|-------|-------------|
| **Demonic Mastery** (Pasiva) | 1 | Mejora tus demonios invocados/vinculados; permite subir el máximo de demonios con inversión de puntos |
| **Summon Goatman** | 1 | Invoca un Cabromonte (cabra demoníaca) melee |
| **Summon Tainted** | 6 | Invoca un demonio contaminado (rango) |
| **Summon Defiler** | 12 | Invoca un Profanador |
| **Blood Oath** (Pasiva) | 6 | Transfiere parte del daño recibido a tu demonio: curva de rendimientos decrecientes, ~3% (nivel 1) → 25% (nivel 20) |
| **Blood Boil** | 12 | Potencia a los demonios Tainted: +20% de daño (antes 30%), radio que escala con nivel (7 yardas a nivel 10) |
| **Death Mark** | 18 | Marca a un enemigo; tus demonios lo atacan con prioridad (sinergia reducida a 0,5% por punto en 3.2) |
| **Consume** | 24 | Sacrifica un demonio invocado para obtener vida, daño físico/fuego/mágico, vida máxima y FRW temporal |
| **Engorge** | 30 | Mejora adicional para demonios vinculados |
| **Bind Demon** | 30 | **Habilidad firma**: vincula un demonio como mascota permanente (detalles abajo) |

### 2. Árbol Éldritch (armas encantadas / daño mágico)

Enfocado en daño **Mágico** puro (sin contador elemental, atraviesa la mayoría de inmunidades).

| Habilidad | Nivel | Descripción |
|-----------|-------|-------------|
| **Levitation Mastery** (Pasiva) | 1 | Permite usar armas a dos manos + Grimoire; base de todas las builds |
| **Eldritch Blast** | 1 | Ráfaga de energía mágica (robo de vida/maná fijado al 5% en 3.2); refresca Hex: Bane |
| **Hex: Bane** | 1 | Hex de arma: añade daño mágico y mejora el ataque |
| **Hex: Purge** | 12 | Hex que detona mini-explosiones al golpear (base del build Echoing Strike) |
| **Hex: Siphon** | 18 | Hex que drena vida/maná |
| **Echoing Strike** | 12 | **Habilidad firma**: lanza réplicas espectrales de tu arma que atraviesan enemigos. Tras 3.2: daño aditivo, ratio de daño de arma 90%, ya no acierta siempre, no pierde durabilidad en objetos etéreos. Sigue siendo S-tier |
| **Mirrored Blades** | 12 | Sinergia de Echoing Strike; cada punto añade daño y proyectiles eco extra |
| **Blade Warp** | 18 | Lanza un arma astral y te teletransportas al punto de impacto (movilidad); sinergia de Echoing Strike |
| **Psychic Ward** | 24 | Escudo psíquico de emergencia (mitigación) |
| **Sigil: Lethargy** | 6 | Sello de lentitud (enemigos más lentos) |

### 3. Árbol Caos (fuego y abismo)

Enfocado en daño de **Fuego** y **Abismo** (magia oscura). El árbol más accesible para subir de nivel.

| Habilidad | Nivel | Descripción |
|-----------|-------|-------------|
| **Miasma Bolt** | 1 | Dispara un proyectil de oscuridad que libera una nube de entropía (daño mágico de impacto + daño en el tiempo). 2 de maná |
| **Miasma Chain** | 12 | Cadenas de sombra que emiten miasma entre tú y el objetivo; daño de nube reducido 50% en 3.2; límite de 5 cadenas activas (hasta 10 a niveles altos) |
| **Sigil: Rancor** | 12 | Sello de rencor (daño adicional) |
| **Sigil: Death** | 18 | Sello de muerte |
| **Ring of Fire** | 18 | Anillo de fuego (daño ajustado a niveles de Frost Nova en 3.2) |
| **Flame Wave** | 24 | Onda de fuego; aplica 15% de reducción de daño recibido en 3.2 |
| **Apocalypse** | 30 | Habilidad definitiva de fuego masivo |
| **Abyss** | 30 | Habilidad definitiva de abismo (radio/duración escalan con +habilidades en 3.2) |
| **Eldritch Blast** (compartida) | 1 | Ver árbol Éldritch |

---

## Bind Demon — el sistema firma

`Bind Demon` (nivel 30, 25 de maná) permite **capturar demonios** como mascotas permanentes que conservan afijos y auras originales (incluidos Conviction, Fanaticism o Amplify Damage según el objetivo capturado). No puede vincular jefes de acto ni Eviles Primigenios (ni Achmel el Maldito tras el fix del 3.2).

### Reglas del Patch 3.2 (Temporada 14)

- **Gates de puntos base**: se requieren **10 puntos base** para vincular campeones, **15** para únicos y **20** para superúnicos.
- **Probabilidad de vinculación**: 10%–20% según el tipo de demonio; la comprobación se realiza en el frame 24 (fix de bug).
- **Afijo Maldito**: la probabilidad de lanzar Amplify Damage al ser golpeado se redujo del **75% al 5%** (el mayor nerf del parche).
- **Sinergia Death Mark**: reducida del 1% al 0,5% por punto.
- **Pool de auras de demonios vinculados**:
  - **Retiradas**: Conviction, Holy Fire, Holy Lightning, Blessed Aim, Might.
  - **Añadidas**: Fanaticism, Vigor, Thorns, Concentration.
  - **Mantenida**: Holy Freeze (congelación) puede seguir apareciendo.
- **Consume**: las bonificaciones varían según la dificultad en la que fue vinculado el demonio.
- **Gear/AS**: el bono de velocidad de ataque de *Summon Goatman* ahora depende de la habilidad (máx. 50%) y no del equipo.

---

## Builds principales (Temporada 14)

### 1. Echoing Strike Warlock (S-Tier — la mejor build)
Melee híbrido de daño Físico + Mágico con explosiones AoE de Hex: Purge. Sin inmunidades enemigas que lo frenen.

**Distribución de puntos:**
- 1 punto: Echoing Strike, Sigil: Lethargy, Summon Defiler
- Max: Hex: Purge → Mirrored Blades → Hex: Bane → Demonic Mastery (hasta 10) → Eldritch Blast → Blood Oath
- Resto en el árbol Demonio (utilidad): Consume, Death Mark, Summon Goatman

**Rotación**: Hex: Bane siempre activo → Blade Warp al centro del pack → Echoing Strike. Psychic Ward como botón de emergencia. Eldritch Blast refresca Hex: Bane.

**Equipo**: armas rápidas con IAS, +habilidades, -resistencia mágica enemiga. *Entropy Locket* (amuleto nivel 54) como alternativa a Highlord's si usas Miasma Chain (+4% Miasma Chain al golpear, FCR, daño mágico).

### 2. Fire / Abyss Warlock (Caos)
Miasma Bolt/Chain para subir de nivel, luego Flame Wave + Ring of Fire + Apocalypse. La forma más fácil de subir de nivel y de farmear.

### 3. Summoner Warlock (Demonio)
Bind Demon + ejército de Goatman + Sigil: Lethargy. Estilo manos libres: tu demonio vinculado (idealmente con aura) + invocaciones hacen el trabajo.

### 4. Mirrored Blades Warlock
Variante enfocada en proyectiles eco con más daño de área.

---

## Guía de subida de nivel (leveling)

1. **Niveles 1–11**: Miasma Bolt + Sigil: Lethargy. 1 punto en Levitation Mastery cuanto antes. Usa Cleave/golpes básicos con Hex: Bane.
2. **Niveles 6–12**: añade Miasma Chain para AoE.
3. **Nivel 12**: Echoing Strike desbloqueado — empieza a invertir.
4. **Niveles 12–17**: alterna Echoing Strike y Mirrored Blades.
5. **Nivel 18**: Blade Warp (movilidad + sinergia).
6. **Niveles 18–29**: alterna los tres núcleos.
7. **Nivel 30+**: termina los tres núcleos + Hex: Bane; invierte el resto en Demonio.
8. **Respec en Acto 5 Normal** hacia la build final (Echoing Strike).

**Equipo early**: espada Spirit + Grimoire Rhyme hasta Void/Ritual. Mercenario con Insight (alabarda) para el maná.

---

## Cambios del Warlock en el Patch 3.2 (resumen)

| Sistema | Antes (3.0) | Ahora (3.2) |
|---------|-------------|-------------|
| Echoing Strike daño | Multiplicativo | Aditivo; daño de arma 75% → 90% |
| Echoing Strike acierto | Siempre acierta | Tira acierto normal |
| Echoing Strike durabilidad | Gastaba durabilidad (incluso etéreo) | No gasta durabilidad en etéreos |
| Bind Demon campeones/únicos/superúnicos | Sin gates | 10 / 15 / 20 puntos base |
| Afijo Maldito (Amp) | 75% | 5% |
| Auras vinculables | Incluía Conviction, Holy Fire, Holy Lightning, Blessed Aim, Might | Retiradas; añadidas Fanaticism, Vigor, Thorns, Concentration |
| Death Mark sinergia | 1%/punto | 0,5%/punto |
| Miasma nube | Daño completo | -50% de daño de nube; fix de doble tick |
| Miasma Chain | Sin límite | Máx. 5 activas (10 a niveles altos); -50% daño de nube |
| Blood Oath | Valor plano | Curva 3% (lvl 1) → 25% (lvl 20) |
| Blood Boil | +30% Tainted, radio fijo | +20% Tainted, radio escala con nivel |
| Ring of Fire | Alto | Niveles de Frost Nova |
| Flame Wave | Solo daño | +15% reducción de daño recibido |
