const datos = require("../crops.json")
/**
 * Devuelve todas los crops
 */
const getAllCrops = () => {
  return datos.crops
}

/**
 * Devuelve un crop según su nombre
 * @param {*} name - Nombre en inglés
 * @returns
 */
const getOneCrop = (name) => {
  const oneCrop = datos.crops[name]
  return oneCrop
}

module.exports = {
  getAllCrops,
  getOneCrop,
}
