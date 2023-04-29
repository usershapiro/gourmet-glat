import express from "express";
import cors from "cors"
import controller from "../6-controller/productController"
import catchAll from "../3-middleware/catch-all";
import appConfig from "../2-utils/appConfig";
import routeNotFound from "../3-middleware/route-NotFound";

const server = express()

server.use(cors())

server.use(express.json())
server.use("/api",controller)
server.use("*",routeNotFound)
server.use(catchAll)

server.listen(appConfig.port , ()=>console.log(`Listenning on http://localhost:${appConfig.port}`))

