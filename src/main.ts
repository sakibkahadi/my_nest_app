import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true , //remove oi property gula jegula dto te defien kore na.
  //   forbidNonWhitelisted: true // error dibe jodi kono unknow field dei
  // }))

  app.useGlobalPipes(new ValidationPipe({
    // jeshob property dto te nei segula remove kore dibe 
    whitelist:true,

    // error dibe unknwo filed dile 
    forbidNonWhitelisted:true
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
