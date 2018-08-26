function serviceContainer() {

    this.instance = {};

    this.createInstance = function (serviceName) {
        var service = require('../../services/' + serviceName);
        return new service;
    };

    this.get = function (serviceName) {
        if (!this.instance[serviceName]) {
            this.instance[serviceName] = this.createInstance(serviceName);
        }
        return this.instance[serviceName];
    };
}

module.exports = serviceContainer;
