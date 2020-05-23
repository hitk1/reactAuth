import mongoose from 'mongoose'

export const SNUsers = 'users'

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    passwordHash: string
}

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        index: true,
        required: true
    },
    passwordHash: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const UserModel = mongoose.model<IUser>(SNUsers, UserSchema, SNUsers)