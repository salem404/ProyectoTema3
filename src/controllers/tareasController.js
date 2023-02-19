const tareasServices = require("../services/tareasServices")

/**
 * Devuelve todas las tareas pidiendoselas a services
 * @return {object} 200 - Tareas
 * @return {object} 404 - not found
 */
const getAllTareas = (req, res, next) => {
  const allTareas = tareasServices.getAllTareas()

  if (Object.keys(allTareas).length !== 0) {
    res.send(allTareas).status(200)
  } else {
    res.status(404).end()
  }
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createTarea = (req, res, next) => {
  const { body } = req
  console.log(body)

  // Comprobación de datos
  if (!body.nombre) {
    res.status(400).send({ mensaje: "Datos insuficientes" })
  } else {
    // Extracción de datos
    const newTarea = {
      nombre: body.nombre,
    }

    // Comprobación de preexistencia
    if (tareasServices.getOneTarea(newTarea.nombre)) {
      res.status(400).send({ mensaje: "Tarea ya existente" })
    } else {
      const createdTarea = tareasServices.createTarea(newTarea)

      createdTarea ? res.status(200).send(createdTarea) : res.status(406).end()
    }
  }
  res.end()
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getOneTarea = (req, res, next) => {
  const { todo } = req.params

  const tarea = tareasServices.getOneTarea(todo)

  tarea ? res.send(tarea).status(200) : res.status(404)
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateTarea = (req, res, next) => {
  const { todo } = req.params

  const { body } = req
  console.log(body)

  // Comprobación de datos
  if (!body.nombre || !body.done) {
    res.status(400).send({ mensaje: "Datos insuficientes" })
  } else {
    // Extracción de datos
    const newTarea = {
      nombre: body.nombre,
      done: body.done,
    }

    // Comprobación de preexistencia
    if (tareasServices.getOneTarea(newTarea.nombre)) {
      const updatedTarea = tareasServices.updateTarea(todo, newTarea)
      updatedTarea ? res.status(200).send(updatedTarea) : res.status(406).end()
    } else {
      res
        .status(404)
        .send({ mensaje: "No se puede modificar la tarea porque no existe" })
    }
  }
  res.end()
}

/**
 *
 * Envía la tarea al servicio de borrado
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteTarea = (req, res, next) => {
  const { todo } = req.params

  const deletedTarea = tareasServices.deleteTarea(todo)

  deletedTarea
    ? res.status(200).send({ mensaje: "Tarea borrada correctamente" })
    : res
        .status(404)
        .send({ mensaje: "No se pudo borrar la tarea porque no existe" })
}

module.exports = {
  getAllTareas,
  createTarea,
  getOneTarea,
  updateTarea,
  deleteTarea,
}
