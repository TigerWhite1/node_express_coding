var express = require('express');
module.exports = function (dir, ServiceManager) {
    var router = express.Router();
    /**
     *  GET home page.
     */
    router.get('/', function (req, res) {
        var UserService = ServiceManager.get('UserService');
        console.log(UserService.getCurrentUser());
        res.status(200).sendFile('home.html', {root: dir});
    });

    return router;
};
