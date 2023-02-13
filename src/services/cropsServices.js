const cropsModelo = require("../database/models/cropsModelo")

const getAllCrops = () => {
  const allCrops = cropsModelo.getAllCrops()
  return allCrops
}

const getOneCrop = (name) => {
  const oneCrop = cropsModelo.getOneCrop(name)
  return oneCrop
}

module.exports = {
  getAllCrops,
  getOneCrop,
}
