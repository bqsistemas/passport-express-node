import { Request, Response } from 'express'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:controllers:user')

export const signUp = (req: Request, res: Response) => {
    debug('signUp')
    res.send('signUp')
}

export const signIn = (req: Request, res: Response) => {
    debug('signIn')
    res.send('signIn')
}