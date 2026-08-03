// Importa en bruto (raw) los documentos MD de la carpeta informacion.
import personajes from "../../informacion/01-Personajes.md?raw"
import warlock from "../../informacion/02-Warlock.md?raw"
import runas from "../../informacion/03-Runas.md?raw"
import palabrasRunicas from "../../informacion/04-PalabrasRunicas.md?raw"
import bases from "../../informacion/05-Bases.md?raw"
import itemsUnicos from "../../informacion/06-ItemsUnicos.md?raw"
import conjuntos from "../../informacion/07-Conjuntos.md?raw"
import mercenarios from "../../informacion/08-Mercenarios.md?raw"
import cubo from "../../informacion/09-CuboHoradrico.md?raw"
import gemas from "../../informacion/10-GemasJoyasYAmuletos.md?raw"
import actos from "../../informacion/11-ActosDificultades.md?raw"
import endgame from "../../informacion/12-Endgame.md?raw"

export const content = {
  personajes,
  warlock,
  runas,
  "palabras-runicas": palabrasRunicas,
  bases,
  "items-unicos": itemsUnicos,
  conjuntos,
  mercenarios,
  "cubo-horadrico": cubo,
  "gemas-joyas": gemas,
  actos,
  endgame,
}
