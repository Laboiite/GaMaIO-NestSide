import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class MovieType {
  @Field()
  readonly title: string;
  @Field()
  readonly producer: string;
  @Field()
  readonly dateOfRelease: string;
  @Field()
  readonly category: string;

}