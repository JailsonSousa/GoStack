module.exports = (sequelize, dataTypes) => {
  const Project = sequelize.define('Project', {
    name: dataTypes.STRING,
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User);
    Project.hasMany(models.Section);
  };

  return Project;
};
