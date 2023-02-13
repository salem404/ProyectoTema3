const express = require("express")
const router = express.Router()
const tareasController = require("../controllers/tareasController")

// localhost:3001/api/tareas
router
  .route("/")
  .get(tareasController.getAllTareas)
  .post(tareasController.createTarea)

// localhost:3001/api/tareas/:todo
router
  .route("/:todo")
  .get(tareasController.getOneTarea)
  .put(tareasController.updateTarea)
  .delete(tareasController.deleteTarea)

module.exports.router = router
