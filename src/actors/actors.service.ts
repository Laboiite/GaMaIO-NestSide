
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Actor } from './interfaces/actor.interface';
import {ActorInput} from './inputs/actor.input';
@Injectable()
export class ActorsService {
  constructor(@InjectModel('Actor') private readonly actorModel: Model<Actor>) {}

  async create(createActorDto: ActorInput): Promise<Actor> {
    const createdActor = new this.actorModel(createActorDto);
    return createdActor.save();
  }

  async findAll(): Promise<Actor[]> {
    return this.actorModel.find().exec();
  }
}
