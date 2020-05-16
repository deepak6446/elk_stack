const app = require('express')();

const logger = require('./winston').logger;

const port = 3000

const logRequestStart = (req, res, next) => {
    let startDate = new Date();
    
    res.on('finish', () => {
        let endDate   = new Date();
        let millisec = (endDate.getTime() - startDate.getTime());
        logger.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${res.get('Content-Length') || 0}b sent in ${millisec} millisec`);
    })
    next();
}

const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min) + min);
}

app.use(logRequestStart);

app.post('/generate/logs', (req, res) => {
    setTimeout(() => {
        res.send('ok');    
    }, randomIntFromInterval(20, 30));
    
});

app.listen(port, () => logger.info(`Example app listening on port ${port}!`))