var express = require('express');

module.exports = function (dir) {
    var router = express.Router();
    /**
     *  404 page
     */
    router.get('/', function (req, res) {
        console.log('404');
        res.status(404).sendFile('error_404.html', {root: dir});
    });

    return router;
};
