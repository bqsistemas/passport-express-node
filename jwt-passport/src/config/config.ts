export default {
    jwSecret: process.env.JWT_SECRET || 'somesecrettoken',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://bqsistemas:barrantes@127.0.0.1:27017',
        NAME: process.env.MONGODB_NAME || 'jwttutorial'
    }
}