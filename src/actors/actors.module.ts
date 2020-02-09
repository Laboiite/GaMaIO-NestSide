import { Module } from '@nestjs/common';
import {ActorsResolver} from './actors.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {ActorSchema} from './actors.schema';
import {ActorsService} from './actors.service';
import { AppModule } from 'src/app.module';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest')
    ,
        MongooseModule.forFeature([{name: 'Actor', schema: ActorSchema}])],
  providers: [ActorsResolver, ActorsService],
})
export class ActorsModule {}
