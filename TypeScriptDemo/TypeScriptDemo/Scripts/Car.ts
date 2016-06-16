class Car {

    private _engine: Engine;

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'You must provide enginer';
        this._engine = value;
    }

    constructor(engine: Engine) {
        this.engine = engine;
    }

    star(): void {
        alert('Engine start with ' + this.engine.engineType);
    }
}

window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    alert(car.engine.engineType);

    car.star();
};