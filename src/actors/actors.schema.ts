import * as mongoose from 'mongoose';

export const ActorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    rewardsNumber: Number,
    movies : [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});