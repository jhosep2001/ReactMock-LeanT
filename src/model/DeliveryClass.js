class DeliveryClass {
    constructor(id, date, origin, destination, transportMode, value) {
        this._date = date;
        this._origin = origin;
        this._destination = destination;
        this._transportMode = transportMode;
        this._value = value.toFixed(2);
        this._id = id;
        this._value = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get origin() {
        return this._origin;
    }

    set origin(value) {
        this._origin = value;
    }

    get destination() {
        return this._destination;
    }

    set destination(value) {
        this._destination = value;
    }

    get transportMode() {
        return this._transportMode;
    }

    set transportMode(value) {
        this._transportMode = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}

export default DeliveryClass;