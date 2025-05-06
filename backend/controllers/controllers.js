import {hola} from './hola.js';
import { cuenta} from './cuenta.js';

export function controllers(app){
    hola(app);
    cuenta(app);
}