import { MyHTMLElement } from "./MyHTMLElement";
import { Input } from "./Input";

export class Form extends MyHTMLElement{
    constructor(id) {
        super(id);
        this._inputs = [...this._element.querySelectorAll("[name]")].map(element => { this["_" + element.name] = new Input(element.id); return this["_" + element.name]} );
    }
    submit(callback) {
        this.on('submit',callback);
    }
    get(name) {
        return this["_"+name].value;
    }
}