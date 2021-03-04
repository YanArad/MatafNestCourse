import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { USersModule } from './users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/usersDB'), USersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
