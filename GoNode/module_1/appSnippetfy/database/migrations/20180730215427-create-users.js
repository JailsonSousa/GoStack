module.exports = {
    up: (queryInterface, dataTypes) => {
        queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            name: {
                allowNull: false,
                type: dataTypes.STRING
            },
            email: {
                allowNull: false,
                type: dataTypes.STRING,
                unique: true
            },
            password: {
                allowNull: false,
                type: dataTypes.STRING
            },
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
        queryInterface.dropTable("Users");
    }
};
