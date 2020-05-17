const app = require('express')();

const logger = require('./winston').logger;
const utils = require('./utils');

const port = 3000

app.use(utils.logRequestStart);

// send response with in 20 to 30 millisec
app.post('/generate/logs', (req, res) => {
    let min=1, max=7; 
    utils.serverLogs();
    setTimeout(() => {
        res.send('ok');   
    }, utils.randomInt(min, max));
});

app.listen(port, () => logger.info(`Example app listening on port ${port}!`))