var expect = require('chai').expect;
var request = require("request");

describe("http test 200", function () {
    var url = "http://localhost:3000/";
    it("returns status 200", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

});
describe("http test 404", function () {
    var url = "http://localhost:3000/test";
    it("returns status 404", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
