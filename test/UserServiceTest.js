var expect = require('chai').expect;
var ServiceManager = require('../core/service/serviceManager');
ServiceManager = new ServiceManager().getInstance();

describe("UserController test", function () {

    var UserService = ServiceManager.get('UserService');
    it("check return statement callback function callBackDemo", function (done) {
        UserService.callBackDemo(function (demo1, demo2) {
            expect(demo1).to.equal('demo1 step 1');
            expect(demo2).to.equal('demo2 step 1');

        }, function (demo1, demo2) {
            expect(demo1).to.equal('demo1 step 2');
            expect(demo2).to.equal('demo2 step 2');
            done();
        });
    });

    it("check if the parameters are string return error", function (done) {
        try {
            UserService.callBackDemo("string", "string");
        } catch (err) {
            expect(err).to.be.an('Error');
        }
        done();
    });

});
