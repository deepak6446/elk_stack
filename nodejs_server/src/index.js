// initialize elastic apm
// to disable : process.env.ELASTIC_APM_ACTIVE=true

require('elastic-apm-node').start({
    serviceName: 'index-elk-stack-test-server-apm',
    serverUrl: 'http://localhost:8200'   //APM Server URL
})
console.log("Elastic APM Init");

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
        res.status(400).send('ok');   
    }, utils.randomInt(min, max));
});

process
  .on('unhandledRejection', (reason, p) => {
    console.log(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.log(err, 'Uncaught Exception thrown');
  });

app.listen(port, () => logger.info(`Example app listening on port ${port}!`))