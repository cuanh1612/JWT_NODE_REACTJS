import express from "express" 
import homeController from "../controller/homeController"

const router = express.Router()

/**
 * @param {*} app : express app
 */

const initWebRouters = (app) => {
    router.get("/", homeController.handleHelloword)

    return app.use("/", router)
}

export default initWebRouters