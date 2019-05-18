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
}