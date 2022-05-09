import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import * as compression from 'compression';
import * as helmet from 'helmet';
import * as Ddos from 'ddos';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // DENY KNOWN REST API VULNERABILITIES
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());

  // APPLICATION LAYER DDOS PROTECTION
  const ddos = new Ddos({ burst: 10, limit: 15 });
  app.use(ddos.express);

  app.setGlobalPrefix('api');
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  const config = new DocumentBuilder()
    .setTitle('Resume Builder')
    .setDescription('The Resume Builder API to get Generate your Resume')
    .setVersion('1.0')
    .addTag('Resume Builder')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
