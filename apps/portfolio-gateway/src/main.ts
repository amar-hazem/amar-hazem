import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';

import { AppModule } from './app/app.module';

/** Start the application. */
async function bootstrap(): Promise<any> {
  const application = await NestFactory.create(AppModule);
  const configService = application.get(ConfigService);
  const globalPrefix = configService.get('globalPrefix');
  const port = configService.get('app.port');
  application.setGlobalPrefix(globalPrefix);
  application.useGlobalPipes(new ValidationPipe());
  application.use(compression());
  application.enableCors();
  SwaggerModule.setup(
    globalPrefix,
    application,
    SwaggerModule.createDocument(
      application,
      new DocumentBuilder().setTitle('Portfolio API').setDescription('Portfolio API').setVersion('1.0').build()
    )
  );
  await application.listen(port, () => {
    Logger.log(`Listening at http://${configService.get('app.host')}:${port}/${globalPrefix}`);
  });
}

bootstrap().then();
