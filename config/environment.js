const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dev-challenge';
const port = process.env.PORT || 4000;

module.exports = { dbURI, port };
