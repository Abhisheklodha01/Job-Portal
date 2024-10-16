import express from 'express'
import connectDB from './db/index.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'



const app = express()
connectDB()

app.use(cookieParser())
app.use(express.json())
app.get("/", (req, res) => {
   res.send("working fine")
})


export default app;
