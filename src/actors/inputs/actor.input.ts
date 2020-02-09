import { InputType, Field, Int} from 'type-graphql';

@InputType()
export class ActorInput {
    @Field()
    readonly firstName: string;
    @Field()
    readonly lastName: string;
    @Field(() => Int)
    readonly rewardsNumber?: number;
    @Field()
    readonly dateOfBirth?: string;
}