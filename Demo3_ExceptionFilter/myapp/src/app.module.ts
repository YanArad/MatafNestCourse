import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService],
})
export class AppModule {}
