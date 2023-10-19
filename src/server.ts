import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap() {
  mongoose
    .connect(config.database_url as string)
    .then(() => console.log('Database connceted successfully ✅'))
    .catch(err => console.log(`Unable to connect MongoDB ❌ ${err}`));
  const server: Server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();
