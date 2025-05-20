import { Invalid_Arguments_exception } from "../controllers/exeptions/invalid_arguments_exception.js";
import { Invalid_Credentials_Exceptions } from "../controllers/exeptions/invalid_credentials_exceptions.js";

export class LoginService {
static async login(credentials){
    if(!credentials
        ||!credentials.username
        ||!credentials.password
        || typeof credentials.username != 'string'
        || typeof credentials.password != 'string'
    )
        throw new Invalid_Arguments_exception();

    if(credentials.username!='admin')
        throw new Invalid_Credentials_Exception();
        
 if(credentials.password != '1234')
        throw new Invalid_Credentials_Exception();
    

return{
    token:'token de acceso'
      };
    }
}