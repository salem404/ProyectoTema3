const peopleModelo = require("../database/models/peopleModelo")

const getAllPeople = () => {
  const allPeople = peopleModelo.getAllPeople()
  return allPeople
}

const getPerson = (name) => {
  const person = peopleModelo.getPerson(name)
  return person
}

module.exports = {
  getAllPeople,
  getPerson,
}
