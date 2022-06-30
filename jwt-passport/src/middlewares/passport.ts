import { Strategy, ExtractJwt, StrategyOptions }  from 'passport-jwt'
import User, { IUser } from '../models/user'
import config from '../config/config'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:models:user')
const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwSecret
}

export default new Strategy(opts, async (payload, done) => {
    try{
        const user = await User.findById(payload.id)
        if(user) {
            return done(null, user)
        }
        return done(null, false)
    }catch {
        return done(null, false)
    }
})