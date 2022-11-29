import mongoose from 'mongoose';

const Schema = mongoose.Schema;



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: false
    }
});

export const UserTest = mongoose.model('User', UserSchema);
