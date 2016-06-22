var Engine = (function () {
    function Engine(hoursePower, engineType) {
        this.hoursePower = hoursePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var CustomeEngine = (function () {
    function CustomeEngine() {
    }
    CustomeEngine.prototype.start = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    CustomeEngine.prototype.stop = function (callback) {
        window.setTimeout(function () {
            callback(true, 'Custom Engine');
        }, 1000);
    };
    return CustomeEngine;
}());
//# sourceMappingURL=Engine.js.map