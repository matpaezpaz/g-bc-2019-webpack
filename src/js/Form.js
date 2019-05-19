import { MyHTMLElement } from "./MyHTMLElement";
import { Input } from "./Input";

export class Form extends MyHTMLElement{
    constructor(id) {
        super(id);
        [...this._element.querySelectorAll("[name]")].map( element => this["_"+element.name] = new Input(element.id) );
    }
    submit(callback) {
        this.on('submit',callback);
    }
    get(name) {
        return this["_"+name].value;
    }
}