
/*
    Хорошим тоном считается иметь индекстный файл в корне
    Это поможет черзе require('module-name') получить весь список
    модулей...
*/
const short = require('./short');

module.exports = { short };