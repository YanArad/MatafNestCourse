import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleWare } from './logger.middleware';
import { PersonController } from './person/person.controller';
import { PersonService } from './person/person.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService],
})
export class AppModule {
  configure(consumer : MiddlewareConsumer)
  {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes(PersonController)
  }
}
