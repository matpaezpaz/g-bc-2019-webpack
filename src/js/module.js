import { Form } from "./UIElements/Form";
import { Modal } from "./UIElements/Modal";
import { Persistencia } from "./Persistencia";
import { StorageService } from "./StorageService";
import { ContactInfo } from "./Model/ContactInfo";

const myform = new Form("form");
const modal = new Modal("modal-dialog");

const storageService = new StorageService("contactInfo");
const persistence = new Persistencia(storageService);

myform.submit((event) => {
    event.preventDefault();
    event.stopPropagation();
    let values = myform.getInputValues();
    persistence.saveContactInfo(values);
    myform.reset();
    modal.show();
});