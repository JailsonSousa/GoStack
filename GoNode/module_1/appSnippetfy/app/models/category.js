module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("Category", {
        title: dataTypes.STRING
    });

    Category.associate = models => {
        Category.belongsTo(models.User);
        Category.hasMany(models.Snippet);
    };

    return Category;
};
