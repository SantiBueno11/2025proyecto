export class LoginService {
static async login(credentials){
    if(!credentials
        ||!credentials.username
        ||!credentials.password
        || typeof credentials.username != 'string'
        || typeof credentials.password != 'string'
    ){
        return{
            error:'Argumento invalido',
        };
    }
    if(credentials.username!='admin'){
        return{
            error:'credenciales invalidas',
        };
    }
        
 if(credentials.password != '1234'){
        return{
            error:'credenciales invalidas',
        }
    }

return{
    token:'token de acceso'
      };
    }
}