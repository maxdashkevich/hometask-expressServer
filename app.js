import express from 'express';
import bodyParser from 'body-parser';
import {router} from './routes/routes.js';
import {info} from "./middlewares/info.middleware.js";
import {sequelize} from './services/db-connection.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/:id/avatar', express.static('public'));

app.use('/', info, router);

sequelize.sync().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  }).catch(err=>console.log(err));