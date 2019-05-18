import { MyHTMLElement } from "./MyHTMLElement";

export class Form extends MyHTMLElement{
    constructor(id) {
        super(id);
        [...this._element.querySelectorAll("[name]")].map( element => this["_"+element.name] = element.value );
    }
    submit(callback) {
        this.on('submit',callback);
    }
    get(name) {
        return this["_"+name].value;
    }
}