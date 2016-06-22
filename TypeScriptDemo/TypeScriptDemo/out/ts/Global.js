var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDist = function () { return Math.sqrt(this.x * this.y); };
    return Point;
}());
window.onload = function () {
    var p = new Point(3, 4);
    var dist = p.getDist();
    toastr.info("distance = " + dist);
};
//# sourceMappingURL=Global.js.map