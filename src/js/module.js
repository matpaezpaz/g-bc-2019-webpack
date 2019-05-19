import { Form } from "./UIElements/Form";
import { Modal } from "./UIElements/Modal";
import { Persistencia } from "./Persistencia";
import { StorageService } from "./StorageService";
import { Input } from "./UIElements/Input";


const myform = new Form("form");
const modal = new Modal("modal-dialog");

const storageService = new StorageService("contactInfo");
const persistencia = new Persistencia(storageService);

myform.submit((event) => {
    event.preventDefault();
    event.stopPropagation();
    let obj = {
        name: myform._name.getValue(),
        email: myform._email.getValue(),
        technology: myform._technology.getValue(),
        message: myform._message.getValue()
    }
    persistencia.guardarContacto(obj);
    console.log(obj);
    myform.reset();
});