import express from 'express'
import {controllers} from './controllers/controllers.js';
import { error_Handler_Middleware } from './middleware/error_Handler_Middleware.js';
import { logMiddleware } from './middleware/log_middleware.js';

const app = express();

const router= express.Router();
app.use('/api',router);

router.use(express.json());
router.use(logMiddleware);

controllers(app);

router.use(errorHandlerMiddleware);

const PORT = 3000;
app.listen(
    PORT,
    ()=>{
        console.log(`servidor corriendo en http://localhost:${PORT}`);
    }
);

