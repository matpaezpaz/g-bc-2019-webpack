export class Persistencia {
    constructor (storageService) {
        this._storageService = storageService;
    };
    saveContactInfo(contactInfo) {
        let contactInfos = this._storageService.getArray();
        contactInfos.push(contactInfo);
        this._storageService.setArray(contactInfos);
    }
}