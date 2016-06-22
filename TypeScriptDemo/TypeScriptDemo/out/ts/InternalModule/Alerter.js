var dataservice = new DataService();
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
//# sourceMappingURL=Alerter.js.map