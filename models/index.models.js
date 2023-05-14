const db = require('../db');

db.User = require('./user.model')(db.mongoose);

module.exports = db;