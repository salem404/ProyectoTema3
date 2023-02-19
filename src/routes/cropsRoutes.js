const express = require("express")
const router = express.Router()
const cropsController = require("../controllers/cropsController")

// localhost:3001/api/crops
router.route("/").get(cropsController.getAllCrops)

// localhost:3001/api/crops/:crop
router.route("/:crop").get(cropsController.getOneCrop)

module.exports.router = router
