var express = require('express');
module.exports = function (ServiceManager) {
    var router = express.Router();

    router.get('/', function (req, res) {
        var UserService = ServiceManager.get('UserService');

        UserService.callBackDemo(function (demo1, demo2) {
            console.log('End step 1', demo1);
            console.log('End step 1', demo2);
        }, function (demo1, demo2) {
            console.log('End step 2', demo1);
            console.log('End step 2', demo2);
        });

        res.status(200).send(UserService.getCurrentUser());
    });

    return router;
};
