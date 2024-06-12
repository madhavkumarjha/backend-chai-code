require("dotenv").config();
const express = require('express')

const app = express()
const port = process.env.PORT||3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/test", (req, res)=>{
    res.send("<h1>Test the server work fine</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// when change the file then we need to restart the server