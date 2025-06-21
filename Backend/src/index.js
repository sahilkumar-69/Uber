import dotenv from "dotenv";

dotenv.config();

import {app} from "./app.js"
import http from 'http'
import connectDb from "./db/db.js";

const server = http.createServer(app)

const PORT = process.env.PORT || 3000;

connectDb()

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
 
})