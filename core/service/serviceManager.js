var ServiceManager = (function () {

    var serviceManagerInstance = null;

    return {
        getInstance: function () {
            var serviceContainer = require('./serviceContainer');
            if (!serviceManagerInstance) {
                serviceManagerInstance = new serviceContainer();
            }
            return serviceManagerInstance;
        }
    };
});

module.exports = ServiceManager;
