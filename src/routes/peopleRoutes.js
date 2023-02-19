const express = require("express")
const router = express.Router()
const peopleController = require("../controllers/peopleController")

// localhost:3001/api/people
router.route("/").get(peopleController.getAllPeople)

// localhost:3001/api/people/:person
router.route("/:person").get(peopleController.getPerson)

module.exports.router = router
