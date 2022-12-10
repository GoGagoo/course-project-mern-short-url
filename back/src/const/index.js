require('dotenv').config()

const {DB_MONGO_NAME, DB_MONGO_PASS} = process.env

module.exports = {
    port: '8000',
    listening: 'listening on http://localhost:',
    mongodbUriLocal: 'mongodb://localhost:27017/short',
    mongodbUri: `mongodb+srv://${DB_MONGO_NAME}:${DB_MONGO_PASS}@cluster0.5snnt1s.mongodb.net/app?retryWrites=true&w=majority`
};
