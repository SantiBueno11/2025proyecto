export class Invalid_Arguments_exception extends error{
    constructor(){
        super('argumentos invalidos.');
        this.statuscode=400;
    }
}