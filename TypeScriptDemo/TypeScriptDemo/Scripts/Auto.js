/// <reference path="typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Accessory = (function () {
    function Accessory(accessoryNumber, tiltle) {
        this.accessoryNumber = accessoryNumber;
        this.tiltle = tiltle;
    }
    return Accessory;
}());
var Auto = (function () {
    function Auto(basePrices, engine, make, model) {
        this.basePrice = basePrices;
        this.engine = engine;
        this.make = make;
        this.model = model;
    }
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'You must provide an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Auto.prototype.calcuateToTatal = function () {
        var taxRate = .08;
        return this.basePrice * (1 + taxRate);
    };
    //addAccessories(new Accessory(), new Accessory()...);
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i - 0] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.tiltle + '<br/>';
        }
    };
    Auto.prototype.addAccessories2 = function (accessories) {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.tiltle + '<br/>';
        }
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    return Auto;
}());
var Truck = (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrices, engine, make, model, bedLength, fourByFour) {
        _super.call(this, basePrices, engine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
    return Truck;
}(Auto));
window.onload = function () {
    var truck = new Truck(40000, new Engine(300, 'V8'), 'Cheve', 'Silverado', 'Long Bed', true);
    //alert(truck.engine.engineType);
    //alert(truck.bedLength);
    //alert(truck.calcuateToTatal().toString());
    truck.addAccessories(new Accessory(1, 'CQA'), new Accessory(2, 'SFC'));
    truck.addAccessories2(new Array(new Accessory(3, 'Autotech'), new Accessory(4, 'FGV')));
    $('#AccessoryList').html(truck.accessoryList);
    //tet
};
