const express = require("express")
const router = express.Router()
const tareasRoutes = require("./tareasRoutes")
const cropsRoutes = require("./cropsRoutes")

// localhost:3001/api/
router.get("/", (req, res, next) => {
  res.send(`
    <h1>/api/ </h1>
    <ul> 
      <li>
        <h2>/api/tareas</h2>
        <ul>
          <li> GET devuelve todas las tareas</li>
          <li> POST crea una nueva tarea</li>
        </ul>
        <h3>/api/tareas/{nombre de la tarea}</h3>
        <ul>
        <li> GET devuelve esa tarea</li>
        <li> PUT edita esa tarea</li>
        <li> DELETE elimina esa tarea</li>
        </ul>
      </li>
    

    </ul>

    <ul> 
    
    `)
})

router.use("/tareas", tareasRoutes.router)

router.use("/crops", cropsRoutes.router)

module.exports.router = router
