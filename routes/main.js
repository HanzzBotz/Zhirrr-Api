__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi Prefix',
            namabot: 'Hanzz Botz',
            namaowner: 'Hanzz-kun',
            instagram: 'hanzz.jn13',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
