import app from './app';
import config from './config/config';

import { initDb } from '../db/index';

async function startServer() {
  await initDb();

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

}


startServer();
