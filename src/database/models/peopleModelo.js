const datos = require("../people.json")
/**
 * Devuelve todas las personas
 */
const getAllPeople = () => {
  return datos.people
}

/**
 * Devuelve una persona según su nombre
 * @param {*} name - Nombre
 * @returns
 */
const getPerson = (name) => {
  const person = datos.people[name]
  return person
}

module.exports = {
  getAllPeople,
  getPerson,
}
