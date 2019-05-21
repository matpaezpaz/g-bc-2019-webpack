import { MyHTMLElement } from "./MyHTMLElement";
import { Input } from "./Input";

export class Form extends MyHTMLElement{
    constructor(id) {
        super(id);
        this._inputs = [...this.selectorAll("[name]")].map(element => { this["_" + element.name] = new Input(element.id); return this["_" + element.name]} );
    }
    submit(callback) {
        this.on('submit',callback);
    }
    get(name) {
        return this["_"+name].value;
    }
    getInputValues() {
        let obj = {};
        this._inputs.forEach( input => obj[input.getName()]=input.getValue() );
        return obj;
    }
}