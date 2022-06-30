import mongoose, { ConnectOptions } from 'mongoose'
import config from './config/config'
import createDebug from 'debug'

// initializations
const debug = createDebug('app:database')
const dbOptions: ConnectOptions = {
    dbName: config.DB.NAME
}

mongoose.connect(config.DB.URI, dbOptions)

const connection = mongoose.connection

connection.once('open', () => {
    debug('Mongodb connection stablished')
})

connection.on('error', (err) => {
    debug('err')
    process.exit(0)
})