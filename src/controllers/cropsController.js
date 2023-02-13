const cropsServices = require("../services/cropsServices")

/**
 * Devuelve todos los cultivos pidiendoselas a services
 * @return {object} 200 - Cultivos
 * @return {object} 404 - not found
 */
const getAllCrops = (req, res, next) => {
  const allCrops = cropsServices.getAllCrops()

  if (Object.keys(allCrops).length !== 0) {
    res.send(allCrops).status(200)
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
const getOneCrop = (req, res, next) => {
  const { crop } = req.params

  const cultivo = cropsServices.getOneCrop(crop)

  cultivo ? res.send(cultivo).status(200) : res.status(404)
}

module.exports = {
  getAllCrops,
  getOneCrop,
}
