import { Form } from "./Form";
import { Modal } from "./Modal";


const myform = new Form("form");
const modal = new Modal("modal-dialog");

const contactInfo = localStorage.getItem("contactInfo");


function submitForm( event ) {
    event.preventDefault();
    event.stopPropagation();
}

myform.submit((event) => {
    event.preventDefault();
    event.stopPropagation();
    let obj = {
        name: myform._name.getValue(),
        email: myform._email.getValue(),
        technology: myform._technology.getValue(),
        message: myform._message.getValue()
    }
    console.log(obj);
});