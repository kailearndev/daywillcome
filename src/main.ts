import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
const httpsOptions = {
  key: fs.readFileSync('./key/key.pem'),
  cert: fs.readFileSync('./key/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ https: httpsOptions }),
  );
  app.enableCors({
    // origin: true,
    credentials: true,
  });
  await app.listen(4900);
}
bootstrap();
