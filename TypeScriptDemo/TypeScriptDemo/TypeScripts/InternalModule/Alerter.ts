interface IAlerter {
    name: string;
    showMessage(): void;
}

var dataservice = new DataService();

class Alerter implements IAlerter {
    name = 'Yume';
    showMessage() {
        var msg = dataservice.getMessage();
        toastr.info(msg + ', ' + this.name);
    }
}
