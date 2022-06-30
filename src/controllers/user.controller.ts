import { Request, Response } from 'express'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:controllers:user')

export const signUp = (req: Request, res: Response) => {
    res.send('signUp')
}

export const signIn = (req: Request, res: Response) => {
    res.send('signIn')
}