/// <reference path="typings/jquery/jquery.d.ts" />

class Accessory {
    constructor(public accessoryNumber: number, public tiltle: string) { }
}

class Auto {
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'You must provide an engine.';
        this._engine = value;
    }

    constructor(basePrices: number, engine: Engine, make: string, model: string) {
        this.basePrice = basePrices;
        this.engine = engine;
        this.make = make;
        this.model = model;
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

    constructor(basePrices: number, engine: Engine, make: string, model: string,
                bedLength: string, fourByFour:boolean) {
        super(basePrices, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function () {
    var truck = new Truck(40000, new Engine(300, 'V8'), 'Cheve', 'Silverado',
        'Long Bed', true);
    //alert(truck.engine.engineType);
    //alert(truck.bedLength);
    //alert(truck.calcuateToTatal().toString());

    truck.addAccessories(new Accessory(1, 'CQA'), new Accessory(2, 'SFC'));
    truck.addAccessories2(new Array(new Accessory(3, 'Autotech'), new Accessory(4, 'FGV')));
    $('#AccessoryList').html(truck.accessoryList);

    //This is a test.
}