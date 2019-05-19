export class Persistencia {
    constructor (storageService) {
        this._storageService = storageService;
    };
    guardarContacto(contacto) {
        let contactos = this._storageService.getArray();
        contactos.push(contacto);
        this._storageService.setArray(contactos);
    }
}