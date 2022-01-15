const express = require('express')
const app = express()
const port = 3000

app.get('/remote-address/', function (req, res) {
    console.dir('Received GET at \'/remote-address\'.')
    console.dir(`Remote address: ${req.ip}`)
    res.send(req.ip)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
