const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const { sequelize } = require("../app/models");

module.exports = {
    secret: "appsnippetfygonode",
    resave: false,
    saveUninitialized: false,
    store: new sequelizeStore({
        db: sequelize
    })
};
