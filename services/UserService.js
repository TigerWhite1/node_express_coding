function UserService() {
    this.getCurrentUser = function () {
        return {'user': {'name' : 'thomas'}};
    };

    this.callBackDemo = function (step1, step2) {
        if (typeof step1 !== 'function' || typeof step2 !== 'function') {
            throw new Error("the prarameters of the function must be of type function");
        }

        var demo1 = 'demo1 step 1';
        var demo2 = 'demo2 step 1';

        for (var i = 0; i < 10000; i++) {
        }
        step1(demo1, demo2);

        demo1 = 'demo1 step 2';
        demo2 = 'demo2 step 2';
        for (var j = 0; j < 10000; j++) {
        }
        step2(demo1, demo2);
    };
};

module.exports = UserService;
