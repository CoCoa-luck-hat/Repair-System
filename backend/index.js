const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const { readdirSync } = require("fs")

app.use(express.json())
app.use(cors())

app.use('/uploads', express.static('./uploads'))

app.listen(process.env.PORT, () => {
    console.log("Server is runing ", process.env.PORT)
})

readdirSync('./router').map((r) => app.use("/api", require(`./router/${r}`)))

