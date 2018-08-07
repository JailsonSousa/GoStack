module.exports = {
    up: (queryInterface, dataTypes) => {
        queryInterface.createTable("Snippets", {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            CategoryId: {
                type: dataTypes.INTEGER,
                references: { model: "Categories", key: "id" },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                allowNull: false
            },
            title: {
                type: dataTypes.STRING,
                allowNull: false
            },
            description: {
                type: dataTypes.TEXT,
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
        queryInterface.dropaTable("Snippets");
    }
};
