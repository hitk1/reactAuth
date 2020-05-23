import mongoose from 'mongoose'

export const SNAuth = 'tokens'

export interface IAuthUserAuthentication {
    email: string,
    password: string
}

export interface IAuth extends mongoose.Document {
    jwt: string
}

export const AuthSchema = new mongoose.Schema({
    jwt: {
        type: String,
        index: true,
        required: true
    }
}, { timestamps: true })

export const AuthModel = mongoose.model<IAuth>(SNAuth, AuthSchema, SNAuth)