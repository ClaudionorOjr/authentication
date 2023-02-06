import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import { router } from './infra/http/routes';

import SwaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { errorTreatment } from './infra/http/middlewares/error-treatment';

const server = express();
server.use(express.json());

server.use(router);

server.use(errorTreatment);

server.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

server.listen(process.env.PORT || 3000, () => {
  console.log('💫 Server running!');
});
