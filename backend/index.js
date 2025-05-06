
import {controllers} from './controllers/controllers.js';

const app = express();

// Middleware para decodificar JSON del body
app.use(express.json());

controllers(app);

const PORT = 3000;
app.listen(
    PORT,
    ()=>{
        console.log(`servidor corriendo en http://localhost:${PORT}`);
    }
);

console.log('backend');