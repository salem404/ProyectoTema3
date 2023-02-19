const peopleServices = require("../services/peopleServices")

/**
 * Devuelve todos las personas pidiendoselas a services
 * @return {object} 200 - Personas
 * @return {object} 404 - not found
 */
const getAllPeople = (req, res, next) => {
  const allPeople = peopleServices.getAllPeople()

  if (Object.keys(allPeople).length !== 0) {
    res.send(allPeople).status(200)
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
const getPerson = (req, res, next) => {
  const { person } = req.params

  const persona = peopleServices.getPerson(person)

  persona ? res.send(persona).status(200) : res.status(404)
}

module.exports = {
  getAllPeople,
  getPerson,
}
