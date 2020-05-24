import * as Yup from 'yup'
import bcrypt from 'bcryptjs'

import * as interfaces from './user.interfaces'
import { AuthService } from '../auth/auth.service'
import { IAuthUserAuthentication } from '../auth/auth.interfaces'

export class UserService {
    constructor() {}
    
    store(json: interfaces.IJsonUserStore): Promise<string> {
        return new Promise(async (resolve, reject) => {

            const schema = Yup.object().shape({
                name: Yup.string().min(5).max(25).required(),
                email: Yup.string().email().required(),
                password: Yup.string().min(6).max(10).required()
            })

            if(await schema.isValid(json)) {
                
                const {name, email, password } = json
                const user = await interfaces.UserModel.findOne({ name })

                if(!user){

                    const passwordHash = await bcrypt.hash(password, 8)

                    interfaces.UserModel.create({
                        name,
                        email,
                        passwordHash
                    }).then(async () => resolve(await new AuthService().store(<IAuthUserAuthentication>{ email, password })))

                } else
                    reject('User already exists')

            } else 
                reject('Validation fails')

        })
    }
}