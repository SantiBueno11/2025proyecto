import {loginservice} from '../services/login.js';

export function login(app){
    app.post(
        '/login',
        (req, res)=> {
            const result = loginservices(
                Reg.body?.username,
                reg.body?.password,
            );

            res.send(result);
        }
    )
}