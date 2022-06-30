import { Router } from 'express'
import passport from 'passport'
import createDebug from 'debug'

// controllers
import { signUp, signIn } from '../controllers/user.controller'

// initializations
const debug = createDebug('app:routes:special')
const router = Router()

router.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send('success')
})

export default router