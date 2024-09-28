import express from 'express'


const app = express()

app.get("/", (req, res) => {
   res.send("working fine")
})


export default app;
