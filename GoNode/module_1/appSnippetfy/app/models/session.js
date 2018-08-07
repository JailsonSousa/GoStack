module.exports = (sequelize, dataTypes) => {
    const Session = sequelize.define("Session", {
        sid: {
            type: dataTypes.STRING,
            primaryKey: true
        },
        expires: dataTypes.DATE,
        data: dataTypes.TEXT
    });

    return Session;
};
