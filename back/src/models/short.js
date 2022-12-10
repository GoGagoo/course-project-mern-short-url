'use strict';
const Schema = require('mongoose').Schema;
const uriSchema = Schema({ uri: String, short: String });

/* global db */
module.exports = db.model('shortUrl', uriSchema);