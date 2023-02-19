const datos = require("../tareas.json")
const fs = require("fs")

/**
 * Devuelve todas las tareas
 */
const getAllTareas = () => {
  return datos.tareas
}

/**
 * Devuelve una tarea según su nombre
 * @param {*} nombre
 * @returns
 */
const getOneTarea = (nombre) => {
  const oneTarea = datos.tareas[nombre]
  return oneTarea
}

/**
 * Inserta la tarea en el json
 * @param {*} tarea
 * @returns
 */
const insertTarea = (tarea) => {
  // Tarea añadida a datos
  const nombre = tarea.nombre
  datos.tareas[nombre] = tarea

  // Datos escritos
  fs.writeFileSync(
    "./src/database/tareas.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  )

  return getOneTarea(nombre)
}

/**
 * Borra una tarea en el json
 * @param {*} nombre
 * @returns {boolean}
 */
const deleteTarea = (nombre) => {
  //Comprobación de preexistencia
  const oneTarea = getOneTarea(nombre)
  if (!oneTarea) {
    return false
  } else {
    // Borrar el producto
    delete datos.tareas[nombre]

    // Escribir el json
    fs.writeFileSync(
      "./src/database/tareas.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    )

    return true
  }
}

/**
 *
 * @param {*} tarea
 * @param {*} nuevosDatos
 * @returns
 */
const updateTarea = (tarea, nuevosDatos) => {
  // Cambio de los valores en los campos
  datos.tareas[tarea].nombre = nuevosDatos.nombre
  datos.tareas[tarea].done = nuevosDatos.done

  // Escribir el json
  fs.writeFileSync(
    "./src/database/tareas.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  )

  return nuevosDatos
}

module.exports = {
  getAllTareas,
  getOneTarea,
  insertTarea,
  deleteTarea,
  updateTarea,
}
