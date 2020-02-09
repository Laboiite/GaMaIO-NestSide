import * as mongoose from 'mongoose';

export const MovieSchema = new mongoose.Schema({
    title: String,
    producer: String,
    category: String,
    dateOfRelease: String,
    actorId : [{type: mongoose.Schema.Types.ObjectId, ref: 'Actor'}]

});