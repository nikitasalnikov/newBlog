const fs = require('fs'),
    /* Подключаем модуль fileSystem который встроен в nodejs */
    path = './gulp/tasks',
    // путь к нашей папке
    arrayPathFills = fs.readdirSync(path).map(item => item = path+'/'+item)


module.exports = arrayPathFills;