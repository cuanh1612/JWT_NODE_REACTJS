import express from "express"
import configViewEngine from "./configs/viewEngine"
import initWebRouters from "./routes/web"

const app = express()
const PORT = process.env.PORT || 3000

//Config view engine
configViewEngine(app)

//Init web router
initWebRouters(app)

app.listen(PORT, () => {
    console.log(`App listen at http://localhost:${PORT}`)
})
