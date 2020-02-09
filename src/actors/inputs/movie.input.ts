import { InputType, Field, Int} from 'type-graphql';

@InputType()
export class MovieInput {
    @Field()
    readonly title: string;
    @Field()
    readonly producer: string;
    @Field()
    readonly dateOfRelease?: string;
    @Field()
    readonly category?: string;
}