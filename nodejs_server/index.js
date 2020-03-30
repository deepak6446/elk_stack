const express = require('express')
const app = express()
const port = 3000

app.post('/generate/logs', (req, res) => {
    res.send('ok')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))