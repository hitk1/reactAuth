import mongoose from 'mongoose'

export const SNUsers = 'users'

export interface IJsonUserStore {
    name: string,
    email: string,
    password: string
}

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
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
    passwordHash: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export const UserModel = mongoose.model<IUser>(SNUsers, UserSchema, SNUsers)