const tareasModelo = require("../database/models/tareasModelo")

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
  const tareaNueva = {
    ...tarea,
    done: false,
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
  }

  const tareaModificada = tareasModelo.updateTarea(original, tareaNueva)

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
