import ds = require("./dataservice");

var dataservice = new ds.DataService();

export interface IAlerter {
    name: string;
    showMessage(): void;
}


export class Alerter implements IAlerter {
    name = 'Yume';
    showMessage() {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}