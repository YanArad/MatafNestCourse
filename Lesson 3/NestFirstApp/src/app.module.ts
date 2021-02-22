import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { PersonutilsService } from './personutils/personutils.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonutilsService],
})
export class AppModule {}
