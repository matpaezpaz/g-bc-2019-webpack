import { Form } from "./Form";
import { Modal } from "./Modal";

const myform = new Form("form");
const modal = new Modal("modal-dialog");



function submitForm( event ) {
    event.preventDefault();
    event.stopPropagation();
}

myform.submit((event) => {
    
});