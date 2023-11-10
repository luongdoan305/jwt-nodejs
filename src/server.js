import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRoutes from "./routes/web"
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3005

configViewEngine(app)
initWebRoutes(app)

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
