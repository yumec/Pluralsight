var Shapes;
(function (Shapes) {
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
window.onload = function () {
    var rect = new Shapes.Rectangle(2, 4);
    var area = rect.getArea();
    toastr.info("area = " + area);
};
var myProgarm;
(function (myProgarm) {
    function run() {
        var rect = new Shapes.Rectangle(2, 4);
        var area = rect.getArea();
        toastr.info("area = " + area);
    }
    run();
})(myProgarm || (myProgarm = {}));
//# sourceMappingURL=Shapes.js.map