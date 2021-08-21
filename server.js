//

const express = require("express")
const path = require("path")

const app = express()

app.use(express.static('./dist/mediapp-fronted'))


app.get('/*',(req,res) =>
    res.sendFile('index.html',{root: 'dist/mediapp-fronted'})
)

app.listen(process.env.PORT || 8080)