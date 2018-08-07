module.exports = {
    up: (queryInterface, dataTypes) => {
        queryInterface.createTable("Categories", {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            UserId: {
                type: dataTypes.INTEGER,
                references: { model: "Users", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                allowNull: false
            },
            title: {
                type: dataTypes.STRING,
                allowNull: false
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
        queryInterface.dropaTable("Categories");
    }
};
