import {Document} from 'mongoose';

export interface Movie extends Document  {
    readonly title: string;
    readonly producer: string;
    readonly category: string;
    readonly dateOfRelease: string;
}