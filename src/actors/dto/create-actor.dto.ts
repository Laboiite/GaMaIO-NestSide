import { ObjectType, Field, Int } from 'type-graphql';
import {MovieType} from './create-movie.dto';
@ObjectType()
export class ActorType {
  @Field()
  readonly firstName: string;
  @Field()
  readonly lastName: string;
  @Field(() => Int, {nullable: true})
  readonly rewardsNumber: number;
  @Field({nullable: true})
  readonly dateOfBirth: string;
  @Field(type => [MovieType], {nullable: true})
  readonly movies: MovieType[];
}