const tareasModelo = require("../database/models/tareasModelo")
const { v4: uuid } = require("uuid")

/**
 *
 * @returns
 */
const getAllTareas = () => {
  const allTareas = tareasModelo.getAllTareas()
  return allTareas
}

/**
 *
 * @param {*} tarea
 * @returns
 */
const createTarea = (tarea) => {
  // Añadido id, y fechas de creacion y modificacion a las tareas
  const tareaNueva = {
    ...tarea,
    id: uuid(),
    fechaCreacion: new Date().toLocaleDateString(),
    fechaModificacion: new Date().toLocaleDateString(),
  }

  const tareaInsertada = tareasModelo.insertTarea(tareaNueva)

  return !tareaInsertada ? false : tareaInsertada
}

/**
 *
 * @param {*} nombre
 * @returns
 */
const getOneTarea = (nombre) => {
  const oneTarea = tareasModelo.getOneTarea(nombre)
  return oneTarea
}

/**
 *
 * @param {*} original
 * @param {*} nuevosDatos
 * @returns
 */
const updateTarea = (original, nuevosDatos) => {
  const tareaNueva = {
    ...nuevosDatos,
    fechaModificacion: new Date().toLocaleDateString(),
  }

  const tareaModificada = tareasModelo.updateTarea(tareaNueva)

  return !tareaModificada ? false : tareaModificada
}

/**
 *
 * @param {*} nombre
 * @returns
 */
const deleteTarea = (nombre) => {
  const tareaBorrada = tareasModelo.deleteTarea(nombre)

  return !tareaBorrada ? false : tareaBorrada
}

module.exports = {
  getAllTareas,
  createTarea,
  getOneTarea,
  updateTarea,
  deleteTarea,
}
