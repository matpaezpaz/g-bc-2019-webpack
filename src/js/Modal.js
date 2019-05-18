import { MyHTMLElement } from "./MyHTMLElement";

export class Modal extends MyHTMLElement{
    constructor(id) {
        super(id);
        this.setCloseButton();
    }
    toggle() {
        this.toggleClass("hidden");
    }
    show() {
        this.removeClass("hidden");
    }
    hide() {
        this.addClass("hidden");
    }
    setCloseButton() {
        this._closeButton = this._element.querySelector("[data-action=\"close\"]");
        this._closeButton.addEventListener('click', (event) => this.hide());
    }
}