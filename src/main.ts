import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

import { ExpressAdapter } from '@nestjs/platform-express';
import { createServer as createHttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import * as express from 'express';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./key/server.key'),
    cert: fs.readFileSync('./key/server.cert'),
  };

  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.enableCors({
    credentials: true,
    origin: ['daytocomeahihi.vercel.app'],
    preflightContinue: true,
  });
  await app.init();
  createHttpServer(server).listen(3000);
  createHttpsServer(httpsOptions, server).listen(443);
}
bootstrap();
