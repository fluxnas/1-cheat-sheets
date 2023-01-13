//import modules
import express from 'express'   
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'


// attribution de la variable server à express
const server = express()   


// middleware
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())


// set port
const PORT = process.env.PORT || 8080
//listening to server connection
server.listen(PORT, () => {console.log(`server connected on ${PORT}`)})