export class MyHTMLElement {
    constructor(id) {
        this._id = id;
        this._element = document.getElementById(id);
    }
    addClass(className) {
        this._element.classList.add(className);
    }
    removeClass(className) {
        this._element.classList.remove(className);
    }
    toggleClass(className) {
        this._element.classList.toggle(className);
    }
    on(event,callback) {
        this._element.addEventListener(event,callback);
    }
    getValue() {
        return this._element.value;
    }
    setValue(newValue) {
        this._element.value = newValue;
    }
    reset() {
        this._element.reset();
    }
    checkValidity() {
        this._element.checkValidity();
    }
}