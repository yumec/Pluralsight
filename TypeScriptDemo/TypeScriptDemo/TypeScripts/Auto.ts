
class Accessory {
    constructor(public accessoryNumber: number, public tiltle: string) { }
}

interface IAutoOptions {
    basePrice: number;
    engine: IEngine;
    state: string;
    make: string;
    model: string;
    year: number;
}

interface ITruckOptions extends IAutoOptions {
    bedLength: string;
    fourByFour: boolean;
}

class Auto {
    private _basePrice: number;
    private _engine: IEngine;
    make: string;
    model: string;
    status: string;
    year: number;
    accessoryList: string;

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): IEngine {
        return this._engine;
    }

    set engine(value: IEngine) {
        if (value == undefined) throw 'You must provide an engine.';
        this._engine = value;
    }

    constructor(options: IAutoOptions) {
        this.basePrice = options.basePrice;
        this.engine = options.engine;
        this.make = options.make;
        this.status = options.state;
        this.year = options.year;
        this.model = options.model;
    }

    calcuateToTatal(): number {
        var taxRate = .08;
        return this.basePrice * (1 + taxRate);
    }

    //addAccessories(new Accessory(), new Accessory()...);
    addAccessories(...accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.tiltle + '<br/>';
        }
    }

    addAccessories2(accessories: Accessory[]) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.tiltle + '<br/>';
        }
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(options: ITruckOptions) {
        super(options);
        this.bedLength = options.bedLength;
        this.fourByFour = options.fourByFour;
    }
}

window.onload = function () {
    /*
    var truck = new Truck(40000, new Engine(300, 'V8'), 'Cheve', 'Silverado',
        'Long Bed', true);
    //alert(truck.engine.engineType);
    //alert(truck.bedLength);
    //alert(truck.calcuateToTatal().toString());

    truck.addAccessories(new Accessory(1, 'CQA'), new Accessory(2, 'SFC'));
    truck.addAccessories2(new Array(new Accessory(3, 'Autotech'), new Accessory(4, 'FGV')));
    $('#AccessoryList').html(truck.accessoryList);
    */

    var truck = new Truck({
        engine: new Engine(250, 'V8'),
        basePrice: 48000,
        state: 'Arizona',
        model: 'F-150',
        make: 'Ford',
        year: 2003,
        bedLength: 'Short bed',
        fourByFour: true
    });

    //var myEngine = <Engine>auto.engine;
    //alert(myEngine.hoursePower.toString());


    alert(truck.bedLength);
}