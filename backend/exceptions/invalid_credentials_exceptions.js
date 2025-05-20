export class invalidcredentialsexceptions extends error{
    constructor(){
        super('argumentos invalidos.');
        this.statuscode=400;
    }
}