require('dotenv').config();
module.exports = {
    db: {
        uri: process.env.DB_URI
    },
    port : process.env.PORT,
}