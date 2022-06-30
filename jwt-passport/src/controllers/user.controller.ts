import { Request, Response } from 'express'
import User, { IUser } from '../models/user'
import jwt from 'jsonwebtoken'
import createDebug from 'debug'
import config from '../config/config'

// initializations
const debug = createDebug('app:controllers:user')

function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwSecret, {
        expiresIn: 86400
    })
}

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if(!req.body.email || !req.body.password)
        return res.status(400).json({msg: 'Please. Send your email and password'})

    const user = await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).json({msg: 'The user already exists'})
    }

    const newUser = new User(req.body)
    await newUser.save()

    debug('signUp')
    return res.status(201).json(newUser)
}

export const signIn = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password)
        return res.status(400).json({msg: 'Please. Send your email and password'})

    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(400).json({msg: 'The user does not exists'})
    }

    const isMatch = await user.comparePassword(req.body.password)
    if(isMatch) {
        debug('signIn')
        return res.status(200).json({token: createToken(user)})
    }
    
    return res.status(400).json({msg: 'The email or password are incorrect'})
}