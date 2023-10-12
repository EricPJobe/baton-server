import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { ENVIRONMENT } from '../config';
import { router } from '../routers';

const app: Express = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(morgan(ENVIRONMENT === 'production' ? 'combined' : 'dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

// Serve static files here from /public. Remove this if you don't need it along with the public folder.
app.use(express.static('public'));

export default app;