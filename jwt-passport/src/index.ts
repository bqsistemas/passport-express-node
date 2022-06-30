import app from './app'
import './database'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:index')

app.listen(app.get('port'))
debug(`Server listening to port ${app.get('port')} 🚀!`)