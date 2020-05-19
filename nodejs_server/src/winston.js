const winston = require('winston');
require('winston-daily-rotate-file');
const path = require('path');

const basedir = __dirname+'/../log/'
const logBasePath = path.normalize(basedir)

// rotate log when max file size is reached.
// TODO: change to config based
const transport = new (winston.transports.DailyRotateFile)({
    filename: logBasePath+'application-%DATE%.json',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '200000m',      //configure to keep min logs
    maxFiles: '14d'    
});

transport.on('rotate', function(oldFilename, newFilename) {
    logger.info('log file rotated');
});

const logFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
        info => `${info.timestamp}${info.level}${info.message}`
    ),
    winston.format.json()
)

const consoleF = winston.format.combine(
    winston.format.colorize({all: true}),  
    winston.format.printf(
        info => `${info.message}`
    )
)

const logger = winston.createLogger({
    format: logFormat,
    transports: [
      transport
    ]
});

// disable console logs in production
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: consoleF
    }));
}

logger.info("Winston init")

exports.logger = logger;