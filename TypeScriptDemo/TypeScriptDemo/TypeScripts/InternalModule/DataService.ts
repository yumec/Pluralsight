interface IDataService {
    msg: string;
    getMessage(): string;
}

class DataService implements IDataService {
    msg = "Welcome to the show!";
    getMessage() { return this.msg;}
}