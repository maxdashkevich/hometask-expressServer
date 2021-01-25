import express from 'express';
import bodyParser from 'body-parser';
import {router} from './routes/routes.js';
import {info} from "./middlewares/info.middleware.js";
import {sequelize} from './services/db-connection.js';

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use('/', info, router);

sequelize.sync().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  }).catch(err=>console.log(err));