const express = require("express")
const cors = require("cors")
const rutas = require("./routes/indexRoutes")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api", rutas.router)

app.use((err, req, res, next) => {
  console.log("Esta funcion captura todos los errores de express")
  console.log(err.stack)
  res.status(500).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(
    "\x1b[41m%s\x1b[0m",
    `[start] 🚀 Server listening on port ${PORT} 🚀`
  )
})
