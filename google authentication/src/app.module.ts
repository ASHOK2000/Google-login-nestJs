import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleStrategy } from './google.stratergy';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService,GoogleStrategy],
})
export class AppModule {}
