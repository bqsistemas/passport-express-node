import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:models:user')

export interface IUser extends Document {
    email: String,
    password: String
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function (next) {
    const user = this
    if(!user.isModified('password')) return next()
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash

    debug('save')
    next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    const user = this
    
    debug('comparePassword')
    return await bcrypt.compare(password, user.password)
}


export default model<IUser>('User', userSchema)