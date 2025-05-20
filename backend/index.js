import express from 'express'
import {controllers} from './controllers/controllers.js';
import { errorHandlerMiddleware} from './middlewar/error_Handler_Middleware.js';
import { logMiddleware } from './middlewares/log_middleware.js';

const app = express();

// Middleware para decodificar JSON del body
app.use(express.json());
app.use(logMiddleware);

controllers(app);

app.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(
    PORT,
    ()=>{
        console.log(`servidor corriendo en http://localhost:${PORT}`);
    }
);

