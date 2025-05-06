export function loginservice(username,password){
    if(!username|| !password
        || typeof username != 'string'
        || typeof password != 'string'
    )
    if(username != 'admin'){
        return{
            error: ' credenciales invalidas.',
        
    };
}

if(password != '1234'){
    return{
        error:'credenciales invalidas',
    };
}

return{
    token:'token de acceso'
};
}