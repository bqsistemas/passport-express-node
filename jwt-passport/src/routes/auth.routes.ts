import { Router } from 'express'
import createDebug from 'debug'

// controllers
import { signUp, signIn } from '../controllers/user.controller'

// initializations
const debug = createDebug('app:routes:auth')
const router = Router()

router.post('/signup', signUp)
router.post('/signin', signIn)

export default router