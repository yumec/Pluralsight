"use strict";
var ds = require("./dataservice");
var dataservice = new ds.DataService();
var Alerter = (function () {
    function Alerter() {
        this.name = 'Yume';
    }
    Alerter.prototype.showMessage = function () {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    };
    return Alerter;
}());
exports.Alerter = Alerter;
//# sourceMappingURL=Alerter.js.map