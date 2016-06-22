"use strict";
var DataService = (function () {
    function DataService() {
        this.msg = "Welcome to the show!";
    }
    DataService.prototype.getMessage = function () { return this.msg; };
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataservice.js.map