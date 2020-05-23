import * as Yup from 'yup'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import * as interfaces from './auth.interfaces'
import * as userInterfaces from '../user/user.interfaces'

export class AuthService {
    constructor() { }

    store(json: interfaces.IAuthUserAuthentication) {
        return new Promise(async (resolve, reject) => {

            const schema = Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().required()
            })

            if (!(await schema.isValid(json))) {
                reject('Validation fails')
                return
            }

            const { email, password } = json
            const user = await userInterfaces.UserModel.findOne({ email })

            if (user) {

                if (bcrypt.compare(password, user.passwordHash)) {
                    
                    const userId = user._id
                    const myJwt = jwt.sign(
                        { userId },
                        'e292e11a6fa9eded5244804671b7bb50',
                        { expiresIn: '2h'}
                        )

                    await interfaces.AuthModel.create(myJwt)
                    resolve(myJwt)

                } else
                    reject('Password does not match')

            } else
                reject('User does not exists!')
        })
    }


}