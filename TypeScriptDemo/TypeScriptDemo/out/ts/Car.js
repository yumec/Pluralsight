var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'You must provide enginer';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.star = function () {
        alert('Engine start with ' + this.engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.star();
};
//# sourceMappingURL=Car.js.map