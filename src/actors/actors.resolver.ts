import { Resolver, Query, Args, ResolveProperty, Parent, Mutation } from "@nestjs/graphql";
import { ActorsService } from "./actors.service";
import { ActorInput } from "./inputs/actor.input";
import {ActorType} from './dto/create-actor.dto';
@Resolver()
export class ActorsResolver {
constructor(private readonly actorsService: ActorsService){}

    @Query(() => [ActorType])
    async actors(){
        return this.actorsService.findAll();
    }

    @Mutation(() => ActorType)
    async createActor(@Args('input') input : ActorInput ){
        return this.actorsService.create(input);
    }

}