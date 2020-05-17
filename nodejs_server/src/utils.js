const logger = require('./winston').logger;

const logRequestStart = (req, res, next) => {
    let startDate = new Date();
    
    res.on('finish', () => {
        let endDate   = new Date();
        let millisec = (endDate.getTime() - startDate.getTime());
        let metrics = {
            "method": req.method,
            "url": req.originalUrl,
            "contentLength": res.get('Content-Length') || 0,
            "resTime": millisec
        }
        logger.info(metrics);
    })
    next();
}

const randomInt = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min) + min);
}

const serverLogs = () => {
    
    let maxLogs = randomInt(10, 20);
    
    if (maxLogs<15) {
        logger.info("user login");
    }else if (maxLogs<20) {
        logger.info("new user signup");
    } else {
        logger.info("new subscription");
    }

    for(let i=0; i<9; i++) {
        logger.info("test logs "+i);
    }
}

module.exports = {
    logRequestStart,
    randomInt,
    serverLogs
}
