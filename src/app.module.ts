import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import {ActorsModule} from './actors/actors.module'
@Module({
  imports: [
    ActorsModule,
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gpl',
  }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
