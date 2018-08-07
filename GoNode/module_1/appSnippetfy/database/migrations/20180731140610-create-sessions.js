module.exports = {
    up: (queryInterface, dataTypes) => {
        queryInterface.createTable("Sessions", {
            sid: {
                type: dataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            expires: dataTypes.DATE,
            data: dataTypes.TEXT,
            createdAt: {
                allowNull: false,
                type: dataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: dataTypes.DATE
            }
        });
    },

    down: queryInterface => {
        queryInterface.dropTable("Sessions");
    }
};
