import {Document} from 'mongoose';

export interface Actor extends Document  {
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: string;
    readonly rewardsNumber: number;
}