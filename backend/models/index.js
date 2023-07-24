const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuarios = require("./usuario.model.js")(mongoose);
db.empleados = require("./empleado.model.js")(mongoose);

module.exports = db;